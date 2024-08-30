import React from "react";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";


const GameReport = () => {
    const navigate = useNavigate();
    const filterData = [];
  
    const tableData = {
      columns: [
        {
          label: "S.No",
          field: "S_No",
          sort: "asc",
          width: 50,
        },
        {
          label: "Date",
          field: "Date",
          sort: "asc",
          width: 100,
        },
        {
          label: "Credit",
          field: "Credit",
          sort: "asc",
          width: 100,
        },
        {
          label: "Debit",
          field: "Debit",
          sort: "asc",
          width: 100,
          height: 100,
        },
        {
          label: "Closing",
          field: "bst",
          sort: "asc",
          width: 100,
          height: 100,
        },
        {
          label: "Description",
          field: "Description",
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

    <div className="Game_report">
      <h5> Game Reports</h5>
      <form>
        <div className="container-fluid">
          <div className="row gx-2">
            {/* From */}
            <div class="form-group col-md-2">
              <label for="inputPassword" class="col-form-label">
                From
              </label>
              <div class="">
                <input type="date" class="form-control" id="inputPassword" />
              </div>
            </div>
            {/* To */}
            <div class="form-group col-md-2">
              <label for="inputPassword" class="col-form-label">
                To
              </label>
              <div class="">
                <input type="date" class="form-control" id="inputPassword" />
              </div>
            </div>

            <div class="form-group col-md-2">
              <label for="inputPassword" class="col-form-label">
                type
              </label>
              <div class="">
                <select class="form-control" id="exampleFormControlSelect1">
                  <option selected>All</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div class="form-group col-md-1 load_button">
              <button class="btn btn-warning">Game List</button>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row gx-2">
          <div class="form-group col-md-6">
            <div class="">
              <select class="form-control" id="exampleFormControlSelect1">
                <option selected>All</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="form-group col-md-1 load_button">
              <button class="btn btn-warning">Show Game Report</button>
            </div>
            <div class="form-group col-md-1 load_button">
              <button class="btn btn-warning">Master Game Report</button>
            </div>
            
            </div>

          
        </div>
      </form>
    </div>
    <div className="table_div">
          <Table data={tableData} />
        </div>
    </>

  );
};

export default GameReport;
