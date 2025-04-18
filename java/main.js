// Select necessary DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create new task element
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
    });

    // Append task text and button to the task item
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(removeBtn);

    // Append task item to the task list
    taskList.appendChild(taskItem);
    localStorage.setItem('Tasks',taskItem)

    // Clear input field
    taskInput.value = '';
}

// Add event listener to the add button
addTaskBtn.addEventListener('click', addTask);

// Add task on pressing Enter key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
window.addEventListener('load', () => {
    const tasks = localStorage.getItem('Tasks');
    if (tasks) {
        taskList.innerHTML = tasks;
    }
})



