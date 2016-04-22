// 50

function User() {
    var username, password;
    
    function doLogin(user, pw) {
        username = user;
        password = pw;
        
        console.log("User: " + username);
        console.log("Password: " + password);
    }
    
    var publicApi = {
        login: doLogin
    };
    
    return publicApi;
}

var fred = User();
fred.login("Fred", "FredPassword");

var jen = User();
jen.login("Jen", "JenPassword");