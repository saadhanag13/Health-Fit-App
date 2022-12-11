import React from "react";

const PaymentDialog = ({
  cvv,
  setCvv,
  setCardNumber,
  cardNumber,
  CompletePayment,
  nameOnCard,
  setNameOnCard,
  expDate,
  setExpDate,
}) => {
  return (
    <div>
      <div>
        <form onSubmit={(e) => CompletePayment(e)}></form>
        <div>
          <p>Card number</p>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Card Number"
          />
        </div>
        <div>
          <p>Name on card</p>
          <input
            type="text"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            placeholder="Name on Card"
          />
        </div>
        <div>
          <div>
            <p>Exp Date</p>
            <input
              type="text"
              value={expDate}
              onChange={(e) => setExpDate(e.target.value)}
              placeholder="expDate"
            />
          </div>
          <div>
            <p>CVV</p>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="CVV"
            />
          </div>
        </div>
        <button onClick={() => CompletePayment()}>Complete Payment</button>
      </div>
    </div>
  );
};

export default PaymentDialog;
