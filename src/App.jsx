import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/CheckoutForm";

const stripePromise = loadStripe("pk_test_51NmgZhIYrzVCZgN4oQ1HwWOY6Ooe6k2Ov7ewrLX9duBcycPK5MWDjqBVoW8AqFjsPIoh3SvYCyJxuOJXQMyEVzmj00KUsMb0EH");

function App() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm/>
      </Elements>
    </div>
  )
}

export default App;