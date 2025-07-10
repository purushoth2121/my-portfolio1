const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Load tasks from localStorage
window.onload = () => {
  const saved = JSON.parse(localStorage.getItem("todos")) || [];
  saved.forEach(todo => addTodo(todo.text, todo.completed));
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const task = input.value.trim();
  if (task) {
    addTodo(task);
    saveTodo(task, false);
    input.value = '';
  }
});

function addTodo(task, completed = false) {
  const li = document.createElement('li');
  li.textContent = task;
  if (completed) li.classList.add("completed");

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
    updateStorage();
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.onclick = function () {
    li.remove();
    updateStorage();
  };

  li.appendChild(delBtn);
  list.appendChild(li);
}

function saveTodo(text, completed) {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push({ text, completed });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function updateStorage() {
  const todos = [];
  document.querySelectorAll("#todo-list li").forEach(li => {
    todos.push({ text: li.firstChild.textContent, completed: li.classList.contains("completed") });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}