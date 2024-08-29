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
            <div class="  col-md-3">
              <label for="inputPassword" class="col-form-label">
                Client Name
              </label>
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* password */}
            <div class="  col-md-3">
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
            <div class="  col-md-3">
              <label for="inputPassword" class="col-form-label">
                Account Type
              </label>
              <div>
              <select class="form-control" id="exampleFormControlSelect1">
                  <option selected>select Account type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            {/* Credit Reference */}
            <div class="  col-md-3">
              <label for="inputPassword" class="col-form-label">
                Credit Reference
              </label>
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>
            {/* Confirm Password */}
            <div class="  col-md-3">
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
            <div class="  col-md-3">
              <label for="inputPassword" class="col-form-label">
                Full Name
              </label>
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>
            {/* blank div*/}
            <div class="  col-md-6"></div>

            {/* City */}
            <div class="  col-md-3">
              <label for="inputPassword" class="col-form-label">
                City
              </label>
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* Phone */}
            <div class="  col-md-3">
              <label for="inputPassword" class="col-form-label">
                Phone
              </label>
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>

              {/* blank div*/}
              <div class="  col-md-6"></div>
            </div>
            {/* blank div*/}
            <div class="  col-md-6"></div>

            {/* ************************************************ */}

            <div className="commisiom_setting mt-3">
              <div className="client_black_div">
                <h4>Commission Setting</h4>
              </div>
            </div>

            {/* blank div*/}
            <div class="  col-md-3"></div>

            {/* Cricket */}
            <div class="  col-md-3 mb-3">
              <label for="inputPassword" class="col-form-label">
                Cricket
              </label>
              <div class=""></div>
            </div>

            {/* Soccer */}
            <div class="  col-md-3">
              <label for="inputPassword" class="col-form-label">
                Soccer
              </label>
              <div class=""></div>
            </div>

            {/* tennis */}
            <div class="  col-md-3">
              <label for="inputPassword" class="col-form-label">
                Tennis
              </label>
            </div>

            {/* Up Line */}
            <div class="  col-md-3">
              <label for="inputPassword" class="col-form-label">
                Up line
              </label>
            </div>

            {/* ------ */}
            <div class="  col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" disabled value={0} />
              </div>
            </div>

            {/* ------ */}
            <div class="  col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword"disabled value={0} />
              </div>
            </div>

            {/* ------- */}
            <div class="  col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword"disabled value={0} />
              </div>
            </div>

            {/* Down Line */}
            <div class="  col-md-3">
              <label for="inputPassword" class="col-form-label">
                Down line
              </label>
            </div>

            {/* -----*/}
            <div class="  col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* ----- */}
            <div class="  col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* ----- */}
            <div class="  col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* Our */}
            <div class="  col-md-3">
              <label for="inputPassword" class="col-form-label">
                Our
              </label>
            </div>

            {/* ----- */}
            <div class="  col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" disabled />
              </div>
            </div>

            {/* ------ */}
            <div class="  col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" disabled />
              </div>
            </div>

            {/* ----- */}
            <div class="  col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" disabled />
              </div>
            </div>

            {/* ***************************************? */}
            <div className="commisiom_setting mt-2">
              <div className="client_black_div">
                <h4>Bit Limit Setting</h4>
              </div>
            </div>

            {/* blank div*/}
            <div class="  col-md-3"></div>

            {/* Cricket */}
            <div class="  col-md-3 mb-3">
              <label for="inputPassword" class="col-form-label">
                Cricket
              </label>
              <div class=""></div>
            </div>

            {/* Soccer */}
            <div class="  col-md-3">
              <label for="inputPassword" class="col-form-label">
                Soccer
              </label>
              <div class=""></div>
            </div>

            {/* tennis */}
            <div class="  col-md-3">
              <label for="inputPassword" class="col-form-label">
                Tennis
              </label>
            </div>

            {/* Minimum */}
            <div class="  col-md-3">
              <label for="inputPassword" class="col-form-label">
                Minimum
              </label>
            </div>

            {/* ------ */}
            <div class="  col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" value={100} />
              </div>
            </div>

            {/* ------ */}
            <div class="  col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" value={100} />
              </div>
            </div>

            {/* ------- */}
            <div class="  col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" value={100} />
              </div>
            </div>

            {/* Maximum */}
            <div class="  col-md-3">
              <label for="inputPassword" class="col-form-label">
                Maximum
              </label>
            </div>

            {/* ------ */}
            <div class="  col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" value={100000} />
              </div>
            </div>

            {/* ------ */}
            <div class="  col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" value={5000} />
              </div>
            </div>

            {/* ----- */}
            <div class="  col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" value={5000}/>
              </div>
            </div>

            {/* Delay */}
            <div class="  col-md-3">
              <label for="inputPassword" class="col-form-label">
                Delay
              </label>
            </div>

            {/* ------ */}
            <div class="  col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" value={3}/>
              </div>
            </div>

            {/* ------e */}
            <div class="  col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" value={5} />
              </div>
            </div>

            {/* ------ */}
            <div class="  col-md-3">
              <div class="">
                <input type="text" class="form-control" id="inputPassword" value={5}/>
              </div>
            </div>

            {/* **************************** */}

            <div className="  col-md-12 d-flex justify-content-end mb-4">
              {/* Transection Password */}
              <div class="  col-md-2">
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

                <button className="btn btn-warning mt-2 create_account">Create Account</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAccount;
