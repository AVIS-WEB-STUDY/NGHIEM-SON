// Bài 1: Nhập điểm -> Xếp loại
{
    let score = 7.5;

    switch (true) {
        case score === 10:
            console.log("Xuất sắc");
            break;
        case score >= 8:
            console.log("Giỏi");
            break;
        case score >= 7:
            console.log("Khá");
            break;
        case score >= 5:
            console.log("Trung bình");
            break;
        case score >= 3:
            console.log("Yếu");
            break;
        default:
            console.log("Kém");
    }
}

// Bài 2: Nhập số -> Kiểm tra chẵn/lẻ
{
    let number = 7;
    number % 2 === 0 ? console.log("Chẵn") : console.log("Lẻ");
}

// Bài 3: Nhập tháng → số ngày trong tháng.
{
    let month = 3;
    if (month == 2) {
        console.log(`Tháng ${month} có 28 ngày`);
    } else if (
        month == 1 ||
        month == 3 ||
        month == 5 ||
        month == 7 ||
        month == 9 ||
        month == 11
    ) {
        console.log(`Tháng ${month} có 31 ngày`);
    } else {
        console.log(`Tháng ${month} có 30 ngày`);
    }
}

/* 
Bài 4: Kiểm tra đăng nhập:
    ● Nếu chưa login → redirect
    ● Nếu login nhưng không phải admin → deny
    ● Nếu admin → allow
*/
{
    let isLogin = true;
    let isAdmin = true;

    if (isLogin && isAdmin) {
        console.log("allow");
    } else if (isLogin && !isAdmin) {
        console.log("deny");
    } else {
        console.log("redirect");
    }
}

// Bài 6: Nhập 2 số → in ra số lớn hơn
{
    let number1 = 3;
    let number2 = 2;
    number1 > number2
        ? console.log(`Số lớn nhất: ${number1}`)
        : console.log(`Số lớn nhất: ${number2}`);
}

// Bài 7: Nhập username → nếu rỗng thì báo lỗi.
{
    let username = "";
    if (!username) {
        console.log("Error: Vui lòng nhập username");
    }
}

// Bài 8: Nhập username + password → kiểm tra đăng nhập.
{
    let username1 = "abc";
    let password = "abc";
    if (!username1 || !password) {
        console.log("Error: username và password không được để trống");
    }
}

/*
Bài 9: Validate form:
    ● Email không rỗng
    ● Password >= 6 ký tự
    ● Tuổi >= 1
*/
{
    let email = "abc@gmail.com";
    let password = "123";
    let age = 18;
    if (!email) {
        console.log("Error: Email không được rỗng");
    } else if (password.length <= 6) {
        console.log("Error: Mật khẩu phải ít nhất 6 ký tự");
    } else if (age < 18) {
        console.log("Error: Tuổi phải >= 18");
    }
}
