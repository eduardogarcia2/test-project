const emialInput = document.querySelector("#email");

fetch('/create-customer', {
    method: "post",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        email: emialInput.value,
    }),
}).then(r => r.json());