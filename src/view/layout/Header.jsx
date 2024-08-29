import React from "react";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header_main">
      <div className="header_left">
        <div>
          <img
            className="header_logo"
            src={logo}
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="header_icon">
          <i class="fa-solid fa-bars"></i>
        </div>
        <div>
          <div className="header_list">
            <div
              className="list_item list_one"
              onClick={() => {
                navigate("/clientlist");
              }}
            >
              List Of Clients
            </div>
            <div className="list_item list_two">Market Analysis</div>
            <div className="list_item list_three">
              <div>
                Live Market <i class="fa-solid fa-caret-down"></i>
              </div>
              <div class="list_content_three">
                <a href="#">Race 20-20</a>
                <a href="#">Queen</a>
                <a href="#">Baccarat</a>
                <a href="#">Sports Casino</a>
                <a href="#">3 Cards Judgement</a>
                <a href="#">32 Cards Casino</a>
                <a href="#">Live TeenPatti</a>
                <a href="#">Live Poker</a>
                <a href="#">Ander Bahar</a>
                <a href="#">Lucky 7</a>
                <a href="#">Dragon Tiger</a>
                <a href="#">Bollywood Casino</a>
                <a href="#">Casino Meter</a>
                <a href="#">Casino War</a>
                <a href="#">Worli</a>
              </div>
            </div>
            <div className="list_item list_four">
              <div>
                Reports <i class="fa-solid fa-caret-down"></i>
              </div>
              <div class="list_content">
                <a href="/currentBets">Current Bets</a>
                <a href="/accountStatement">Account's Statement</a>
                <a href="/betHistory">Bet History</a>
                <a href="/generalReport">General Report</a>
                <a href="/gameReport">Game Repoet</a>
                <a href="/profitLoss">profit And Loss</a>
                <a href="/cashinoResult">Casino result Report</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="herder_right">
        <div class="dropdown">
          <p class="dropbtn">SUMT</p>
          <div class="dropdown-content">
            <a href="#">Change Password</a>
            <a href="#">Security Auth</a>
            <a href="#">logout</a>
          </div>
        </div>
        <button type="button" class="btn btn-light">
          All Client
        </button>
      </div>
    </div>
  );
};

export default Header;
