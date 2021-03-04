import React from "react";
import { Link, withRouter } from "react-router-dom";
const UserList = ({ history, ...props }) => {
  const { data } = props;

  const getUserList = (data) => {
    let allList =
      data &&
      data.map((item, key) => {
        return (
          <tr key={key}>
            <td class="text-center">
              <a
                href={item.avatar_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={item.avatar_url} width="50" alt="avatar" />
              </a>
            </td>
            <td class="text-center">
              <small>{item.login}</small>
            </td>

            <td class="text-center">
              <Link to={`/users/${item.login}`}>
                <i className="fa fa-eye"></i>
              </Link>
            </td>
          </tr>
        );
      });
    return allList;
  };

  return (
    <div className="table-responsive">
      <table className="table table-hover ">
        <thead className="bg-light ">
          <tr>
            <th class="text-center">Avatar</th>
            <th class="text-center">Name</th>

            <th class="text-center">Detail</th>
          </tr>
        </thead>
        <tbody>{getUserList(data)}</tbody>
      </table>
    </div>
  );
};

export default withRouter(UserList);
