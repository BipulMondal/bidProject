import React, { useState } from "react";
import AddAccount from "./AddAccount";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table";

const Client = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(true);

  const filterData = [];

  const tableData = {
    columns: [
      {
        label: "User Name",
        field: "username",
        sort: "asc",
        width: 50,
      },
      {
        label: "Credit Refference",
        field: "reffrence",
        sort: "asc",
        width: 100,
      },
      {
        label: "City",
        field: "city_name",
        sort: "asc",
        width: 100,
      },
      {
        label: "U St",
        field: "ust",
        sort: "asc",
        width: 100,
        height: 100,
      },
      {
        label: "B St",
        field: "bst",
        sort: "asc",
        width: 100,
        height: 100,
      },
      {
        label: "Explosure Limit",
        field: "explosure",
        sort: "asc",
        width: 100,
        height: 100,
      },
      {
        label: "Default %",
        field: "default",
        sort: "asc",
        width: 100,
        height: 100,
      },
      {
        label: "Account Type",
        field: "account",
        sort: "asc",
        width: 100,
        height: 100,
      },
      {
        label: "Cashino Total",
        field: "cashino",
        sort: "asc",
        width: 100,
        height: 100,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 150,
      },
    ],
    rows:
      filterData?.length > 0
        ? filterData?.map((item, idx) => {
            return {
              username: (
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div
                      className="widget-content-left flex2"
                      style={{ textAlign: "center" }}
                    >
                      <div className="zwidget-heading" style={{ opacity: 1 }}>
                        {item.cityName}
                      </div>
                    </div>
                  </div>
                </div>
              ),
              city_name: (
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div
                      className="widget-content-left flex2"
                      style={{ textAlign: "center" }}
                    >
                      <div className="zwidget-heading" style={{ opacity: 1 }}>
                        {item.cityName}
                      </div>
                    </div>
                  </div>
                </div>
              ),
              picture: (
                <div
                  className="widget-content p-0"
                  key={idx}
                  style={{ textAlign: "center" }}
                >
                  <div className="widget-content-wrapper">
                    <img
                      src={`${item.picture}`}
                      alt=""
                      style={{
                        height: "70px",
                        width: "120px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      className="img-fluid"
                    />
                  </div>
                </div>
              ),
              action: (
                <div>
                  <button className="me-2 btn-icon btn-icon-only btn btn-outline-danger">
                    <i className="fa-solid fa-trash-can" />
                  </button>

                  <button
                    className="me-2 btn-icon btn-icon-only btn btn-outline-success"
                    onClick={() => navigate(`/edit-city/${item?._id}`)}
                  >
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                </div>
              ),
            };
          })
        : [],
  };

  return (
    <>
      <div className="client_main">
        <div className="client_black_div_top">
          <div className="down_arrow_main">
            {status ? (
              <i
                onClick={() => setStatus(false)}
                class="fa-regular fa-circle-down"
              ></i>
            ) : (
              <i
                onClick={() => setStatus(true)}
                class="fa-regular fa-circle-up"
              ></i>
            )}
          </div>
          {!status ? (
            <div className="row gap-x-2 mt-4">
              <div className="col-md-4">
                <div className="black_middle">
                  <div>
                    <p>Upper Level Credit Referance:</p>
                    <p>Total Master Balance</p>
                    <p>Available Balance:</p>
                  </div>
                  <div>
                    <p>500000.00</p>
                    <p>500000.00</p>
                    <p>500000.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="black_middle">
                  <div>
                    <p>Down level Balance:</p>
                    <p>Uper Level:</p>
                    <p>Available Balance with Profit/Loss:</p>
                  </div>
                  <div>
                    <p>0.00</p>
                    <p>0</p>
                    <p>500000.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="black_middle">
                  <div>
                    <p>Down Level Credit Reference:</p>
                    <p>Down Level Profit/Loss:</p>
                    <p>My Profit/Loss:</p>
                  </div>
                  <div>
                    <p>0.00</p>
                    <p>0</p>
                    <p>0.00</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="client_list">
          <div className="client left">
            <h3>Account List</h3>
            <div>
              <button className="btn btn-danger">
                <i class="fa-regular fa-file-lines"></i>PDF
              </button>
              <button className="btn btn-success ml-2">
                <i class="fa-solid fa-file-csv"></i>Export CSV
              </button>
            </div>
          </div>
          <div className="client_right">
            <div className="add_account">
              <button
                className="btn btn-warning"
                onClick={() => navigate("/clientlist/add_account")}
              >
                Add Account
              </button>
            </div>
            <div>
              <label htmlFor="">Search</label>
              <input type="text" name="" id="" />
            </div>
          </div>
        </div>
        <div className="table_div">
          <Table data={tableData} />
        </div>
      </div>
    </>
  );
};

export default Client;
