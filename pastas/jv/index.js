    function validateFields() {
        toggleButtonsDisable();
        toggleEmailErros();
    }

    function isEmailValid(){
        const email = document.getElementById("email").value;
        if (!email) {
            return false;
        }
        return validateEmail(email);
    }

    function toggleEmailErros(){
        const email = document.getElementById('email').value;
        if(!email) {
            document.getElementById('email-required-error').style.display = "block";
        } else {
            document.getElementById('email-required-error').style.display = "none";
        }

        if (validateEmail(email)) {
            document.getElementById('email-invalid-error').style.display = "none";
        } else {
            document.getElementById('email-invalid-error').style.display = "block";
        }
    }

    function toggleButtonsDisable(){
        const emailValid = isEmailValid();
        document.getElementById('recover-password-button').disabled = !emailValid;

        const password = isPasswordValid();
        document.getElementById('login-button').disabled = !emailValid || !passwordValid;

    }

    function isPasswordValid() {
        const password = document.getElementById('password').value;
        if (!password) {
            return false;
        }
        return true;
    }

    function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
    }
