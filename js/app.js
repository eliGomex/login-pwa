document.addEventListener("DOMContentLoaded", function() {
    var btnSignin = document.querySelector("#signin");
    var btnSignup = document.querySelector("#signup");
    var body = document.querySelector("body");

    btnSignin.addEventListener("click", function () {
        body.className = "sign-in-js";   
    });

    btnSignup.addEventListener("click", function () {
        body.className = "sign-up-js";
    });

    // Funcionalidade de Cadastro
    var signupBtn = document.querySelector("#signup-btn");
    signupBtn.addEventListener("click", function () {
        var name = document.querySelector("#signup-name").value;
        var email = document.querySelector("#signup-email").value;
        var password = document.querySelector("#signup-password").value;

        if (name && email && password) {
            var users = JSON.parse(localStorage.getItem("users")) || [];
            var userExists = users.some(user => user.email === email);

            if (userExists) {
                alert("E-mail já cadastrado. Por favor, use um e-mail diferente.");
            } else {
                users.push({ name: name, email: email, password: password });
                localStorage.setItem("users", JSON.stringify(users));
                alert("Usuário cadastrado com sucesso!");
            }
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });

    // Funcionalidade de Login
    var signinBtn = document.querySelector("#signin-btn");
    signinBtn.addEventListener("click", function () {
        var email = document.querySelector("#signin-email").value;
        var password = document.querySelector("#signin-password").value;

        if (email && password) {
            var users = JSON.parse(localStorage.getItem("users")) || [];
            var user = users.find(user => user.email === email && user.password === password);
            if (user) {
                localStorage.setItem("currentUser", JSON.stringify(user));
                window.location.href = "welcome.html";
            } else {
                alert("E-mail ou senha inválidos.");
            }
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});
