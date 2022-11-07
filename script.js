'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);
const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};
//for check button js
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent='😡 No number!';
    displayMessage('😡 No number!');
  }
  //when player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent='🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent=((guess>secretNumber)?'📈 Too High!':'📈 Too Low!');
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📈 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent='🤯 you lose the Game!';
      displayMessage('🤯 you lose the Game!');
      document.querySelector('.score').textContent = 0;
      secretNumber = -1;// now change the secretnumber = -1;
      console.log(secretNumber);
    }
  }

  // when guess is too High
  //    else if(guess>secretNumber){
  //     if(score>1){
  //         document.querySelector('.message').textContent='📈 Too High!';
  //         score--;
  //         document.querySelector('.score').textContent=score;

  //     }else{
  //         document.querySelector('.message').textContent='🤯 you lose the Game!';
  //         document.querySelector('.score').textContent=0;
  //     }
  // }
  // when guess is too Low
  // else if(guess<secretNumber){
  //     if(score>1){
  //         document.querySelector('.message').textContent='📉 Too Low!';
  //         score--;
  //         document.querySelector('.score').textContent=score;
  //     }else{
  //         document.querySelector('.message').textContent='🤯 you lose the Game!';
  //         document.querySelector('.score').textContent=0;
  //     }

  //    }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent='start guessing...'
  displayMessage('start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
