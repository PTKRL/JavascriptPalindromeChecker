const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPalindrome(word) {
  //Merkkijono pieniksi kirjaimiksi
  word = word.toLowerCase();

  //Käännetään merkkijono toisin päin
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }

  //Palauttaa tiedon siitä, onko käännetty merkkijono sama kuin alkuperäinen, eli palindromi
  return reversed === word;
}

//Pyydetään merkkijono käyttäjältä ja testataan se
rl.question("Anna sana: ", (word) => {
  if (isPalindrome(word)) {
    console.log("Sana on palindromi.");
  } else {
    console.log("Sana ei ole palindromi.");
  }
  rl.close();
});
