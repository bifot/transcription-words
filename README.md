# Transcriptions words

Easy and crystal-clear API for transcription words.

## Installation

```
$ npm install transcription-words
```

## Usage

Module takes only one argument: `text`.

```javascript
const transcription = require('transcription-words');

transcription('Hello, world!').then(body => {
  console.log(body); // => 'helˈəʊ wɜːld'
});
```

## License

MIT.
