const transcription = require('transcription-words');

transcription('Hello, world!').then(body => {
  console.log(body); // => 'helˈəʊ wɜːld'
});
