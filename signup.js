document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup");
    const nameInput = document.getElementById("FullName");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const cpasswordInput = document.getElementById("cpassword");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passError = document.getElementById("passError");
    const cpassError = document.getElementById("cpassError");
    const formMessage = document.getElementById("formMessage");

    const clearErrors = () => {
        nameError.textContent = "";
        emailError.textContent = "";
        passError.textContent = "";
        cpassError.textContent = "";
        formMessage.textContent = "";
        formMessage.classList.remove("success");
    };

    [nameInput, emailInput, passwordInput, cpasswordInput].forEach(input => {
        input.addEventListener("input", clearErrors);
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearErrors();

        const name = nameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const cpassword = cpasswordInput.value;

        let isValid = true;

        if (name === "") {
            nameError.textContent = "Enter your full name";
            isValid = false;
        }

        if (email === "") {
            emailError.textContent = "Enter your email";
            isValid = false;
        }

        if (password === "") {
            passError.textContent = "Enter a password";
            isValid = false;
        }

        if (cpassword === "") {
            cpassError.textContent = "Confirm your password";
            isValid = false;
        }

        if (password && cpassword && password !== cpassword) {
            cpassError.textContent = "Passwords do not match";
            isValid = false;
        }

        if (!isValid) return;

        //localStorage saving
        localStorage.setItem("signupName", name);
        localStorage.setItem("signupPass", password);

        formMessage.textContent = "Signup successful! Login again";
        formMessage.classList.add("success");

        setTimeout(() => {
            window.location.href = "login.html";
        }, 2500);
    });
});