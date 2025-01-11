const textElements = document.querySelector("#text");

buttonElements.addEventListener("click", (events) => {
    events.preventDefault();


    let days = Math.floor(Number(inputElements.value) / 1440);
    let hours = Math.floor((Number(inputElements.value) - days * 1440) / 60);
    let min = Number(inputElements.value) - days * 1440 - hours * 60
    
    if (hours < 12) {
        hours = `${hours}`;
    }
    if (min < 60) {
        min = `${min}`;
    }
    if (days <= 0) {
        textElements.textContent = `${hours}:${min}`;
    } else {
        textElements.textContent = `${days} дн. ${hours}:${min}`;
    }
    inputElements.value = "";
});