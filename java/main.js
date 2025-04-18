// Select necessary DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('Tasks')) || [];
    tasks.forEach(taskText => {
        createTaskElement(taskText);
    });
}

// Function to create a task element
function createTaskElement(taskText) {
    const taskItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.className = 'task';

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Add event listener to remove button
    removeBtn.addEventListener('click', () => {
        taskItem.remove();
        updateLocalStorage();
    });

    // Append task text and button to the task item
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(removeBtn);

    // Append task item to the task list
    taskList.appendChild(taskItem);
}

// Function to update localStorage
function updateLocalStorage() {
    const tasks = Array.from(taskList.children).map(taskItem => 
        taskItem.querySelector('.task').textContent
    );
    localStorage.setItem('Tasks', JSON.stringify(tasks));
}


function addTask() {
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }


    createTaskElement(taskText);


    updateLocalStorage();


    taskInput.value = '';
}

// Add event listener to the add buttonaddTaskBtn.addEventListener('click', addTask);

// Add task on pressing Enter key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});


document.addEventListener('DOMContentLoaded', loadTasks);




