import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
// import "./modal/Modal.css"
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <BrowserRouter>
          <AppRoutes />
          <ToastContainer />
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
