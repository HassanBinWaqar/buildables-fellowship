const fs = require("fs");

const file = "tasks.json";

if (!fs.existsSync(file)) {
  fs.writeFileSync(file, "[]");
}

function addTask(task) {
  const tasks = JSON.parse(fs.readFileSync(file));
  tasks.push({ id: tasks.length + 1, task });
  fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
}

function listTasks() {
  const tasks = JSON.parse(fs.readFileSync(file));
  console.log("Tasks:", tasks);
}

function removeTask(id) {
  let tasks = JSON.parse(fs.readFileSync(file));
  tasks = tasks.filter(t => t.id !== id);
  fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
}

// Demo
addTask("Learn Node.js deeply");
addTask("Build a REST API");
listTasks();
removeTask(1);
listTasks();
