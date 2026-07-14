// [
//    {
//     id:"4432434",
//     title:"Công việc 1",
//     status:'Todo',
//    } 
// ]
let todos = [];
let tmpId = null;

const valTitle = document.getElementById("valTitle");
const listStatus = document.querySelectorAll("[type=radio][name=st]");
const displayTodo = document.getElementById("display");
const btnSubmit = document.getElementById("btnSubmit");
const filterTodo = document.getElementById("filterTodo");
const avatar = document.getElementById("avatar");
const previewImage = document.getElementById("previewImage");

const noti = (title, icon = "success",) => {
    Swal.fire({
        position: "top-end",
        icon,
        title,
        showConfirmButton: false,
        timer: 500,
    });
}

avatar.onchange = (e) => {
    const file = e.target.files[0];
    console.log(file,'file');
    const url = URL.createObjectURL(file);
    console.log(url,'avatar');
    previewImage.setAttribute("src",url)

}

const handleSubmit = () => {
    let status = "";
    const title = valTitle.value;
    const avatar = previewImage.getAttribute("src");
    listStatus.forEach(item => {
        if (item.checked) {
            status = item.value;
        }
    })
    const formData = {
        id: Date.now(),
        title,
        status,
        avatar
    }
    if (tmpId) {
        const updateTodos = todos.map(todo => {
            if (todo.id === tmpId) {
                return {
                    ...formData,
                    id: todo.id
                }
            }
            return todo;
        })
        todos = [...updateTodos];
        btnSubmit.innerText = "Thêm";

        noti("Sửa Thành công")
    } else {
        todos = [...todos, formData];
        noti(`Thêm thành công ${formData.title}`)
    }
    renderTodo(todos);
    reset();
}

const renderTodo = (data = []) => {
    displayTodo.innerHTML = data.map(item => {
        const { title, status, id,avatar } = item;
        return ` <div class="task">
        <div class="task-name">${title}</div>
        <div>
            <img src=${avatar} width="100" />
        </div>
        <div class="task-right">
            <span class="badge ${status.toLowerCase()}">${status}</span>

            <button class="icon-btn" onclick="handleItemTodo(${id})">
                <i class="fa-solid fa-pen"></i>
            </button>

            <button class="icon-btn" onclick="handleRemoveTodo(${id})">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    </div>`
    }).join("")
}


const reset = () => {
    tmpId = null;
    valTitle.value = "";
    listStatus.forEach(item => {
        item.checked = false
    })
    previewImage.setAttribute("src","")
}

const handleRemoveTodo = (id) => {
    const text ="Job:" + todos.find(i => i.id === id).title;
    Swal.fire({
        title: "Are you sure?",
        text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            const updateTodos = todos.filter(i => i.id !== id);
            todos = [...updateTodos]
            renderTodo(todos);
            noti("Xóa Thành công")
        }
    })
}

const handleItemTodo = (id) => {
    btnSubmit.innerText = "Sửa";
    tmpId = id;
    const itemTodo = todos.find(i => i.id === id);
    const { title, status, avatar } = itemTodo;
    valTitle.value = title;
    listStatus.forEach(item => {
        if (item.value === status) {
            item.checked = true;
        }
    })
    previewImage.setAttribute("src",avatar)
}


filterTodo.onchange = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "all") {
        renderTodo(todos)
    } else {
        const updateTodos = todos.filter(item => item.status === value);
        renderTodo(updateTodos)
    }
}
