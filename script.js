const passwordInput = document.getElementById("password");
const strengthText = document.querySelector(".strength");
const toggle = document.getElementById("togglePassword");

passwordInput.addEventListener("input", () => {

    const passwordValue = passwordInput.value;
    strengthText.classList.remove("weak", "medium", "strong");

    if (passwordValue.length === 0) {
        strengthText.textContent = "";
        return;
    } 
    else if (passwordValue.length >= 8 && /\d/.test(passwordValue) && /[!@#$%^&*]/.test(passwordValue)) {
        strengthText.textContent = "Strong";
        strengthText.classList.add("strong");
    }
    else if (passwordValue.length >= 6 && /\d/.test(passwordValue)) {
        strengthText.textContent = "Medium";
        strengthText.classList.add("medium");
    }
    else {
        strengthText.textContent = "Weak";
        strengthText.classList.add("weak");
    }
});


toggle.addEventListener("click", function () {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.classList.remove("ri-eye-line");
        this.classList.add("ri-eye-off-line");
    } else {
        passwordInput.type = "password";
        this.classList.remove("ri-eye-off-line");
        this.classList.add("ri-eye-line");
    }

});
