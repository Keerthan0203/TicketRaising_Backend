async function loadingData123(){
    var ticketId=sessionStorage.getItem('Ticket_id');
    console.log("Tickets",ticketId);
    const url=`https://localhost:7249/Ticket/getTicketById/${ticketId}`;
    const response=await axios.get(url);
    console.log(response.data);
    const responseData=response.data;
    document.getElementById('ticketID').placeholder = responseData.id;
    document.getElementById('name').placeholder = responseData.createdBy;
    document.getElementById('issueType').placeholder = responseData.ticketTypeId;
    document.getElementById('description').placeholder = responseData.description;
    document.getElementById('commentsHistory').placeholder = responseData.employeeComments;
}