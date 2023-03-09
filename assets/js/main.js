// Al click di un pulsante, deve apparire un alert con un numero random
// function ()
// add EventListener
// alert
// getElementById / QuerySelector
// Math.random

// Seleziono il pulsante tramite QuerySelector

const btnEl = document.querySelector("button")

// Aggiungo EventListener al pulsante appena selezionato

btnEl.addEventListene("click", function (){
    console.log("cliccami")
    alert(Math.random())
})