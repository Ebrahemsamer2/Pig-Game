var scores,activePlayer,currentScore, gamePlaying;

currentScore = 0;
scores = [0,0];
activePlayer = 0;

newGame();
function newGame() {
	currentScore = 0;
	scores = [0,0];
	activePlayer = 0;
	gamePlaying = true;
	document.querySelector('.dice').style.display = 'none';
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
		var dice = Math.floor(Math.random() * 6) + 1;

		if(dice !== 1) {
			currentScore += dice;
			document.querySelector('.dice').src = 'dice' + '-'+dice+'.png';
			document.querySelector('.dice').style.display = 'block';
			document.querySelector('#current-'+activePlayer).textContent = currentScore ;
		}else {
			currentScore = 0;
			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('#current-'+activePlayer).textContent = '0' ;
			activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		}
	}
	
}
function Hold() {
	if(gamePlaying) {
		// put the score in the current score in the player score 
		scores[activePlayer] += currentScore;
		document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
		document.querySelector('#current-'+activePlayer).textContent = '0';
		
		// checking if player is won 

		if(scores[activePlayer] >= 20) {
			document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			document.querySelector('.player-0-panel').classList.remove('active');
			document.querySelector('.player-1-panel').classList.remove('active');
			document.querySelector('.dice').style.display = 'none';
			gamePlaying = false;

		}else {
			currentScore = 0;
			activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');
			document.querySelector('.dice').style.display = 'none';
		}
	}
}


