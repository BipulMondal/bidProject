import React, { useState, useEffect } from "react";

// Components
import Header from "./../Header";
import { Outlet } from "react-router-dom";

export default function Main() {
  // const [loggedIn, setloggedIn] = useState(false);
  const [loggedIn, setloggedIn] = useState(true);
  // useEffect(() => {
  //   if (
  //     localStorage.getItem("Authorization") &&
  //     localStorage.getItem("userType")
  //   ) {
  //     setloggedIn(true);
  //   } else {
  //     setloggedIn(false);
  //   }
  // }, []);

  return (
    <>
      {loggedIn === true ? (
        <div className="">
          <Header />
          <div className="">
            {/* <Sidebar /> */}
            <div className="">
              <div className="">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}
