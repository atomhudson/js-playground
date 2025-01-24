const upperSet= "ABCDEFGHIKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqsrtuvwxyz";
const numberSet  = "1234567890";
const symbolSet = "~!@#$%^&*()_+<>{}[]?,:;|\/";

// Selector
const passwordBox = document.getElementById("pass-box");
const totalChars = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");
const generateBtn = document.getElementById("btn");

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
};
const generatePassword = (password = "") => {
    let charOptions = [];

    if (upperInput.checked) {
        charOptions.push(upperSet);
    }
    if (lowerInput.checked){ 
        charOptions.push(lowerSet);
    }
    if (numberInput.checked){
        charOptions.push(numberSet);
    }
    if (symbolInput.checked){
        charOptions.push(symbolSet);
    } 
        
    if (charOptions.length === 0) {
        passwordBox.innerText = "Select at least one option!";
        return;
    }

    if (password.length >= totalChars.value) {
        const passs = password.substring(0, totalChars.value);
        passwordBox.innerText = passs;
        return;
    }
    const randomSet = charOptions[Math.floor(Math.random() * charOptions.length)];
    password += getRandomData(randomSet);

    generatePassword(password);
};
generateBtn.addEventListener("click", () => generatePassword());