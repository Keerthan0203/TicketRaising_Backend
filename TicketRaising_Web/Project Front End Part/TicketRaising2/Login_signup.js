// Login signup

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

    if (!email || !password) {
        console.log("Please enter both email and password");
        alert('Please enter both credentials');
        return;
    }

    const payload = {
        "email": email,
        "password": password
    };

    try {
        debugger
        
        const response = await axios.post(url, payload);
console.log(response);

if (response.data) {
    localStorage.setItem('userDetails', JSON.stringify(response.data));

            // Update the displayed username
            updateUsername(response.data.username);
    window.location.href = "index.html";
} else {
    console.log("Authentication failed");
     //showing an error message
     alert('Username or password is incorrect. Please check the credentials and re-try. ');

}
    } catch (err) {
        console.error(err);
        // Handle errors here
    }
};


const SignUp = async () => {
    event.preventDefault();
    debugger
    const name = document.getElementById('login_Name')?.value;
    const email = document.getElementById('login_Email')?.value;
    const password = document.getElementById('login_Password')?.value;
    const confirmPassword = document.getElementById('confirm_Password')?.value;

    if(password !== confirmPassword)
    {
        alert('Password does not match. Please enter matching passwords');
        return;
    }
    const url = `${baseUrl}/User/UserRegister`;
    const payload = {
        "name": name,
        "email": email,
        "password": password
    };

    try {
        debugger
        const response = await axios.post(url, payload); 

        
        console.log(response.data);  // Access the response data
        // Handle the response data or update UI here
        alert('User registered successfully');
    } catch (err) {
        console.error(err);
        // Handle errors here
        alert('Registration failed. Please try again.');
    }
    
};