// function getStatus() {
//     Get all 'Status' cells
//     const allCells = document.querySelectorAll('td');
//     const statusCells = [];

//     allCells.forEach(cell => {
//         if(cell.textContent.trim() === 'InProgress') {
//             statusCells.push(cell);
//         }
//     });

//     Loop through each cell and check for 'InProgress' status
//     statusCells.forEach(cell => {
//         if (cell.textContent === 'InProgress') {
//             const row = cell.parentElement; // Get the row
//             const rowData = Array.from(row.children).map(td => td.textContent); // Extract row data
//             console.log('Row data:', rowData.join(' | ')); // Print row data
//         }
//     });
// }

function getStatus() {
    const allCells = document.querySelectorAll('td');
    const inProgressTasksDiv = document.getElementById('inProgressTasks');
    inProgressTasksDiv.innerHTML = ''; // Clear previous content

    const inProgressTasks = [];
    allCells.forEach(cell => {
        if (cell.textContent.trim() === 'InProgress') {
            const row = cell.parentElement; // Get the row
            const rowData = Array.from(row.children).map(td => td.textContent); // Extract row data
            inProgressTasks.push(rowData); // Store row data
        }
    });
    // Display 'InProgress' tasks in the designated div
    if (inProgressTasks.length > 0) {
        const tableHTML = '<h3>In Progress Tasks:</h3>' +
            '<table border="1">' +
            '<thead>' +
            '<tr>' +
            '<th>Name</th>' +
            '<th>Email</th>' +
            '<th>Issue Type</th>' +
            '<th>Priority</th>' +
            '<th>Assigned To</th>' +
            '<th>Status</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            inProgressTasks.map(task => `<tr><td>${task.join('</td><td>')}</td></tr>`).join('') +
            '</tbody>' +
            '</table>';
        inProgressTasksDiv.innerHTML = tableHTML;
    }  else {
        inProgressTasksDiv.innerHTML = '<p>No tasks in progress.</p>';
    }
}