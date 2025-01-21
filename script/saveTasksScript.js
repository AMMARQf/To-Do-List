const taskInput = document.querySelector(".taskInput");
const taskInputButton = document.querySelector(".taskInputButton");
const myTasksList = document.querySelector(".myTasks");

function getTaskList() {
  const tasks = localStorage.getItem('tasks');
  try {
    return tasks ? JSON.parse(tasks) : [];
  } catch (err) {
    return [];
  }
}

function saveTasks (newTasks) {
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  displayTasks();
}

function deleteTask (index) {
  const tasks = getTaskList();
  tasks.splice(index, 1);

  saveTasks(tasks);

  displayTasks();
}

function addTask () {
  const theTask = taskInput.value.trim();

  if (theTask) {
    const tasks = getTaskList();
    tasks.unshift(theTask);
    saveTasks(tasks);
    displayTasks();
    taskInput.value = '';
  }
}

function displayTasks () {
  const tasks = getTaskList();

  myTasksList.innerHTML = '';

  if (tasks == '') {
    const temp = document.createElement('div');
    temp.innerHTML = 'Nothing yet';
    myTasksList.appendChild(temp);
    temp.classList.add('temp');
  }

  tasks.forEach((task, index) => {

    const taskBlock = document.createElement('div');
    const taskText = document.createElement('div');
    const taskBTN = document.createElement('button');

    taskText.textContent = task;


    taskBTN.onclick = () => deleteTask(index);

    myTasksList.appendChild(taskBlock);
    taskBlock.appendChild(taskText);
    taskBlock.appendChild(taskBTN);

    taskText.classList.add('taskText');
    taskBTN.classList.add('taskBTN');
    taskBlock.classList.add('taskBlock');

  });
}

document.addEventListener('DOMContentLoaded', displayTasks);
taskInputButton.addEventListener('click', addTask);
