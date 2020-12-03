var request = require('request');

var data = request('http://fortunecookieapi.com/v1/cookie?fortuneId=&lottoId=&lessonId=&limit=', function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
  return (response)
});