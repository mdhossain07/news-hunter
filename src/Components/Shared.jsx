import { useState } from "react";

/* eslint-disable react/prop-types */
const Shared = ({ articles, isLoading }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
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
              {isLoading ? (
                <span className="loading text-center mt-10 loading-spinner text-info text-2xl"></span>
              ) : (
                <>
                  {showMore ? (
                    <>
                      {articles?.map((data) => (
                        <tr key={data.id}>
                          <th>{data.title}</th>
                          <td>{data.abstract}</td>
                          <td>{data.published_date}</td>

                          <td>
                            <a
                              href={data.url}
                              target="blank"
                              className="btn btn-neutral text-white"
                            >
                              Read More
                            </a>
                          </td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <>
                      {articles.slice(0, 5)?.map((data) => (
                        <tr key={data.id}>
                          <th>{data.title}</th>
                          <td>{data.abstract}</td>
                          <td>{data.published_date}</td>

                          <td>
                            <a
                              href={data.url}
                              target="blank"
                              className="btn btn-neutral text-white"
                            >
                              Read More
                            </a>
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="btn btn-info text-white mt-5"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </>
  );
};

export default Shared;
