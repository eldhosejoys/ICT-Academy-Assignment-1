var email = document.getElementById("email");
var emailerror = document.getElementById("emailerror");
let emailRegex = /^([A-Za-z0-9\.-]+)\@([A-Za-z0-9-]+)\.([A-Za-z]{2,3})(\.[A-Za-z]{2,3})?$/;
var formsubmitforgot = document.getElementById("formsubmitforgot");
var formerror = document.getElementById("formerror");
var emailvalid = 0;

function emailvalidate() {
    if (emailRegex.test(email.value)) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        emailerror.innerHTML = "<div class='mt-4'><span class='alert alert-success rounded-0'>✔ Valid Email Id.</span></div>";
        emailvalid = 1;
    } else {
        emailerror.innerHTML = "<div class='mt-4'><span class='alert alert-danger rounded-0'>✖ Invalid Email Id.</span></div>";
        emailvalid = 0;
    }
}

email.onfocus = function() {
    emailvalidate();
    formerror.innerHTML = "";
    email.onkeyup = function() {
        emailvalidate();
    }
}

email.onblur = function() {
    formerror.innerHTML = "";
    if (emailvalid == 1) {
        emailerror.innerHTML = "";
    }
}

formsubmitforgot.onsubmit = function() {
    if (emailRegex.test(email.value)) {
        return true;
    } else {
        formerror.innerHTML = "<div class='alert alert-danger rounded-0'>✖ Kindly check all the Fields of the Form. All Fields are required and should be valid.</div>";
        return false;
    }

}