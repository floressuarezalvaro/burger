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

})