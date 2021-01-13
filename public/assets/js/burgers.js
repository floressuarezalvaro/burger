document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.log("DOM loaded")
    }
    const dButton = document.querySelectorAll(".devourButton");
    if(dButton) {
        dButton.forEach((event) => {
            event.addEventListener('click', (e) => {
                e.preventDefault();
                console.log(`E.target is ${e.target}`)
                const id = e.target.getAttribute('data-id');
                const devoured = {
                    id: id,
                };
                fetch(`/api/burgers/${id}`, {
                    method: "PUT",
                    headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(devoured),
                }).then(() => {
                    location.reload("/");
                });
            })
        })
    }

    const sForm = document.getElementById("submitForm");

    if(sForm) {
        sForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("placeOrder").value.trim();
            const newBurgerName =  {
                name: name,
            };
            fetch("/api/newBurger", {
                method: "POST",
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                },
                body: JSON.stringify(newBurgerName),
            }).then(() => {
                location.reload();
            });
        })
    }
})