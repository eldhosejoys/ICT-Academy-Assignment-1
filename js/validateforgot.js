var email = document.getElementById("email");
var emailerror = document.getElementById("emailerror");
let emailRegex = /^([A-Za-z0-9\.-]+)\@([A-Za-z0-9-]+)\.([A-Za-z]{2,3})(\.[A-Za-z]{2,3})?$/;
var formsubmitforgot = document.getElementById("formsubmitforgot");
var formerror = document.getElementById("formerror");
var emailvalid = 0;

function emailvalidate() {
    if (emailRegex.test(email.value)) {
        emailerror.innerHTML = "<div class='mt-4'><span class='alert alert-success rounded-0'>✔ Valid Email Id.</span></div>";
        emailvalid = 1;
    } else {
        emailerror.innerHTML = "<div class='mt-4'><span class='alert alert-danger rounded-0'>✖ Invalid Email Id.</span></div>";
        emailvalid = 0;
    }
}

email.onfocus = function() {
    emailvalidate();
    email.onkeyup = function() {
        formerror.innerHTML = "";
        emailvalidate();
    }
}

email.onblur = function() {
    if (emailvalid == 1) {
        formerror.innerHTML = "";
        emailerror.innerHTML = "";
    }
}

formsubmitforgot.onsubmit = function() {
    if (emailvalid == 1) {
        return true;
    } else {
        formerror.innerHTML = "<div class='alert alert-danger rounded-0'>✖ Kindly check all the Fields of the Form. All Fields are required and should be valid.</div>";
        return false;
    }

}