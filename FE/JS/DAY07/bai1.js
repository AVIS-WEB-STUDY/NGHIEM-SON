const valUserName = document.getElementById("valUserName");
const valCity = document.getElementById("valCity");
const genders = document.querySelectorAll("[type='radio'][name='gender']");
const display = document.getElementById("display");

genders[0].setAttribute("checked", true);

const handleSubmit = () => {
    console.log(genders, "genders");
    let gender = "";
    genders.forEach((item) => {
        if (item.checked) {
            gender = item.value;
        }
    });
    display.innerHTML = `
        <p>Tên:${valUserName.value}</p>
        <p>TP:${valCity.value}</p>
         <p> ${gender && ` Giới tính:${gender}`} </p>
    `;
};
