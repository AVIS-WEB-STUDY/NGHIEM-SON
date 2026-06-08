// 1: In các số chia hết cho 3 từ 1 → 100.
{
    for (let number = 1; number <= 100; number++) {
        if (number % 3 === 0) {
            console.log(number);
        }
    }
}

// 2: Tính tổng số chẵn từ 1 → 50.
{
    let sum = 0;
    for (let number = 1; number <= 50; number++) {
        if (number % 2 === 0) {
            sum += number;
        }
    }
    console.log(sum);
}

//3. Đảo ngược chuỗi "hello" bằng vòng for.
{
    // lấy ra từng ký tự trong chuồi
    let finalText = "";
    let text = "hello";
    for (let i = text.length - 1; i >= 0; i--) {
        finalText += text[i];
    }
    console.log(finalText);
}

//4. In bảng cửu chương 2 → 9.
{
    for (let i = 2; i <= 9; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}

//5. Tìm số lớn nhất trong mảng: const numbers = [2, 9, 4, 15, 6, 1];
{
    const numbers = [2, 9, 4, 15, 6, 1];
    let maxNumber = numbers[0];
    for (const number of numbers) {
        if (number > maxNumber) {
            maxNumber = number;
        }
    }
    console.log(maxNumber);
}

// 6. Tạo mảng mới chứa bình phương các số: [1, 2, 3, 4] → [1, 4, 9, 16]
{
    const numbers = [1, 2, 3, 4];
    const squares = [];

    for (let num of numbers) {
        squares.push(num ** 2);
    }

    console.log(squares);
}
