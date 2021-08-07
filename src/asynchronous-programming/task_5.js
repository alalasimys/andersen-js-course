const urls = [
  'http://www.json-generator.com/api/json/get/cfVGucaXPC',
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK',
];

const requests = urls.map(url => fetch(url));

function getArrayWithPromiseAll(array) {
  return Promise.all(array)
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => console.log('getArrayWithPromiseAll', data));
}

getArrayWithPromiseAll(requests);

function getArraySequentially(array) {
  const arrSequentially = [];

  const prom = array.reduce(
    (promise, currentUrl) =>
      promise
        .then(() => fetch(currentUrl))
        .then(res => res.json())
        .then(json => arrSequentially.push(json)),
    Promise.resolve()
  );

  return prom.then(() => arrSequentially);
}
getArraySequentially(urls).then(data => console.log('getArraySequentially', data));
