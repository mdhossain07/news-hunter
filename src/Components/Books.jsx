import { useEffect } from "react";
import { useState } from "react";

const Books = () => {
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=R9TwCSRwPF3Tn5mTD03A52WN3IbKis88`
    )
      .then((res) => res.json())
      .then((data) => setBooksList(data.results.books));
  }, []);

  return (
    <div className="overflow-x-auto">
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
          {booksList.map((book) => (
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
        </tbody>
      </table>
    </div>
  );
};

export default Books;
