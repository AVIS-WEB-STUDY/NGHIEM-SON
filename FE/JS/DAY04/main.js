/**
 * 1: Kiểm tra xem một số có phải là số nguyên tố lớn không. 
 * Nếu có, in ra số nguyên tố lớn nhất trong khoảng từ 1 đến
  số đó.
  Input: 20
  Output: 19
  Input: 15
  Output: 13
 */

//số nguyên tố là số ntn
//  + chia hết 1 và chính nó. => nếu chạy i = 2 => 1 ước
// => viết ra hàm kiểm tra số nguyên tố.

// 15->1 (i) => kiemTraSoNT(i) => 2,3,5,7,11,13 => return i;

function kiemTraSoNT(n) {
    let count = 0;
    for (let i = 2; i <= n; i++) {
        console.log(i);
        if (n % i === 0) {
            console.log(i);
            count++
        }
    }
    console.log(count);
    if (count === 1) {
        return true;
    }
    return false
}

function bai1(n) {
    console.log(n);
    for (let i = n; i > 1; i--) {
        if (kiemTraSoNT(i)) {
            console.log(i);
            return i;
        }
    }
}
const kq = bai1(20)
console.log(kq);


// function checkPrime(n){
//     if(n < 2) return false
//     for(let i=2; i < n; i++){
//         if(n % i === 0){
//             return false
//         }

//     }
//     return true
// } 
// console.log(checkPrime(33));


/**
 * Bài 2: Tìm tất cả các cặp số (a, b) 
 * sao cho a và b là số nguyên tố và a + b = n, 
 * với n là số nguyên dương cho trước.
  Input: 10
  Output: (3, 7)
  Input: 20
  Output: (3, 17), (7, 13)
 */
1, 2, 3, 4, 5, 6, 7, 8, 9, 10
function bai2(n) {
    for (let a = 2; a <= n / 2; a++) {
        const b = n - a;
        if (kiemTraSoNT(a) && kiemTraSoNT(b) && a !== b) {
            console.log(`(${a},${b})`)
        }
    }
}
bai2(10);


/**
 * 3: Viết một hàm nhận vào một tham số là một mảng các phần tử là số,
 *  trả về số lớn nhất trong mảng
 */

function bai3(numbers = []) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        console.log(number);
        if (number > max) {
            max = number;
        }
    }
    console.log(max);
}
bai3([4, 6, 7, 3, 9])


/**
 * Bài 4: cho mảng number: 
 * const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
nếu phần tử trong mảng chẵn thì cho vào mảng evenNumbers = [] => kết quả evenNumber = [4,44,64,24,32,74,22]
và ngược lại lấy số lẻ cho vào mảng oddNumbers
 */

const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23]

let evenNumbers = [];
let oddNumbers = [];
function bai4(arr = []) {
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if (number % 2 === 0) {
            evenNumbers[evenNumbers.length] = number // ok
        } else {
            oddNumbers[oddNumbers.length] = number;
        }
    }
}
bai4(arrNumber)
console.log(evenNumbers);
console.log(oddNumbers);


/*B5: cho mảng a và b
  const a = ["A", "B", "C"]; .
  const b = [1, 2, 3];
  từ mảng a và b tạo ra mảng c có dạng như sau:
      let c = [
        { value: "A1", id: 1 },
        { value: "B2", id: 2 },
        { value: "C3", id: 3 },
      ];
*/
const a = ["A", "B", "C"];
const b = [1, 2, 3];
const c = [];

for (let i = 0; i < a.length; i++) {
    const newItem = {
        value: a[i] + b[i],
        id: b[i]
    }
    c[c.length] = newItem
}
console.log(c);

/**
 * B6: cho mảng users sau
 * const users = [
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
const newUsers = [];
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.gender === "nam") {
        const newItem = {
            human: user.name + user.id,
            gender: user.gender
        }
        newUsers[newUsers.length] = newItem;
    }
}
console.log(newUsers);

/**
 * câu 7: const numbers = [2, -5, 6, -7, -4, 7, -1, -1];
        a: tính trung bình cộng số âm
        b: in ra danh sách các số âm lớn hơn giá trị tính ở ý a
        c: tìm số âm lớn nhất trong mảng
 */
const numbers = [2, -5, 6, -7, -4, 7, -1, -1];
let sum = 0;
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number < 0) {
        console.log(number);
        sum += number;
        count++;
    }
}
const avgNegative = sum / count;
console.log(avgNegative);


for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number < 0 & number > avgNegative) {
        console.log(number);
    }
}


let max = -Infinity;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number < 0 && number > max) {
        max = number;
    }
}
console.log(max);

/**
 *  câu 8: Loại bỏ các phần tử trùng lặp trong mảng 
 * let numbers = [1, 2, 3, 4, 2, 5, 6, 1, 3];
 *  tìm hiểu includes hoặc indexOF hoặc ko dùng 2 hàm đó
 */

