const form = document.querySelector('form')

form.addEventListener("submit", function(event) {
    console.log(form.password.value.trim())
    console.log(form.confirm-password.value.trim())
    if (form.password.value.trim() !== form.confirm-password.value.trim()) {
        event.preventDefault();
        document.querySelector(".password-error").style.display = "inline";
    }
    else {
        document.querySelector(".password-error").style.display = "none";
    }
});