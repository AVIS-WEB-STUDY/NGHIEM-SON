// console.log("A")

// setTimeout(() => {
//     console.log("B")
// }, 1000)

// console.log("C");

// setTimeout(() => {
//     console.log("D")
// }, 0)

// setTimeout(() => {
//     console.log("E")
// }, 2000)

// A , C, D,B, E

// JS nó chỉ có 1 call stack

//  event loop.
// + call stack: xử lý tác vụ đồng bộ.
// + web APIs: xử lý tác vụ bất đồng bộ
// +Callback queue: hàng chờ
// + event loop: hỏi call stack còn trống không ,
//  thì sẽ đưa những tác vụ trong hàng chờ lên cho 
// call stack xử lý

// ==============================
//  độ ưu tiên
// console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 0);

// console.log("3");

// console.log("1");

// Promise.resolve().then(() => {
//     console.log("2");
// });

// console.log("3");

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");
// 1-4-3-2
// Macrotask (setTimeout,setInteval) < Microtask (promise,aysn/await)

console.log("Start");

Promise.resolve().then(() => {
    console.log("A");
});

Promise.resolve().then(() => {
    console.log("B");
});

console.log("End");
// ==================
console.log("Start");

Promise.resolve().then(() => {
    console.log("A");

    Promise.resolve().then(() => {
        console.log("B");
    });
});

console.log("End");

// =============

console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

setTimeout(() => {
    console.log("Timeout 2");
}, 0);

console.log("End");




// ===============================
//  Promise

const examplePromise = new Promise((resolve, reject) => {
    resolve("Thành công");
    // reject("Thất bại")
})
examplePromise
    .then((res) => {
        console.log(res, "res");
    })
    .catch(err => console.log(err))
    .finally(() => console.log("finally"))

console.log(examplePromise, 'examplePromise');

// ===================

const tbody = document.querySelector("tbody");
const detail = document.getElementById("detail");
const loader = document.querySelector(".loader")


const fetchDataPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            return res.json()
        })
        .then(data => renderPosts(data))
        .catch(err => console.log(err))

}
fetchDataPost();

const renderPosts = (data = []) => {
    tbody.innerHTML = data.map(item => {
        return `<tr>
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.body}</td>
      <td>
        <button onclick="handleDetail(${item.id})">
           Detail
        </button>
      </td>
    </tr>`
    }).join("")
}

const handleDetail = async (id) => {
    // loader.style.display = "block";
    // fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         loader.style.display = "none";
    //         displayDetailPost(data)
    //     })
    //     .catch(err => loader.style.display = "block")
    //     .finally(() => loader.style.display = "none")
    loader.style.display = "block";
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await res.json();
        displayDetailPost(data);
        loader.style.display = "none";
    } catch (error) {

    }
}

const displayDetailPost = (data) => {
    detail.innerHTML = `
     <p>Id: ${data.id}</p>
     <p>Title: ${data.title}</p>
     <p>Body: ${data.body}</p>
    `
}


// 


const myPromise = new Promise((resolve, reject) => {
    resolve("Thành công");
    // reject("Thất bại")
})
myPromise
    .then(res => {
        return new Promise((resolve, reject) => {
            resolve(1)
        })
    })
    .then(res => {
        return 10
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))



// 

const myFunction = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        console.log(data, "datadata")
    } catch (error) {
        console.log(error);
    }

}
myFunction();


