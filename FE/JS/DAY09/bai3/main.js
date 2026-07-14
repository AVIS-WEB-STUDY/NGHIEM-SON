const mainImg = document.getElementById("mainImg");
const handleChangeImg = (url) => {
    console.log(url,'url');
    mainImg.setAttribute('src',url)
}