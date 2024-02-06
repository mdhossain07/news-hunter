import { useEffect, useState } from "react";

const Shared = () => {
  const [sharedData, setSharedData] = useState([]);

  console.log(sharedData);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/shared/7.json?api-key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setSharedData(data.results));
  }, []);
  return (
    <div>
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

              {sharedData?.map((data) => (
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
    </div>
  );
};

export default Shared;
