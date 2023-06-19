document.getElementById('send-button').addEventListener('click', function() {
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value.trim();
  
    if (message !== '') {
        var chatMessages = document.getElementById('chat-messages');
        var messageElement = document.createElement('div');
        messageElement.classList.add('message')
        messageElement.innerHTML = '<div class="message-box">' + message + '</div>'; // Wrap the message in a div with class 'message-box'
        chatMessages.appendChild(messageElement);
  
        messageInput.value = '';
    }
  });
  















