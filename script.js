document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Task creation logic will go here
    
     // Create list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        removeButton.onclick = function (event) {
            event.stopPropagation(); //prevent toggling completion when removing
           
 taskList.removeChild(li);
        };

        // Append elements
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';
    }
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optional: Automatically add a task on load (as instructed)
    addTask();  // This runs once when the page loads
});

