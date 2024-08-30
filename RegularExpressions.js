const text = 'The quick brown fox jumps over the lazy dog.';

//simple pattern
const simplePattern = /quick/;
console.log('Simple Match:', simplePattern.test(text)); 

//flags (case-insensitive, global search)
const caseInsensitivePattern = /QUICK/i;
console.log('Case Insensitive Match:', caseInsensitivePattern.test(text));

// multiple patterns with alternation
const multiPattern = /quick|lazy|jumps/;
console.log('Multiple Patterns Match:', text.match(multiPattern)); 

// Matching a digit
const digitPattern = /\d/;
console.log('Digit Match:', digitPattern.test('123abc')); 

// Matching a word boundary
const wordBoundaryPattern = /\bfox\b/;
console.log('Word Boundary Match:', wordBoundaryPattern.test(text));

// Using capture groups
const captureGroupPattern = /(\w+)\s(\w+)/;
const match = text.match(captureGroupPattern);
console.log('Capture Groups:', match[0], match[1], match[2]); 

// Replacing text using regular expressions
const replacePattern = /fox/;
const replacedText = text.replace(replacePattern, 'cat');
console.log('Replaced Text:', replacedText); 
