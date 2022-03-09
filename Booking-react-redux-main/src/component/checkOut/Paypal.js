import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { propTypes } from "react-bootstrap/esm/Image";
import { axiosInstance } from "../../Redux/network";
import { useNavigate } from "react-router-dom";

export default function App(props) {
  return (
    <div style={{ maxWidth: "750px", minHeight: "200px" }}>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AeNpjyX90THpGtncSaEYbZlxRrcXkM5o0MLbD8-1WPpVIgNL88yeVRhMqIJ6lPN5u7V1QFGHv6ol0J1X",
          components: "buttons",
          currency: "USD",
        }}
      >
        <ButtonWrapper
          currency={currency}
          showSpinner={false}
          reservation={props.reservation}
          room={props.room}
          prop={props.property}
          info={props.info}
          type={props.type}
          setIsReserved={props.setIsReserved}
        />
      </PayPalScriptProvider>
    </div>
  );
}

// This values are the props in the UI
let amount;
const currency = "USD";
const style = { layout: "vertical" };
// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({
  currency,
  showSpinner,
  reservation,
  room,
  prop,
  info,
  type,
  setIsReserved,
}) => {
  console.log(reservation);
  amount = info.totalPrice;
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={async (data, actions) => {
          console.log(reservation);
          await actions.order.capture();
          if (type != "apartment") {
            axiosInstance
              .post(type + "/booking/" + prop._id + "/" + room._id, reservation)
              .then((result_1) => {
                console.log(result_1);
                setIsReserved(true);
                setTimeout(() => {
                  navigate("/" + type + "s/" + prop._id);
                }, 4000);
              });
          } else {
            axiosInstance
              .post(type + "/booking/" + prop._id, reservation)
              .then((result_1) => {
                console.log(result_1);
                setIsReserved(true);
                setTimeout(() => {
                  navigate("/" + type + "s/" + prop._id);
                }, 4000);
              });
          }
        }}
      />
    </>
  );
};
