import React from "react";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";


const CurrentBets = () => {
  const navigate = useNavigate();
  const filterData = [];

  const tableData = {
    columns: [
      {
        label: "S.No.",
        field: "SNo",
        sort: "asc",
        width: 50,
      },
      {
        label: "Event Type",
        field: "Event_Type",
        sort: "asc",
        width: 100,
      },
      {
        label: "UserName",
        field: "User_name",
        sort: "asc",
        width: 100,
      },
      {
        label: "Runner Name",
        field: "Runner_Name",
        sort: "asc",
        width: 100,
        height: 100,
      },
      {
        label: "Bet Type",
        field: "Bet_type",
        sort: "asc",
        width: 100,
        height: 100,
      },
      {
        label: "User Rate",
        field: "User_Rate",
        sort: "asc",
        width: 100,
        height: 100,
      },
      {
        label: "Amount",
        field: "Amount",
        sort: "asc",
        width: 100,
        height: 100,
      },
      {
        label: "Place Date",
        field: "Place_date",
        sort: "asc",
        width: 100,
        height: 100,
      },
      {
        label: "Match Date",
        field: "Match_Date",
        sort: "asc",
        width: 100,
        height: 100,
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
    <div className="current_bets">
      <h5>Current Bets</h5>
      <form>
        <div className="container-fluid">
          <div className="row gx-2"></div>
        </div>
      </form>

      <div className="currentbits_main">
        <div className="Current_bits_top">
          <div className="form-group col-md-3">
            <label for="inputPassword" class="col-form-label">
              Choose Type
            </label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option selected>select Account type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class="form-group col-md-1 load_button">
            <button class="btn btn-warning">load</button>
          </div>
        </div>
        <div>
          <button type="button" class="btn btn-warning ml-3">
            Enable Notification
          </button>
        </div>
      </div>
    </div>
    <div className="table_div">
          <Table data={tableData} />
        </div>
    </>
  );
};

export default CurrentBets;
