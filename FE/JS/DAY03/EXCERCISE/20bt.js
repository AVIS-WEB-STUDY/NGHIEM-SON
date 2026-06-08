/**
Bài 1: Kiểm tra xem một số có phải là số nguyên tố lớn không. Nếu có, in ra số nguyên tố lớn nhất trong khoảng từ 1 đến  số đó.
    Input: 20
    Output: 19
    Input: 15
    Output: 13
 */

{
    const number = 20;
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    const findLargestPrime = (num) => {
        for (let i = num; i > 1; i--) {
            if (isPrime(i)) {
                return i;
            }
        }
        return null;
    };

    console.log(findLargestPrime(number));
}

/**
Bài 2: Tìm tất cả các cặp số (a, b) sao cho a và b là số nguyên tố và a + b = n, với n là số nguyên dương cho trước.
    Input: 10
    Output: (3, 7)
    Input: 20
    Output: (3, 17), (7, 13)
 */
{
    const n = 10;

    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    const findPrimePairs = (num) => {
        let pairs = [];
        for (let i = 2; i <= num / 2; i++) {
            if (isPrime(i) && isPrime(num - i)) {
                pairs.push([i, num - i]);
            }
        }
        return pairs;
    };
    console.log(findPrimePairs(n));
}

/**
Bài 3: Viết một hàm nhận vào một tham số là một mảng các phần tử là số, trả về số lớn nhất trong mảng
 */
{
    const numbers = [1, 3, 5, 6, 2, 3];
    const findMaxNumber = (numbers) => {
        let maxNumber = numbers[0];
        for (const number of numbers) {
            if (number > maxNumber) {
                maxNumber = number;
            }
        }
        return maxNumber;
    };
    console.log(findMaxNumber(numbers));
}

/**
Bài 4: cho mảng number: const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
nếu phần tử trong mảng chẵn thì cho vào mảng evenNumbers = [] => kết quả evenNumber = [4,44,64,24,32,74,22]
và ngược lại lấy số lẻ cho vào mảng oddNumbers
*/
{
    const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
    let evenNumber = [];
    let oddNumbers = [];
    for (number of arrNumber) {
        number % 2 === 0 ? evenNumber.push(number) : oddNumbers.push(number);
    }
    console.log(evenNumber);
    console.log(oddNumbers);
}

/*
Bài 5: cho mảng a và b
    const a = ["A", "B", "C"]; 
    const b = [1, 2, 3];

    từ mảng a và b tạo ra mảng c có dạng như sau:
        let c = [
            { value: "A1", id: 1 },
            { value: "B2", id: 2 },
            { value: "C3", id: 3 },
        ];
*/
{
    const a = ["A", "B", "C"];
    const b = [1, 2, 3];
    let c = [];
    for (let i = 0; i < a.length; i++) {
        c.push({ value: a[i], id: b[i] });
    }
    console.log(c);
}

/**
Bài 6: cho mảng users sau
    const users = [
        {
            id: 1,
            name: "A",
            gender: "nam",
        },
        {
            id: 2,
            name: "B",
            gender: "nữ",
        },
        {
            id: 3,
            name: "C",
            gender: "nam",
        },
        {
            id: 4,
            name: "D",
            gender: "nam",
        },
    ];

hãy tạo ra mảng mới newUsers
    const newUsers = [
        {human:"A1",gender:"nam"},
        {human:"C3",gender:"nam"},
        {human:"D4",gender:"nam"}
    ]
 */

{
    const users = [
        {
            id: 1,
            name: "A",
            gender: "nam",
        },
        {
            id: 2,
            name: "B",
            gender: "nữ",
        },
        {
            id: 3,
            name: "C",
            gender: "nam",
        },
        {
            id: 4,
            name: "D",
            gender: "nam",
        },
    ];

    let newUsers = [];
    for (const user of users) {
        newUser = {
            human: `${user.name}${user.id}`,
            gender: user.gender,
        };
        newUsers.push(newUser);
    }
    console.log(newUsers);
}

