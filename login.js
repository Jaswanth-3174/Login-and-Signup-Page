document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login");
    const unameInput = document.getElementById("uname");
    const passInput = document.getElementById("pass");

    const unameError = document.getElementById("unameError");
    const passError = document.getElementById("passError");
    const formMessage = document.getElementById("formMessage");

    function clearMessages() {
        unameError.textContent = "";
        passError.textContent = "";
        formMessage.textContent = "";
        formMessage.classList.remove("success");
    }

    [unameInput, passInput].forEach(input => {
        input.addEventListener("input", clearMessages);
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearMessages();

        const enteredNameOrEmail = unameInput.value.trim();
        const enteredPass = passInput.value;

        const storedName = localStorage.getItem("signupName");
        const storedEmail = localStorage.getItem("signupEmail");
        const storedPass = localStorage.getItem("signupPass");

        let isValid = true;

        if (!enteredNameOrEmail) {
            unameError.textContent = "Please enter your name or email";
            isValid = false;
        }

        if (!enteredPass) {
            passError.textContent = "Please enter your password";
            isValid = false;
        }

        if (!isValid) return;

        const userMatch = enteredNameOrEmail === storedName || enteredNameOrEmail === storedEmail;

        if (!userMatch) {
            unameError.textContent = "User not found";
            return;
        }

        if (enteredPass !== storedPass) {
            passError.textContent = "Incorrect password";
            return;
        }

        formMessage.textContent = "✅ Login Successful! Redirecting...";
        formMessage.classList.add("success");

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1500);
    });
});