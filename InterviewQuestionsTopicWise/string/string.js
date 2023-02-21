// // Example 1:

// // Input: s = "A man, a plan, a canal: Panama"
// // Output: true
// // Explanation: "amanaplanacanalpanama" is a palindrome.
// // Example 2:

// // Input: s = "race a car"
// // Output: false
// // Explanation: "raceacar" is not a palindrome.
// // Example 3:

// // Input: s = " "
// // Output: true
// // Explanation: s is an empty string "" after removing non-alphanumeric characters.
// // Since an empty string reads the same forward and backward, it is a palindrome.
// question 1
function palindrome(s){
    if (!s) return false;
    if (s.length === 1) return true;
    let newString = s.match(/[a-zA-Z0-9]/g)?.join('').toLowerCase();
    let reverseString = newString?.split('').reverse().join('');

    return newString === reverseString

}
// // let   s = "A man, a plan, a canal: Panama";
// // let s = "0P";
// // let s ="ab_a";
// // let s = undefined;
// // let s = null;
// let s = " ";
// // s.toLowerCase.to
// // let s = "race a car";
// // let  s = " ";
// // console.log(s.trim().length)
// console.log(palindrome(s));
// // console.log(palindrome(s2));
// // console.log(palindrome(s3));


// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// question 2
function anagram(s,t){
    if(!s || !t ||s.length !== t.length)  {

        return false;
    }
    let p = s.split('').sort();
    let e = t.split('').sort();

    let arr =[];
    for (x =0; x< p.length; x ++){
        if( p[x] === e[x]){
            arr.push(true)
        } else {
            arr.push(false)
        }   
    }
    if(arr.includes(false)) return false;
    return true 


}
s = "anagram"
t = "nagaram"
// let s = "acca"
// let t ="ccca"
console.log(anagram(s,t));