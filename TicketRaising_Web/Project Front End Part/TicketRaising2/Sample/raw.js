function updateIssue() {
    // Get the comments value from the textarea
    var comments = document.getElementById('comments').value;

    // Display the comments in a specific area or element on the page
    var commentsDisplay = document.createElement('div');
    commentsDisplay.textContent = comments;

    // Assuming there's a specific element with ID 'commentsDisplayArea'
    var commentsDisplayArea = document.getElementById('Comments Update');
    commentsDisplayArea.innerHTML = ''; // Clear previous content
    commentsDisplayArea.appendChild(commentsDisplay);

    // Close the modal (if necessary)
    var modal = document.querySelector('.modal');
    var modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();
}