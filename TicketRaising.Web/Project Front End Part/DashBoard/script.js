document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let ticket = { title, description };
    // You can replace the console.log with an API call to submit the ticket.
    console.log(ticket);
});