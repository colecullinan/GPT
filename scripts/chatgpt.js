function chatGptCompletion(userInput) {
    // Define your API key
    const apiKey = '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';

    // Define the payload for the API request
    var payload;

    payload = {
        model: "gpt-4.1-mini",
        max_tokens: 500,
        store: true,
        messages: [
        {
            role: "system",
            content: "you are a amateur comedian who is a really smart 15 year old boy"
        },
        {
            role: "user",
            content: userInput
        },
        ]
    }
    var jsonPayload = JSON.stringify(payload);
    console.log("Sending the following payload to the AI engine: ");
    console.log(jsonPayload);
    // Make the API request
    return fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        },
        body: jsonPayload,
    })
        .then(response => response.json())
        .catch(error => {
        // Handle any errors
        console.error(error);
    });
}