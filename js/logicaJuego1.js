
const secuenciaColores = ['rojo', 'verde', 'rojo', 'azul', 'verde', 'rojo', 'amarillo'];
let indiceActual = 0;


function verificarColor(colorSeleccionado) {

  if (colorSeleccionado === secuenciaColores[indiceActual]) {
    console.log("Has acertado el color", secuenciaColores[indiceActual]);
    document.getElementById("mensaje").innerText = "✅ ¡Correcto!";
    if (indiceActual === secuenciaColores.length - 1) {
      document.getElementById("mensaje").innerText = "🎉 ¡Felicidades! Has completado la secuencia.";
    }
    indiceActual++;
  } else {
    console.log("Color incorrecto. Intenta de nuevo.", secuenciaColores[indiceActual]);
    indiceActual = 0;
    document.getElementById("mensaje").innerText = "❌ Color incorrecto. Vuelve a intentarlo.";
  }
}