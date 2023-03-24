document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
const form = document.querySelector('#create-task-form');
const input = document.querySelector('#new-task-description');
const list = document.querySelector('#tasks');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const task = input.value;

  const li = document.createElement('li');
  li.textContent = task;

  list.appendChild(li);

  let button = document.createElement("button")
  button.textContent = "x"
  button.removeEventListener()
});
