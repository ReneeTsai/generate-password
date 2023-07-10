function generatePassword(options) {
  //define things user might want
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = "0123456789";
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';
  // define dummy data
  //   const options = {
  //     length: "12",
  //     lowercase: "on",
  //     uppercase: "on",
  //     numbers: "on",
  //     symbols: "on",
  //     excludeCharacters: "46",
  //   };
  console.log("options", options);
  //create a collection to store thing user pucked up
  let collection = [];
  if (options.lowercase === "on") {
    collection = collection.concat(lowerCaseLetters.split(""));
  }
  if (options.uppercase === "on") {
    collection = collection.concat(upperCaseLetters.split(""));
  }
  if (options.numbers === "on") {
    collection = collection.concat(numbers.split(""));
  }
  if (options.symbols === "on") {
    collection = collection.concat(symbols.split(""));
  }

  //remove user things do not need
  if (options.excludeCharacters) {
    let excludeCharacters = options.excludeCharacters.split("");
    collection = collection.filter((character) => !excludeCharacters.includes(character));
  }

  console.log(collection);
  // return error notice if collection is empty
  if (collection.length === 0) {
    return "There is no valid character in your selection.";
  }
  //start generating password
  let password = "";
  for (let i = 0; i < options.length; i++) {
    let randomIndex = Math.floor(Math.random() * collection.length);
    password += collection[randomIndex];
  }
  console.log(password);
  //return generated password
  return password;
}
// generatePassword();
//export module
module.exports = generatePassword;
