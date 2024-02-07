/* eslint-disable react/prop-types */

const Popular = ({ articles }) => {
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
  );
};

export default Popular;
