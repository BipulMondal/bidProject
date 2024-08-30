import React, { useState } from "react";
import logo from "../../images/logo.png";
import { login } from "../../API_HELPERS/apiHelpers";

const Login = () => {
  const initial = {
    username: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initial);

  const handleSubmit = async () => {
    try {
      let data = loginData;
      let res = await requestHandler({
        endpoint: "/account/login",
        method: "POST",
        body,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login_main">
      <div className="from_main">
        <div className="logo_div">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="from_head">
          <div className="text_main">
            <h3 className="sign_in_txt">Sign In</h3>
          </div>
          <form>
            <div class="mb-3 username">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Username"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-dark login_btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
