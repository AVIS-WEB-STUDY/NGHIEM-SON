// [
//     {
//         id:44324,
//         userName:"",
//         avatar:"",
//         salary:"5454",
//         des:"",
//         gender:"",
//         isMarried:true,
//         ducation:"1"
//     }
// ]
let users = [];
const valId = document.getElementById("valId");
const valUserName = document.getElementById("valUserName");
const valAvatar = document.getElementById("valAvatar");
const valSalary = document.getElementById("valSalary");
const listGender = document.querySelectorAll("[type=radio][name=gender]");
const valDes = document.getElementById("valDes");
const valMarried = document.getElementById("valMarried");
const valDucation = document.getElementById("valDucation");
const previewAvatar = document.getElementById("previewAvatar");
const tbody = document.querySelector("tbody");
const nameAvatar = document.getElementById("nameAvatar");
const btnSubmit = document.getElementById("btnSubmit");
const btnDelete = document.getElementById('btnDelete');
const checkboxAll = document.getElementById("checkboxAll");
const listCheckBox = document.getElementsByClassName("list-checkbox");
let listIds = [];

valAvatar.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        previewAvatar.setAttribute("src", url)
        previewAvatar.style.width = "200px";
        nameAvatar.innerText = file.name;
    }
}

const handleSubmit = () => {
    let gender = ""
    listGender.forEach(item => {
        if (item.checked) {
            gender = item.value
        }
    })
    const avatar = previewAvatar.getAttribute("src");
    const formData = {
        id: Date.now(),
        userName: valUserName.value,
        avatar,
        salary: valSalary.value,
        des: valDes.value,
        gender,
        isMarried: valMarried.checked,
        ducation: valDucation.value
    }
    console.log(valId.value, "xxxxxxxxxxx");
    if (valId.value) {
        const updateUsers = users.map(item => {
            if (item.id === +valId.value) {
                return {
                    ...formData,
                    id: item.id
                }
            }
            return item;
        })
        users = [...updateUsers]
    } else {
        users = [...users, formData];
        console.log(listCheckBox, "abc", listIds)

    }
    setDataLocalStorage(users);
    renderUsers(users);
    resetForm();
    for (let index = 0; index < listCheckBox.length; index++) {
        const element = listCheckBox[index];
        console.log(element, 'element', listIds);

        if (listIds.includes(element.value)) {
            element.checked = true;
        }
    }
    if(listIds.length !== users.length){
        checkboxAll.checked=false;
        btnDelete.innerText = `Delete ${listIds.length}`
    }
    
}

const renderUsers = (users = []) => {
    tbody.innerHTML = users.map(user => {
        const { id, userName, avatar, des, salary, isMarried, gender, ducation } = user;
        return `<tr>
            <td>
                <input class="list-checkbox" type="checkbox" value=${id} onchange="handleChangeSelectCheckbox(this)" />
            </td>
            <td>${id}</td>
            <td>${userName}</td>
            <td>${avatar ? `<img src=${avatar} width="100px"  />` : "No Avatar"} </td>
            <td>${des}</td>
            <td>${salary}</td>
            <td>${gender}</td>
            <td>${isMarried ? "Đã kết hôn" : "Độc thân"}</td>
            <td>${ducation} Năm</td>
            <td>
                <button onclick="handleRemoveUser(${id})">Xóa</button>
                <button onclick="handleEditUser(${id})">Edit</button>
            </td>
        </tr>`
    }).join("");

}

const resetForm = () => {
    nameAvatar.innerText = "";
    valId.value = "";
    valUserName.value = "";
    valDucation.value = "";
    valDes.value = "";
    valSalary.value = "";
    previewAvatar.setAttribute("src", "");
    listGender.forEach(item => {
        item.checked = false;
    })
    valMarried.checked = false
    btnSubmit.innerText = "Thêm";
}

const handleRemoveUser = (id) => {
    const updateUsers = users.filter(i => i.id !== id);
    users = [...updateUsers];
    setDataLocalStorage(users)
    renderUsers(users);
}

const handleEditUser = (id) => {
    const user = users.find(item => item.id === id);
    const { userName, avatar, des, salary, isMarried, gender, ducation } = user;
    valId.value = id;
    valUserName.value = userName;
    valDucation.value = ducation;
    valDes.value = des;
    valSalary.value = salary;
    previewAvatar.setAttribute("src", avatar);
    listGender.forEach(item => {
        if (item.value === gender) {
            item.checked = true;
        }
    })
    valMarried.checked = isMarried;
    btnSubmit.innerText = "Sửa";
}

const handleChangeSelectCheckbox = (e) => {
    console.log({ e }, "xxxxxxxx");
    const { value, checked } = e;
    console.log(value, 'value');

    if (checked) {
        listIds = [...listIds, value]
    } else {
        const newIds = listIds.filter(id => id !== value);
        listIds = [...newIds];
    }
    if (listIds.length) {
        btnDelete.innerHTML = `Delete ${listIds.length}`
        btnDelete.style.display = "block";
    } else {
        btnDelete.innerHTML = `Delete`
    }
    if (listIds.length === users.length) {
        btnDelete.innerHTML = `Delele All`;
        checkboxAll.checked = true;
    } else {
        checkboxAll.checked = false;
    }
    console.log(listIds, 'listIds', listIds.length);
}

const handleDeleteUserFromCheckBox = () => {
    const newData = users.filter(item => !listIds.includes(String(item.id)));
    users = [...newData];
    setDataLocalStorage(users)
    renderUsers(users)
    btnDelete.innerHTML = `Delete`;
    listIds = [];
    checkboxAll.checked = false;
}

checkboxAll.onchange = (e) => {
    const { checked } = e.target
    if (checked) {
        for (let index = 0; index < listCheckBox.length; index++) {
            const element = listCheckBox[index];
            element.checked = true;
        }
        listIds = users.map(item => String(item.id));
        btnDelete.style.display = "block";
        btnDelete.innerHTML = `Delete All`
    } else {
        for (let index = 0; index < listCheckBox.length; index++) {
            const element = listCheckBox[index];
            element.checked = false;
        }
        btnDelete.innerHTML = `Delete`
    }
}


const setDataLocalStorage = (data) => {
    const dataLocal = JSON.stringify(data);
    localStorage.setItem("data", dataLocal)
}
const getDataLocalStorage = () => {
    const data = localStorage.getItem("data");
    if (data) {
        const dataLocal = JSON.parse(data);
        users = [...dataLocal];
        renderUsers(users)
    }
}
getDataLocalStorage();
// localStorage.setItem("name","nghiem")
// localStorage.setItem("data",JSON.stringify([{id:"123"}]))

// const dataLocal = localStorage.getItem("data");

// console.log(JSON.parse(dataLocal),'dataLocal');
// localStorage.removeItem("data")

sessionStorage.setItem("name", "nghiem");
