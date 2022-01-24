import React from "react";
import StripeCheckout from "@stripe/react-stripe-js";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KKSURG1UsWcmbVpNmllMlbysaIF04bx38rCbLEpCkyXYx1yFaEE7BXyMg1CvxpCk1EP7iNH42pnuCBVb2YlptKM00vZNmUF2x";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Star Silk Roads"
      billingAddress
      shippingAddress
      image="https://www.freakyjolly.com/wp-content/uploads/2020/04/fj-logo.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
