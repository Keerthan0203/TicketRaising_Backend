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
//axios end ...
// login end



// Script 
function redirectToSubmitTicketPage() {
    window.location.href = 'submit_a_ticket.html';
}

function redirectToYourRequestPage() {
    window.location.href = 'Your_Request.html';
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
        // console.log("responseData", responseData);
        console.log("responsedata1",responseData[1]);
        for(let i=0;i<responseData.length;i++){
            const ticket=responseData[i];
            console.log("CheckingIssues ", ticket);
            // console.log("CheckingIssues",responseData);
            var div = document.createElement('div');
            var targetElement=document.getElementById('TicketHistory');

            // div.className = 'card card-custom';
            // var targetElement=document.getElementById("TicketHistory");
            div.innerHTML=`
            <div id="RequestFeedback">
            <div class="card-body">
                <div class="allign" >
                    <h5 class="card-title card-title-underline ">Issue Raised :</h5>
                    <p class="card-text">${responseData[i].ticketTypeId}</p>
                </div>
                <div class="allign">
                    <h5 class="card-title-underline">Status :</h5>
                    <p class="card-text">${responseData[i].statusId}</p>
                </div>
                <h5 class="allign">Comments :</h5>

            <div id="comments-container">
                <p id="commentCount" style="cursor: pointer; text-decoration: underline;">0 comments</p>
                <div id="commentsSection" style="display: none;">
                    <!-- Comments will be dynamically added here -->
                </div>
            </div>
            <div class="manual-comment">
                <label for="manualComment">Add Comment:</label>
                <textarea id="manualComment" class="form-control" rows="3"></textarea>
                <button id="addCommentBtn" class="btn btn-primary mt-2">Add Comment</button>
            </div>
            <hr>
        </div>
`;
targetElement.appendChild(div);
    }
}
catch(error){

    console.error("Error",error);
}
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
    const commentsContainer = document.getElementById("comments-container");
    const commentsSection = document.getElementById("commentsSection");
    const manualCommentTextarea = document.getElementById("manualComment");
    const addCommentBtn = document.getElementById("addCommentBtn");
    const commentCount = document.getElementById("commentCount");

    let comments = 0;
    // Update the profile information with the stored name
    const storedName = sessionStorage.getItem('userName');
    if (storedName) {
        document.getElementById('username').textContent = storedName;
    }

    addCommentBtn && addCommentBtn.addEventListener("click", function () {
        const commentText = manualCommentTextarea.value.trim();

        if (commentText !== "") {
            const timestamp = new Date().toLocaleString();
            const commentHtml = `
                <div class="comment">
                    <p><strong>User:</strong> ${commentText}</p>
                    <p><small>${timestamp}</small></p>
                </div>
            `;

            commentsSection.innerHTML += commentHtml;
            manualCommentTextarea.value = ""; // Clear the textarea after adding a comment
            comments += 1;
            updateCommentCount();
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




    commentCount && commentCount.addEventListener("click", function () {
        // Toggle the visibility of the comments section
        commentsSection.style.display = commentsSection.style.display === "none" ? "block" : "none";
    });

    function updateCommentCount() {
        commentCount.textContent = comments === 1 ? "1 comment" : `${comments} comments`;
        commentsSection.innerHTML = comments > 0 ? commentsSection.innerHTML : "0 comments";
    }
});
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


