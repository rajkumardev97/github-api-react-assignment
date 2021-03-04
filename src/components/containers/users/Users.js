import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { API_CONSTANTS } from "../../shared/constants/api.constants";
import Header from "../../layouts/Header";
import UserList from "./UserList";
import GlobalLoader from "../../common/GlobalLoader";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Users({ history, ...props }) {
  const [allList, setAllList] = useState(null);

  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
      let resdata = await Axios.get(`${API_CONSTANTS.GITHUB.USERS}`);

      const { data } = resdata;

      setAllList(data);
      setLoading(false);

      toast("Users Retrieve Successfully", { type: "success" });
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Header />

      <main className="wrapper">
        <section className="spacing-py-20 mycarSection">
          <div className="container-fluid">
            <div className="mycar__page jsDataTableHeight location__locations">
              <UserList
                data={allList}
                loading={loading}
                setLoading={setLoading}
              />
            </div>
          </div>
        </section>

        <GlobalLoader loadStatus={loading} />
      </main>
    </div>
  );
}

export default withRouter(Users);
