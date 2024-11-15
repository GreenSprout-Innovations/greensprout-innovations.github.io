var chat = document.getElementById('chat');

// Function to scroll to the bottom of the chat
function scrollToBottom() {
    chat.scrollTop = chat.scrollHeight - chat.clientHeight;
}

// Call the scrollToBottom function when the page loads to make sure the chat is scrolled to the bottom
window.onload = function() {
    scrollToBottom();
};

// If new messages are added dynamically, call the function again to keep the scroll at the bottom
document.querySelector('.input input').addEventListener('input', function() {
    scrollToBottom();
});
