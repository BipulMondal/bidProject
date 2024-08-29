import React from "react";

const ProfitLoss = () => {
  return (
    <div>
      <form>
        <div className="container-fluid">
          <div className="row gx-2">
            Profit Loss
            {/* Search By Client Name */}
            <div class="form-group col-md-2">
              <label for="inputPassword" class="col-form-label">
                Search By Client Name
              </label>
              <div class="">
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                >
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
            <div class="from-group col-md-1">
              <button class="btn btn-warning">load</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfitLoss;
