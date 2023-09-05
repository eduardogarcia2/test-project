import getStripe from "../components/getStripe";

export default function Home() {
    async function handleCheckout() {
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                {
                    price: "price_1Nmh4kIYrzVCZgN4SlfNb0ut",
                    quantity: 1
                },
            ],
            mode: 'subscription',
            successUrl: `http://localhost:5173/success`,
            cancelUrl: `http://localhost:5173/cancel`,
            customerEmail: 'customer@email.com',
        });
        console.warn(error.message);
    }

    return (<button onClick={handleCheckout}>Checkout</button>)
}