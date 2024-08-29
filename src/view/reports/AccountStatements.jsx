import React from "react";

const AccountStatements = () => {
  return (
    <div className="statement_main">
      <h5> Account Statement</h5>
      <form>
        <div className="container-fluid">
          <div className="row gx-2">  
            <div class="form-group col-md-2">
              <label for="inputPassword" class="col-form-label">
                Search By Client Name
              </label>
              <div class="">
              <select class="form-control" id="exampleFormControlSelect1">
                  <option selected>Search...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
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
            <div class="form-group col-md-1 load_button">
              <button class="btn btn-warning">load</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountStatements;
