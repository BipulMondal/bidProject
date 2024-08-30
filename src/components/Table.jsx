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
      <div className="main_table mb-3 card table-hover ">
        <MDBDataTable striped data={data} searching={false} paging={paging} />
      </div>
    </>
  );
}
