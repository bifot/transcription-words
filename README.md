# Transcriptions words

Easy and crystal-clear API for transcription words.

## Installation

```
$ npm install transcription-words
```

## Usage

Module takes two arguments: `text` and `pronunciation`. If pronunciation isn't defined, it's equal to `UK`.

```javascript
const transcription = require('transcription-words');

transcription('Hello, world!', 'us').then(body => {
  console.log(body); // => 'həˈloʊ wɜːrld'
});
```

## License

MIT.
