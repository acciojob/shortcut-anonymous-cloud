function shortcut(s1, s2) {
  // your code here
	function shortcut(str1, str2) {
 
  if (!str1 || !str2) {
    return "''";
  }
  
  
  return str1[0] + str2[0];
}


console.log(shortcut("Amnesty", "International")); 
console.log(shortcut("Hello", "world"));           
console.log(shortcut("", "International"));        
console.log(shortcut("Amnesty", ""));              
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
