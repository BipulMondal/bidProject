import React from "react";

const CasinoResult = () => {
  return (
    <div className="Casino_Result">
      <h5> Casino Result</h5>
      <div>
        <form>
          <div className="container-fluid">
            <div className="row gx-2">
              {/* From */}
              <div class="form-group col-md-2">
                
                <div class="">
                  <input type="date" class="form-control" id="inputPassword" />
                </div>
              </div>

              {/* Search By Client Name */}
              <div class="form-group col-md-2">
                <div class="">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option selected>Select...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              <div class="from-group col-md-1">
                <button class="btn btn-warning">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CasinoResult;
