
        // Function to remove the 'playing' class after the transition ends
        function removeTransition(e) {
            if (e.propertyName !== 'transform') return;
            e.target.classList.remove('playing');
        }

        // Function to play the sound and add the 'playing' class when a key is pressed
        function playSound(e) {
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
            const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
            if (!audio) return;

            key.classList.add('playing');
            audio.currentTime = 0;
            audio.play();
        }

        // Add event listeners to remove the transition and play the sound
        const keys = Array.from(document.querySelectorAll('.key'));
        keys.forEach(key => key.addEventListener('transitionend', removeTransition));
        window.addEventListener('keydown', playSound);
  
