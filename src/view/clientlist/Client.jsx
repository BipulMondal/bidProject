import React from "react";
import AddAccount from "./AddAccount";

const Client = () => {
  return (
    <>
      {/* <div className="client_main">
        <div className="client_black_div"></div>

        <div className="client_list">
          <div className="client left">
            <h3>Account List</h3>
            <div>
              <button className="btn btn-danger">
                <i class="fa-regular fa-file-lines"></i>PDF
              </button>
              <button className="btn btn-success ms-2">
                <i class="fa-solid fa-file-csv"></i>Export CSV
              </button>
            </div>
          </div>
          <div className="client_right">
            <div className="add_account">
              <button className="btn btn-warning">Add Account</button>
            </div>
            <div>
              <label htmlFor="">Search</label>
              <input type="text" name="" id="" />
            </div>
          </div>
        </div>
        <div></div>
      </div> */}

      <AddAccount />
    </>
  );
};

export default Client;
