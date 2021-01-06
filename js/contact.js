function ValidateForm(frm) {
    if (frm.Name.value == "") {
        alert('Name is required.');
        frm.Name.focus();
        return false;
    }
    if (frm.FromEmailAddress.value == "") {
        alert('Email address is required.');
        frm.FromEmailAddress.focus();
        return false;
    }
    if (frm.FromEmailAddress.value.indexOf("@") < 1 || frm.FromEmailAddress.value.indexOf(".") < 1) {
        alert('Please enter a valid email address.');
        frm.FromEmailAddress.focus();
        return false;
    }
    if (frm.Comments.value == "") {
        alert('Please enter comments or questions.');
        frm.Comments.focus();
        return false;
    }
    if (frm.skip_CaptchaCode.value == "") {
        alert('Enter web form code.');
        frm.skip_CaptchaCode.focus();
        return false;
    }
    return true;
}

function ReloadCaptchaImage(captchaImageId) {
    var obj = document.getElementById(captchaImageId);
    var src = '' + obj.src;
    obj.src = '';
    var date = new Date();
    var pos = src.indexOf('&rad=');
    if (pos >= 0) {
        src = src.substr(0, pos);
    }
    obj.src = src + '&rad=' + date.getTime();
    return false;
}