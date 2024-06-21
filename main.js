let countdown;
        let timeLeft;
        let isPaused = false;

        document.getElementById('start-btn').addEventListener('click', () => {
            const hours = parseInt(document.getElementById('hours-input').value) || 0;
            const minutes = parseInt(document.getElementById('minutes-input').value) || 0;
            const seconds = parseInt(document.getElementById('seconds-input').value) || 0;
            timeLeft = (hours * 3600) + (minutes * 60) + seconds;
            if (timeLeft > 0) {
                document.getElementById('countdown').textContent = formatTime(timeLeft);
                document.getElementById('countdown').classList.remove('blink');
                clearInterval(countdown);
                countdown = setInterval(updateCountdown, 1000);
            }
        });

        document.getElementById('pause-btn').addEventListener('click', () => {
            if (!isPaused) {
                clearInterval(countdown);
                isPaused = true;
            }
        });

        document.getElementById('continue-btn').addEventListener('click', () => {
            if (isPaused) {
                countdown = setInterval(updateCountdown, 1000);
                isPaused = false;
            }
        });

        document.getElementById('stop-btn').addEventListener('click', () => {
            clearInterval(countdown);
            document.getElementById('countdown').textContent = '00:00:00';
            document.getElementById('countdown').classList.remove('blink');
        });

        document.getElementById('reset-btn').addEventListener('click', () => {
            clearInterval(countdown);
            document.getElementById('hours-input').value = '';
            document.getElementById('minutes-input').value = '';
            document.getElementById('seconds-input').value = '';
            document.getElementById('countdown').textContent = '00:00:00';
            document.getElementById('countdown').classList.remove('blink');
            isPaused = false;
        });

        function updateCountdown() {
            if (timeLeft > 0) {
                timeLeft--;
                document.getElementById('countdown').textContent = formatTime(timeLeft);
            } else {
                clearInterval(countdown);
                document.getElementById('countdown').textContent = '00:00:00';
                document.getElementById('countdown').classList.add('blink');
            }
        }

        function formatTime(seconds) {
            const hours = Math.floor(seconds / 3600);
            const mins = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }