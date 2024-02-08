import { useEffect } from "react";
import { useState } from "react";

const Books = () => {
  const [booksList, setBooksList] = useState([]);

  const currentDate = new Date();
  const dateString = currentDate.toISOString().slice(0, 10);

  const [myDate, setMyDate] = useState(dateString);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    fetch(
      `https://api.nytimes.com/svc/books/v3/lists/${myDate}/hardcover-fiction.json?api-key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setBooksList(data.results?.books);
        }
        setIsLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [myDate]);

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-10 justify-center items-center my-5">
        <p className="font-medium">Select Date: </p>
        <input
          className="bg-gray-300 p-3 rounded-lg"
          type="date"
          onChange={(e) => setMyDate(e.target.value)}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Author</th>
            <th>Price</th>
            <th>Product URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <span className="loading loading-spinner mt-10 text-center text-info text-2xl"></span>
          ) : (
            <>
              {booksList?.map((book) => (
                <tr key={book.rank}>
                  <td>
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={book.book_image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar"></div>
                      <div>
                        <div className="font-bold">{book.title}</div>
                      </div>
                    </div>
                  </td>
                  <td>{book.author}</td>
                  <td>{book.price}</td>
                  <td>
                    <a
                      className="underline text-blue-500 font-medium"
                      target="blank"
                      href={book?.amazon_product_url}
                    >
                      Buy Now
                    </a>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
