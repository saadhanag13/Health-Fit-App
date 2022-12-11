import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './dashboard.css';

import { paymentPost } from "../../axios/user.axios";
import PaymentDialog  from "../../components/paymentDialog/PaymentDialog";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  const [batch_timings, setBatch_timings] = useState("");
  const [isPaymentDialogOpened, setIsPaymentDialogOpened] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const batch_timingsArr = [
    "6 Am - 7 Am",
    "7 Am - 8 Am",
    "8 Am - 9 Am",
    "5 Pm - 6 Pm",
  ];

  const CompletePayment = async () => {
    await paymentPost(batch_timings, user, 500)
      .then((res) => {
        if (res.data === "ok") {
          dispatch({
            type: "CREATE_USER",
            payload: {
              ...user,
              batch_timings,
              subscription: Date.now(),
            },
          });
          setIsPaymentDialogOpened(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {user && !user.subscription ? (
        <div>
          <h1>Subscribe to continue</h1>
          <h2>Select Batch</h2>
          <div>
            {batch_timingsArr.map((b, index) => {
              return (
                <div key={index} onClick={() => setBatch_timings(b)}>
                  {b}
                </div>
              );
            })}
          </div>
          <button
            onClick={() => {
              setIsPaymentDialogOpened(true);
            }}
            disabled={!batch_timings}
          >
            Proceed to payment
          </button>
        </div>
      ) : (
        <div>ccc</div>
      )}
      {isPaymentDialogOpened && (
        <PaymentDialog
          cvv={cvv}
          setCvv={setCvv}
          setCardNumber={setCardNumber}
          cardNumber={cardNumber}
          CompletePayment={CompletePayment}
          nameOnCard={nameOnCard}
          setNameOnCard={setNameOnCard}
          expDate={expDate}
          setExpDate={setExpDate}
        />
      )}
    </>
  );
};

export default Dashboard;
