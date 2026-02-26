function validate(e){
    e.preventDefault()

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');

    let message = '';
    if(email === ''){
        message = "Please Enter an Email.";
        msgBox.style.color = "Light Red";
    } else if(pass === ''){
       message = "Please Enter a Password.";
       msgBox.style.color = "Light Red" ;
    } else if(age === ''){
       message = "Please Enter your age.";
       msgBox.style.color = "Light Red" ;
    } else{
       message = "Login Successful.";
       msgBox.style.color = "Light Blue" ;
    }
    msgBox.innerHTML = message;
}

document.getElementById("loginForm").onsubmit = validate;
document.getElementById("email").oninput = () => validate({ preventDefault: () => {}});
document.getElementById("password").oninput = () => validate({ preventDefault: () => {}});
document.getElementById("age").oninput = () => validate({ preventDefault: () => {}});
