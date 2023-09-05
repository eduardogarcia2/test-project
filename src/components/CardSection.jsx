import React from "react";
import { CardElement } from "@stripe/react-stripe-js";


const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "white",
            fontFamily: "Helvetica Neue, Helvetica, sans-serif",
            fontSmoothing: "antialiased",
            fontSize: "20px",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    },
};

function CardSection() {
    return (
        <label>
            Card details
            <CardElement options={CARD_ELEMENT_OPTIONS} />
        </label>
    );
};

export default CardSection;