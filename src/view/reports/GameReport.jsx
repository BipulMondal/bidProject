import React from "react";

const GameReport = () => {
  return (
    <div>
      <form>
        <div className="container-fluid">
          <div className="row gx-2">
            Game Report
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
            {/* Type */}
            <div class="form-group col-md-2">
              <label for="inputPassword" class="col-form-label">
                Type
              </label>
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>
            <div class="from-group col-md-5">
              <button class="btn btn-warning">Game List</button>

              {/* Type */}
              <div class="form-group col-md-6">
                <div class="">
                  {/* Type */}
                  <div class="form-group col-md-10">
                    <label for="inputPassword" class="col-form-label">
                      Type
                    </label>
                    <div class="">
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GameReport;
