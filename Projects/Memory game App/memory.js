document.addEventListener('DOMContentLoaded', () => {
    const cardsArray = [
        { name: 'A', matched: false },
        { name: 'A', matched: false },
        { name: 'B', matched: false },
        { name: 'B', matched: false },
        { name: 'C', matched: false },
        { name: 'C', matched: false },
        { name: 'D', matched: false },
        { name: 'D', matched: false }
    ];

    let grid = document.getElementById('grid');
    let firstCard = null;
    let secondCard = null;
    let matches = 0;
    let timer;
    let timeElapsed = 0;
    let lockBoard = false;  // Locking the board to prevent clicks while cards are being compared

    const restartButton = document.getElementById('restart');
    restartButton.addEventListener('click', restartGame);

    function shuffleCards() {
        cardsArray.sort(() => 0.5 - Math.random());
    }

    function createGrid() {
        grid.innerHTML = '';
        cardsArray.forEach(card => {
            let cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.dataset.name = card.name;
            cardElement.addEventListener('click', flipCard);
            grid.appendChild(cardElement);
        });
    }

    function flipCard() {
        if (lockBoard) return;  // Prevent clicks while cards are being compared
        if (this === firstCard || this.classList.contains('matched')) return;  // Ignore the same card or already matched cards

        this.textContent = this.dataset.name;  // Show the card's letter

        if (!firstCard) {
            firstCard = this;  // Store the first card
        } else {
            secondCard = this;  // Store the second card
            lockBoard = true;  // Lock the board until comparison is done

            if (firstCard.dataset.name === secondCard.dataset.name) {
                matchFound();  // If the two cards match
            } else {
                noMatch();  // If the two cards don't match
            }
        }
    }

    function matchFound() {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        matches += 2;

        resetBoard();
        checkWin();
    }

    function noMatch() {
        setTimeout(() => {
            if (firstCard) firstCard.textContent = '';  // Reset first card
            if (secondCard) secondCard.textContent = '';  // Reset second card
            resetBoard();  // Reset the board state
        }, 1000);
    }

    function resetBoard() {
        [firstCard, secondCard] = [null, null];
        lockBoard = false;  // Unlock the board for further clicks
    }

    function checkWin() {
        if (matches === cardsArray.length) {
            clearInterval(timer);
            setTimeout(() => alert(`You won! Time taken: ${timeElapsed} seconds`), 500);
        }
    }

    function startTimer() {
        timeElapsed = 0;
        timer = setInterval(() => {
            timeElapsed++;
            document.getElementById('timer').textContent = `Time: ${timeElapsed} seconds`;
        }, 1000);
    }

    function restartGame() {
        matches = 0;
        firstCard = null;
        secondCard = null;
        shuffleCards();
        createGrid();
        clearInterval(timer);
        startTimer();
    }

    // Start the game initially
    shuffleCards();
    createGrid();
    startTimer();
});
