function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function fn() {
    return `this is a function`;
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    5 * 2;
  };
}
