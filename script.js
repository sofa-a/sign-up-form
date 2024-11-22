const form = document.querySelector('form')

form.addEventListener("submit", function(event) {
    const password = form.password.value.trim();
    const confirmPassword = form["confirm-password"].value.trim();
    console.log("osdsf");
    if (password !== confirmPassword) {
        event.preventDefault();
        document.querySelector(".password-error").style.display = "inline";
    }
    else {
        document.querySelector(".password-error").style.display = "none";
    }
});