const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPalindrome(original) {
  //Merkkijono pieniksi kirjaimiksi
  original = original.toLowerCase();

  //Käännetään merkkijono toisin päin
  let reversed = "";
  for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
  }

  //Palauttaa tiedon siitä, onko käännetty merkkijono sama kuin alkuperäinen, eli palindromi
  return reversed === original;
}

//Pyydetään merkkijono käyttäjältä ja testataan se
rl.question("Anna sana: ", (original) => {
  if (isPalindrome(original)) {
    console.log("Sana on palindromi.");
  } else {
    console.log("Sana ei ole palindromi.");
  }
  rl.close();
});
