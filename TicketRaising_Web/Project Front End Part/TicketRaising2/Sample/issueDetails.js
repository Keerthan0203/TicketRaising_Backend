function updateIssue() {
    // Get the value of the comments
    const comments = document.getElementById('comments').value;

    // Create a new element to display the comments
    const commentDisplay = document.createElement('div');
    commentDisplay.textContent = comments;

    // Append the comments between the "Comments" section and the "Update" button
    const issueForm = document.getElementById('issueForm');
    const updateButton = issueForm.querySelector('button');

    issueForm.insertBefore(commentDisplay, updateButton);
}
