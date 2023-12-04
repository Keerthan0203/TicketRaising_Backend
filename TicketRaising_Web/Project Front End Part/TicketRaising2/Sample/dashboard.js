async function redirectiontoassigned() {

    window.location.href = "assignedTasks.html";
}
async function redirectiontounassinged() {
    window.location.href = "unassignedTasks.html";
}

async function getUnassignedIssue() {
    try {
        const url = `https://localhost:7249/Ticket/getunassignedIssues`;
        const response = await axios.get(url);
        console.log("response.data", response.data);
        const responseData = response.data;

        const tableBody = document.querySelector("#Unassigned table tbody");

        for (let i = 0; i < responseData.length; i++) {
            const ticket = responseData[i];
            console.log("CheckingIssues ", ticket);

            const row = document.createElement('tr');
            row.addEventListener("click", () => handleClickforunassigned(ticket.id));

            row.innerHTML = `
            <tr onclick="handleClickforunassigned(${responseData[i].id})">
                <td class="login-anchor">${ticket.id}</td>
                <td>${ticket.createdBy}</td>
                <td>${ticket.description}</td>
                <td>${ticket.ticketTypeId}</td>
                <td>Low</td>
                <td>${ticket.assignedTo}</td>
                <td>${ticket.statusId}</td>
                </tr>
            `;

            tableBody.appendChild(row);
        }
    } catch (error) {
        console.error("Error", error);
    }
}
async function handleClickforunassigned(element) {
    console.log("chekcing value", element);
    sessionStorage.setItem('Ticket_id', element);
    window.location.href = "InsideunassignedTask.html";
}

async function loadingDataofuser() {
    var ticketId = sessionStorage.getItem('Ticket_id');
    console.log("Tickets", ticketId);
    const url = `https://localhost:7249/Ticket/getTicketById/${ticketId}`;
    const response = await axios.get(url);
    console.log(response.data);
    const responseData = response.data;
    // const timestampString = responseData.;  
    // Convert the timestamp string to a Date object
    //  const dateObject = new Date(timestampString);
    document.getElementById('ticketID').placeholder = responseData.id;
    document.getElementById('name').placeholder = responseData.createdBy;
    //document.getElementById('priority').placeholder = responseData.priority;
    document.getElementById('issue-type').placeholder = responseData.ticketTypeId;
    document.getElementById('description').placeholder = responseData.description;
    document.getElementById('employeeComments').placeholder = responseData.employeeComments;
}

async function postdata() {
    const assignedTo = parseInt(document.getElementById("assigned").value);
    const Ticket_id = parseInt(sessionStorage.getItem('Ticket_id'));
    const status = parseInt(document.getElementById("status").value);
    const comment = document.getElementById("comment").value;

    try {
        const postdata1 = {
            "ticketId": Ticket_id,
            "newEmployeeId": assignedTo,
            "newStatus": status,
            "employeeComment": comment
        };

        console.log("post", postdata1);

        const url = `https://localhost:7249/Ticket/Assign_the_Issue_and_Change_status?ticketId=${Ticket_id}&newEmployeeId=${assignedTo}&newStatus=${status}&employeeComment=${comment}`;
        const Updateresponce = await axios.post(url, postdata1);

        console.log("to see response", Updateresponce);

        alert(Updateresponce.data);
        window.location.href = "dashboard.html";
    } catch (error) {
        console.log("Error:", error);
    }
}


async function getTotalIssue() {
    try {
        const url = `https://localhost:7249/Ticket/getAllTickets`;
        const response = await axios.get(url);
        console.log("response.data", response.data);
        const responseData = response.data;

        const tableBody = document.querySelector("#TotalTask table tbody");

        for (let i = 0; i < responseData.length; i++) {
            const ticket = responseData[i];
            console.log("CheckingIssues ", ticket);

            const row = document.createElement('tr');
            row.addEventListener("click", () => handleClickfortotaltask(ticket.id));

            row.innerHTML = `
            <tr onclick="handleClickfortotaltask(${responseData[i].id})">
                <td class="login-anchor">${ticket.id}</td>
                <td>${ticket.createdBy}</td>
                <td>${ticket.description}</td>
                <td>${ticket.ticketTypeId}</td>
                <td>Low</td>
                <td>${ticket.assignedTo}</td>
                <td>${ticket.statusId}</td>
                </tr>
            `;

            tableBody.appendChild(row);
        }
    } catch (error) {
        console.error("Error", error);
    }
}
async function handleClickfortotaltask(element) {
    console.log("chekcing value", element);
    sessionStorage.setItem('Ticket_id', element);
    window.location.href = "InsideunassignedTask.html";
}



async function getAssignedIssue() {
    try {
        employeeId = parseInt(sessionStorage.getItem('employeeId'));
        const url = `https://localhost:7249/Ticket/getAssignedIssues?employeeId=${employeeId}`;
        const response = await axios.get(url);
        console.log("response.data", response.data);
        const responseData = response.data;

        const tableBody = document.querySelector("#Assigned table tbody");

        for (let i = 0; i < responseData.length; i++) {
            const ticket = responseData[i];
            console.log("CheckingIssues ", ticket);

            const row = document.createElement('tr');
            row.addEventListener("click", () => handleClickforassigned(ticket.id));

            row.innerHTML = `
            <tr onclick="handleClickforassigned(${responseData[i].id})">
                <td class="login-anchor">${ticket.id}</td>
                <td>${ticket.createdBy}</td>
                <td>${ticket.description}</td>
                <td>${ticket.ticketTypeId}</td>
                <td>Low</td>
                <td>${ticket.assignedTo}</td>
                <td>${ticket.statusId}</td>
                </tr>
            `;

            tableBody.appendChild(row);
        }
    } catch (error) {
        console.error("Error", error);
    }
}

async function handleClickforassigned(element) {
    console.log("chekcing value", element);
    sessionStorage.setItem('Ticket_id', element);
    window.location.href = "InsideunassignedTask.html";
}

async function AdminLogout() {
    sessionStorage.clear();
    window.location.href = "../Admin_login.html"
}

function redirectToAdminHomePage() {
    window.location.href = 'dashboard.html';
}

document.addEventListener("DOMContentLoaded", function () {

    // Update the profile information with the stored name
    const storedName = sessionStorage.getItem('employeeName');
    if (storedName) {
        document.getElementById('adminName').textContent = storedName;
    }
});