/**
Bài 7: const number = [2, -5, 6, -7, -4, 7, -1, -1];
    a: tính trung bình cộng số âm
    b: in ra danh sách các số âm lớn hơn giá trị tính ở ý a
    c: tìm số âm lớn nhất trong mảng
 */
{
    const numbers = [2, -5, 6, -7, -4, 7, -1, -1];
    const avgNegative = (numbers) => {
        let sum = 0;
        let count = 0;
        for (const number of numbers) {
            if (number < 0) {
                sum += number;
                count++;
            }
        }
        return count > 0 ? sum / count : 0;
    };

    const negativeGreaterThanAvg = (numbers, avg) => {
        let result = [];
        for (const number of numbers) {
            if (number < 0 && number > avg) result.push(number);
        }
        return result;
    };

    const maxNegative = (numbers) => {
        let max = null;
        for (const number of numbers) {
            if (number < 0 && (max === null || number > max)) {
                max = number;
            }
        }
        return max;
    };

    let avg = avgNegative(numbers);
    console.log("a: Trung bình cộng số âm:", avg);
    console.log(
        "b: Số âm lớn hơn",
        avg + ":",
        negativeGreaterThanAvg(numbers, avg),
    );
    console.log("c: Số âm lớn nhất:", maxNegative(numbers)); // -1
}

/**
Bài 8: Loại bỏ các phần tử trùng lặp trong mảng let numbers = [1, 2, 3, 4, 2, 5, 6, 1, 3]; tìm hiểu includes hoặc indexOF hoặc ko dùng 2 hàm đó
 */
{
    numbers = [1, 2, 3, 4, 2, 5, 6, 1, 3];

    const removeDupInclude = (numbers) => {
        const result = [];
        for (const number of numbers) {
            if (!result.includes(number)) {
                result.push(number);
            }
        }

        return result;
    };

    const removeDupIndexOf = (numbers) => {
        const result = [];
        for (const number of numbers) {
            if (result.indexOf(number) === -1) result.push(number);
        }
        return result;
    };

    const removeDupOther = (numbers) => {
        const result = [];
        for (const number of numbers) {
            let isDup = false;
            for (const numResult of result) {
                if (number === numResult) {
                    isDup = true;
                    break;
                }
            }
            if (!isDup) result.push(number);
        }
        return result;
    };
    console.log(removeDupInclude(numbers));
    console.log(removeDupIndexOf(numbers));
    console.log(removeDupOther(numbers));
}

/**
Bài 9: Viết 1 hàm nhận vào 1 mảng và 1 số nguyên dương n
    * sau đó trả về mảng mới chứa các mảng con có kích thước n.
    * let mangSo = [1,2,3,4,5,6,7,8,9]
    * kích thước n = 3
    * viết 1 hàm tachMangCao(mangSo,3)
    * kết quả: [[1,2,3],[4,5,6],[7,8,9]]
 */

{
    let mangSo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const tachMangCao = (numbers, n) => {
        let result = [];

        for (let i = 0; i < numbers.length; i += n) {
            let subResult = [];
            for (let j = i; j < i + n && j < numbers.length; j++) {
                subResult.push(numbers[j]);
            }
            result.push(subResult);
        }

        return result;
    };

    console.log(tachMangCao(mangSo, 3));
}

/**
Bài 10: đếm số lượng phần tử trong mảng
    * const lang = ["php","js","c++","java","php","js","php"]
    * output
        *  {
        *    php:3,
        *    js:2,
        *    java:1,
        *    c++:1
        *  }
 */
{
    const lang = ["php", "js", "c++", "java", "php", "js", "php"];
    const countLang = (langs) => {
        let result = {};
        for (const lang of langs) {
            result[lang] = (result[lang] || 0) + 1;
        }
        return result;
    };
    console.log(countLang(lang));
}

/**
Bài 11: Xóa tất cả số âm trong mảng
    * [3, -1, 5, -2] → [3, 5] (Mảng mới)
 */
{
    const numbers = [3, -1, 5, -2];
    const removeNegative = (numbers) => {
        let result = [];
        for (const number of numbers) {
            if (number > 0) {
                result.push(number);
            }
        }
        return result;
    };

    console.log(removeNegative(numbers));
}

/**
Bài 12: Đếm số phần tử âm trong mảng
 */
{
    let numbers = [3, -1, 5, -2];
    const countNegative = (numbers) => {
        let count = 0;
        for (const number of numbers) {
            if (number < 0) count++;
        }
        return count;
    };

    console.log(countNegative(numbers));
}

//  Bài 13: Nhân đôi mỗi phần tử trong mảng ( tạo mảng mới)
{
    const numbers = [3, -1, 5, -2];
    const doubleNumbers = (numbers) => {
        let newNumbers = [];

        for (const number of numbers) {
            newNumbers.push(number * 2);
        }
        return newNumbers;
    };
    console.log(doubleNumbers(numbers));
}

