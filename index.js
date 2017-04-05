const request = require('request');
const cheerio = require('cheerio');

module.exports = (text, pronunciation) => {
  return new Promise((resolve, reject) => {
    const words = text.replace(/[^\w\s]/gi, '').split(' ');
    const transcriptions = {};

    const requests = words.map(word => {
      return new Promise(resolve => {
        request(`http://wooordhunt.ru/word/${word}`, (err, res, body) => {
          if (!err && res.statusCode == 200) {
            const $ = cheerio.load(body);
            const us = $('#us_tr_sound span').text().trim().replace(/\|/g, '');
            const uk = $('#uk_tr_sound span').text().trim().replace(/\|/g, '');

            if (pronunciation && pronunciation.toUpperCase() == 'US') {
              resolve(us);
            } else {
              resolve(uk);
            }
          }
        });
      });
    });

    Promise.all(requests).then(results => {
      resolve(results.join(' '));
    });
  });
};
