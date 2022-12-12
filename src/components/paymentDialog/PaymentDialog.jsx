import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { paymentPost } from "../../axios/user.axios";

const PaymentDialog = ({ user, setIsPaymentDialogOpened }) => {
  const [batch_timings, setBatch_timings] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [next, setNext] = useState(false);

  const dispatch = useDispatch();

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

  const batch_timingsArr = [
    "6 Am - 7 Am",
    "7 Am - 8 Am",
    "8 Am - 9 Am",
    "5 Pm - 6 Pm",
  ];
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,.5)]"
      onClick={(e) => {
        e.stopPropagation();
        setIsPaymentDialogOpened(false);
      }}
    >
      <Card
        className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={(e) => CompletePayment(e)}>
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Subscribe
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            {!next ? (
              <div>
                <h2>Select Batch</h2>
                <div>
                  {batch_timingsArr.map((b, index) => {
                    return (
                      <Button
                        variant={b == batch_timings ? "gradient" : "outlined"}
                        fullWidth
                        key={index}
                        onClick={() => setBatch_timings(b)}
                        className="my-2"
                      >
                        {b}
                      </Button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <>
                <Input
                  variant="standard"
                  type="text"
                  label="Card Number"
                  size="lg"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                <Input
                  variant="standard"
                  type="text"
                  label="Name on Card"
                  size="lg"
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                />
                <Input
                  variant="standard"
                  type="text"
                  label="Exp Date"
                  size="lg"
                  value={expDate}
                  onChange={(e) => setExpDate(e.target.value)}
                />
                <Input
                  variant="standard"
                  type="text"
                  label="CVV"
                  size="lg"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </>
            )}
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              onClick={() => {
                if (next) {
                  CompletePayment();
                } else {
                  setNext(true);
                }
              }}
              disabled={
                next
                  ? cvv && nameOnCard && expDate && cardNumber
                    ? false
                    : true
                  : batch_timings
                  ? false
                  : true
              }
            >
              {!next ? "Next" : "Click to Pay"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default PaymentDialog;
