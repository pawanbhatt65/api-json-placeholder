import React, { Fragment } from "react";

const Photos = (props) => {
  return (
    <Fragment>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Album Id</th>
              <th>Image</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {props.post.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.albumIdData}</td>
                  <td><img src={data.thumbnailUrlData} alt="" /></td>
                  <td>{data.titleData}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Photos;
