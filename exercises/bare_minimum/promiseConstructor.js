/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  let readLine = Promise.promisify(fs.readFile);
  return readLine(filePath, 'utf8').then(file => {
    if (file){
      return file.split('\n')[0];
    }else{
      throw err;
    }
  });
}

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  let requestPromise = Promise.promisify(request);
  return requestPromise(url).then(response => {
    if (response){
      return (response.statusCode);
    }else{
      throw err;
    }
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
