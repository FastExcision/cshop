document.addEventListener("DOMContentLoaded", () => {

    const newYear = new Date("2025-12-31T23:59:59");

    const elementDays = document.getElementById("timer-days");
    const elementHours = document.getElementById("timer-hours");
    const elementMinutes = document.getElementById("timer-minutes");
    const elementSeconds = document.getElementById("timer-seconds");

    const updateTimer = () => {
        const now = new Date();
        const diff = Math.max(0, newYear - now);
    
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
    
        elementDays.textContent = String(days);
        elementHours.textContent = String(hours);
        elementMinutes.textContent = String(minutes);
        elementSeconds.textContent = String(seconds);
        
        if (diff === 0) {
          clearInterval(timerId);
        }
      };
    
      updateTimer();
      const timerId = setInterval(updateTimer, 1000);
    });