import React from "react";

const AddAccount = () => {
  return (
    <div className="add_account_main">
      <div className="account_head">Add Account</div>
      <form>
        <div className="container-fluid">
          <div className="row gx-2">
            <div className="account_top mb-3">
              <div className="client_black_div">
                <h4>Personal Detail</h4>
              </div>

              <div className="client_black_div">
                <h4>Account Details</h4>
              </div>
            </div>

            {/* clint name */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Client Name
              </label>
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* password */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Password
              </label>
              <div class="">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                />
              </div>
            </div>

            {/* account type */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Account Type
              </label>
              <div>
                <select class="form-select" aria-label="Default select example">
                  <option selected>select Account type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            {/* Credit Reference */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Credit Reference
              </label>
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>
            {/* Confirm Password */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Confirm Password
              </label>
              <div class="">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
            {/* full Name */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Full Name
              </label>
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>
            {/* blank div*/}
            <div class="form-group col-md-6"></div>

            {/* City */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                City
              </label>
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* Phone */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Phone
              </label>
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>

              {/* blank div*/}
              <div class="form-group col-md-6"></div>
            </div>
            {/* blank div*/}
            <div class="form-group col-md-6"></div>

            {/* ************************************************ */}

            <div className="commisiom_setting">
              <div className="client_black_div">
                <h4>Commission Setting</h4>
              </div>
            </div>

            {/* blank div*/}
            <div class="form-group col-md-3"></div>

            {/* Cricket */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Cricket
              </label>
              <div class=""></div>
            </div>

            {/* Soccer */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Soccer
              </label>
              <div class=""></div>
            </div>

            {/* tennis */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Tennis
              </label>
            </div>

            {/* Up Line */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Up line
              </label>
            </div>

            {/* ------ */}
            <div class="form-group col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* ------ */}
            <div class="form-group col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* ------- */}
            <div class="form-group col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* Down Line */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Down line
              </label>
            </div>

            {/* Phone */}
            <div class="form-group col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* Phone */}
            <div class="form-group col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* Phone */}
            <div class="form-group col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* Our */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Our
              </label>
            </div>

            {/* Phone */}
            <div class="form-group col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* Phone */}
            <div class="form-group col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* Phone */}
            <div class="form-group col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* ***************************************? */}
            <div className="commisiom_setting">
              <div className="client_black_div">
                <h4>Commission Setting</h4>
              </div>
            </div>

            {/* blank div*/}
            <div class="form-group col-md-3"></div>

            {/* Cricket */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Cricket
              </label>
              <div class=""></div>
            </div>

            {/* Soccer */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Soccer
              </label>
              <div class=""></div>
            </div>

            {/* tennis */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Tennis
              </label>
            </div>

            {/* Up Line */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Up line
              </label>
            </div>

            {/* ------ */}
            <div class="form-group col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* ------ */}
            <div class="form-group col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* ------- */}
            <div class="form-group col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* Down Line */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Down line
              </label>
            </div>

            {/* Phone */}
            <div class="form-group col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* Phone */}
            <div class="form-group col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* Phone */}
            <div class="form-group col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* Our */}
            <div class="form-group col-md-3">
              <label for="inputPassword" class="col-form-label">
                Our
              </label>
            </div>

            {/* Phone */}
            <div class="form-group col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* Phone */}
            <div class="form-group col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* Phone */}
            <div class="form-group col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* **************************** */}

            <div className="form-group col-md-12 d-flex justify-content-end">
              {/* Transection Password */}
              <div class="form-group col-md-2">
                <label for="inputPassword" class="col-form-label">
                  Transection Password
                </label>
                <div class="">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Transection Password"
                    id="inputPassword"
                  />
                </div>

                <button className="btn btn-warning mt-2">Create Account</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAccount;
