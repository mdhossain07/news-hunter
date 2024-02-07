/* eslint-disable react/prop-types */
const Shared = ({ articles }) => {
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

              {articles?.map((data) => (
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
