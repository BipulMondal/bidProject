import React from "react";

const CurrentBets = () => {
  return (
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
  );
};

export default CurrentBets;
