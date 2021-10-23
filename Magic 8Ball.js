

let userName = 'Jane';
userName ? console.log(userName) : console.log('Hello!');

let userQuestion = 'Is that my cat?';
console.log(`The User's question was ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall ='';

switch(randomNumber){
  case 1:  console.log('It is certain');
  break;
  case 2:  console.log('It is decidedly so');
  break;
  case 3:  console.log('Reply hazy try again');
  break;
  case 4:  console.log('Cannot predict now');
  break;
  case 5:  console.log('Do not count on it');
  break;
  case 6:  console.log('It is certain');
  break
  case 7:  console.log('My sources say no');
  break;
  case 8:  console.log('It certain is');
  break;
  case 9:  console.log('Signs point to yes');
  break;
  default: console.log('Some king of error')
}
