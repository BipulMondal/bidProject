import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table";
import { requestHandler } from "../../utils/requestHandler";
import TransactionModal from "../../modal/TransactionModal";

const Client = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(true);
  const [accountData, setAccountData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [usersId, setUserId] = useState("");
  console.log("sjgdasdga", usersId);

  const fetchAccountData = async () => {
    try {
      let token = localStorage.getItem("token");
      let res = await requestHandler({
        endpoint: "/account",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res && res?.success) {
        setAccountData(res?.data);
      }
    } catch (error) {
      console.error("Error fetching account data:", error.message);
    }
  };

  useEffect(() => {
    fetchAccountData();
  }, []);

  const tableData = {
    columns: [
      { label: "User Name", field: "username", sort: "asc", width: 50 },
      {
        label: "Credit Reference",
        field: "reference",
        sort: "asc",
        width: 100,
      },
      { label: "City", field: "city_name", sort: "asc", width: 100 },
      { label: "U St", field: "ust", sort: "asc", width: 100 },
      { label: "B St", field: "bst", sort: "asc", width: 100 },
      { label: "Exposure Limit", field: "exposure", sort: "asc", width: 100 },
      { label: "Default %", field: "default", sort: "asc", width: 100 },
      { label: "Account Type", field: "account", sort: "asc", width: 100 },
      { label: "Casino Total", field: "casino", sort: "asc", width: 100 },
      { label: "Total Amount", field: "totalamount", sort: "asc", width: 100 },
      { label: "Action", field: "action", sort: "asc", width: 150 },
    ],
    rows:
      accountData?.accountList?.length > 0
        ? accountData?.accountList?.map((item, idx) => ({
            username: (
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div
                    className="widget-content-left flex2"
                    style={{ textAlign: "center" }}
                  >
                    <div className="zwidget-heading" style={{ opacity: 1 }}>
                      {item.username}
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
            totalamount: (
              <div
                className="widget-content p-0"
                style={{ textAlign: "center" }}
              >
                <div className="widget-content-wrapper">
                  <div
                    className="widget-content-left flex2"
                    style={{ textAlign: "center" }}
                  >
                    <div className="zwidget-heading" style={{ opacity: 1 }}>
                      {item.totalamount}
                    </div>
                  </div>
                </div>
              </div>
            ),
            action: (
              <div>
                <button
                  className="me-2 btn-icon btn-icon-only btn btn-outline-success"
                  // onClick={() => navigate(`/edit-city/${item?._id}`)}
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button className="ml-2 btn-icon btn-icon-only btn btn-outline-danger">
                  <i className="fa-solid fa-trash-can" />
                </button>
                <button
                  className="ml-2 btn-icon btn-icon-only btn btn-outline-primary"
                  onClick={() => {
                    console.log("item", item);
                    setUserId(item?._id);
                    setShowModal(true);
                  }}
                >
                  <i className="fa-solid fa-money-bill-transfer"></i>
                </button>
              </div>
            ),
          }))
        : [],
  };

  return (
    <>
      <div className="client_main">
        <div className="client_black_div_top">
          <div className="down_arrow_main">
            <i
              onClick={() => setStatus(!status)}
              className={`fa-regular fa-circle-${status ? "down" : "up"}`}
            ></i>
          </div>
          {!status && (
            <div className="row gap-x-2 mt-4">
              <div className="col-md-4">
                <div className="black_middle">
                  <div>
                    <p>Upper Level Credit Reference:</p>
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
                    <p>Down Level Balance:</p>
                    <p>Upper Level:</p>
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
          )}
        </div>

        <div className="client_list">
          <div className="client left">
            <h3>Account List</h3>
            <div>
              <button className="btn btn-danger">
                <i className="fa-regular fa-file-lines"></i> PDF
              </button>
              <button className="btn btn-success ml-2">
                <i className="fa-solid fa-file-csv"></i> Export CSV
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
              <label htmlFor="search">Search</label>
              <input type="text" name="search" id="search" />
            </div>
          </div>
        </div>
        <div className="table_div">
          <Table data={tableData} />
        </div>

        <TransactionModal
          showModal={showModal}
          setShowModal={setShowModal}
          usersId={usersId}
        />
      </div>
    </>
  );
};

export default Client;
