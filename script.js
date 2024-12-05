document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.createElement('div');
    countdownElement.id = 'countdown';
    countdownElement.style.textAlign = 'center';
    countdownElement.style.margin = '20px 0';
    document.querySelector('.countdown-container').appendChild(countdownElement);

    function updateCountdown() {
        const now = new Date();
        const eventDate = new Date(now.getFullYear(), 11, 6); // December 6
        const currentTime = now.getTime();
        const eventTime = eventDate.getTime();
        const remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
            countdownElement.innerHTML = '<h2>Katt az ajándékra!</h2>';
            clearInterval(countdownInterval);
        } else {
            const seconds = Math.floor((remainingTime / 1000) % 60);
            const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
            const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

            countdownElement.innerHTML = `
                <h2>Gyere vissza: </h2>
                <p>${days} Nap, ${hours} Óra, ${minutes} Perc, ${seconds} Másodperc múlva!</p>
            `;
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    document.getElementById('play-button').addEventListener('click', function() {
        document.getElementById('background-music').play();
    });

    document.getElementById('gift-box').addEventListener('click', function() {
        const hohoSound = document.getElementById('hoho-sound');
        hohoSound.play().catch(error => {
            console.error('Failed to play the hoho sound:', error);
        });
        // Uncomment the line below and replace with the path to your new page
        // window.location.href = 'your-new-page-link.html';
    });
});