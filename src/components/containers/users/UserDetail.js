import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { API_CONSTANTS } from "../../shared/constants/api.constants";

import Header from "../../layouts/Header";

import "react-toastify/dist/ReactToastify.css";

import GlobalLoader from "../../common/GlobalLoader";
import UserInformation from "../../layouts/UserInformation";

function UserDetail({ history, ...props }) {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);

  const getUserByName = async () => {
    try {
      setLoading(true);

      let id = props.match.params.id;
      let resdata = await Axios.get(`${API_CONSTANTS.GITHUB.USERS}/${id}`);

      const { data } = resdata;

      setUser(data);
      setLoading(false);
      toast("User Retrieve Successfully", { type: "success" });
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  useEffect(() => {
    getUserByName();
  }, []);

  let userCont;

  if (user) {
    userCont = <UserInformation userInfo={user} />;
  }

  return (
    <div>
      <Header />

      <main className="wrapper">
        <nav aria-label="breadcrumb" className="breadcrumb__menu">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Users</Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              {user && user.login}
            </li>
          </ol>
        </nav>

        <div class="container">
          <div class="row">
            <div class="col-md-6">{userCont}</div>{" "}
          </div>
        </div>

        <GlobalLoader loadStatus={loading} />
      </main>
    </div>
  );
}

export default withRouter(UserDetail);
