var sum, active = 0, score, game;
newGame();
function nextTurn() {
    sum = 0;
    document.querySelector('#current-' + active).textContent = sum;
    document.getElementById('score-' + active).textContent = score[active];
    if (score[active] >= 20) {
        document.querySelector('.player-' + active + '-panal').classList.remove('active');
        document.querySelector('.player-' + active + '-panal').classList.add('winner');
        document.getElementById('name-' + active).textContent = '!WINNER';
        game = false;
    } else {
        document.querySelector('.player-' + active + '-panal').classList.remove('active');
        active = 1 - active;
        document.querySelector('.player-' + active + '-panal').classList.add('active');
    }
}

function roll() {
    if (game) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var doc = document.querySelector('.dice');
        doc.src = 'dice-' + dice + '.png'
        doc.style.display = 'block';
        if (dice > 1) {
            sum += dice;
            document.querySelector('#current-' + active).textContent = sum;
        } else {
            nextTurn();
        }
    }
}
function hold() {
    if (game) {
        score[active] += sum;
        nextTurn();
    }
}
function newGame() {
    sum = 0;
    score = [0, 0];
    game = true;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    document.querySelector('.player-' + active + '-panal').classList.remove('winner');
    document.querySelector('.player-' + active + '-panal').classList.remove('active');
    active = 0;
    document.querySelector('.player-' + active + '-panal').classList.add('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-roll').addEventListener('click', roll);
document.querySelector('.btn-hold').addEventListener('click', hold);
document.querySelector('.btn-new').addEventListener('click', newGame);


