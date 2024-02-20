const displayTime = document.getElementById('display-time');

function printTime() {
    const now = new Date();
    displayTime.innerText = now.toLocaleTimeString('fr-be');
}

setInterval(printTime, 300);
printTime();

