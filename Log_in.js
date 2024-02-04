let Login = document.querySelector("#Input_t");
let pass = document.querySelector("#Input_p");
let submit = document.querySelector("#button");

let users = {};

function User(Login,pass){
    this.Login = Login;
    this.pass = pass;
}

function createID(){
    return Object.keys(users).length;
}

submit.addEventListener('click', () => {
    const UserLog = Login.value;
    const UerPass = pass.value;

    const user = new User(UserLog,UerPass);

    const userID = "User" + createID(users);
    users[userID] = user;
    console.log(users);

    const fs = require('fs');
    let data = JSON.stringify(users, null, 2);

    fs.writeFile('student-3.json', data, (err) => { 
        if (err) throw err; 
        console.log('Data written to file'); 
    });
})