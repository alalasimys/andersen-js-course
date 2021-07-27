function parseJSON(jsonStr, success, failure) {
  try {
    const result = JSON.parse(jsonStr);
    return success(result);
  } catch (error) {
    return failure(error);
  }
}

function successCb(result) {
  return console.log('Seccess parse!', result);
}

function failureCb(error) {
  return console.log('Error parse!', error);
}

parseJSON('{ "x": 10 }', successCb, failureCb);
parseJSON('{ x }', successCb, failureCb);
parseJSON('{  }', successCb, failureCb);
