const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const errorText = document.getElementById("errorText");
const isPalindromeText = document.getElementById("isPalindrome");
const isNotPalindrome = document.getElementById("isNotPalindrome");
const resultContainer = document.getElementById("result");

function isPalindrome(word){
    let regex = /[\W_]/g;
    word = word.replace(regex,"").toLowerCase();
    

    const reversed = reverseWord(word);

    if (word === reversed){
        return true;
    }
    return false;
}

function checkValue(){
    if (textInput.value === ""){
        errorText.style.display = "block";
        errorText.innerHTML = 'Please input a value';
        isPalindromeText.style.display = "none";
        isNotPalindrome.style.display = "none";
        resultContainer.style.display = "flex";
        alert("Please input a value")
    }
    else{
        if(isPalindrome(textInput.value)){
            errorText.style.display = "none";
            isPalindromeText.innerHTML = `<span class="strong">${textInput.value}</span> is a palindrome`
            isPalindromeText.style.display = "block";
            isNotPalindrome.style.display = "none";
            resultContainer.style.display = "flex";
        }
        else{
            errorText.style.display = "none";
            isPalindromeText.style.display = "none";
            isNotPalindrome.innerHTML = `<span class="strong">${textInput.value}</span> is not a palindrome`
            isNotPalindrome.style.display = "block";
            resultContainer.style.display = "flex";
        }
    }
}
function clearResponse(){
    errorText.style.display = "none";
    isPalindromeText.style.display = "none";
    isNotPalindrome.style.display = "none";
    resultContainer.style.display = "none";
}

function reverseWord(word){
    let tempString = word.split("");
    tempString = tempString.reverse();
    tempString = tempString.join("");
    return tempString;
}

checkBtn.addEventListener("click",checkValue)
textInput.addEventListener("input",clearResponse)