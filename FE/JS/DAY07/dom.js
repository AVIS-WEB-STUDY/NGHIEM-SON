console.log({ document })
document.title = "DOM"

const demoId = document.getElementById("demoId");
console.log({ demoId });
demoId.style.color = "red"
demoId.innerHTML = "<span>Xin chào<span>"


const valUserName = document.getElementById("valUserName");
console.log({ valUserName }, 'valUserName');
console.log(valUserName.value);

const showValue = document.getElementById("showValue");
const btnSubmit = document.getElementById("btnSubmit");
console.log({ btnSubmit });

btnSubmit.onclick = () => {
    showValue.innerText = valUserName.value;
    valUserName.value = "";
}

// class

const demoClass = document.getElementsByClassName("demoClass");

console.log({ demoClass });
for (let index = 0; index < demoClass.length; index++) {
    const element = demoClass[index];
    if (index % 2 === 0) {
        element.style.color = "blue"
    } else {
        element.style.color = "red"
    }
}

//  tag name
const demoTagName = document.getElementsByTagName("p");

console.log({demoTagName});


// querySelector

const demoQuerySelector = document.querySelector(".demoClass");
console.log(demoQuerySelector,'demoQuerySelector');

// querySelectorAll
const demoQuerySelectorAll = document.querySelectorAll(".demoClass");
console.log(demoQuerySelectorAll,'demoQuerySelectorAll');
demoQuerySelectorAll.forEach((item,index) => {
        if(index === 3){
            item.style.fontSize = "40px"
        }
})


// getattribute và setattribute 

const link = document.getElementById("link");

link.setAttribute("href","https://www.google.com/")
link.setAttribute("target","_blank")

const id = link.getAttribute("id");
console.log(id,'idid');


const div = document.getElementById("mousemove");

// mousemove.onmousemove = (e) => {
//     console.log("xxxxxxxxxx")
//     mousemove.style.background = "green"
//     console.log(e,"xxxxxxxxxxx");
    
// }
div.ondblclick = () => {
console.log("xxxxxxxxxx")
}

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click",() => {
    alert("Hello")
})
const main = document.querySelector("#main");

console.log(main,'bodybodybody');

window.addEventListener("scroll",(e) => {
    console.log(e,'xxxxxxxxx',window.scrollY );
    if(window.scrollY > 100){
             div.style.background = "blue"
    }else {
        div.style.background = "green"
    }
   
})

window.addEventListener("resize", (e) => {
    console.log(window.innerWidth,'window.screenX');
    
    if(window.innerWidth < 600){
        main.innerHTML = `<h1>Page này chỉ dùng cho PC</h1>`
    }
})