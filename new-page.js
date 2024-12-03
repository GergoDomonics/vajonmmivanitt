document.addEventListener('DOMContentLoaded', function() {
    const gameContainer = document.getElementById('game-container');
    const gameInstructions = document.getElementById('game-instructions');
    const congratsImage = document.getElementById('congrats-image');
    let winCount = 0;

    // Function to create a 5x5 grid with random red or green buttons
    function createGrid() {
        for (let i = 0; i < 5; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for (let j = 0; j < 5; j++) {
                const button = document.createElement('button');
                button.classList.add('grid-button');
                button.style.backgroundColor = Math.random() < 0.5 ? 'red' : 'green';
                button.addEventListener('click', function() {
                    if (button.style.backgroundColor === 'red') {
                        button.style.backgroundColor = 'green';
                        checkWinCondition();
                    }
                });
                row.appendChild(button);
            }
            gameContainer.appendChild(row);
        }
    }

    // Function to check if all buttons are green
    function checkWinCondition() {
        const buttons = document.querySelectorAll('.grid-button');
        const allGreen = Array.from(buttons).every(button => button.style.backgroundColor === 'green');
        if (allGreen) {
            winCount++;
            alert(`Congratulations! All buttons are green! You have won ${winCount} times.`);
            if (winCount >= 3) {
                gameContainer.innerHTML = '';
                congratsImage.style.display = 'block';
                gameInstructions.style.display = 'none';
            } else {
                gameContainer.innerHTML = '';
                createGrid();
            }
        }
    }

    createGrid();

    document.getElementById('back-button').addEventListener('click', function() {
        window.history.back();
    });
});