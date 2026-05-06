document.getElementById("gameForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("playerName").value;

    document.getElementById("message").textContent =
        "Hello " + name + "! Thanks for visiting my video game page.";
});