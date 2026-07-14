// [
//     {
//         id: 1,
//         title: "Công việc 1",
//         status: "Todo",
//     },
// ];

let todos = [];
let tmpId = null;
const valTitle = document.getElementById("valTitle");
const listStatus = document.querySelectorAll("[type = 'radio'][name = 'st']");
const displayTodo = document.getElementById("display");
const btnSubmit = document.getElementById("btnSubmit");
const filterTodo = document.getElementById("filterTodo");

const noti = (title, message) => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: title,
        text: message,
        showConfirmButton: false,
        timer: 1500,
    });
};

const handleSubmit = (e) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
            });
        }
    });
    return;

    let status = "";
    const title = valTitle.value;
    listStatus.forEach((item) => {
        if (item.checked) {
            status = item.value;
        }
    });

    const formData = {
        id: Date.now(),
        title,
        status,
    };

    if (tmpId) {
        const updateTodos = todos.map((item) => {
            if (item.id === tmpId) {
                return {
                    ...formData,
                    id: tmpId,
                };
            }
            return todo;
        });
        todos = [...updateTodos];
        btnSubmit.innerText = "Thêm";
        noti("Cập nhật thành công", "Bạn đã cập nhật công việc thành công");
    } else {
        todos = [...todos, formData];
        noti("Thêm thành công", "Bạn đã thêm công việc thành công");
    }

    renderTodo(todos);
    reset();
};

const renderTodo = (data = []) => {
    displayTodo.innerHTML = data
        .map((item) => {
            const { title, status } = item;
            return `
            <div class = "task">
                <div class = "task-name">${title}</div>
                <div class="task-right">
                    <span class="task-status">${status}</span>

                </div>
            </div>
        `;
        })
        .join("");
};

const reset = () => {
    tmpId = null;
    valTitle.value = "";
    listStatus.forEach((item) => {
        item.checked = false;
    });
};

const handleRemoveTodo = (id) => {
    const updateTodos = todos.filter((item) => item.id !== id);
    todos = [...updateTodos];
    renderTodo(updateTodos);
};

const handleItemTodo = (id) => {
    btnSubmit.innerText = "Sửa";
    tmpId = id;
    const itemTodo = todos.find((item) => item.id === id);
    const { title, status } = itemTodo;

    valTitle.value = title;
    listStatus.forEach((item) => {
        if (item.value === status) {
            item.checked = true;
        }
    });
};

filterTodo.onchange = (e) => {
    const value = e.target.value;
    const filterTodos = todos.filter(
        (item) => item.status === value || value === "all",
    );
    renderTodo(filterTodos);
};
