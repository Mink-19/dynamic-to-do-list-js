document.addEventListener('DOMContentLoaded', () =>  {

    const addButton = 
    document.getElementById('add-task-btn');
    const taskInput = 
    document.getElementById('task-input');
    const taskList =  
    document.getElementById('task-list');

    loadTasks();

    function loadTasks() 
{
 //load tasks from local storage on page load
    const storedTasks=
    JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); //pass false to not create a new task element
}

   


    function addTask( taskText, save = true) {

        const li=
        document.createElement('li');
        li.textContent = taskText;

        const removeBtn=
        document.createElement('button')
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = function() {
            taskList.removeChild(li);
            //update local storage
            const updatedTask =
            JSON.parse(localStorage.getItem('tasks') || '[]')
            .filter(task => task !== taskText);
            localStorage.setItem('tasks' , JSON.stringify(updatedTasks));

        };
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        if(save) {
            const storedTasks =
            JSON.parse(localStorage.getItem('tasks') || '[]');

            storedTasks.push(taskText);
            localStorage.setItem('tasks' , JSON.stringify(storedTasks));
        }
    }

    addButton.addEventListener('click' , () =>
    {
        const taskText =
        taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        addTask(taskText); // save = true
        taskInput.value = '';

    });

    taskInput.addEventListener('keypress' , function(event) {
        if (event.key === 'Enter'){
            addButton.click();
        }
    });
    
    });
        