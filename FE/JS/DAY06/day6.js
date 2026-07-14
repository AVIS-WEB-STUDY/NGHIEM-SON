//  filter (Lọc);

const numbers = [1, 3, 5, 6];

const evenNumbers = numbers.filter(function (item) {
    if (item % 2 === 0) {
        return true;
    }
    return false;
});
console.log(evenNumbers);

const products = [
    {
        id: 1,
        name: "Iphone10",
    },
    {
        id: 2,
        name: "Iphone14",
    },
    {
        id: 3,
        name: "Iphone16",
    },
];

const ids = [1, 2];
// xóa sản phẩm nào mà trùng với ids

const updateProducts = products.filter(function (item) {
    return !ids.includes(item.id);
    // v1: true
    // v2: true
    // v3: false
});
console.log(updateProducts);

const students = [
    { name: "An", score: 8 },
    { name: "Bình", score: 4 },
    { name: "Chi", score: 7 },
];
// lọc ra học sinh đậu  >= 5;

const bestStudents = students.filter(function (item) {
    // if(item.score >= 5){
    //     return true
    // }
    // return false
    return item.score >= 5;
});
console.log(bestStudents);

const products1 = [
    { name: "IPhone", stock: 10 },
    { name: "Samsung", stock: 0 },
    { name: "Xiaomi", stock: 5 },
];
// lộc sản phẩm còn hàng

const newProducts = products1.filter(function (item) {
    return item.stock > 0;
});
console.log(newProducts);

//  Find

{
    const numbers = [1, 3, 4, 5];
    const number = numbers.find(function (item) {
        return item % 2 === 0;
    });
    console.log(number);
}

const carts = [
    {
        id: 1,
        products: [
            {
                id: 162,
                title: "Blue Frock",
                price: 29.99,
                quantity: 4,
                total: 119.96,
                discountPercentage: 12.13,
                discountedTotal: 105.41,
                thumbnail:
                    "https://cdn.dummyjson.com/product-images/tops/blue-frock/thumbnail.webp",
            },
            {
                id: 113,
                title: "Generic Motorcycle",
                price: 3999.99,
                quantity: 3,
                total: 11999.97,
                discountPercentage: 12.1,
                discountedTotal: 10547.97,
                thumbnail:
                    "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/thumbnail.webp",
            },
            {
                id: 122,
                title: "iPhone 6",
                price: 299.99,
                quantity: 3,
                total: 899.97,
                discountPercentage: 6.69,
                discountedTotal: 839.76,
                thumbnail:
                    "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/thumbnail.webp",
            },
            {
                id: 138,
                title: "Baseball Ball",
                price: 8.99,
                quantity: 2,
                total: 17.98,
                discountPercentage: 1.71,
                discountedTotal: 17.67,
                thumbnail:
                    "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-ball/thumbnail.webp",
            },
        ],
        total: 13037.88,
        discountedTotal: 11510.81,
        userId: 1,
        totalProducts: 4,
        totalQuantity: 12,
    },
    {
        id: 2,
        products: [
            {
                id: 86,
                title: "Man Short Sleeve Shirt",
                price: 19.99,
                quantity: 5,
                total: 99.95,
                discountPercentage: 6.83,
                discountedTotal: 93.12,
                thumbnail:
                    "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
            },
            {
                id: 104,
                title: "Apple iPhone Charger",
                price: 19.99,
                quantity: 2,
                total: 39.98,
                discountPercentage: 18.52,
                discountedTotal: 32.58,
                thumbnail:
                    "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/thumbnail.webp",
            },
        ],
        total: 139.93,
        discountedTotal: 125.7,
        userId: 2,
        totalProducts: 2,
        totalQuantity: 7,
    },
    {
        id: 3,
        products: [
            {
                id: 24,
                title: "Fish Steak",
                price: 14.99,
                quantity: 1,
                total: 14.99,
                discountPercentage: 4.23,
                discountedTotal: 14.36,
                thumbnail:
                    "https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp",
            },
            {
                id: 123,
                title: "iPhone 13 Pro",
                price: 1099.99,
                quantity: 1,
                total: 1099.99,
                discountPercentage: 9.37,
                discountedTotal: 996.92,
                thumbnail:
                    "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp",
            },
            {
                id: 129,
                title: "Realme X",
                price: 299.99,
                quantity: 1,
                total: 299.99,
                discountPercentage: 6.95,
                discountedTotal: 279.14,
                thumbnail:
                    "https://cdn.dummyjson.com/product-images/smartphones/realme-x/thumbnail.webp",
            },
            {
                id: 86,
                title: "Man Short Sleeve Shirt",
                price: 19.99,
                quantity: 5,
                total: 99.95,
                discountPercentage: 6.83,
                discountedTotal: 93.12,
                thumbnail:
                    "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
            },
            {
                id: 8,
                title: "Dior J'adore",
                price: 89.99,
                quantity: 2,
                total: 179.98,
                discountPercentage: 14.72,
                discountedTotal: 153.49,
                thumbnail:
                    "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
            },
            {
                id: 157,
                title: "Party Glasses",
                price: 19.99,
                quantity: 5,
                total: 99.95,
                discountPercentage: 11.22,
                discountedTotal: 88.74,
                thumbnail:
                    "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/thumbnail.webp",
            },
        ],
        total: 1794.85,
        discountedTotal: 1625.77,
        userId: 3,
        totalProducts: 6,
        totalQuantity: 15,
    },
];

const id = 3;

const findCart = carts.find(function (item) {
    return item.id === id;
});
console.log(findCart);

const orders = [
    {
        id: 1,
        products: ["iphone", "samsung"],
    },
    {
        id: 2,
        products: ["xiaomi", "oppo"],
    },
    {
        id: 3,
        products: ["xiaomi", "oppo"],
    },
];
// Tìm phần tử trong mảng object lồng nhau
// product = "xiaomi"

