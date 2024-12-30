let enterInput = prompt("Input the word");

function isPalindrome(word) {
    if (!word) {
        return "Invalid input. Please enter a word"
    }
    word = word.toLowerCase()
        let reversed = word.split('').reverse().join('');
     if (word === reversed) {
        return `${enterInput} is a Palindrome`;
    } else {
        return `${enterInput} is not a Palindrome`;
    }
}
console.log(isPalindrome(enterInput))
// console.log(`Is "${enterInput}" a palindrome?`, isPalindrome(enterInput))