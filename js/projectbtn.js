var btns1 = document.getElementById("btnS1");
var btns2 = document.getElementById("btnS2");
var btns3 = document.getElementById("btnS3");

var placeholder = document.getElementById("placeholder");

var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");

btns1.onclick = function () {
    btns1.style.backgroundColor = "rgb(50 52 72)";
    btns2.style.backgroundColor = "#222334";
    btns3.style.backgroundColor = "#222334";

    btns1.style.padding= "25px 150px 19px 150px";
    btns2.style.padding= "22px 150px 22px 150px";
    btns3.style.padding= "22px 150px 22px 150px";
    setTimeout(() => {
    placeholder.style.display = "none";
    s1.style.opacity = "1";
    s2.style.opacity = "0";
    s3.style.opacity = "0";
    }, 100);
    s1.style.display = "block";
    s2.style.display = "none";
    s3.style.display = "none";
}

btns2.onclick = function () {
    btns1.style.backgroundColor = "#222334";
    btns2.style.backgroundColor = "rgb(50 52 72)";
    btns3.style.backgroundColor = "#222334";

    btns1.style.padding= "22px 150px 22px 150px";
    btns2.style.padding= "25px 150px 19px 150px";
    btns3.style.padding= "22px 150px 22px 150px";
    setTimeout(() => {
    placeholder.style.display = "none";
    s1.style.opacity = "0";
    s2.style.opacity = "1";
    s3.style.opacity = "0";
    }, 100);
    s1.style.display = "none";
    s2.style.display = "block";
    s3.style.display = "none";
}

btns3.onclick = function () {
    btns1.style.backgroundColor = "#222334";
    btns2.style.backgroundColor = "#222334";
    btns3.style.backgroundColor = "rgb(50 52 72)";

    btns1.style.padding= "22px 150px 22px 150px";
    btns2.style.padding= "22px 150px 22px 150px";
    btns3.style.padding= "25px 150px 19px 150px";
    setTimeout(() => {
    placeholder.style.display = "none";
    s1.style.opacity = "0";
    s2.style.opacity = "0";
    s3.style.opacity = "1";
    }, 100);
    s1.style.display = "none";
    s2.style.display = "none";
    s3.style.display = "block";
}