// kết quả
// {
//     id: 2,
//         products: ["xiaomi", "oppo"]
// }

const foundOrder = orders.find(function (item) {
    return item.products.includes("xiaomi");
});
console.log(foundOrder);

const users = [{ id: 2 }, { id: 1, profile: { email: "a@gmail.com" } }];

// tìm kiếm email = "a@gmail.com"
// kết quả: { id: 1, profile: { email: "a@gmail.com" } }

const findUser = users.find(function (item) {
    return item.profile?.email === "a@gmail.com";
});
console.log(findUser);

// SOME
//  trả về true khi có ít nhất một phần tử thỏa mãn điều kiện và ngược lại

{
    const numbers = [1, 3, 5, 4];
    // kiểm mảng này có phần tử nào là số chẵn hay không.
    const isCheckEven = numbers.some(function (item) {
        return item % 2 === 0;
    });
    console.log(isCheckEven);
    if (isCheckEven) {
        console.log("Mảng này có số chẵn");
    } else {
        console.log("Mảng này không số chẵn");
    }

    const products = [
        { name: "IPhone", stock: 10 },
        { name: "Samsung", stock: 0 },
        { name: "Xiaomi", stock: 5 },
    ];
    // kiểm tra kho hàng có sp hết hàng hay không.
    const isCheckStock = products.some(function (item) {
        return item.stock === 0;
    });
    if (isCheckStock) {
        console.log("Kho hàng có sp hết hàng");
    } else {
    }

    const users = [
        {
            name: "nghiem",
            files: [],
        },
        {
            name: "Đức",
            files: [{ img: "abc" }, { img: "xxx" }],
        },
        {
            name: "Minh",
            files: [{ img: "abc" }, { img: "xxx" }],
        },
    ];

    const isCheckValidateFile = users.some(function (item) {
        return item.files.length === 0;
    });
    if (isCheckValidateFile) {
        console.log("Mời bạn kiểm tra lại file");
    }
}

{
    // every
    // tất cả là true thì sẽ trả về true và ngược lại

    const numbers = [2, 6, 8];
    // kiểm tra mảng numbers có tất cả số chẵn đúng không.
    const hasEvenNumber = numbers.every(function (item) {
        return item % 2 === 0;
    });
    console.log(hasEvenNumber);
}

{
    const users = [{ email: "a@gmail.com" }, { email: "b@gmail.com" }];

    const newEmail = "a@gmail.com";
    // Kiểm tra email trùng

    const isCheckExistEmail = users.some(function (item) {
        return item.email === newEmail;
    });
    console.log(isCheckExistEmail);

    const products = [
        { name: "IPhone", stock: 10 },
        { name: "Samsung", stock: 0 },
        { name: "Xiaomi", stock: 5 },
    ];
    // Kiểm tra có sản phẩm hết hàng không

    const students = [
        { name: "An", score: 8 },
        { name: "Bình", score: 4 },
        { name: "Chi", score: 7 },
    ];
    //   Kiểm tra có học sinh trượt không
    const hasFallStudent = students.some(function (item) {
        return item.score !== 0;
    });
    console.log(hasFallStudent);
    if (hasFallStudent) {
        console.log("Không có HS trượt");
    }

    const orders = [
        { id: 1, paid: true },
        { id: 2, paid: true },
        { id: 3, paid: true },
    ];
    // Kiểm tra tất cả đơn hàng đã thanh toán
    const isCheckPaid = orders.every(function (item) {
        return item.paid;
    });
    console.log(isCheckPaid);

    // Kiểm tra tất cả email thuộc Gmail
    const users1 = [
        { email: "a@gmail.com" },
        { email: "b@gmail.com" },
        { email: "c@gmail.com" },
    ];

    const allGmail = users1.every(function (item) {
        const arr = item.email.split("@");
        console.log(arr);
        return arr[1] === "gmail.com";
    });
    console.log(allGmail);
}

//  sort();

{
    const numbers = [4, 7, 3, 2, 7, 8];

    const updateNumbers = numbers.sort(function (a, b) {
        // if(a > b){
        //     return -1
        // }
        // if(a < b){
        //     return 1
        // }
        return b - a;
    });
    console.log(updateNumbers);
}

{
    // reduce: dùng để duyệt mảng và gom kết quả thành 1 giá trị duy nhất.

    // tính tổng

    const numbers = [1, 2, 3, 4, 5];

    const total = numbers.reduce(function (acc, curr, index, arr) {
        return acc + curr;
    }, 0); // initialValue
    // accumulator (acc): giá trị tích lũy
    // currentValue: phần tử hiện tại
    // index: vị trị
    // arr: arr cũ
    // initialValue: biến khởi tạo
    console.log(total);

    const numbers1 = [3, 6, 9, 7, 4];
    //  tìm số lớn nhất
    // console.log(numbers1.sort(function(a,b){
    //     return b - a;
    // })[0])

    const maxNumber = numbers1.reduce(function (max, item) {
        return item > max ? item : max;
    }, numbers1[0]);
    console.log(maxNumber);

    const orders = [
        { id: 1, amount: 100 },
        { id: 2, amount: 200 },
        { id: 3, amount: 300 },
    ];
    //   tính tổng đơn hàng

    const total1 = orders.reduce(function (acc, item) {
        return acc + item.amount;
    }, 0);
    console.log(total1);

    const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
    //  đếm số lần xuất hiện
    // {
    //     apple: 3,
    //     banana: 2,
    //     orange: 1
    // }
    const count = fruits.reduce(function (acc, item) {
        acc[item] = (acc[item] ?? 0) + 1;
        return acc;
    }, {});
    console.log(count);
}
