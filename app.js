var scores,activePlayer,currentScore, gamePlaying, winScore;

currentScore = 0;
scores = [0,0];
activePlayer = 0;
winScore = 20;

var lastDice;
newGame();
function newGame() {
	currentScore = 0;
	scores = [0,0];
	activePlayer = 0;
	gamePlaying = true;

	document.querySelector('#dice-1').style.display = 'none';
	document.querySelector('#dice-2').style.display = 'none';

	document.querySelector('#score-0').textContent = '0';
	document.querySelector('#score-1').textContent = '0';
	document.querySelector('#current-0').textContent = '0';
	document.querySelector('#current-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';

}
function rollDice() {
	if(gamePlaying) {
		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;
		if(dice1 === 6 && lastDice === 6){
			// All Entire Score is gone 
			scores[activePlayer] = 0;
			document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer] ;
			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');
		    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		} else if(dice1 !== 1 && dice2 !== 1) {
			currentScore += dice1 + dice2;
			
			document.querySelector('#dice-1').src = 'dice' + '-'+dice1+'.png';
			document.querySelector('#dice-2').src = 'dice' + '-'+dice2+'.png';

			document.querySelector('#dice-1').style.display = 'block';
			document.querySelector('#dice-2').style.display = 'block';
			document.querySelector('#current-'+activePlayer).textContent = currentScore ;
		}else {
			currentScore = 0;
			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');

			document.querySelector('#dice-1').style.display = 'none';
			document.querySelector('#dice-2').style.display = 'none';

			document.querySelector('#current-'+activePlayer).textContent = '0' ;
			activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		}
		lastDice = dice1;
	}
	
}
function Hold() {
	if(gamePlaying) {
		// put the score in the current score in the player score 
		scores[activePlayer] += currentScore;
		document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
		document.querySelector('#current-'+activePlayer).textContent = '0';
		
		// checking if player is won 

		if(scores[activePlayer] >= winScore) {
			document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			document.querySelector('.player-0-panel').classList.remove('active');
			document.querySelector('.player-1-panel').classList.remove('active');

			document.querySelector('#dice-1').style.display = 'none';
			document.querySelector('#dice-2').style.display = 'none';
			gamePlaying = false;

		}else {
			currentScore = 0;
			activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');
			document.querySelector('#dice-1').style.display = 'none';
			document.querySelector('#dice-2').style.display = 'none';
		}
	}
}

function addScore() {
	var winning_score = parseInt(document.querySelector('.winning-score').value,10) ;
	winScore = typeof winning_score === 'number' ?  winning_score : 20;

	document.querySelector('.winning-score').value = '';
}