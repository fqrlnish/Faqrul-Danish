function updateClock() {
    const clockElement = document.getElementById('race-clock');
    const now = new Date();
    
    // Format the time as HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Start the clock and update it every 1 second (1000 milliseconds)
setInterval(updateClock, 1000);
updateClock(); // Run immediately so it doesn't show 00:00:00 at the start