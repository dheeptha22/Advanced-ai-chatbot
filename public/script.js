
async function sendMessage() {
  const inputField = document.getElementById("userInput");
  const message = inputField.value;

  if (!message) return;

  const chatBox = document.getElementById("chatBox");

  chatBox.innerHTML += `<div class='message user'>${message}</div>`;

  const response = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await response.json();

  chatBox.innerHTML += `<div class='message bot'>${data.reply}</div>`;

  inputField.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
