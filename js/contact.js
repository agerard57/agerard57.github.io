function ValidateForm(frm) {
    if (frm.Name.value == "") {
        alert('Le nom est requis.');
        frm.Name.focus();
        return false;
    }
    if (frm.FromEmailAddress.value == "") {
        alert('L\'adresse e-mail est requise.');
        frm.FromEmailAddress.focus();
        return false;
    }
    if (frm.FromEmailAddress.value.indexOf("@") < 1 || frm.FromEmailAddress.value.indexOf(".") < 1) {
        alert('Veuillez entrer une adresse e-mail valide.');
        frm.FromEmailAddress.focus();
        return false;
    }
    if (frm.Comments.value == "") {
        alert('Le contenu est vide.');
        frm.Comments.focus();
        return false;
    }
    if (frm.skip_CaptchaCode.value == "") {
        alert('Captcha vide.');
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