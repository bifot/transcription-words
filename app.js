const transcription = require('transcription-words');

transcription('Hello, world!', 'us').then(body => {
  console.log(body); // => 'həˈloʊ wɜːrld'
});
