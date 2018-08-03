var countdownGenerator = function (x) {
  var number = x
  var count = 0

  return function() {
    if (number > 0) {
      console.log('T-minus ' + number + ' ...')
      number--
    } else if (number === 0) {
      console.log('Blast Off!')
      number--
    } else {
      console.log('Rockets already gone, bub!')
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!