import React, { useState, useEffect } from "react";
import { requestHandler } from "../utils/requestHandler";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const TransactionModal = ({ showModal, setShowModal, usersId }) => {
  const initial = {
    toUser: "",
    amount: null,
    transactionType: "",
  };

  const [transactionData, setTransactionData] = useState(initial);

  console.log("transactionData", transactionData);
  const navigate = useNavigate();

  useEffect(() => {
    // Reset form when modal is closed
    if (!showModal) {
      setTransactionData(initial);
    }
  }, [showModal]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setTransactionData((prev) => ({
      ...prev,
      [name]: type === "radio" ? value : value,
    }));
  };

  useEffect(() => {
    if (usersId) {
      setTransactionData((prev) => ({
        ...prev,
        toUser: usersId,
      }));
    }
  }, [usersId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let token = localStorage.getItem("token");
      let data = transactionData;
      let res = await requestHandler({
        endpoint: "/transaction",
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res && res?.success) {
        toast.success(res?.message);
        navigate("/accountStatement");
        setShowModal(false); // Close modal after successful submission
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      {showModal && (
        <div
          className="modal fade show"
          id="exampleModalCenter"
          tabindex="-1"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Add Transaction
                </h5>
                <i
                  class="fa-solid fa-xmark"
                  onClick={() => setShowModal(false)}
                  style={{ cursor: "pointer", color: "red" }}
                ></i>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="container-fluid">
                    <div className="row gx-2">
                      <div className="mb-3 col-md-6 mt-2">
                        <label htmlFor="transactionType" className="form-label">
                          Transaction Type
                        </label>
                        <div className="d-flex">
                          <div className="form-check d-flex align-items-center">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="transactionType"
                              id="transaction_type_1"
                              value="SEND"
                              checked={
                                transactionData.transactionType === "SEND"
                              }
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="transaction_type_1"
                            >
                              CREDIT
                            </label>
                          </div>
                          <div className="form-check d-flex align-items-center ml-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="transactionType"
                              id="transaction_type_2"
                              value="WITHDRAW"
                              checked={
                                transactionData.transactionType === "WITHDRAW"
                              }
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="transaction_type_2"
                            >
                              WITHDRAW
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3 col-md-6">
                        <label htmlFor="amount" className="col-form-label">
                          Transaction Amount
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          name="amount"
                          id="amount"
                          value={transactionData.amount}
                          onChange={handleChange}
                          min={0}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="float-right">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
                <button
                  type="button"
                  className="btn btn-secondary float-left"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionModal;
