


console.log("ss")
function login(){
    var username = document.getElementById('loginUsername').value
    var password = document.getElementById('loginPassword').value
    var csrf = document.getElementById('csrf').value

    if(username == '' && password == ''){
        alert('You must enter both')
    }

    var data = {
        'username' : username,
        'password' : password
    }

    fetch('/api/login/' , {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken' : csrf,
        },
       
        body : JSON.stringify(data)
    }).then(result => result.json())
    .then(response => {
        
        if(response.status == 200){
            window.location.href = '/'
        }
        else{
            alert(response.message)
        }

    })

}


function register(){
    var username = document.getElementById('loginUsername').value
    var password1 = document.getElementById('loginPassword1').value
    var password2 = document.getElementById('loginPassword2').value
    var csrf = document.getElementById('csrf').value

    if(username == '' && password == ''){
        alert('You must enter both')
    }

    if(password1 == '' && password2 == ''){
        alert('You must enter both password and password confirmation')
    }

    if(password1 != password2){
        alert('You must repeat password!')
    }

    var data = {
        'username' : username,
        'password' : password1
    }

    fetch('/api/register/' , {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken' : csrf,
        },
       
        body : JSON.stringify(data)
    }).then(result => result.json())
    .then(response => {
        console.log(response)
        if(response.status == 200){
            window.location.href = '/login'
        }
        else{
            alert(response.message)
        }

    })

}