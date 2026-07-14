/**
 * Promise.all:
 * dùng để chạy nhìu promise song song, và chỉ trả về kết quả hoàn thành
 * nếu 1 promise bị reject => toàn bộ promise reject
 * 
 */



const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.reject("Lỗi Server");
Promise.all([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.log(err))


const API_POST = "https://jsonplaceholder.typicode.com/posts";
const API_USER = "https://jsonplaceholder.typicode.com/users";

const getPosts = fetch(API_POST).then(res => res.json());
const getUsers = fetch(API_USER).then(res => res.json());

Promise.all([getPosts, getUsers])
    .then(res => {
        console.log(res, 'res');
        const [posts, users] = res;
        console.log(posts, 'posts');
        console.log(users, 'users');
    })
    .catch(err => console.log(err))


const delay = (ms, name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, ms);
    })
}

const run = async () => {
    console.time("run");
    await delay(1000, "Công việc 1")
    await delay(2000, "Công việc 2")
    await delay(3000, "Công việc 3")
    console.timeEnd("run");
}
run();

const runAll = async () => {
    console.time("runAll");
    await Promise.all([
        delay(1000, "Công việc 1"),
        delay(2000, "Công việc 2"),
        delay(3000, "Công việc 3")
    ])
    console.timeEnd("runAll");
}
runAll();


/**
 * Promise.allSettled:
 * dùng để chạy nhìu promise song song, và trả hết kết quả khi chạy
 *  kể cả thành công hay thất bại
 */

{
    const p1 = Promise.resolve(10);
    const p2 = Promise.resolve(20);
    const p3 = Promise.reject("Lỗi Server");
    Promise.allSettled([p1, p2, p3])
        .then(res => {
            res.forEach(item => {
                if (item.status === "fulfilled") {
                    console.log(item.value);
                } else {
                    console.log(item.reason);
                }
            })
        })

    const API_POST = "https://jsonplaceholder.typicode.com/posts";
    const API_USER = "https://jsonplaceholder.typicode.com/users";

    const getPosts = fetch(API_POST).then(res => res.json());
    const getUsers = fetch(API_USER).then(res => res.json());
    Promise.allSettled([getPosts, getUsers])
        .then(res => {
            res.forEach(item => {
                if (item.status === "fulfilled") {
                    console.log(item.value, "value");
                } else {
                    console.log(item.reason);
                }
            })
        })

}


// evenloop
// độ ưu tiên
// promise
// async/await