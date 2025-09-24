// Select elements
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task when button clicked
addBtn.addEventListener("click", addTask);

// Add task when Enter key pressed
taskInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create task element
  let li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">X</button>
  `;

  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}

// Mark Complete
function toggleComplete(task) {
  task.parentElement.classList.toggle("completed");
}

// Delete Task
function deleteTask(button) {
  button.parentElement.remove();
}