{
    let numbers = [1, 2, 3, 4, 2, 5, 6, 1, 3];
    // new Set
    // console.log([...new Set([...numbers])])
    let newNumbers = [];
    for (const number of numbers) {
        console.log(number);
        if (!newNumbers.includes(number)) {
            newNumbers[newNumbers.length] = number;
        }
    }
    console.log(newNumbers);
    // v1: false => !false => true => [1,]
    // V2: false => !false => true => [1,2]
    // V3: false => !false => true => [1,2,3]
    // V4: false => !false => true => [1,2,3,4]
    // V5: true => !true => false => [1,2,3,4]
    // .....................
}


/**
 * Câu 9: Viết 1 hàm nhận vào 1 mảng và 1 số nguyên dương n
 * sau đó trả về mảng mới chứa các mảng con có kích thước n.
 * let mangSo = [1,2,3,4,5,6,7,8,9]
 * kích thước n = 3
 * viết 1 hàm tachMangCao(mangSo,3)
 * kết quả: [[1,2,3],[4,5,6],[7,8,9]]
 */

{
    let mangSo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const newArr = [];
    function tachMang(arr = [], n) {
        for (let i = 0; i < arr.length; i += n) {
            console.log(arr[i]);
            console.log(i);
            newArr[newArr.length] = arr.slice(i, i + n);
        }
        return newArr;
    }

    console.log(tachMang(mangSo, 3));

}


/**
 * Câu 10: đếm số lượng phần tử trong mảng
 * const langs = ["php","js","c++","java","php","js","php"]
 * output 
 *  {
 *    php:3,
 *    js:2,
 *    java:1,
 *    c++:1
 *  }
 */
const langs = ["php", "js", "c++", "java", "php", "js", "php"];

const result = {};

for (const item of langs) {
    result[item] = (result[item] ?? 0) + 1;
    // // result[php] = 2 ?? 0 + 1
    // // {
    // //     php:3,
    //  js:2,
    //  c++:1,
    //  java:1
    // // }
}
console.log(result);

const object = {};
console.log(object["name"]);

object["name"] = "Nghiem";

console.log(object["name"]);

console.log(1 || 0)
//  true || false

/**
 * Bài 11: Xóa tất cả số âm trong mảng 
 * [3, -1, 5, -2] → [3, 5] (Mảng mới)
 */

{
    const numbers = [3, -1, 5, -2];
    const newNumbers = [];
    for (const number of numbers) {
        if (number > 0) {
            newNumbers[newNumbers.length] = number;
        }
    }
    console.log(newNumbers);

}
/**
 * Bài 12: Đếm số phần tử âm trong mảng
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
/**
 * Bài 13: Nhân đôi mỗi phần tử trong mảng ( tạo mảng mới)
 */
{
    const numbers = [3, -1, 5, -2];
    const doubleNumbers = (numbers) => {
        let newNumbers = [];

        for (const number of numbers) {
            const newItem = number * 2;
            newNumbers[newNumbers.length] = newItem;
        }
        return newNumbers;
    };
    console.log(doubleNumbers(numbers));
}

{
    /**
 * Bài 14: Thay thế số âm bằng 0
 * [3,-2,5,-1] → [3,0,5,0]
 */

    const numbers = [3, -2, 5, -1];
    const replaceNegative = (numbers) => {
        let newNumbers = [];
        for (const number of numbers) {
            // if (number >= 0) {
            //     newNumbers.push(number);
            // } else newNumbers.push(0);
            const newItem = number > 0 ? number : 0;
            newNumbers[newNumbers.length] = newItem;
        }
        return newNumbers;
    };
    console.log(replaceNegative(numbers));
}

{
    /**
     * Bài 15: Tìm số chẵn lớn nhất trong mảng
     * [3, 8, 2, 11, 6] → 8
     */
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

{
    //     Bài 16: Đếm số lần xuất hiện của từng ký tự
    // "hello" → { h:1, e:1, l:2, o:1 }
    const text = "hello";
    const countLetter = (text) => {
        const result = {};
        for (const letter of text) {
            result[letter] = (result[letter] ?? 0) + 1;
        }
        return result;
    };
    console.log(countLetter(text));
}

/**
 *  Bài 17:: Lấy tên từ danh sách user
 * [
    {name: "An", age: 20},
    {name: "Bình", age: 25}
   ]
    → ["An", "Bình"]
 */
{
    const users = [
        { name: "An", age: 20 },
        { name: "Bình", age: 25 }
    ]
    const getNames = (users) => {
        let result = [];
        for (const user of users) {
            result[result.length] = user.name;
        }
        return result;
    };
    console.log(getNames(users));
}


/**
 *  Bài 18: Tìm số âm đầu tiên
 * [5, 2, -3, -8] -> -3
 */
{
    const numbers = [2, -5, 6, -7, -4, 7, -1, -1];
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