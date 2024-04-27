
let div = document.getElementById('hero')

async function getData() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        console.log(response)
        const data = await response.json();

        console.log(data)
        data.forEach(element => {
            div.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 g-4 mb-4">
        <div class="card">
        <img src=${element.image}>
         <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <h5 class="card-price">$${element.price}</h5>
          <p class="card-text"><b>${element.category}</b></p>
          <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
      </div>`
        });


    } catch (error) {
        console.log(error)
    }
}

getData()

let userName = document.getElementById('username')

const fisrtName = localStorage.getItem('fisrtName');
const lastName = localStorage.getItem('lastName');


    userName.innerText = `${fisrtName} ${lastName}`



function redirect() {
    let storedUsername = localStorage.getItem('username')
    let storedPassword = localStorage.getItem('password')

if (storedUsername === null && storedPassword === null) {
        window.location.href = "./signin.html";
}

}

redirect()