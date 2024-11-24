document.getElementById("send-btn").addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        // إضافة رسالة المستخدم إلى المحادثة
        appendMessage(userInput, "user");

        // معالجة الجواب من الذكاء الاصطناعي
        setTimeout(function() {
            let aiResponse = "أنا هنا للمساعدة! يمكنك طرح أي سؤال.";
            appendMessage(aiResponse, "ai");
        }, 1000);

        // مسح حقل الإدخال بعد إرسال الرسالة
        document.getElementById("user-input").value = "";
    }
});

function appendMessage(message, sender) {
    let messageElement = document.createElement("div");
    messageElement.classList.add("message");
    if (sender === "user") {
        messageElement.classList.add("user-message");
    } else {
        messageElement.classList.add("ai-message");
    }
    messageElement.textContent = message;

    document.getElementById("chat-box").appendChild(messageElement);
    document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
}
