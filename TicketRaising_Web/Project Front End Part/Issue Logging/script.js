// Import Axios (if not included in HTML)
//import axios from 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

const baseUrl = 'https://localhost:7249';

// Handler for logging inside the application
const Authenticate = async () => {
    event.preventDefault();
    debugger
    const email = document.getElementById('loginEmail')?.value;
    const password = document.getElementById('loginPassword')?.value;
    const url = `${baseUrl}/User/UserLogin`;
    const payload = {
        "email": email,
        "password": password
    };

    try {
        debugger
        const response = await axios.post(url, payload, { timeout: 10000 }); // Set timeout to 5 seconds
        console.log(response.data);  // Access the response data
        // Handle the response data or update UI here
    } catch (err) {
        console.error(err);
        // Handle errors here
    }
};
