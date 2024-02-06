import { useEffect, useState } from "react";

const Popular = () => {
  const [popularData, setPopularData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setPopularData(data.results));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Published Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {popularData?.map((data) => (
              <tr key={data.id}>
                <th>{data.title}</th>
                <td>{data.abstract}</td>
                <td>{data.published_date}</td>

                <td>
                  <a href={data.url} target="blank" className="btn ">
                    Read More
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Popular;
