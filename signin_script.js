let loginForm = document.getElementById('loginForm')
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        let enteredUsername = document.getElementById('username').value;
        let enteredPassword = document.getElementById('password').value;


        let storedUsername = localStorage.getItem('username')
        let storedPassword = localStorage.getItem('password')

if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
    window.location.href = "./index.html";
}else{
    alert('Invalid username or password. Please try again.')
}

    })




