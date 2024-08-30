import React from "react";

const GeneralReport = () => {
  return (
    <div className="General_Report">
      <h5>General Report</h5>
      <form>
        <div className="container-fluid">
          <div className="row gx-2"></div>
        </div>
      </form>

      <div className="currentbits_main">
        <div className="Current_bits_top">
          <div className="form-group col-md-3">
            <label for="inputPassword" class="col-form-label">
              Select Type
            </label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option selected>General Report</option>
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
        </div>
      </div>
    </div>

  );
};

export default GeneralReport;
