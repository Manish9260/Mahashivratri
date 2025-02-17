function countdown() {
    const eventDate = new Date("March 8, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `🕉 महाशिवरात्रि शुरू होने में: ${days} दिन ${hours} घंटे ${minutes} मिनट ${seconds} सेकंड`;
    } else {
        document.getElementById("countdown").innerHTML = "🔱 हर हर महादेव! महाशिवरात्रि आ गई! 🔱";
    }
}
setInterval(countdown, 1000);