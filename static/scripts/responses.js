function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello" || "hi") {
        return "Hello there!";
    } else if (input == "goodbye" || "bye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}