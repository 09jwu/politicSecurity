//Please fill in the lines where I have put a TO DO comment (as per Mr. Scott's orders).

function sendEmail(subj, msg, eml) {
    window.location.href = "mailto:"+eml+"?subject="+subj+"&body="+msg;
}

function validateForm() {

    const subject = document.getElementById("sbj").value;
    const message = document.getElementById("msg").value;
    const email = document.getElementById("email").value;

    if (subject !== "" && message !== "" && validateEmail(email)) {
        alert("Thank you for submitting your email!")
        sendEmail(subject, message, email)
    } else {
        alert("Form is invalid")
    }
}

function validateEmail(email) {
    return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}