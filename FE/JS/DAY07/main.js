// Arrow Function

// myFun();

// function myFun(){
//     console.log("abc")
// }
() => {};
const exampleFun = () => {
    console.log("abc");
};
exampleFun();

// const newNumbers = [1,2,3,4].map(function(item){
//     return item * 2
// })
const newNumbers = [1, 2, 3, 4].map((item) => item * 2);
console.log(newNumbers);

//
const name = "Cường";
const object = {
    name: "nghiem",
    age: 20,
    address: "Hà Nội",
    company: {
        title: "LG",
        address: "Phạm Hùng",
        demo: {
            a: "abc",
        },
    },
};
console.log(object.name);
console.log(object.age);

// const name = object.name;
// const age = object.age;

const { name: newName, age, address, company } = object;
const { title, address: addressCompany, demo } = company;
const { a } = demo;

console.log(newName);
console.log(age);
console.log(address);
console.log(title);
console.log(addressCompany);
console.log(demo.a);

const value = "Nghiem";

const user = {
    address: "Hà Nội",
    value,
};
console.log(user);

{
    const numbers = [1, 2, 3];

    // [
    //     {
    //         id: 1,
    //         name: "nghiem1"
    //     },
    //     {
    //         id: 1,
    //         name: "nghiem2"
    //     },
    //     {
    //         id: 1,
    //         name: "nghiem3"
    //     }
    // ]

    const newNumbers = numbers.map((item) => {
        const name = `Nghiem ${item}`;
        return {
            id: item,
            name,
        };
    });
    console.log(newNumbers);

    const myFun = (name) => {
        return {
            name,
        };
    };
    console.log(myFun("nghiem"));
}

const numbers = [1, 2, 3, 4];

const [number1, number2, number3, number4] = numbers;

{
    const object = {
        name: "nghiem",
        age: 20,
    };

    const newObject = {
        ...object,
        age: 21,
    };
    object.name = "Cường";
    newObject.name = "Đức";
    console.log(newObject);
    console.log(object);
}
