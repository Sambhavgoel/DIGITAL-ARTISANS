function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const chatbox = document.getElementById("chatbox");
    const userMessage = `<p>User: ${userInput}</p>`;
    const botMessage = `<p>Bot: ${getBotResponse(userInput)}</p>`;
    
    chatbox.innerHTML += userMessage;
    chatbox.innerHTML += botMessage;
}

function getBotResponse(userInput) {
    // Simple bot responses based on user input
    if (userInput.includes("hello") || userInput.includes("hi")) {
        return "Hello! How can I assist you today?";
    } else if (userInput.includes("BMI")) {
        return "You can calculate your BMI using the BMI Calculator below.";
    } else if (userInput.includes("calorie")) {
        return "You can estimate your daily calorie needs using the Calorie Counter below.";
    } else {
        return "I'm sorry, I don't understand. Please ask something else.";
    }
}