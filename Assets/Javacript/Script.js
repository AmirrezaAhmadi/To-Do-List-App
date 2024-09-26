const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✓";
    completeBtn.classList.add("complete-btn"); 
    completeBtn.addEventListener("click", function() {
        taskSpan.classList.toggle("completed");
        li.classList.toggle("completed");

        if (li.classList.contains("completed")) {
            completeBtn.style.backgroundColor = "#a5d6a7";
        } else {
            completeBtn.style.backgroundColor = "#4caf50";
        }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(deleteBtn);

    li.appendChild(buttonContainer);
    taskList.appendChild(li);

    taskInput.value = "";
});
