// document.getElementById('submitIssueBtn').addEventListener('click', function() {
//     window.location.href = 'submit_a_ticket.html'; // Replace with the actual target page URL
// });

// const { default: axios } = require("axios");

//const { default: axios } = require("axios");

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

// axios

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

        if (response.data && response.data.name) {
            // Storing name in sessionStorage
            sessionStorage.setItem('userId', response.data.id);
            sessionStorage.setItem('userName', response.data.name);

            window.location.href = "HomePage.html";
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

    if (password !== confirmPassword) {
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

const AdminLogin = async () => {
    event.preventDefault();
    debugger
    const email = document.getElementById('adminEmail')?.value;
    const password = document.getElementById('adminPassword')?.value;
    const url = `${baseUrl}/User/EmployeeLogin`;

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

        if (response.data && response.data.name) {
            // Storing name in sessionStorage
            sessionStorage.setItem('employeeId', response.data.id);
            sessionStorage.setItem('employeeName', response.data.name);

            window.location.href = "./Sample/dashboard.html";
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


// Script 
function redirectToSubmitTicketPage() {
    window.location.href = 'submit_a_ticket.html';
}

function redirectToYourRequestPage() {
    window.location.href = 'UserRequest.html';
}

function redirectToHomePage() {
    window.location.href = 'index.html';
}
function getvalue() {
    const name = sessionStorage.getItem('userName');
    document.getElementById('subject').placeholder = name;
}


async function submission() {
    const issue = document.getElementById('issue-type').value;
    const description = document.getElementById('floatingTextarea').value;
    debugger;
    const userid = parseInt(sessionStorage.getItem('userId'));
    const url = `${baseUrl}/Ticket/ChooseTicketType?Types_Name=${issue}&userId=${userid}&description=${description}`;
    try {
        const response = await axios.post(url);
        console.log("Checking response ", response);
        alert('your ticket has been submitted');
    } catch(err){
        console.log(err)
    }
}


async function getmyIssue(){
    try{
        const userId = parseInt(sessionStorage.getItem('userId'));
        const url = `${baseUrl}/Ticket/getTicketsByUserId/${userId}`;
        const response = await axios.get(url);
        console.log("response.data", response.data);
        const responseData=response.data;
        const tableBody = document.querySelector("#TicketHistory table tbody");
        
        for(let i=0;i<responseData.length;i++){
            const ticket=responseData[i];
            console.log("CheckingIssues ", ticket);
            console.log("CheckingIssues",responseData);
            // var div = document.createElement('div');
            // var targetElement=document.getElementById('TicketHistory');
           
           // row.addEventListener("click", () => handleClickfortotaltask(ticket.id));

            // div.className = 'card card-custom';
            // var targetElement=document.getElementById("TicketHistory");
            const row = document.createElement('tr');
           
            row.innerHTML=`
            
                    <tr onclick="handleClick(${responseData[i].id})">
                        <td class="login-anchor">${responseData[i].id}</td>
                        <td>${responseData[i].createdBy}</td>
                        <td>${responseData[i].description}</td>
                        <td>${responseData[i].ticketTypeId}</td>
                        <td>Low</td>
                        <td>${responseData[i].assignedTo}</td>
                        <td>${responseData[i].statusId}</td>
                    </tr>
                `;
                row.addEventListener("click", () => handleClick(ticket.id));
                tableBody.appendChild(row);
    }
}
catch(error){

    console.error("Error",error);
}
}
async function handleClick(element){
    console.log("chekcing value",element);
    sessionStorage.setItem('Ticket_id',element);
    window.location.href="InsideIssueRequest.html";

}




// Function to fetch user-specific tickets
// async function fetchUserTickets(userId) {
//     const url = `${baseUrl}/Ticket/getAllTickets`;

//     try {
//         const response = await axios.get(url);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//         return [];
//     }
// }






document.addEventListener("DOMContentLoaded", function () {
   
    // Update the profile information with the stored name
    const storedName = sessionStorage.getItem('userName');
    if (storedName) {
        document.getElementById('username').textContent = storedName;
    }
    });
  

    // Yourrrrrrrr Requestssssssssssss
    // document.addEventListener("DOMContentLoaded", async function () {
    //     const issueRaisedElement = document.querySelector(".card-title.card-title-underline + p.card-text");
        
    //     // Add this block to fetch and display user-specific tickets
    //     const userId = sessionStorage.getItem('userId');
    //     const userTickets = await fetchUserTickets(userId);
    
    //     if (userTickets.length > 0) {
    //         let userIssuesHtml = "";
    
    //         for (ticket of userTickets) {
    //             userIssuesHtml += `
    //                 <div class="user-issue">
    //                     <h6>Ticket ID: ${ticket.Id}</h6>
    //                     <p>${ticket.Description}</p>
    //                 </div>
    //             `;
    //         }
    
    //         issueRaisedElement.innerHTML = userIssuesHtml;
    //     } else {
    //         issueRaisedElement.textContent = "No issues found for the user.";
    //     }
    // });




    // commentCount && commentCount.addEventListener("click", function () {
    //     // Toggle the visibility of the comments section
    //     commentsSection.style.display = commentsSection.style.display === "none" ? "block" : "none";
    // });

    // function updateCommentCount() {
    //     commentCount.textContent = comments === 1 ? "1 comment" : `${comments} comments`;
    //     commentsSection.innerHTML = comments > 0 ? commentsSection.innerHTML : "0 comments";
    // }
// });


function redirectToHomePage() {
    window.location.href = 'HomePage.html';
}
function redirectToSubmitTicketPage() {
    window.location.href = 'submit_a_ticket.html';
}
async function Logout() {
    sessionStorage.clear();
    window.location.href = "Login_signup.html"
}


// Inside Issue Request

        // document.addEventListener("DOMContentLoaded", function () {
        //     // Get the ticket ID from the URL parameters
        //     const urlParams = new URLSearchParams(window.location.search);
        //     const ticketId = urlParams.get('id');

        //     // Fetch ticket details using the ticket ID
        //     // Replace this with your actual API endpoint for fetching ticket details
        //     fetchTicketDetails(ticketId);
        // });

        // // Function to fetch ticket details and fill the form
        // function fetchTicketDetails(ticketId) {
        //     // Replace this URL with your actual API endpoint for fetching ticket details
        //     const apiUrl = `${baseUrl}/Ticket/getTicketById/{ticketId}`;

        //     fetch(apiUrl)
        //         .then(response => response.json())
        //         .then(data => {
        //             // Fill the form with the retrieved ticket details using innerHTML
        //             document.getElementById('ticketID').value = data.id;
        //             document.getElementById('name').value = data.createdBy;
        //             document.getElementById('issueType').value = data.ticketTypeId;
        //             document.getElementById('priority').value = 'Low'; // You can set priority based on your logic
        //             document.getElementById('description').innerHTML = data.description;
        //         })
        //         .catch(error => {
        //             console.error("Error fetching ticket details", error);
        //         });
        // }

     
    
        // document.getElementById('assignedTasksButton').addEventListener('click', function() {
        //     window.alocation.href = 'assignedTasks.html';
        // });

