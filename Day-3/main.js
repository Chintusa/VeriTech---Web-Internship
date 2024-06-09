const input = document.querySelector(".input-item");
const addButton = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");
let todoJson = JSON.parse(localStorage.getItem("todo")) || [];
const deleteAllButton = document.querySelector(".delete-all");
const filters = document.querySelectorAll(".filter");
let filter = 'all';

function formatDateTime(dateTime) {
    const date = new Date(dateTime);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

function getTodoHtml(todo, index) {
    if (filter !== 'all' && filter !== todo.status) {
        return '';
    }
    let checked = todo.status === "completed" ? "checked" : "";
    return `
    <li class="todo-item">
        <button class="delete-btn" data-index="${index}" onclick="remove(this)"><i class="fa fa-times"></i></button>
            <label for="${index}">
                <input id="${index}" type="checkbox" ${checked} onclick="updateStatus(this)">
                <span class="${checked}">${todo.name}</span>
                <div class="date-time">${formatDateTime(todo.dateTime)}</div>
            </label>
        </li>
    `;
}

function showTodo() {
    todoList.innerHTML = todoJson.length ? todoJson.map(getTodoHtml).join('') : '';
}

function addTodo() {
    const todo = input.value.trim();
    if (!todo) return;
    input.value = "";
    todoJson.unshift({ name: todo, status: "pending", dateTime: new Date().toISOString() });
    localStorage.setItem("todo", JSON.stringify(todoJson));
    showTodo();
}

input.addEventListener("keyup", e => {
    if (e.key === "Enter") {
        addTodo();
    }
});

addButton.addEventListener("click", addTodo);

function updateStatus(todo) {
    const todoItem = todo.nextElementSibling;
    const todoIndex = todo.id;
    if (todo.checked) {
        todoItem.classList.add("checked");
        todoJson[todoIndex].status = "completed";
    } else {
        todoItem.classList.remove("checked");
        todoJson[todoIndex].status = "pending";
    }
    localStorage.setItem("todo", JSON.stringify(todoJson));
    showTodo();
}

function remove(todo) {
    const index = todo.dataset.index;
    todoJson.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(todoJson));
    showTodo();
}

filters.forEach(filterBtn => {
    filterBtn.addEventListener("click", () => {
        filters.forEach(btn => btn.classList.remove('active'));
        filterBtn.classList.add('active');
        filter = filterBtn.dataset.filter;
        showTodo();
    });
});

deleteAllButton.addEventListener("click", () => {
    todoJson = [];
    localStorage.setItem("todo", JSON.stringify(todoJson));
    showTodo();
});

showTodo();