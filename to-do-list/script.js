const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addBtn = document.getElementById('addBtn');


let tasks = [];
let editIndex = null;


addBtn.addEventListener('click', addTask);


function addTask() {
const text = taskInput.value.trim();


if (text === '') {
alert('Please enter a task');
return;
}


if (editIndex === null) {
tasks.push(text);
} else {
tasks[editIndex] = text;
editIndex = null;
}


taskInput.value = '';
renderTasks();
}


function renderTasks() {
taskList.innerHTML = '';


tasks.forEach((task, index) => {
const li = document.createElement('li');
li.textContent = task;


const actions = document.createElement('div');
actions.className = 'actions';


const editBtn = document.createElement('button');
editBtn.textContent = 'Edit';
editBtn.onclick = () => editTask(index);


const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.onclick = () => deleteTask(index);


actions.appendChild(editBtn);
actions.appendChild(deleteBtn);
li.appendChild(actions);
taskList.appendChild(li);
});
}


function editTask(index) {
taskInput.value = tasks[index];
editIndex = index;
}


function deleteTask(index) {
tasks.splice(index, 1);
renderTasks();
}