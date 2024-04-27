let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')

let username = document.getElementById('username')
let password = document.getElementById('password')


function submitData() {
    localStorage.setItem('fisrtName', firstName.value);
    localStorage.setItem('lastName', lastName.value);
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);

    window.location.href = "./signin.html";
}

