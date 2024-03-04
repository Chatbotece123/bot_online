class Chatbot {
    constructor() {
        this.responses = {
            "hi": "Hello! How can I assist you?",
            "admission": "For admission inquiries, please visit our website or contact our admission office.",
            "courses": "Our college offers a variety of courses including Engineering, Arts, Science, and Management.",
            "contact": "You can contact us at contact@example.com or call us at +123456789."
        };
    }

    getBotResponse(userMessage) {
        const lowerCaseUserMessage = userMessage.toLowerCase();
        return this.responses[lowerCaseUserMessage] || "I'm sorry, I didn't understand that. Please try again.";
    }
}

class ChatInterface {
    constructor() {
        this.chatbot = new Chatbot();
        this.chatBox = document.getElementById("chat-box");
        this.userInput = document.getElementById("user-input");

        this.userInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                this.sendMessage();
            }
        });
    }

    sendMessage() {
        const message = this.userInput.value.trim();
        if (message === "") return;

        this.appendMessage("user", message);
        this.userInput.value = "";

        // Simulate bot response
        setTimeout(() => {
            const botMessage = this.chatbot.getBotResponse(message);
            this.appendMessage("bot", botMessage);
        }, 500);
    }

    appendMessage(sender, message) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", `${sender}-message`);
        messageDiv.textContent = message;
        this.chatBox.appendChild(messageDiv);
        this.chatBox.scrollTop = this.chatBox.scrollHeight; // Scroll to bottom
    }
}

const chatInterface = new ChatInterface();
