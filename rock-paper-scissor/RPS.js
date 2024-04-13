let Score = JSON.parse(localStorage.getItem('score'))||{
  win:0,
  loose:0,
  tie:0
};

updateScore();

function playerGame(playerMove){
  const computerMove = computer();
  let result = '';
  if(playerMove === 'Rock'){
    if(computerMove==='Rock'){
      result = 'It\'s tie' ;
    }else if(computerMove==='Scissor'){
      result = 'You win';
    }else if(computerMove==='Paper'){
      result = 'You lose';
    }
  }
  else if(playerMove === 'Paper'){
    if(computerMove==='Rock'){
      result = 'You win';
    }else if(computerMove==='Scissor'){
      result = 'You lose';
    }else if(computerMove==='Paper'){
      result = 'It\'s tie' ;
    }
  }
  else if(playerMove === 'Scissor'){
    if(computerMove==='Rock'){
      result = 'You lose';
    }else if(computerMove==='Scissor'){
      result = 'It\'s tie' ;
    }else if(computerMove==='Paper'){
      result = 'You win';
    }
  }

  if(result === 'You win'){
    Score.win += 1;
  }else if(result === 'You lose'){
    Score.loose += 1;
  }else if(result === 'It\'s tie'){
    Score.tie += 1;
  }
  localStorage.setItem('score' , JSON.stringify(Score));

  updateScore();

  resultElement = document.querySelector('.js-result');
  resultElement.innerHTML = result;

  chooseElement = document.querySelector('.js-choose');
  chooseElement.innerHTML = `You <img src="${playerMove}-emoji.png" class="move-icon">  <img src="${computerMove}-emoji.png" class="move-icon"> Computer `;


}

function computer(){
  const randomM = Math.random();

  let computerMove = '';
  if(randomM>=0 && randomM<1/3){
    computerMove = 'Rock';
  }else if(randomM>=1/3 && randomM<2/3){
    computerMove = 'Paper';
  }else if(randomM>=2/3 && randomM<=1){
    computerMove = 'Scissor';
  }
  
  return computerMove;
}

function updateScore(){
  const scoreElement = document.querySelector('.js-score');
  scoreElement.innerHTML = `Wins : ${Score.win} , Loses : ${Score.loose} ,  Ties : ${Score.tie}`;
}

let isAutoPlaying = false;
let intervalID;

function autoPlay(){
  
  const autoElement = document.querySelector('.js-auto');
  if(!isAutoPlaying){
    autoElement.innerHTML = 'Stop';
    intervalID = setInterval(function(){
      const compMove2 = computer();
      playerGame(compMove2);
    },3000);
    isAutoPlaying = true;
  } else{
    clearInterval(intervalID);
    isAutoPlaying = false;
    autoElement.innerHTML = 'Auto Play';
  }

}


