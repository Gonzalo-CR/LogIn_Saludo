document.getElementById("loginButton").addEventListener("click", function() {
    if (isLoggedIn()) {
        logout();
    } else {
        login();
    }
});

document.getElementById("usernameInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        if (isLoggedIn()) {
            logout();
        } else {
            login();
        }
    }
});

function isLoggedIn() {
    return !document.getElementById("userInfo").classList.contains("hidden");
}

function login() {
    var username = document.getElementById("usernameInput").value.trim();
    if (username === "") {
        alert("Por favor, ingrese un nombre de usuario.");
        return;
    }

    var usernameInput = document.getElementById("usernameInput");
    usernameInput.classList.add("hidden");

    var userInfo = document.getElementById("userInfo");
    userInfo.textContent = `¡Hola, ${username}!`;
    userInfo.classList.remove("hidden");

    var loginButton = document.getElementById("loginButton");
    loginButton.textContent = "Cerrar Sesión";
    loginButton.style.backgroundColor = "#8a2be2";
    loginButton.style.color = "white";
}

function logout() {
    var usernameInput = document.getElementById("usernameInput");
    usernameInput.classList.remove("hidden");

    var userInfo = document.getElementById("userInfo");
    userInfo.classList.add("hidden");

    var loginButton = document.getElementById("loginButton");
    loginButton.textContent = "Iniciar Sesión";
    loginButton.style.backgroundColor = "#4CAF50";
    loginButton.style.color = "white";
}




/*document.getElementById("loginButton").addEventListener("click", function() {
    if (isLoggedIn()) {
        logout();
    } else {
        login();
    }
});

document.getElementById("usernameInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        if (isLoggedIn()) {
            logout();
        } else {
            login();
        }
    }
});

function isLoggedIn() {
    return !document.getElementById("userInfo").classList.contains("hidden");
}

function login() {
    var username = document.getElementById("usernameInput").value.trim();
    if (username === "") {
        alert("Por favor, ingrese un nombre de usuario.");
        return;
    }

    var loginContainer = document.getElementById("loginContainer");
    loginContainer.classList.add("hidden");

    var userInfo = document.getElementById("userInfo");
    userInfo.textContent = `¡Hola, ${username}!`;
    userInfo.classList.remove("hidden");

    var loginButton = document.getElementById("loginButton");
    loginButton.textContent = "Cerrar Sesión";
    loginButton.style.backgroundColor = "#8a2be2";
    loginButton.style.color = "white";
}

function logout() {
    var loginContainer = document.getElementById("loginContainer");
    loginContainer.classList.remove("hidden");

    var userInfo = document.getElementById("userInfo");
    userInfo.classList.add("hidden");

    var loginButton = document.getElementById("loginButton");
    loginButton.textContent = "Iniciar Sesión";
    loginButton.style.backgroundColor = "#4CAF50";
    loginButton.style.color = "white";
} */
