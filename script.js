const input = document.querySelector('input');
const button = document.querySelector('button');
const messages = document.querySelector('.messages');

function sendMessage() {
  const newMessage = document.createElement('li');
  newMessage.textContent = input.value;
  messages.appendChild(newMessage);
  input.value = '';
}

button.addEventListener('click', sendMessage);
input.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    sendMessage();
  }
});
