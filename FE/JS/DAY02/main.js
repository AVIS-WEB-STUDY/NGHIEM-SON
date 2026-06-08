
let num = 9 ** 2;
console.log(num);

let a = 1;
// ++a;
// a++;

// let b = a++; // 1
// trả về giá trị hiện tại a = 1.
//  sau đó nó mới tăng lên 1
// console.log(a);


// let b = ++a; // 2
// tăng lên 1 trc , 
// sau đó trả về giá trị mới
// console.log(b);


let number = 1;
// number = number + 2;  
number += 2;
console.log(number);

{
    const number1 = 2;  // number
    const number2 = "2"; // string
    console.log(number1 == number2) // ko dùng
    console.log(number1 === number2)  // dùng 100%
    // == so sánh giá trị không ss kiểu dữ liệu
    // === ss giá trị và ss kiểu dữ liệu.

    console.log(number1 != number2) // ko dùng
    // 2 != 2
    console.log(number1 !== number2) // dùng 100%
    // 2 !== 2 && kiểu dữ liệu

}

{
    // 4: Toán tử Logic;
    // &&: chỉ cần 1 điều kiện false tất cả đều fasle
    console.log(true && true && false)
    //  || : chỉ cần 1 đk true tất cả true
    console.log(true || false || false)

    console.log(!true);

    const total = 20;
    const kq = total ?? "No Data"
    console.log(kq);

    // let kq = ""
    // if (total) {
    //     kq = total;
    // } else {
    //     kq = "No Data"
    // }
    // console.log(kq);

    const user = {
        name: "Cuong LE",
        avatar: "Ảnh xịn",
    }

    const val = user.avatar ?? user.name.slice(0, 1)
    console.log(val);

    const val1 = user.avatar ? user.avatar : user.name.slice(0, 1);
    console.log(val1);

    true ? "true chạy vào đây" : "false đi vào đây"

    if (true) {
        "true chạy vào đây"
    } else {
        "false đi vào đây"
    }

}

{
    console.log("Hello" + " JS");
    //    nếu mà string + bất kỳ kiểu dữ liệu nào => biến thành string;
    console.log("Hello" + null);
    console.log(123456 + "")
    // "123456" => 123456
    console.log(+"123456");

    const users = [
        {
            id: "123456",
            name: "Nghiêm"
        }
    ]
    const id2 = 123456;

    // [
    //     {
    //         id:"123456",
    //         name:"Lê Cương"
    //     }
    // ]

    const newData = users.map(item => {
        return {
            ...item,
            name: +item.id === id2 ? "Lê Cương" : item.name
        }
    })
    console.log(newData);
}

{
    const user = {
        name: "nghiem",
        age: 10,
        // avatar:{
        //     img:"ảnh xịn"
        // }
        avatar: null
    }
    console.log(user.avatar ?? "Ảnh mặc định");
    console.log(user.avatar ? user.avatar : "Ảnh mặc định");

    console.log(user.avatar?.img);

}

{

    if (true) {
        // điều kiện đúng... something...
    } else {
        // điều kiện sai
    }

    const number = 10;
    if (number % 2 === 0) {
        console.log(`${number} là số chẵn`);
    }

    number % 2 === 0 ?
        console.log(`${number} là số chẵn`)
        : ""

    const date = new Date();

    const hour = date.getHours();
    console.log(hour);

    if (hour >= 6 && hour < 11) {
        console.log("Đây là buổi sang");
    } else if (hour >= 11 && hour < 14) {
        console.log("Đây là buổi trưa");
    } else if (hour >= 14 && hour < 18) {
        console.log("Đây là buổi Chiều");
    } else if (hour >= 18 && hour <= 22) {
        console.log("Đây là buổi tối");
    } else {
        console.log("Buổi đêm");
    }

    hour >= 6 && hour < 11 ?
        console.log("Đây là buổi sang") :
        (hour >= 11 && hour < 14) ?
            console.log("Đây là buổi trưa") :
            (hour >= 14 && hour < 18) ?
                console.log("Đây là buổi Chiều") :
                (hour >= 18 && hour <= 22) ?
                    console.log("Đây là buổi tối") :
                    console.log("Buổi đêm");

}

{
    // trueThy

    const inputVal = "abc";
    // if(inputVal !== ""){
    //     console.log("btn Sáng lên");
    // }
    const number = 10;
    if (number) {
        console.log("Number lớn hơn không");
    } else {
        console.log("Falsy");
    }
}

{
    const color = "red";

    switch (color) {
        // color === "red"
        case "red":
            console.log("Đây là màu đỏ")
            break;
        case "blue":
            console.log("Đây là màu xanh")
            break;
        case "gold":
            console.log("Đây là màu vàng")
            break;
        default:
            console.log("Lỗi đèn báo")
    }

    const number = 5;
    switch (number) {
        case 2:
        case 3:
        case 5:
        case 7:
            console.log("Đây là số nguyên tố")
            break;
        default:
            console.log("Đây Không là số nguyên tố")
    }
}

const number = prompt("Nhập number")