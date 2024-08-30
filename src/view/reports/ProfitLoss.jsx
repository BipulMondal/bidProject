import React from "react";

const ProfitLoss = () => {
  return (
    <div className="Profit_loss">
      <h5> Profit Loss</h5>
    <form>
      <div className="container-fluid">
        <div className="row gx-2">
          {/* Search By Client Name */}
          <div class="form-group col-md-2">
            <label for="inputPassword" class="col-form-label">
              Search By Client Name
            </label>
            <div class="">
            <select class="form-control" id="exampleFormControlSelect1">
                <option selected>Select...</option>
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

export default ProfitLoss;
