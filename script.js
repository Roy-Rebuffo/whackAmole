const switch_topo = 1000;
const game_time = 15000;
let timeUp = true;
let timer = null;
let score = 0;
const holes = [
    document.querySelector('.hole1'),
    document.querySelector('.hole2'),
    document.querySelector('.hole3'),
    document.querySelector('.hole4'),
    document.querySelector('.hole5'),
    document.querySelector('.hole6'),
];
const moles$$ = document.querySelectorAll('.mole');
for(const mole$$ of moles$$){
    mole$$.addEventListener('click', whack);
}
function startGame(){
    endGame();
    timer = setInterval(changeTopo, switch_topo);
    timeUp = false;
    score = 0;
    updateScoreBoard();
    setTimeout(endGame, game_time);
}
function changeTopo(){
    hideTopo();
    const randomHole$$ = holes[getrandomHole()];
    randomHole$$.classList.add('up');
}
function hideTopo(){
    for(const hole$$ of holes){
        hole$$.classList.remove('up');
    }
}
function getrandomHole(){
    return Math.floor(Math.random() * 6);
}
function whack(){
    const hole$$ = this.closest('.hole');
    if(!timeUp && hole$$.classList.contains('up')){
        hole$$.classList.remove('up');
        addPoint();
    }
}
function addPoint(){
    score++;
    updateScoreBoard();
}
function updateScoreBoard(){
    const scoreBoard$$ = document.querySelector('.score');
    scoreBoard$$.textContent = score;
}
function endGame(){
    if(timer !== null){
        clearInterval(timer);
    }
    hideTopo();
    timeUp = true;
}