//Write a function to check if two strings are anagrams

//define both string
//convert to lowercase both
//check length if not equal then anagram = false
//so take a variable initially as anagram = true
//take first char of first string and compare with chars of second string until find 
// if not find at any point then break loop and both strings not anagram ,anagram =false 
//if loop completed without breaking than anagram = true
function isAnagram(str1, str2) {
    let YesAnagram = true;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // length check
    if (str1.length !== str2.length) {
        return false;
    }

    // convert str2 into array manually
    let str2Arr = [];
    for (let i = 0; i < str2.length; i++) {
        str2Arr[i] = str2.charAt(i);
    }

    // outer loop for str1
    for (let i = 0; i < str1.length; i++) {
        let stringOneChar = str1.charAt(i);
        let found = false;

        // inner loop for str2Arr
        for (let j = 0; j < str2Arr.length; j++) {
            if (stringOneChar === str2Arr[j]) {
                str2Arr[j] = null; // mark as used
                found = true;
                break; // stop searching once matched
            }
        }

        if (!found) {   //if found is flase then yesAnagram is false
            YesAnagram = false;
            break;
        }
    }

    return YesAnagram;
}

// Tests
console.log(isAnagram("abcZ", "bZac"));  // true
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("aab", "aba")); // true
console.log(isAnagram("aab", "abz")); // false
