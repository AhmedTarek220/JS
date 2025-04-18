// Select necessary DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage
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
        removeTaskFromStorage(taskText);
    });

    // Append task text and button to the task item
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(removeBtn);

    // Append task item to the task list
    taskList.appendChild(taskItem);
}

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create and append the task element
    createTaskElement(taskText);

    // Save task to localStorage
    saveTaskToStorage(taskText);

    // Clear input field
    taskInput.value = '';
}

// Save task to localStorage
function saveTaskToStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('Tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('Tasks', JSON.stringify(tasks));
}

// Remove task from localStorage
function removeTaskFromStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('Tasks')) || [];
    const updatedTasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('Tasks', JSON.stringify(updatedTasks));
}

// Add event listener to the add button
addTaskBtn.addEventListener('click', addTask);

// Add task on pressing Enter key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Load tasks on page load
loadTasks();


