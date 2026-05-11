document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let interest = document.getElementById("interest").value;
    let message = document.getElementById("message");

    if (name === "" || email === "" || interest === "") {
        message.textContent = "Please fill out all fields before submitting.";
    } else {
        message.textContent = "Thank you, " + name + "! GreenTech Solutions will contact you about " + interest + ".";
    }
});

document.getElementById("themeButton").addEventListener("click", function() {
    document.body.classList.toggle("high-contrast");
});