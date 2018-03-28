function myReplace(str, before, after) {
  
  var myArr = [];
  
  if ( /[A-Z]/.test(before[0]) ) { // is the first char of before a cap letter.
    if ( /[A-Z]/.test(after[0]) ) { // is the first char of after a cap letter
      myArr = str.replace(before, after);
    }
    else {
      after = toTitleUpper(after);
      myArr = str.replace(before, after);      
    }
  
  }
  else {
    if ( /[A-Z]/.test(after[0]) ){ // is the first char of after a cap letter
      after = toTitleLower(after); // is so make it lowercase.
      myArr = str.replace(before, after);      
    }
      myArr = str.replace(before, after);
  }

  
  function toTitleUpper(str)
      {
          return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() +      txt.substr(1).toLowerCase();});
      }
    
   function toTitleLower(str)  // returns the str with the first letter capitalized.
      {
          return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toLowerCase() +         txt.substr(1).toLowerCase();});
      }  

  console.log(myArr);
  return myArr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

myReplace("Let us get back to more Coding", "Coding", "algorithms");