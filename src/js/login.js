document.getElementById('login-btn').addEventListener('click', function(){
    const userMailField = document.getElementById('user-mail');
    const userMail = userMailField.value;
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;

    if(userMail == 'nurulhudda247@gmail.com' && userPassword == 'password'){
        window.location.href = 'home.html'
    }
    
    else{
        window.location.href = 'wrong.html'
    }
});