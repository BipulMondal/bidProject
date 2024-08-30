import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "../view/auth/Login";
import Client from "../view/clientlist/Client";
import Main from "../view/layout/main/Main";
import Dashboard from "../view/Dashboard/Dashboard";
import CurrentBets from "../view/reports/CurrentBets";
import AccountStatements from "../view/reports/AccountStatements";
import BetHistory from "../view/reports/BetHistory";
import GeneralReport from "../view/reports/GeneralReport";
import GameReport from "../view/reports/GameReport";
import ProfitLoss from "../view/reports/ProfitLoss";
import CasinoResult from "../view/reports/CasinoResult";
import AddAccount from "../view/clientlist/AddAccount";

function AppRoutes() {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.pathname || "/";
  const [loggedIn, setloggedIn] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("Authorization") &&
      localStorage.getItem("userType")
    ) {
      if (from === "/") {
        navigate("/");
      } else {
        navigate(from, { replace: true });
      }
      setloggedIn(true);
    } else {
      navigate("/login");
    }
  }, [loggedIn]);
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Dashboard />} /> {/* Renders at the root path */}
        <Route path="clientlist" element={<Client />} />
        <Route path="clientlist/add_account" element={<AddAccount />} />
        <Route path="currentBets" element={<CurrentBets />} />
        <Route path="accountStatement" element={<AccountStatements />} />
        <Route path="betHistory" element={<BetHistory />} />
        <Route path="generalReport" element={<GeneralReport />} />
        <Route path="gameReport" element={<GameReport />} />
        <Route path="profitLoss" element={<ProfitLoss />} />
        <Route path="cashinoResult" element={<CasinoResult />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
