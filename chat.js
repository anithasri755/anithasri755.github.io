document.getElementById('send-button').addEventListener('click', function() {
  var messageInput = document.getElementById('message-input');
  var message = messageInput.value.trim();

  if (message !== '') {
      var chatMessages = document.getElementById('chat-messages');
      var messageElement = document.createElement('div');
      messageElement.classList.add('message', 'rectangle-box2'); // Add the 'rectangle-box2' class
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);

      messageInput.value = '';
  }
});

