const inputElements = document.querySelector("#input");
const buttonElements = document.querySelector("#button");
const textElements = document.querySelector("#text");

buttonElements.addEventListener("click", (events) => {
    events.preventDefault();
    let day = Math.floor(Number(inputElements.value) / 1440);
    let hour = Math.floor((Number(inputElements.value) - day * 1440) / 60);
    let min = Number(inputElements.value) - day * 1440 - hour * 60;

   
});