import Countdown from "./countdown.js";

//Contador regressivo
$(document).ready(function() {
    const tempoParaOWWB = new Countdown("03 December 2022 21:50:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaOWWB.total[index];
  });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);
})