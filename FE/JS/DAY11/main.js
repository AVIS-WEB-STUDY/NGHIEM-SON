const API_URL =
    "https://66f8af6c2a683ce9730ff32f.mockapi.io/api/products";


let productId = null;

const productList = document.getElementById("productList");
const nameInput = document.getElementById("name");
const imageInput = document.getElementById("image");
const categoryInput = document.getElementById("category");
const priceInput = document.getElementById("price");
const btnSave = document.getElementById("btnSave");


const noti = (props) => {
    Swal.fire({
        ...props,
        timer: 1000,
        showConfirmButton: false,
        position: "top-end"
    });
}

const getDataProducts = async () => {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        renderProducts(data)
    } catch (error) {
        console.log(error);
    }
}
getDataProducts();

const renderProducts = (data = []) => {
    productList.innerHTML = data.map(item => {
        const { image, name, category, price, id } = item;
        return `<div class="product-card">
            <img src="${image}" />
            <div class="product-content">
                <h3>${name}</h3>

                <div class="category">
                    ${category}
                </div>

                <div class="price">
                    $${price}
                </div>
                <div class="actions">

                    <button
                        class="btn-edit"
                        onclick="handleEdit('${id}')"
                    >
                        Edit
                    </button>

                    <button
                        class="btn-delete"
                        onclick="handleDelete(${id},'${name}')"
                    >
                        Delete
                    </button>
                </div>
            </div>

        </div>`
    }).join("")
}

const handleDelete = async (id, text) => {
    Swal.fire({
        title: "Are you sure?",
        text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
        if (result.isConfirmed) {
            const res = await fetch(`${API_URL}/${id}`, {
                method: "DELETE"
            });
            if (res.status === 200) {
                noti({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                })
                getDataProducts();
            }
        }
    });
}

const updateProduct = async (formData) => {
    const res = await fetch(`${API_URL}/${productId}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(formData),
    })
    console.log(res, 'res');
    if (res.status === 200) {
        noti({
            title: "Sửa thành công",
            icon: "success",
        })
        getDataProducts();
    }
}

const addProduct = async (formData) => {
    const res = await fetch(API_URL, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
    })
    if (res.status === 201) {
        noti({
            title: "Thêm thành công",
            icon: "success",
        })
        getDataProducts();
    }
}

const handleSubmit = async () => {
    console.log(productId, "productId");

    const formData = {
        name: nameInput.value,
        image: imageInput.value,
        category: categoryInput.value,
        price: Number(priceInput.value)
    }
    if (productId) {
        updateProduct(formData);
    } else {
        addProduct(formData);
    }
    resetForm();
}

const resetForm = () => {
    nameInput.value = "";
    categoryInput.value = "";
    imageInput.value = "";
    priceInput.value = "";
    btnSave.innerText = "Add Product"
    productId = null;
}

const handleEdit = async (id) => {
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();
    const { name, price, category, image } = data;
    nameInput.value = name;
    categoryInput.value = category;
    imageInput.value = image;
    priceInput.value = price;
    btnSave.innerText = "Edit Product"
    productId = id;
}
