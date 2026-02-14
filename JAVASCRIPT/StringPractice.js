/* 1. prompt the user to enter thier full name. Generate a username for them based on the 
input. Start username with @, followed by their full name and ending with the 
full name length.  

eg: username: shilpatailor, username should be: @shilpatailor12*/

// let username = prompt("Enter your fullname without spaces.");
// let username = 'shilpatailor'
// let len = username.length;
// console.log(`@${username}${len}`);

let fullname = 'shilpathada';
let username = "@" + fullname + fullname.length;
console.log(username);


