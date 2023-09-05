import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe("pk_test_51NmgZhIYrzVCZgN4oQ1HwWOY6Ooe6k2Ov7ewrLX9duBcycPK5MWDjqBVoW8AqFjsPIoh3SvYCyJxuOJXQMyEVzmj00KUsMb0EH")
    }
    return stripePromise
};

export default getStripe;