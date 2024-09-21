
//start register functions
let nameSignup = document.getElementById('nameSignInput');
let emailSignup = document.getElementById('emailSignInput');
let passSignup = document.getElementById('passSignInput');
let signupBtn = document.getElementById('signupBtn')
let users = [];
let existFalg = false;


window.onload = init;
function init(){
    if(localStorage.getItem('token') == 'true'){
        window.location.href='../home.html';
    }
}

if(localStorage.getItem('users') != null){
    users = JSON.parse(localStorage.getItem('users'));
    
}
signupBtn.addEventListener('click',()=>{
    createUser();
})
function emailExist(){
    for(let i = 0 ; i < users.length ; i++){
        if(users[i].email == emailSignup.value){
            existFalg = true;
            return existFalg;
        }
    }
}

emailSignup.addEventListener('keyup',()=>{
    validForm();
    if(emailExist()){
        document.getElementById('signErrMsg').innerHTML = ` <i class="fa-solid fa-exclamation me-2"></i>this email already exist`
    }
    else{
        document.getElementById('signErrMsg').innerHTML = '';
    }
});
passSignup.addEventListener('input',validForm);
nameSignup.addEventListener('input',validForm);

function validForm(){
    if(nameSignup.value != '' && passSignup.value != '' && emailSignup.value != ''){
        signupBtn.disabled = false;
    }
    else{
        signupBtn.disabled = true;
    }
}

function createUser(){
    if(emailExist()){
        signupBtn.disabled = true;
        existFalg = false
        console.log('already registerd');
    }
    else{
        let user={
            name : nameSignup.value,
            email : emailSignup.value,
            pass : passSignup.value,
        }
        users.push(user);
        localStorage.setItem('users',JSON.stringify(users));
        signupBtn.disabled = false;
        document.querySelector('.login-form').classList.remove('d-none');
        document.querySelector('.signup-form').classList.add('d-none');
        existFalg = false;
    }

}
//end register functions


//start login functions
let emailInput = document.getElementById('emailInput');
let passInput = document.getElementById('passInput');
let loginBtn = document.getElementById('logBtn');
let userName = '';
let goToLoginPage = document.getElementById('goLogin');
let goToSignupPage = document.getElementById('gosignup');

goToLoginPage.addEventListener('click',()=>{
    document.querySelector('.signup-form').classList.add('d-none');
    document.querySelector('.login-form').classList.remove('d-none');
})
goToSignupPage.addEventListener('click',()=>{
    document.querySelector('.login-form').classList.add('d-none');
    document.querySelector('.signup-form').classList.remove('d-none');
})
emailInput.addEventListener('keyup',()=>{
    validLoginForm()
});

passInput.addEventListener('keyup',()=>{
    validLoginForm();
})

function validLoginForm(){
    if(emailInput.value != '' && passInput.value != ''){
        loginBtn.disabled = false
    }
    else{
        loginBtn.disabled = true;
    }
}


loginBtn.addEventListener('click',()=>{
    login(emailInput.value,passInput.value)
})

function checkUser(email,password){
    for(let i = 0 ; i < users.length ; i++){
        if(email == users[i].email && password == users[i].pass){
            userName = users[i].name;
            localStorage.setItem('userName',userName);
            return true;
        }
    }
}

function login(email,password){
    if(checkUser(email,password)){
        document.getElementById('logErrMsg').innerHTML = '';
        localStorage.setItem('token','true');
        window.location.reload();
    }
    else{
        document.getElementById('logErrMsg').innerHTML = `<i class="fa-regular fa-circle-xmark"></i> Incorrect email or password`
    }
}
//end login functions
