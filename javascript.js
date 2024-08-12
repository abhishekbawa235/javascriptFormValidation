const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submit = document.getElementById('btn');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

const validateInputs = ()=>{
    console.log('Hello',username.value.trim())
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = confirmPassword.value.trim();
    if(usernameValue === ''){
        setError(username,'Username is required');
    }
    else{
        setSuccess(username);
    }
    if(emailValue ===''){
        setError(email,'Email is required');
    }
    else if(!isValidEmail(emailValue)){
        setError(email,"Provide a Valid email");
    }
    else {
        setSuccess(email)
    }
    if(passwordValue === ''){
        setError(password,"Password is required");
    }
    else if(passwordValue.length < 8){
        setError(password,'Password must be at least 8 characters.')
    }
    else {
        setSuccess(password);
    }
    if(cPasswordValue === ''){
        setError(confirmPassword,"Please confirm your password");
    }
    else if(cPasswordValue !== passwordValue){
        setError(password,"Password doesn't match");
    }
    else {
        setSuccess(confirmPassword)
    }
}

const setError = (element,message)=>{
    console.log('ele',message)
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element,message)=>{
    console.log('ele',message)
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


function isValidEmail(e){
    let reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return reg.test(e);
}
