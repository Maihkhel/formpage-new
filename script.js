function handlesubmit(){
    let name = document.getElementsByClassName("name").value
    let lname = document.getElementsByClassName("lname").value
    let email = document.getElementsByClassName("email").value
    let password = document.getElementsByClassName("password").value
    let phone = document.getElementsByClassName("phone").value

    let firstnamepattern = /^[a-z]{3,}$/gi
    let lastnamepattern = /^[a-z]{3,}$/gi
    let emailpattern = /.{2,}@[a-z]{4}\.[a-z]{3}/gi
    let passwordpattern = /(?=.*[A-Z])(?=.*\d)(?=.*\W)/gi
    let phonepattern = /^\+{1}\d{1,3}\d{7,10}$/gi

    if(name === "" || email === "" || password === "" || phone === ""){
        alert("all fileds are required");

    }else if(!firstnamepattern.test(name)){
        alert("enter valid first name");

    }else if (!lastnamepattern.test(lname)){
        alert("enter valid last name");

    }else if (!emailpattern.test(email)){
        alert("enter valid email");

    }else if (!passwordpattern.test(password)){
        alert("password must contain at least one uppercase letter, one lowercase letter, one digit and one special character");

    }else if (!phonepattern.test(phone)){
        alert("enter valid phone number with country code");

    }else {
        alert("signup successful");
        window.location.reload()
    }
}