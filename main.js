//Client side
//create websocket connection

let connection = new WebSocket('ws://localhost:8080');

connection.onopen = () => {
  console.log('connected from the frontend');

  // connection.send('hello');
};

connection.onerror = () => {
  console.log('failed to connect from theh frontend');
};

connection.onmessage = (event) => {
  //when connection comes inspect
  console.log('recieve message', event.data);
  let li = document.createElement('li');
  li.innerText = event.data;
  document.querySelector('ul').append(li);
};


document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  let message = document.querySelector('textarea').value;
  connection.send(message);
  document.querySelector('textarea').value = '';
});
