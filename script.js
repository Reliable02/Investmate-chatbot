const chatBox = document.getElementById('chat-box');

function addMessage(message, sender = 'bot') {
  const msgDiv = document.createElement('div');
  msgDiv.className = sender === 'bot' ? 'bot-message' : 'user-message';
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function handleOption(option) {
  addMessage(option, 'user');

  if (option === 'Learn about investing') {
    addMessage("Are you a 🟢 Beginner, 🟡 Intermediate, or 🔴 Advanced investor?");
  } else if (option === 'Explore investment options') {
    addMessage("What's your goal? 🏠 Buy a house, 👵 Retire, or 📉 Short-term profit?");
  } else if (option === 'Check market trends') {
    addMessage("Here are some trends: S&P 500: +0.5%, Bitcoin: -1.2%, Gold: +0.3%");
  } else if (option === 'Ask a question') {
    addMessage("Sure! Type your question in the box below. (Note: This demo version doesn't support input yet.)");
  }
}
