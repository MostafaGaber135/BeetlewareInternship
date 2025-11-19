const apiBaseUrl = "https://jsonplaceholder.typicode.com";

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const tasksListElement = document.getElementById("tasks-list");
const emptyMessageElement = document.getElementById("empty-message");

const editModal = document.getElementById("edit-modal");
const editInput = document.getElementById("edit-input");
const editSaveButton = document.getElementById("edit-save");
const editCancelButton = document.getElementById("edit-cancel");

let tasks = [];
let editingTaskId = null;

function updateEmptyMessageVisibility() {
    if (tasks.length === 0) {
        emptyMessageElement.style.display = "block";
    } else {
        emptyMessageElement.style.display = "none";
    }
}

function openEditModal(taskId) {
    const task = tasks.find((item) => item.id === taskId);
    if (!task) return;
    editingTaskId = taskId;
    editInput.value = task.title;
    editModal.classList.add("is-open");
    editInput.focus();
}

function closeEditModal() {
    editingTaskId = null;
    editInput.value = "";
    editModal.classList.remove("is-open");
}

function createTaskElement(task) {
    const taskElement = document.createElement("div");
    taskElement.className = "task-item";
    taskElement.dataset.id = String(task.id);

    const checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.className = "task-checkbox";
    checkboxElement.checked = task.completed;

    const textElement = document.createElement("div");
    textElement.className = "task-text";
    textElement.textContent = task.title;
    if (task.completed) {
        textElement.classList.add("completed");
    }

    const actionsElement = document.createElement("div");
    actionsElement.className = "task-actions";

    const editButton = document.createElement("button");
    editButton.className = "action-btn edit";
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.className = "action-btn delete";
    deleteButton.textContent = "Delete";

    checkboxElement.addEventListener("change", () => {
        toggleTaskCompleted(task.id, checkboxElement.checked);
    });

    editButton.addEventListener("click", () => {
        openEditModal(task.id);
    });

    deleteButton.addEventListener("click", () => {
        deleteTask(task.id);
    });

    actionsElement.appendChild(editButton);
    actionsElement.appendChild(deleteButton);

    taskElement.appendChild(checkboxElement);
    taskElement.appendChild(textElement);
    taskElement.appendChild(actionsElement);

    return taskElement;
}

function renderTasks() {
    tasksListElement.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement = createTaskElement(task);
        tasksListElement.appendChild(taskElement);
    });
    updateEmptyMessageVisibility();
}

async function loadInitialTasks() {
    try {
        const data = await window.httpClient.getJson(apiBaseUrl + "/todos?_limit=10");
        tasks = data.map((item) => ({
            id: item.id,
            title: item.title,
            completed: item.completed,
        }));
        renderTasks();
    } catch (error) {
        console.error("loadInitialTasks error:", error);
    }
}

async function addNewTask(title) {
    try {
        const newTask = await window.httpClient.postJson(apiBaseUrl + "/todos", {
            title,
            completed: false,
        });
        const task = {
            id: newTask.id || Date.now(),
            title: newTask.title,
            completed: false,
        };
        tasks.push(task);
        renderTasks();
    } catch (error) {
        console.error("addNewTask error:", error);
    }
}

async function toggleTaskCompleted(taskId, isCompleted) {
    const taskIndex = tasks.findIndex((item) => item.id === taskId);
    if (taskIndex === -1) return;

    tasks[taskIndex].completed = isCompleted;
    renderTasks();

    try {
        await window.httpClient.putJson(apiBaseUrl + "/todos/" + taskId, {
            title: tasks[taskIndex].title,
            completed: isCompleted,
        });
    } catch (error) {
        console.error("toggleTaskCompleted error:", error);
    }
}

async function saveEditedTask() {
    if (editingTaskId === null) return;
    const newTitle = editInput.value.trim();
    if (!newTitle) return;

    const taskIndex = tasks.findIndex((item) => item.id === editingTaskId);
    if (taskIndex === -1) return;

    tasks[taskIndex].title = newTitle;
    renderTasks();

    try {
        await window.httpClient.putJson(
            apiBaseUrl + "/todos/" + editingTaskId,
            {
                title: newTitle,
                completed: tasks[taskIndex].completed,
            }
        );
    } catch (error) {
        console.error("saveEditedTask error:", error);
    } finally {
        closeEditModal();
    }
}

async function deleteTask(taskId) {
    tasks = tasks.filter((item) => item.id !== taskId);
    renderTasks();

    try {
        await window.httpClient.deleteJson(apiBaseUrl + "/todos/" + taskId);
    } catch (error) {
        console.error("deleteTask error:", error);
    }
}

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = taskInput.value.trim();
    if (!title) return;
    addNewTask(title);
    taskInput.value = "";
});

editSaveButton.addEventListener("click", () => {
    saveEditedTask();
});

editCancelButton.addEventListener("click", () => {
    closeEditModal();
});

editModal.addEventListener("click", (event) => {
    if (event.target === editModal) {
        closeEditModal();
    }
});

loadInitialTasks();
