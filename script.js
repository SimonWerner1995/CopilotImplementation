document.addEventListener("DOMContentLoaded", function () {
    const chatToggle = document.getElementById("chat-toggle");
    const chatWindow = document.getElementById("chat-window");

    chatToggle.addEventListener("click", function () {
        if (chatWindow.style.display === "none" || chatWindow.style.display === "") {
            chatWindow.style.display = "block";
        } else {
            chatWindow.style.display = "none";
        }
    });
});
