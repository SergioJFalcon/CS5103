/** 
  method title: cleanList
  @params: string text
  Description: Takes in a string and splits the string 
    into an array using space, comma, and vertical slash
  Returns: array of strings
**/
export const cleanList = text => {
  const words = text.split(/[\s,|]+/);
  return words;
};

/**
  method title: printCleanList
  @params: array list
  Description: prints an array of list into a single string 
    spaced out by a space
  Returns: String of array
**/
export const printCleanList = list => {
  let printline = '';
  list.forEach((entry) => {
    printline += entry + ' ';
  });

  return printline.trim();
}

/**
  method title: wordCount
  @params: string text
  Description: Breaks apart a large string using space, comma, 
    and a vertical slash as a delimiter to split apart words 
    in the string
  Returns: integer of total words in the string
**/
export const wordCount = text => {
  if (!text) {
    return null;
  }
  else {
    const words = text.split(/[\s,|]+/);
    return words.length;
  }
};

/**
  method title: wordFrequency
  @params: array wordList
  Description: Takes in an array of words and inputs 
    unique words into a map, if a word that is in the map 
    is inputted the count is increased
  Returns: an associated array with the keys being the 'words' 
    and the occurrence of said 'word' count as its value
**/
export const wordFrequency = wordList => {
  let frequency = new Map();

  //run through list of words in textfile
  const listOfWords = cleanList(wordList);
  if(!wordList){
    return [0];
  }
  else {
    for(let i = 0; i < listOfWords.length; i++){
      //check if current word has already been entered into the hashmap

      //if no, add into hashmap with a count of 1
      //if yes, search hashmap and increase count by 1
      if(frequency.has(listOfWords[i])) {
        let increase = frequency.get(listOfWords[i]) + 1;
        frequency.set(listOfWords[i], increase);
      }
       else {
        frequency.set(listOfWords[i], 1);
       }
    }

    let newArray = Array.from(frequency, ([word, counter]) => ({word, counter}));
    return newArray;
  }
  
};

/**
  method title: lineCount
  @params: string textFile
  Description: takes in a large string and counts the number of new lines '\n' 
  Returns: integer of the counted newlines
**/
export const lineCount = textfile => {
  //count the number of '/n'
  if(!textfile){
    return null;
  }
  else {
    let lineCounter = 1;
    for (let i = 0; i < textfile.length; i++) {
      if (textfile[i] === '\n'){
        lineCounter += 1;
      }
    }
    return lineCounter;
  }
};

/**
  method title: charCount
  @params: string textFile
  Description: takes in a large string and counts the number 
    of characters in the string
  Returns: integer of the counted character
**/
export const charCount = textfile => {
  //count the number of characters total in the file
  if(!textfile){
    return null;
  }
  else {
    let charCounter = 0;
    for (let i = 0; i < textfile.length; i++) {
      //check if character is a letter or a number
      if(/^[0-9a-zA-Z]+$/.test(textfile[i])) {
        charCounter += 1;  
      }
    }
    return charCounter;
  }
};

/**
  method title: uniqueCharFrequency
  @params: string textFile
  Description: counts the occurrence  of each character in the 
    string using a map to hold the character as its key and 
    its frequency as its value
  Returns: associated array of the characters as its keys and its frequency as its value
**/
export const uniqueCharFrequency = textfile => {
  //counter for unique characters in the file
  let charFrequency = new Map();
  if(!textfile){
    return [0];
  }
  else {
    for (let i = 0; i < textfile.length; i++) {
      //check if character is a letter or a number
      if(/^[0-9a-zA-Z]+$/.test(textfile[i])) {
        //check if character is unique, if it is increase its count in the map, if not, add it into the map
        if(charFrequency.has(textfile[i])) {
          let increase = charFrequency.get(textfile[i]) + 1;
          charFrequency.set(textfile[i], increase);
        }
         else {
          charFrequency.set(textfile[i], 1);
         }  
      }
    }

    let newArray = Array.from(charFrequency, ([character, counter]) => ({character, counter}));

    return newArray;
  }
};

/**
 * @methodTitle escapeRegExp
 * 
 * @param {string} input 
 * @description: removes characters that aren't numbers or characters from the user submitted text
 * @returns {string}
 */
const escapeRegExp = userInput => {
  return userInput.replace(/[.,*+?^${}()|[\]\\]/g, "");
};

/**
 * The second requirement change is to allow replacement of all
    occurrences of a given pattern word to a given replacement word. 
    
    Note that the  replacement happens only when the given pattern word matches with
    a whole word. For example, for text “ab cd ef”, replace “a” with “b” will result 
    in no change, while replace “ab” with “cd” will result in “cd cd ef”.
 */
/**
 * @method replaceWord
 * 
 * @param {string} textfile 
 * @param {string} wordToBeReplaced 
 * @param {string} replacingWord 
 * @description: Replace every occurance of a given word with a second submitted word
 * @returns {string}
 */
export const replaceWord = (textfile, wordToBeReplaced, replacingWord) => {
  return textfile.replace(new RegExp(`\\b${escapeRegExp(wordToBeReplaced)}\\b`, 'g'), replacingWord); 
};
