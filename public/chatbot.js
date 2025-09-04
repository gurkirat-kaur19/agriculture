async function sendMessage() {
  const message = document.getElementById('chatInput').value;
  const response = await fetch('/chatbot', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  });

  const data = await response.json();
  document.getElementById('chatResponse').innerText = `🧠 ${data.reply}`;
}
