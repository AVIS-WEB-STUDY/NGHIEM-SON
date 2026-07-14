// Date

// const date = Date.now();
// console.log(date);
// console.log(date);
// console.log(date);

const date = new Date();

console.log(date.getDate())
console.log(date.getDay()) // 0-1-2-3-4-5-6;
console.log(date.getFullYear())
console.log(date.getMonth()) // 0:tháng 1 .... 11: tháng 12
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getHours());

// dayjs or momentJS

console.log(Date.now());


//  OBJECT

const object = {
    name: "nghiem",
    age: 20,
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
}
//  loại bỏ key nào rỗng
console.log(object.name); // 90%
console.log(object["name"]); // ko biết key tên gì.

for (let key in object) {
    if (!object[key]) {
        delete object[key];
    }
}

console.log(object);

console.log(Object.values(object))
console.log(Object.keys(object))
console.log(Object.entries(object))

const data = Object.entries(object);
console.log(data);
// {
//     name:"nghiem",
//     age:20
// }

console.log(Object.fromEntries(data))

console.log(Object.hasOwn(object, "name"));

if (Object.hasOwn(object, "abc")) {
    //....
    object.abc
}
object.abc


//  ARRAY;

const numbers = [4, 5, 6, 8, 3, 5, 9];
const numbers1 = [30, 25];

// join

console.log(numbers.join("-"));
console.log(["M", "S", "XL"].join("-"));

// pop
console.log(numbers.pop());
console.log(numbers[numbers.length - 1]);
console.log(numbers);
console.log(numbers.shift());
console.log(numbers);
console.log(numbers[0]);
numbers.push(7, 8, 9, 10);
console.log(numbers);
numbers.unshift(7, 8, 9, 10);
console.log(numbers);
const numbers2 = numbers.concat(numbers1, numbers1);
console.log(numbers2);


const numbers3 = [4, 5, 6, 8, 3, 5, 9];

// console.log(numbers3.splice(1,2));
// console.log(numbers3);

console.log(numbers3.slice(1))
console.log(numbers3);

console.log("KE001".slice(2));
console.log("BE001".slice(2));


console.log("nghiem".toLocaleUpperCase())
console.log("nghiem".toUpperCase())
console.log("NGHIEM".toLocaleLowerCase())
console.log("NGHIEM".toLowerCase())

console.log("   nghiem    ".trim());

console.log("ng,h,i,e,m".split(","))

const valOrder = "desc,price";
const arr = valOrder.split(",")
console.log(arr);

const body = {
    orderBy: arr[0],
    key: arr[1]
}
console.log(body);



//  

console.log([1, 2, 3, 4].includes(3));
console.log("nghiem".includes("iem"));

let number = 1;

if (number === 1 || number === 2 || number === 3 || number === 4 || number === 5) {
    console.log("Thõa mãn điều kiện")
} else {
    console.log("KO Thõa mãn điều kiên")
}

if ([1, 2, 3, 4, 5].includes(number)) {
    console.log("Thõa mãn điều kiện")
} else {
    console.log("KO Thõa mãn điều kiên")
}

let role = "Editor";

// if (role === "Editor" || role === "Contributor" || role === "Author") {
//     console.log("có quyền gì đó");
// }
if (["Editor", "Contributor", "Author"].includes(role)) {
    console.log("có quyền gì đó");
}

// Array.forEach()

{
    // const numbers = [6, 4, 8, 3, 2];
    // [12,8,16,6,4]
    // let sum = 0;
    // numbers.forEach(function(item,index,arr){
    //     console.log(item);
    //     console.log(index);
    //     console.log(arr);
    //     sum += item;
    // })
    // console.log(sum);
    // const numbers = [6, 4, 8, 3, 2];
    // numbers.forEach((item, index,arr) => {
    //     arr[index] *= 2;
    // });
    // console.log(numbers);

    const products = [
        {
            title: "Iphone 1",
            price: 200
        },
        {
            title: "Iphone 2",
            price: 500
        }
    ]
    let total = 0;
    products.forEach((item) => {
        total += item.price;
    });
    console.log(total);
    //  tính tổng đơn hàng
}

//  Map:
// - tạo ra 1 mảng mới và trả về các ptu mới, với số lượng ptu mảng mới luôn = soluong pt của mảng cũ
// - nếu không có return => sẽ trả về 1 mảng undefined
// - không làm ảnh hưởng tới mảng cũ

{
    const names = ["Đức", "Nghiêm", "Minh"];
    const newNames = names.map(function (item) {
        return item.toUpperCase();
    })
    console.log(newNames);
    console.log(names);

    const numbers = [1, 2, 3, 4, 5];
    const newNumbers = numbers.map(function (item) {
        return item * 2;
    })
    console.log(newNumbers);

    const users = [
        {
            name: "Nghiem",
            age: 20,
            score: 10
        },
        {
            name: "MINH",
            age: 20,
            score: 4
        },
        {
            name: "Đức",
            age: 20,
            score: 5
        }]
    //  thêm key: status: true hoặc false. nếu score < 5 false ngc lại true

    const newUsers = users.map(function (item) {
        const newItem = {
            name: item.name,
            age: item.age,
            score: item.score,
            status: item.score >= 5
        }
        console.log(newItem);
        return newItem;
    })
    console.log(newUsers);



    const users1 = [
        { name: "An", age: 20 },
        { name: "Bình", age: 25 },
        { name: "Cường", age: 30 }
    ];
    //  lấy ra danh sách tên user ["An","Binh","Cuong"]
    const listName = users1.map(function (item) {
        return item.name
    })
    console.log(listName);

}

{
    const numbers = [1, 2, 3, 4, 5];
    //  =>   [true,false,true,false,true]
    const result = numbers.map(function (item) {
        return item % 2 === 0 ? false : true
    })
    console.log(result);


    const words = ["java", "html", 'css', "js"];
    const arrLength = words.map(function (item) {
        return item.length
    })
    // [4,4,3,2]
    console.log(arrLength);
}









