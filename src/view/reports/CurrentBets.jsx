import React from "react";

const CurrentBets = () => {
  return (
    <div>
      <form>
        <div className="container-fluid">
          <div className="row gx-2"></div>
        </div>
      </form>
      current bets
      <div className="currentbits_main">
        <div className="Current_bits_top">
          <div>
            <label for="inputPassword" class="col-form-label">
              Account Type
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>select Account type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div>
          <button type="button" class="btn btn-warning">
            Load
          </button>
          </div>

        </div>
        <div>
          <button type="button" class="btn btn-warning">
            Warning
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrentBets;
