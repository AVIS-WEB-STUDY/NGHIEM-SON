for (let i = 0; i < 10; i++) {
    // console.log(i); // 0,1

    // if(i === 5){
    // break;
    continue;
    // }
    console.log(i); // 0,1
}
// v1: i = 0 => 0 < 5 => i = 0
// v2: i= 1 => 1 < 5 => i = 1
// v3: i= 2 => 2 < 5 => i = 2
// v4: i= 3 => 3 < 5 => i = 3
// v5: i= 4 => 4 < 5 => i = 4
// v6: i= 5 => 5 < 5 => dừng


// For với Array

const numbers = [5, 3, 8, 4, 2, 8];
// console.log(numbers[2]);
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    // console.log(i);
    const number = numbers[i];
    console.log(number);
    sum += number;
    // sum = 0 + 5
    // sum = 5 + 3
    // sum = 8 + 8
    // sum = 16 + 4
    // sum = 20 + 2
    // sum = 22 + 8;
    // sum = 30
}
console.log("Total", sum);

const carts = [
    {
        name: "Iphone 11",
        quantity: 2,
        price: 300
    },
    {
        name: "Iphone 16e",
        quantity: 1,
        price: 600
    }
]
// tính tổng đơn hàng

let total = 0;
for (let i = 0; i < carts.length; i++) {
    console.log(i, "xxxxx");
    const cart = carts[i];
    total += cart.price * cart.quantity;
}
let total1 = 0;
for (const cart of carts) {
    total1 += cart.price * cart.quantity;
}

console.log(total, total1, "total1");

// const numberss = [1, 2, 3, 4, 5];
// for (let i = 0; i < numberss.length; i += 2) {
//     console.log(i);
// }

const users = [
    {
        name: "Nghiêm",
        age: 12,
        // address:"Hà Nội"
    },
    {
        name: "Đức",
        age: 15,
        // address:"Hà Nội"
    }
]
// cứ mỗi user thêm address: "Hà Nội"
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    user.address = "Hà Nội";
}
console.log(users);


{
    const users = [
        {
            name: "Nghiêm",
            age: 12,
            status: false
        },
        {
            name: "Đức",
            age: 15,
            status: true
        }
    ]
    //  nếu mà user nào có status:false
    //  => thêm 1 key: detai:"Ở lại lớp" || "Lên lớp"
    // tạo mảng mới.  
    let arrUsers = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        console.log(user, "user");
        const item = {
            name: user.name,
            age: user.age,
            status: user.status,
            detail: user.status ? "Lên lớp" : "Ở lại lớp"
        }
        // arrUsers.push(item)
        arrUsers[arrUsers.length] = item;
        // 
    }
    console.log(arrUsers, "newUsers");
}

{
    const numbers = [];
    console.log(numbers.length);  // 0
    numbers[numbers.length] = 1;
    console.log(numbers.length); // 1
    numbers[numbers.length] = 10;
    console.log(numbers.length);  // 2
    numbers[numbers.length] = 20;
    // numbers[1] = 10;
    // numbers[2] = 20;
    console.log(numbers);
}

{
    const arr = ["A", "B", "C"];
    console.log(arr.length - 1);

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

{
    const numbers = [1, 2, 3, 4, 5, 6];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i]);
        }
    }

    for (let i = 0; i < numbers.length; i += 2) {
        // console.log( i + 1,"xxx");
        console.log(numbers[i + 1], "xxxxxx")
    }
}

{
    // for Of
    const arr = [1, 2, 3, 4];
    let sum = 0;
    for (const item of arr) {
        console.log(item, "item");
        sum += item;
    }
    console.log(sum);

    const text = "abc";
    for (const item of text) {
        console.log(item, 'item');
    }
    for (let i = 0; i < text.length; i++) {
        console.log(text[i], 'mmmm');
    }

}

{
    // for...in
    const object = {
        name: "Nghiem",
        age: 12
    }
    for (const key in object) {
        console.log(key);
        console.log(object[key]);
    }
}

{
    // 2: while
    // let password = "";
    // while (password !== "1234") {
    //     password = prompt("Nhập mật khẩu")
    // }
    // console.log("Đăng nhâp thành công");


    let hp = 100;

    while (hp > 0) {
        const damage = Math.floor(Math.random() * 30);
        console.log(damage);
        hp -= damage;
        console.log("Hp còn", hp);
    }
    console.log("Game Over");
}
{
    // 1: Function là gì?

    function sayHello(param) {
        console.log("Hello World");
        // return
    }
    sayHello();

    const exampleFun = function () {
        console.log("Hello World");
    }
    exampleFun();

    const myFunction = () => {
        console.log("Hello World");
    }
    myFunction()

    function sum(a, b) {
        return a + b;
    }
    const kq = sum(3, 4);
    console.log(kq, 'kq');

    function validate(input, input1) {
        if (input && input1) {
            return false;
        }
        return true;
    }
    const isCheck = validate("", "")
    console.log(isCheck, 'isCheck');
    if (isCheck) {
        console.log("Không được bỏ trống")
    } else {
        console.log("Đi tới công việc nào đó")
    }

    function exampleFunction(name, age, address = "Hà Nội") {
        console.log(name);
        console.log(age);
        console.log(address);

    }
    exampleFunction("Nghiem", 20, "HCM")
}

function tongNhiuSo(...numbers) {
    console.log(numbers, "numbers");
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum;
}
const kq = tongNhiuSo(1, 2, 3, 4, 5);
console.log(kq, 'kq');


{
    // Arguments

    function showArgs() {
        let sum = 0;
        console.log(arguments, "arguments");
        for (let number of arguments) {
            sum += number;
        }
        return sum;
    }
    console.log(showArgs(1, 2, 3, 4, 5));

}