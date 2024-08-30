import React, { useState } from "react";
import { requestHandler } from "../../utils/requestHandler";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddAccount = () => {
  const initial = {
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
    city: "",
    fullName: " ",
    commission: {
      cricket: null,
      soccer: null,
      tennis: null,
    },
    maxBet: {
      cricket: null,
      soccer: null,
      tennis: null,
    },
    minBet: {
      cricket: null,
      soccer: null,
      tennis: null,
    },
    delayBet: {
      cricket: null,
      soccer: null,
      tennis: null,
    },
  };
  const [accountdata, setAccountData] = useState(initial);
  const navigate = useNavigate();
  console.log("accountdata", accountdata);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAccountData((prev) => {
      const keys = name.split(".");
      if (keys.length > 1) {
        return {
          ...prev,
          [keys[0]]: {
            ...prev[keys[0]],
            [keys[1]]: value,
          },
        };
      } else {
        return {
          ...prev,
          [name]: value,
        };
      }
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let token = localStorage.getItem("token");
      console.log("token,", token);
      let data = accountdata;
      let res = await requestHandler({
        endpoint: "/account",
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res && res?.success) {
        toast.success(res?.message);
        navigate("/clientlist");
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="add_account_main">
      <div className="account_head">Add Account</div>
      <form onSubmit={handleSubmit}>
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
              <label htmlFor="username" class="col-form-label">
                Client Name
              </label>
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  name="username"
                  id="username"
                  value={accountdata.username}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            {/* password */}
            <div class="  col-md-3">
              <label htmlFor="password" class="col-form-label">
                Password
              </label>
              <div class="">
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  id="password"
                  value={accountdata.password}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            {/* account type */}
            <div class="  col-md-3">
              <label htmlFor="inputPassword" class="col-form-label">
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
              <label htmlFor="inputPassword" class="col-form-label">
                Credit Reference
              </label>
              <div class="">
                <input type="text" class="form-control" id="inputPassword" />
              </div>
            </div>

            {/* Confirm Password */}
            <div class="  col-md-3">
              <label htmlFor="confirmPassword" class="col-form-label">
                Confirm Password
              </label>
              <div class="">
                <input
                  type="password"
                  class="form-control"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={accountdata.confirmPassword}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            {/* full Name */}
            <div class="  col-md-3">
              <label htmlFor="fullName" class="col-form-label">
                Full Name
              </label>
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  name="fullName"
                  id="fullName"
                  value={accountdata.fullName}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            {/* blank div*/}
            <div class="  col-md-6"></div>

            {/* City */}
            <div class="col-md-3">
              <label htmlFor="city" class="col-form-label">
                City
              </label>
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  name="city"
                  id="city"
                  value={accountdata.city}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            {/* Phone */}
            <div class="  col-md-3">
              <label htmlFor="phone" class="col-form-label">
                Phone
              </label>
              <div class="">
                <input
                  type="number"
                  class="form-control"
                  name="phone"
                  id="phone"
                  value={accountdata.phone}
                  onChange={(e) => handleChange(e)}
                />
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
              <label htmlFor="inputPassword" class="col-form-label">
                Cricket
              </label>
              <div class=""></div>
            </div>

            {/* Soccer */}
            <div class="  col-md-3">
              <label htmlFor="inputPassword" class="col-form-label">
                Soccer
              </label>
              <div class=""></div>
            </div>

            {/* tennis */}
            <div class="  col-md-3">
              <label htmlFor="inputPassword" class="col-form-label">
                Tennis
              </label>
            </div>

            {/* Up Line */}
            <div class="  col-md-3">
              <label htmlFor="inputPassword" class="col-form-label">
                Up line
              </label>
            </div>

            {/* ------ */}
            <div class="  col-md-3">
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  disabled
                  value={0}
                />
              </div>
            </div>

            {/* ------ */}
            <div class="  col-md-3">
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  disabled
                  value={0}
                />
              </div>
            </div>

            {/* ------- */}
            <div class="  col-md-3">
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  disabled
                  value={0}
                />
              </div>
            </div>

            {/* Down Line */}
            <div class="  col-md-3">
              <label htmlFor="inputPassword" class="col-form-label">
                Down line
              </label>
            </div>

            {/* -----*/}
            <div class="  col-md-3">
              <div class="">
                <input
                  type="number"
                  class="form-control"
                  name="commission.cricket"
                  id="commission.cricket"
                  value={accountdata.commission.cricket}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            {/* ----- */}
            <div class="  col-md-3">
              <div class="">
                <input
                  type="number"
                  class="form-control"
                  name="commission.soccer"
                  id="commission.soccer"
                  value={accountdata.commission.soccer}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            {/* ----- */}
            <div class="  col-md-3">
              <div class="">
                <input
                  type="number"
                  class="form-control"
                  name="commission.tennis"
                  id="commission.tennis"
                  value={accountdata.commission.tennis}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            {/* Our */}
            <div class="  col-md-3">
              <label htmlFor="inputPassword" class="col-form-label">
                Our
              </label>
            </div>

            {/* ----- */}
            <div class="  col-md-3">
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  disabled
                />
              </div>
            </div>

            {/* ------ */}
            <div class="  col-md-3">
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  disabled
                />
              </div>
            </div>

            {/* ----- */}
            <div class="  col-md-3">
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  disabled
                />
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
              <label htmlFor="inputPassword" class="col-form-label">
                Cricket
              </label>
              <div class=""></div>
            </div>

            {/* Soccer */}
            <div class="  col-md-3">
              <label htmlFor="inputPassword" class="col-form-label">
                Soccer
              </label>
              <div class=""></div>
            </div>

            {/* tennis */}
            <div class="  col-md-3">
              <label htmlFor="inputPassword" class="col-form-label">
                Tennis
              </label>
            </div>

            {/* Minimum */}
            <div class="  col-md-3">
              <label htmlFor="minimum" class="col-form-label">
                Minimum
              </label>
            </div>

            {/* ------ */}
            <div class="  col-md-3">
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  name="minBet.cricket"
                  id="minBet.cricket"
                  value={accountdata.minBet.cricket}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            {/* ------ */}
            <div class="  col-md-3">
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  name="minBet.soccer"
                  id="minBet.soccer"
                  value={accountdata.minBet.soccer}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            {/* ------- */}
            <div class="  col-md-3">
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  name="minBet.tennis"
                  id="minBet.tennis"
                  value={accountdata.minBet.tennis}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            {/* Maximum */}
            <div class="  col-md-3">
              <label htmlFor="inputPassword" class="col-form-label">
                Maximum
              </label>
            </div>

            {/* ------ */}
            <div class="  col-md-3">
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  name="maxBet.cricket"
                  id="maxBet.cricket"
                  value={accountdata.maxBet.cricket}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            {/* ------ */}
            <div class="  col-md-3">
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  name="maxBet.soccer"
                  id="maxBet.soccer"
                  value={accountdata.maxBet.soccer}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            {/* ----- */}
            <div class="  col-md-3">
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  name="maxBet.tennis"
                  id="maxBet.tennis"
                  value={accountdata.maxBet.tennis}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            {/* Delay */}
            <div class="  col-md-3">
              <label htmlFor="inputPassword" class="col-form-label">
                Delay
              </label>
            </div>

            {/* ------ */}
            <div class="  col-md-3">
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  name="delayBet.cricket"
                  id="delayBet.cricket"
                  value={accountdata.delayBet.cricket}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            {/* ------e */}
            <div class="  col-md-3">
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  name="delayBet.soccer"
                  id="delayBet.soccer"
                  value={accountdata.delayBet.soccer}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            {/* ------ */}
            <div class="  col-md-3">
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  name="delayBet.tennis"
                  id="delayBet.tennis"
                  value={accountdata.delayBet.tennis}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            {/* **************************** */}

            <div className="  col-md-12 d-flex justify-content-end mb-4">
              {/* Transection Password */}
              <div class="  col-md-2">
                <label htmlFor="inputPassword" class="col-form-label">
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

                <button
                  type="submit"
                  className="btn btn-warning mt-2 create_account"
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAccount;
