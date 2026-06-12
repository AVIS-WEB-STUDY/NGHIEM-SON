// Bài 1:Tìm sản phẩm theo id
{
    const products = [
        { id: 1, name: "iPhone" },
        { id: 2, name: "Samsung" },
        { id: 3, name: "Xiaomi" },
    ];

    const productId = 2;
    const findProduct = (products, productId) => {
        for (const product of products) {
            if (product.id === productId) {
                return product.name;
            }
        }
        return null;
    };
    console.log(findProduct(products, productId));
}

// Bài 2: Tìm đơn hàng chưa thanh toán
{
    const orders = [
        { id: 1, paid: true },
        { id: 2, paid: false },
        { id: 3, paid: true },
    ];

    const getUnpaidOrders = (orders) => {
        const result = [];
        for (const order of orders) {
            if (!order.paid) {
                result[result.length] = order.id;
            }
        }
        return result.length ? result : "Tất cả đơn hàng đã được thanh toán";
    };
    console.log(getUnpaidOrders(orders));
}

// Bài 3: Tìm sản phẩm đắt nhất - Kết quả: { name: "B", price: 300 }
{
    const products = [
        { name: "A", price: 100 },
        { name: "B", price: 300 },
        { name: "C", price: 200 },
    ];

    const findMaxPriceProduct = (products) => {
        if (!products || products.length === 0) {
            return "Không có sản phẩm nào trong list";
        }

        let maxProduct = products[0];
        for (const product of products) {
            maxProduct = product > maxProduct.price ? product : maxProduct;
        }
        return maxProduct;
    };

    console.log(findMaxPriceProduct(products));
}

// Bài 4: Đếm số user đang hoạt động - Kết quả: 2
{
    const users = [
        { name: "A", active: true },
        { name: "B", active: false },
        { name: "C", active: true },
    ];

    const countActiveUsers = (users) => {
        count = 0;
        for (const user of users) {
            if (user.active) {
                count++;
            }
        }
        return count;
    };

    console.log(countActiveUsers(users));
}

// Bài 5: Tìm sản phẩm bán chạy nhất -n Kết quả: iPhone
{
    const orders = [
        "iphone",
        "iphone",
        "samsung",
        "iphone",
        "xiaomi",
        "xiaomi",
    ];

    const getOrderGroup = (orders) => {
        let result = {};
        for (const order of orders) {
            result[order] = (result[order] ?? 0) + 1;
        }
        return result;
    };

    const getBestSelling = (orderGroup) => {
        let maxCount = 0;
        let bestSelling = "";

        for (const product in orderGroup) {
            if (orderGroup[product] > maxCount) {
                maxCount = orderGroup[product];
                bestSelling = product;
            }
        }
        return bestSelling;
    };

    const findBestSellingProduct = (orders) => {
        if (!orders || orders.length === 0) {
            return "Không có sản phẩm nào trong list";
        }

        const orderGroup = getOrderGroup(orders);
        return getBestSelling(orderGroup);
    };

    console.log(findBestSellingProduct(orders));
}

// Bài 6: Tìm số xuất hiện nhiều nhất
// [1, 1, 2, 2, 2, 3] -> 2
{
    const numbers = [1, 1, 2, 2, 2, 3];

    const getNumberCount = (numbers) => {
        const count = {};
        for (const num of numbers) {
            count[num] = (count[num] ?? 0) + 1;
        }
        return count;
    };

    const getMostFrequent = (groupNumber) => {
        let maxCount = 0;
        let mostFrequent = null;

        for (const num in groupNumber) {
            if (groupNumber[num] > maxCount) {
                maxCount = groupNumber[num];
                mostFrequent = num;
            }
        }
        return mostFrequent;
    };

    const findMostFrequentNumber = (numbers) => {
        if (!numbers || numbers.length === 0) {
            return "Không có số nào trong mảng";
        }

        const groupNumber = getNumberCount(numbers);
        return getMostFrequent(groupNumber);
    };

    console.log(findMostFrequentNumber(numbers));
}

// Bài 7: Tìm đơn hàng có giá trị cao nhất - Kết quả: { id: 2, total: 1200 }
{
    const orders = [
        { id: 1, total: 500 },
        { id: 2, total: 1200 },
        { id: 3, total: 800 },
    ];

    const findMaxTotalOrder = (orders) => {
        if (!orders || orders.length === 0) {
            return "Không có sản phẩm nào trong list";
        }

        let maxOrder = orders[0];
        for (const order of orders) {
            maxOrder = order.total > maxOrder.total ? order : maxOrder;
        }
        return maxOrder;
    };

    console.log(findMaxTotalOrder(orders));
}

// Bài 8: Đếm số đơn hàng theo trạng thái
// kết quả: {
//     pending: 2,
//     completed: 1,
//     cancelled: 1
// }

{
    const orders = [
        { status: "pending" },
        { status: "completed" },
        { status: "pending" },
        { status: "cancelled" },
    ];

    const countOrderByStatus = (orders) => {
        if (!orders || orders.length === 0) {
            return "Không có đơn hàng nào trong list";
        }

        const result = {};
        for (const order of orders) {
            const status = order.status;
            result[status] = (result[status] ?? 0) + 1;
        }
        return result;
    };

    console.log(countOrderByStatus(orders));
}

// Bài 9: Đếm tổng số học sinh - Kết quả 3
{
    const classes = [
        {
            name: "A",
            students: ["An", "Bình"],
        },
        {
            name: "B",
            students: ["Cường"],
        },
    ];

    const getTotalStudent = (classes) => {
        if (!classes || classes.length === 0) {
            return "Không có lớp nào trong list";
        }

        let total = 0;
        for (const classItem of classes) {
            total += classItem.students.length;
        }
        return total;
    };

    console.log(getTotalStudent(classes));
}

// Bài 10: Tìm lớp có nhiều học sinh nhất
// Kết quả:
// {
//     name: "B",
//     students: ["Cường", "Dũng", "Hùng"]
// }
{
    const classes = [
        {
            name: "A",
            students: ["An", "Bình"],
        },
        {
            name: "B",
            students: ["Cường", "Dũng", "Hùng"],
        },
    ];

    const getLargestClass = (classes) => {
        if (!classes || classes.length === 0) {
            return "Không có lớp nào trong list";
        }

        let largestClass = classes[0];
        for (const classItem of classes) {
            if (classItem.students.length > largestClass.students.length) {
                largestClass = classItem;
            }
        }
        return largestClass;
    };

    console.log(getLargestClass(classes));
}

// Bài 11: Kiểm tra form có trường nào rỗng không - Kết quả: true.
{
    const form = {
        name: "Nghiem",
        email: "",
        age: 25,
    };

    const hasEmptyField = (form) => {
        for (const field in form) {
            if (form[field] === "") return true;
        }
        return false;
    };

    console.log(hasEmptyField(form));
}
