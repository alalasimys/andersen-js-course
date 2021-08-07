function foo(x, cb) {
  if (x > 10) {
    cb();
    return console.log('x>10');
  }
  return console.log('x<=10');
}

function createCb(str) {
  return function() {
    return console.log(str);
  };
}

foo(5, createCb('cb'));
foo(20, createCb('cb'));
