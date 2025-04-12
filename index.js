const startbut = document.getElementById('start');
const gameArea = document.getElementById('game');
const eles = ['A', 'A', 'B', 'B', 'C', 'C'];
let flippe = [];
startbut.onclick = function() {
    start();
    startbut.innerHTML= 'reset';
};

function start() {
    gameArea.innerHTML = '';
    const shuffled = [...eles].sort(() => Math.random() - 0.5);

    shuffled.forEach(ele => {
        const card = document.createElement('div');
        card.className = 'card';
        card.textContent = ele;
        card.onclick = function() {
            flipCard(this);
        };
        gameArea.appendChild(card);
    });
}

function flipCard(card) {
    if (card.classList.contains('flipped') || flippe.length >= 2) {
        return;
    }
    
 
    card.classList.add('flipped');
    flippe.push(card);
    
    if (flippe.length === 2) {
        setTimeout(() => {

            if (flippe[0].textContent !== flippe[1].textContent) {
                flippe[0].classList.remove('flipped');
                flippe[1].classList.remove('flipped');
            } else {
                const allCards = document.querySelectorAll('.card');
                const allFlipped = document.querySelectorAll('.flipped');
                if (allCards.length === allFlipped.length) {
                    setTimeout(() => {
                        alert('You win!');
                    }, 300);
                }
            }
            flippe = [];
        }, 500);
    }
}

function resetGame() {
    start();
}
