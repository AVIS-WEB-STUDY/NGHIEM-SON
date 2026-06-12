/**
 * 1: Kiểm tra xem một số có phải là số nguyên tố lớn không. Nếu có, in ra số nguyên tố lớn nhất trong khoảng từ 1 đến
  số đó.
  Input: 20
  Output: 19
  Input: 15
  Output: 13
 */

/**
 * Bài 2: Tìm tất cả các cặp số (a, b) sao cho a và b là số nguyên tố và a + b = n, với n là số nguyên dương cho trước.
  Input: 10
  Output: (3, 7)
  Input: 20
  Output: (3, 17), (7, 13)
 */


/**
 * 3: Viết một hàm nhận vào một tham số là một mảng các phần tử là số, trả về số lớn nhất trong
mảng
 */

/**
 * Bài 4: cho mảng number: const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
nếu phần tử trong mảng chẵn thì cho vào mảng evenNumbers = [] => kết quả evenNumber = [4,44,64,24,32,74,22]
và ngược lại lấy số lẻ cho vào mảng oddNumbers
 */


/*
B5: cho mảng a và b
  const a = ["A", "B", "C"]; .
  const b = [1, 2, 3];
  từ mảng a và b tạo ra mảng c có dạng như sau:
      let c = [
        { value: "A1", id: 1 },
        { value: "B2", id: 2 },
        { value: "C3", id: 3 },
      ];
*/


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


/**
 * câu 7: const number = [2, -5, 6, -7, -4, 7, -1, -1];
        a: tính trung bình cộng số âm
        b: in ra danh sách các số âm lớn hơn giá trị tính ở ý a
        c: tìm số âm lớn nhất trong mảng
 */


/**
 *  câu 8: Loại bỏ các phần tử trùng lặp trong mảng let numbers = [1, 2, 3, 4, 2, 5, 6, 1, 3]; tìm hiểu includes hoặc indexOF hoặc ko dùng 2 hàm đó
 */

/**
 * Câu 9: Viết 1 hàm nhận vào 1 mảng và 1 số nguyên dương n
 * sau đó trả về mảng mới chứa các mảng con có kích thước n.
 * let mangSo = [1,2,3,4,5,6,7,8,9]
 * kích thước n = 3
 * viết 1 hàm tachMangCao(mangSo,3)
 * kết quả: [[1,2,3],[4,5,6],[7,8,9]]
 */



/**
 * Câu 10: đếm số lượng phần tử trong mảng
 * const lang = ["php","js","c++","java","php","js","php"]
 * output 
 *  {
 *    php:3,
 *    js:2,
 *    java:1,
 *    c++:1
 *  }
 */

/**
 * Bài 11: Xóa tất cả số âm trong mảng 
 * [3, -1, 5, -2] → [3, 5] (Mảng mới)
 */

/**
 * Bài 12: Đếm số phần tử âm trong mảng
 */

/**
 * Bài 13: Nhân đôi mỗi phần tử trong mảng ( tạo mảng mới)
 * 
 */

/**
 * Bài 14: Thay thế số âm bằng 0
 * [3,-2,5,-1] → [3,0,5,0]
 */



/**
 * Bài 15: Tìm số chẵn lớn nhất trong mảng
 * [3, 8, 2, 11, 6] → 8
 */

Bài 16: Đếm số lần xuất hiện của từng ký tự
"hello" → { h:1, e:1, l:2, o:1 }


    /**
 *  Bài 17:: Lấy tên từ danh sách user
 * [
    {name: "An", age: 20},
    {name: "Bình", age: 25}
   ]
    → ["An", "Bình"]
 */

/**
 *  Bài 18: Tìm số âm đầu tiên
 * [5, 2, -3, -8] -> -3
 */

/**
 * Bài 19:  const carts = [
        { name: "Áo", price: 100, qty: 2 },
        { name: "Quần", price: 200, qty: 1 },
        { name: "Giày", price: 300, qty: 3 }
    ];
  =>  { name: "Giày", price: 300, qty: 3 }
//   lấy ra sản phẩm có tổng giá tiền lớn nhất.
 */


    /**
 * Bài 20: const orders = [
  { id: 1, user: "An", total: 200 },
  { id: 2, user: "Bình", total: 500 },
  { id: 3, user: "An", total: 300 }
];

- Tính tổng tiền mỗi user
    Kết quả: {
                An: 500,
                Bình: 500
              }

- Tìm user chi nhiều tiền nhất
- Tính tổng tiền toàn bộ orders của user "An"
 */