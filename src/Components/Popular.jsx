/* eslint-disable react/prop-types */

import { useState } from "react";

const Popular = ({ articles, isLoading }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
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
              <span className="loading mt-10 text-center loading-spinner text-info text-2xl"></span>
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

      <button
        onClick={() => setShowMore(!showMore)}
        className="btn btn-info text-white mt-5"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Popular;
