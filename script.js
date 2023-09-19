document.addEventListener("DOMContentLoaded", function()
{
    const loginButton = document.querySelector(".login-button");
    const userInput = document.getElementById("user");
    const passwordInput = document.getElementById("password");
    const userError = document.getElementById("user-error");
    const passwordError = document.getElementById("password-error");

    loginButton.addEventListener("click", function()
    {
        if (!userInput.value)
        {
            userError.textContent = "¡No tan rápido!, te has olvidado de escribir tu email";
        }
        else
        {
            userError.textContent = "";
        }

        if(!passwordInput.value)
        {
            passwordError.textContent = "¡No tan rápido!, te has olvidado de escribir tu contraseña";
        }
        else
        {
            passwordError.textContent = "";
        }
    });
});