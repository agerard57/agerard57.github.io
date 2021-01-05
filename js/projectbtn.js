var btns1 = document.getElementById("btnS1");
var btns2 = document.getElementById("btnS2");
var btns3 = document.getElementById("btnS3");

var placeholder = document.getElementById("placeholder");

var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");

btns1.onclick = function () {
    setTimeout(() => {
    placeholder.style.display= "none"
    s1.style.opacity = "1";
    s2.style.opacity = "0";
    s3.style.opacity = "0";
    }, 100);
    s1.style.display = "block";
    s2.style.display = "none";
    s3.style.display = "none";
}

btns2.onclick = function () {
    setTimeout(() => {
    placeholder.style.display= "none"
    s1.style.opacity = "0";
    s2.style.opacity = "1";
    s3.style.opacity = "0";
    }, 100);
    s1.style.display = "none";
    s2.style.display = "block";
    s3.style.display = "none";
}

btns3.onclick = function () {
    setTimeout(() => {
    placeholder.style.display= "none"
    s1.style.opacity = "0";
    s2.style.opacity = "0";
    s3.style.opacity = "1";
    }, 100);
    s1.style.display = "none";
    s2.style.display = "none";
    s3.style.display = "block";
}