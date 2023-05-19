// Rereferencias al dom
const dateDom = document.getElementById("date");
const inputDateDom = document.getElementById("inputDateValue");
const buttonDateDom = document.getElementById("buttonDateSubmit");
const monthDom = document.getElementById("months");
const daysDom = document.getElementById("days");
const hoursDom = document.getElementById("hours");
const minutesDom = document.getElementById("mins");
const secondsDom = document.getElementById("seconds");

// Cuando envie el formulario
dateDom.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevenimos comportamiento default

    // Funcion de la cuenta regresiva
    function countdown() {
        // Obtenemos la fecha marcada y la desglosamos
        let descomponerDate = inputDateDom.value.split("-").reverse();
        let dayDate = descomponerDate[0]; // dia
        let monthDate = descomponerDate[1]; // mes
        let yearDate = descomponerDate[2]; // anio
        let dateInt = `${yearDate}/${monthDate}/${dayDate}` // Formato de fecha

        // Restamos la fecha actual con la deseada para obtener lo que falta
        const newYearsDate = new Date(dateInt); // Fecha que queremos
        const currentDate = new Date(); // Fecha actual

        // usaremos totalSeconds como marca para obtener los demas valores fecha
        const totalSeconds = (newYearsDate - currentDate) / 1000;

        const months = new Date(newYearsDate - currentDate).getMonth()
        const days = Math.floor(totalSeconds / 3600 / 24); // Obtenemos dias
        const hours = Math.floor(totalSeconds / 3600) % 24; // Obtenemos horas
        const minutes = Math.floor(totalSeconds / 60) % 60; // Obtenemos minutos
        const secondss = Math.floor(totalSeconds % 60);

        // Manipulamos el dom colocando cada fecha en donde corresponde
        monthDom.textContent = months;
        daysDom.textContent = days;
        hoursDom.textContent = hours;
        minutesDom.textContent = minutes;
        secondsDom.textContent = secondss;
    
       
}
setInterval(() => {
    countdown();
    console.log(seconds)
}, 1000)
})