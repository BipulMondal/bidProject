import React from "react";

const GeneralReport = () => {
  return (
    <div className="general_report">
      <form>
        <div className="container-fluid">
          <div className="row gx-2">
            Account Statement
            <div>
            {/* Select Type */}
            <div class="form-group col-md-2">
              <label for="inputPassword" class="col-form-label">
                Select Type
              </label>
              <div class="">
                <select
                  class="form-select form-select-lg mb-10"
                  aria-label=".form-select-lg example"
                >
                  <option selected>All</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <div class="from-group col-md-3">
              <button class="btn btn-warning">load</button> </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GeneralReport;
