const request = require('request');

module.exports = (text) => {
  const words = text.replace(/[^\w\s]/gi, '').split(' ');

  return new Promise((resolve, reject) => {
    request({
      url: 'https://myefe.ru/wp-admin/admin-ajax.php',
      method: 'POST',
      form: {
        _n: '66ed76864e',
        action: 'mlsw_api',
        dir: 'en-ru',
        func: 'get_words_info',
        sw: 1,
        words: words,
      },
      json: true
    }, (err, res, body) => {
      if (body.data) {
        const transcr = [];

        body.data.forEach(word => {
          transcr.push(word.transc_data && word.transc_data.transc_gb || '');
        });

        resolve(transcr.join(' '));
      } else {
        reject(err ? err : 'unknown error');
      }
    });
  });
};
