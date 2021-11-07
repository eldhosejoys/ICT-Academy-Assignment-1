var email = document.getElementById("email");
var emailerror = document.getElementById("emailerror");
var pname = document.getElementById("name");
var nameerror = document.getElementById("nameerror");
var message = document.getElementById("message");
var messageerror = document.getElementById("messageerror");
let emailRegex = /^([A-Za-z0-9\.-]+)\@([A-Za-z0-9-]+)\.([A-Za-z]{2,3})(\.[A-Za-z]{2,3})?$/;
let nameRegex = /^([A-Za-z]{1,30})(\s[A-Za-z]{1,30}){0,2}$/;
var formsubmitcontact = document.getElementById("formsubmitcontact");
var formerror = document.getElementById("formerror");

var emailvalid = 0;
var namevalid = 0;
var messagevalid = 0;


formsubmitcontact.onsubmit = function() {
    if (emailRegex.test(email.value) && nameRegex.test(pname.value) && message.value.length >= 10) {
        return true;
    } else {
        formerror.innerHTML = "<div class='alert alert-danger rounded-0'>✖ Kindly check all the Fields of the Form. All Fields are required and should be valid.</div>";
        return false;
    }

}

function emailvalidate() {
    if (emailRegex.test(email.value)) {
        emailerror.innerHTML = "<div class='mt-4'><span class='alert alert-success rounded-0'>✔ Valid Email Id.</span></div>";
        emailvalid = 1;
    } else {
        emailerror.innerHTML = "<div class='mt-4'><span class='alert alert-danger rounded-0'>✖ Invalid Email Id.</span></div>";
        emailvalid = 0;
    }
}

function namevalidate() {
    if (nameRegex.test(pname.value)) {
        nameerror.innerHTML = "<div class='mt-4'><span class='alert alert-success rounded-0'>✔ Name looks fine.</span></div>";
        namevalid = 1;
    } else {
        nameerror.innerHTML = "<div class='mt-4'><span class='alert alert-danger rounded-0'>✖ Name doesn't look fine.</span></div>";
        namevalid = 0;
    }
}

function messagevalidate() {
    if (message.value.length >= 10) {
        messageerror.innerHTML = "<div class='mt-4'><span class='alert alert-success rounded-0'>✔ Message looks fine.</span></div>";
        messagevalid = 1;
    } else {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        messageerror.innerHTML = "<div class='mt-4'><span class='alert alert-danger rounded-0'>✖ Minimum 10 characters are required.</span></div>";
        messagevalid = 0;
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


pname.onfocus = function() {
    namevalidate();
    formerror.innerHTML = "";
    pname.onkeyup = function() {
        namevalidate();
    }
}

pname.onblur = function() {
    formerror.innerHTML = "";
    if (namevalid == 1) {
        nameerror.innerHTML = "";
    }
}

message.onfocus = function() {
    messagevalidate();
    formerror.innerHTML = "";
    message.onkeyup = function() {
        messagevalidate();
    }
}

message.onblur = function() {
    formerror.innerHTML = "";
    if (messagevalid == 1) {
        messageerror.innerHTML = "";
    }
}