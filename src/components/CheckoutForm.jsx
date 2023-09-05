import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

function CheckoutForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const stripe = useStripe();
    const elements = useElements();

    const createSubscription = async () => {
        try {
            const paymentMethod = await stripe?.createPaymentMethod({
                type: "card",
                card: elements?.getElement(CardElement),
                billing_details: {
                    name,
                    email
                }
            });

            const priceId = document.getElementsByName('priceId')[0].value;

            const response = await fetch("http://localhost:3000/stripe/create-subscription", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    paymentMethod: paymentMethod?.paymentMethod?.id,
                    name,
                    email,
                    priceId
                }),
            }).then((res) => res.json());

            const confirmPayment = await stripe?.confirmCardPayment(
                response.clientSecret
            );

            if (confirmPayment?.error) {
                alert(confirmPayment.error.message);
            } else {
                alert("Success! Check your email for the invoice.");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <input type="hidden" name="priceId" value="price_1Nmh4kIYrzVCZgN4SlfNb0ut" />

            <input
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <CardElement />
            <button onClick={createSubscription} disabled={!stripe}>
                Subscribe
            </button>
        </div>
    )
}

export default CheckoutForm;