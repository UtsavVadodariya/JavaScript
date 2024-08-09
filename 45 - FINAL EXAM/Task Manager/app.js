let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    const priorityInput = document.getElementById('priorityInput').value;

    if (taskInput === '') {
        alert('Task cannot be empty');
        return;
    }

    const task = {
        id: Date.now(),
        name: taskInput,
        priority: priorityInput
    };

    tasks.push(task);
    document.getElementById('taskInput').value = '';
    saveTasks();
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

function updateTask(id) {
    const newTaskName = prompt('Enter new task name:');
    if (newTaskName !== null && newTaskName.trim() !== '') {
        tasks = tasks.map(task => 
            task.id === id ? { ...task, name: newTaskName } : task
        );
        saveTasks();
        renderTasks();
    }
}

function renderTasks(filter = 'All') {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    const filteredTasks = tasks.filter(task => 
        filter === 'All' || task.priority === filter
    );

    filteredTasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span class="task-name">${task.name}</span> 
            <span class="priority">[${task.priority}]</span>
            <div class="task-actions">
                <button class="edit-btn" onclick="updateTask(${task.id})">Edit</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

function filterTasks() {
    const filter = document.getElementById('filter').value;
    renderTasks(filter);
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

document.addEventListener('DOMContentLoaded', () => renderTasks());
