// // function getStatus() {
// //     Get all 'Status' cells
// //     const allCells = document.querySelectorAll('td');
// //     const statusCells = [];

// //     allCells.forEach(cell => {
// //         if(cell.textContent.trim() === 'InProgress') {
// //             statusCells.push(cell);
// //         }
// //     });

// //     Loop through each cell and check for 'InProgress' status
// //     statusCells.forEach(cell => {
// //         if (cell.textContent === 'InProgress') {
// //             const row = cell.parentElement; // Get the row
// //             const rowData = Array.from(row.children).map(td => td.textContent); // Extract row data
// //             console.log('Row data:', rowData.join(' | ')); // Print row data
// //         }
// //     });
// // }

// function getStatus() {
//     const allCells = document.querySelectorAll('td');
//     const inProgressTasksDiv = document.getElementById('inProgressTasks');
//     inProgressTasksDiv.innerHTML = ''; // Clear previous content

//     const inProgressTasks = [];
//     allCells.forEach(cell => {
//         if (cell.textContent.trim() === 'InProgress') {
//             const row = cell.parentElement; // Get the row
//             const rowData = Array.from(row.children).map(td => td.textContent); // Extract row data
//             inProgressTasks.push(rowData); // Store row data
//         }
//     });
//     // Display 'InProgress' tasks in the designated div
//     if (inProgressTasks.length > 0) {
//         const tableHTML = '<h3>In Progress Tasks:</h3>' +
//             '<table border="1">' +
//             '<thead>' +
//             '<tr>' +
//             '<th>Name</th>' +
//             '<th>Email</th>' +
//             '<th>Issue Type</th>' +
//             '<th>Priority</th>' +
//             '<th>Assigned To</th>' +
//             '<th>Status</th>' +
//             '</tr>' +
//             '</thead>' +
//             '<tbody>' +
//             inProgressTasks.map(task => `<tr><td>${task.join('</td><td>')}</td></tr>`).join('') +
//             '</tbody>' +
//             '</table>';
//         inProgressTasksDiv.innerHTML = tableHTML;
//     }  else {
//         inProgressTasksDiv.innerHTML = '<p>No tasks in progress.</p>';
//     }
// }

async function redirectiontoassigned() {

    window.location.href = "assignedTasks.html";
}
async function redirectiontounassinged() {
    window.location.href = "unassignedTasks.html";
}

// async function getUnassignedIssue(){
//     try{
//         const url = `https://localhost:7249/Ticket/getunassignedIssues`;
//         const response = await axios.get(url);
//         console.log("response.data", response.data);
//         const responseData=response.data;

//         for(let i=0;i<responseData.length;i++){
//             const ticket=responseData[i];
//             console.log("CheckingIssues ", ticket);
//             // console.log("CheckingIssues",responseData);
//             var div = document.createElement('div');
//             var targetElement=document.getElementById('Unassigned');

//             // div.className = 'card card-custom';
//             // var targetElement=document.getElementById("TicketHistory");
//             div.innerHTML=`
//             <div>
//             <table>
//                 <thead>
//                 <tbody>
//                     <tr onclick="handleClick(${responseData[i].id})">
//                         <td class="login-anchor">${responseData[i].id}</a></td>
//                         <td>${responseData[i].createdBy}</td>
//                         <td>${responseData[i].description}</td>
//                         <td>${responseData[i].ticketTypeId}</td>
//                          <td>Low</td>
//                         <td>${responseData[i].assignedTo}</td>
//                         <td>${responseData[i].statusId}</td>
//                     </tr>


//                 </tbody>
//                 </thead>
//             </table>
//         </div>
// `;
// targetElement.appendChild(div);
//     }
// }
// catch(error){

//     console.error("Error",error);
// }
// }
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
    // var ticketId=sessionStorage.getItem('Ticket_id');
    // console.log("Tickets",ticketId);
    // const url=`https://localhost:7249/Ticket/getTicketById/${ticketId}`;
    // const response=await axios.get(url);
    // console.log(response.data);
    // const responseData=response.data;
    // document.getElementById('ticketID').placeholder = responseData.id;
    // document.getElementById('name').placeholder = responseData.createdBy;
    // //document.getElementById('priority').placeholder = responseData.priority;
    // document.getElementById('issue-type').placeholder = responseData.ticketTypeId;
    // document.getElementById('description').placeholder = responseData.description;

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

// async function postdata(){
//   const assignedTo =parseInt( document.getElementById("assigned").value);
//   const Ticket_id = parseInt(sessionStorage.getItem('Ticket_id'));
//   try{

//     const postdata1=
//     {

//            "ticketId" : Ticket_id,
//            "newEmployeeId": assignedTo,
//     }
//     console.log("post",postdata1);
//    // const url = 'https://localhost:7249/Ticket/Assign_the_Issue?ticketId=${ticketId}&newEmployeeId=${newEmployeeId}';
//     const url = 'https://localhost:7249/Ticket/Assign_the_Issue';
//     const Updateresponce = await axios.post(url,postdata1);
//     console.log("to see response",responseData);
//     alert(responseData);
//     window.location.href="unassignedTasks.html"

//     }
//     catch(error){
//         console.log("Error:");

//     }
//   }
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

