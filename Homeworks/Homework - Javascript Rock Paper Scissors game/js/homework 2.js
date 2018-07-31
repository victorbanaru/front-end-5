function play () {
  var myGame = ['Rock', 'Paper', 'Scissors'];
  var computer = "";
  var user = "";
  var result = "";
  computer = myGame[Math.floor(Math.random() * myGame.length)];
  user = myGame[Math.floor(Math.random() * myGame.length)];
  switch (computer) {
    case 'Rock':
      if (user === 'Paper') {
        result = 'User wins!';
      } else if (user === 'Scissors') {
        result = 'Computer wins!';
      } else {
        result = 'Call it draw!';
      }
        break;
    case 'Paper':
      if (user === 'Rock') {
        result = 'Computer wins!';
      } else if (user === 'Scissors') {
        result = 'User wins!';
      } else {
        result = 'Call it draw!';
      }
        break;
    case 'Scissors':
      if (user === 'Rock') {
        result = 'User wins!';
      } else if (user === 'Paper') {
        result = 'Computer wins!';
      } else {
        result = 'Call it draw!';
      }
        break;
  }
  console.log('Computer choice: ' + computer);
  console.log('User chioce: ' + user);
  console.log(result);
}