const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = function() {
  return tutorials.map(sentence => {
    let words = sentenceToWords(sentence)
    let newSentence = ''
    for(let word of words) {
      newSentence += titleCaseWord(word) + ' '
    }
    return newSentence.trim()
  })
}

const sentenceToWords = function(sentence) {
  const words = ['']
  let wordCount = 0
  for(const letter of sentence) {
    if (letter !== ' ') {
      words[wordCount] += letter
    }
    else {
      wordCount++
      words.push('')
    }
  }
  return words
};

const titleCaseWord = function(word) {
  return word.slice(0,1).toUpperCase() + word.slice(1,word.length)
}