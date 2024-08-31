const passbox = document.getElementById("password")
const upperCase = "ABCDEFGHIJKLMOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const num = "1234567890"
const symbols = "~`! @#$%^&*()_-+={[}]|:;'<,>.?/"
let passlength = 12;

const allchar = upperCase + lowerCase + num + symbols
function genpass(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    while(passlength > password.length){
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }
    passbox.value = password
}



function copypass(){
    passbox.select();
    navigator.clipboard.writeText(passbox.value);
}