/**
Bài 14: Thay thế số âm bằng 0
    * [3,-2,5,-1] → [3,0,5,0]
 */
{
    const numbers = [3, -2, 5, -1];
    const replaceNegative = (numbers) => {
        let newNumbers = [];
        for (const number of numbers) {
            if (number >= 0) {
                newNumbers.push(number);
            } else newNumbers.push(0);
        }
        return newNumbers;
    };
    console.log(replaceNegative(numbers));
}

/**
Bài 15: Tìm số chẵn lớn nhất trong mảng
    * [3, 8, 2, 11, 6] → 8
 */
{
    const numbers = [3, 8, 2, 11, 6];
    const findMaxEven = (numbers) => {
        let maxEven = null;
        for (const number of numbers) {
            if (number % 2 === 0 && (maxEven === null || number > maxEven)) {
                maxEven = number;
            }
        }
        return maxEven;
    };
    console.log(findMaxEven(numbers));
}

/*
Bài 16: Đếm số lần xuất hiện của từng ký tự
    "hello" → { h:1, e:1, l:2, o:1 } 
*/
{
    const text = "hello";
    const countLetter = (text) => {
        const result = {};
        for (const letter of text) {
            result[letter] = (result[letter] || 0) + 1;
        }
        return result;
    };
    console.log(countLetter(text));
}

/**
Bài 17:: Lấy tên từ danh sách user
    * [
        {name: "An", age: 20},
        {name: "Bình", age: 25}
    ]
    → ["An", "Bình"]
 */
{
    const users = [
        { name: "An", age: 20 },
        { name: "Bình", age: 25 },
    ];

    const getNames = (users) => {
        let result = [];
        for (const user of users) {
            result.push(user.name);
        }
        return result;
    };
    console.log(getNames(users));
}

/**
Bài 18: Tìm số âm đầu tiên
    * [5, 2, -3, -8] -> -3
 */
{
    const numbers = [5, 2, -3, -8];
    const findFistNegative = (numbers) => {
        let result = null;
        for (const number of numbers) {
            if (number < 0) {
                return number;
            }
        }
        return result;
    };
    console.log(findFistNegative(numbers));
}

/**
Bài 19:  
    const carts = [
            { name: "Áo", price: 100, qty: 2 },
            { name: "Quần", price: 200, qty: 1 },
            { name: "Giày", price: 300, qty: 3 }
        ];
    =>  { name: "Giày", price: 300, qty: 3 }
    lấy ra sản phẩm có tổng giá tiền lớn nhất.
 */

{
    const carts = [
        { name: "Áo", price: 100, qty: 2 },
        { name: "Quần", price: 200, qty: 1 },
        { name: "Giày", price: 300, qty: 3 },
    ];
    const getMaxCart = (carts) => {
        let maxCart = null;
        let maxTotal = 0;
        for (const cart of carts) {
            let total = cart.price * cart.qty;
            if (total > maxTotal) {
                maxTotal = total;
                maxCart = cart;
            }
        }
        return maxCart;
    };
    console.log(getMaxCart(carts));
}

/**
Bài 20: 
    const orders = [
        { id: 1, user: "An", total: 200 },
        { id: 2, user: "Bình", total: 500 },
        { id: 3, user: "An", total: 300 }
        ];

    - Tính tổng tiền mỗi user
    Kết quả: 
        {
            An: 500,
            Bình: 500
        }

    - Tìm user chi nhiều tiền nhất
    - Tính tổng tiền toàn bộ orders của user "An" 
*/
{
    const orders = [
        { id: 1, user: "An", total: 200 },
        { id: 2, user: "Bình", total: 500 },
        { id: 3, user: "An", total: 300 },
    ];

    const usersPrice = (orders) => {
        result = {};
        for (const order of orders) {
            let user = order.user;
            result[user] = (result[user] || 0) + order.total;
        }
        return result;
    };

    const maxPriceUser = (usersPrice) => {
        let maxPrice = 0;
        let maxUserPrice = null;
        for (const user in usersPrice) {
            let price = usersPrice[user];
            if (price > maxUserPrice) {
                maxUserPrice = price;
                maxUserPrice = user;
            }
        }
        return maxUserPrice;
    };

    const totalPriceUser = (usersPrice, user) => {
        return usersPrice[user];
    };

    let usersPriceData = usersPrice(orders);
    console.log("tổng tiền mỗi user:", usersPriceData);
    console.log("user chi nhiều tiền nhất:", maxPriceUser(usersPriceData));
    console.log(
        "tổng tiền toàn bộ orders của user An: ",
        totalPriceUser(usersPriceData, "An"),
    );
}
