import React, { useEffect, useState } from "react";

// Components
import { MDBDataTable } from "mdbreact";

export default function Table(props) {
  const {
    striped,
    tableTitle,
    data,
    modal,
    setModal,
    modalToggleView,
    renderModalView,
    paging = true,
    onSearch,

    tabflag,
    offerTab,
    adminTotalGetPrice,
    marchentTotalGetPrice,
    invoice,
  } = props;

  return (
    <>
      <div className="main-card mb-3 card table-hover">
        <h4 className="text-primary pb-4 m-4" style={{ fontWeight: 500 }}>
          {tableTitle}
        </h4>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "0px 10px",
          }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={onSearch}
            style={{ width: "40%" }}
          />
        </div>
        {striped ? (
          <MDBDataTable striped data={data} searching={false} paging={paging} />
        ) : (
          <MDBDataTable data={data} />
        )}
      </div>
    </>
  );
}
