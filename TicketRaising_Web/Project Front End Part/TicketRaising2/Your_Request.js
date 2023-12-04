document.addEventListener("DOMContentLoaded", function () {
    const commentsContainer = document.getElementById("comments-container");
    const manualCommentTextarea = document.getElementById("manualComment");
    const addCommentBtn = document.getElementById("addCommentBtn");

    addCommentBtn.addEventListener("click", function () {
        const commentText = manualCommentTextarea.value.trim();

        if (commentText !== "") {
            const timestamp = new Date().toLocaleString();
            const commentHtml = `
                <div class="comment">
                    <p><strong>User:</strong> ${commentText} &nbsp; <small>${timestamp}</small></p>
                    
                </div>
            `;

            commentsContainer.innerHTML += commentHtml;
            manualCommentTextarea.value = ""; // Clear the textarea after adding a comment
        }
    });
});

{/* <p><small>${timestamp}</small></p> */}

document.addEventListener("DOMContentLoaded", function () {
    const commentsContainer = document.getElementById("comments-container");
    const commentsSection = document.getElementById("commentsSection");
    const manualCommentTextarea = document.getElementById("manualComment");
    const addCommentBtn = document.getElementById("addCommentBtn");
    const commentCount = document.getElementById("commentCount");

    let comments = 0;

    addCommentBtn.addEventListener("click", function () {
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

    commentCount.addEventListener("click", function () {
        // Toggle the visibility of the comments section
        commentsSection.style.display = commentsSection.style.display === "none" ? "block" : "none";
    });

    function updateCommentCount() {
        commentCount.textContent = comments === 1 ? "1 comment" : `${comments} comments`;
        commentsSection.innerHTML = comments > 0 ? commentsSection.innerHTML : "0 comments";
    }
});
function redirectToHomePage() {
    window.location.href = 'index.html';
}
function redirectToSubmitTicketPage() {
    window.location.href = 'submit_a_ticket.html';
}