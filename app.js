'use strict'; 
// let jsonData = require('./student.json'); 
// jsonData.Name = "Amir";
// console.log(jsonData); 

// const fs = require('fs'); 
 
//  let student = { 
//  name: 'Mike', 
//  age: 23, 
//  gender: 'Male', 
//  department: 'English', 
//  car: 'Honda' 
//  }; 
 
//  let data = JSON.stringify(student, null, 2); 
 
//  fs.writeFile('student-3.json', data, (err) => { 
//  if (err) throw err; 
//  console.log('Data written to file'); 
//  }); 
 
//  console.log('This is after the write call'); 

const fs = require('fs');

let Account = {
    Name: "School_net_142",
    Password:"qwerty142wifi",
}

let data = JSON.stringify(Account, null, 2);

fs.writeFile('student-3.json', data, (err) => { 
     if (err) throw err; 
     console.log('Data written to file'); 
});