
var users = [];

function toggleForm() {
    var curPage = document.getElementById('title').innerText;
    var pageTitle = document.getElementById('title');
    var button = document.getElementById('submitButton');
    var button2 = document.querySelector('h5');

    document.getElementById('username').value="";
    document.getElementById('password').value="";

    if (curPage === 'Login') {
        curPage = "Sign Up";
    } else {
        curPage = "Login";
    }

    button.innerHTML = curPage;
    pageTitle.innerHTML = curPage;
    button2.innerHTML = (curPage === 'Login') ? "Sign Up" : "Login";
}

function submitForm() {
    var button = document.getElementById('submitButton');
    
    if(button.innerHTML=='Login'){
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        var user = users.find(user => user.username === username && user.password === password);
        if (user) {
            alert("Login successful. Username: " + username);
        } else {
            alert("Login failed. Invalid username or password.");
        }
        document.getElementById('username').value="";
        document.getElementById('password').value="";
    }else{
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if(username===''){
            alert("Enter username");
            return;
        }
        if(password===''){
            alert("Enter Password");
            return;
        }
        if(password.length < 8){
            alert("Enter at least 8 latter in password")
            return;
        }
        document.getElementById('username').value="";
        document.getElementById('password').value="";

        users.push({username: username, password: password});
        alert("signup successful. Username: "+ username);
    }
}