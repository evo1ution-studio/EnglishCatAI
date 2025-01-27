export function getAIRequest(systemPrompt, userInput){
  const obj = {
    model: "deepseek-chat",
    messages: [
      {
        role: "system",
        content: systemPrompt
      },
      {
        role: "user",
        content: userInput
      }
    ],
    stream: false
  };
  const request = new Request("https://api.deepseek.com", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Authorization":
        "Bearer <DeepSeek API Key>",
    },
  });  
  return request;
}