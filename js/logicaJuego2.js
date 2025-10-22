
const numeros = [3, 5, 2, 8, 6, 3, 8, 3, 7, 4, 3, 4, 6, 8, 2];

let intentos = 3;
let puntos = 0;


function ingresarNumero() {
  intentos--;
  console.log("Intentos restantes: " + intentos);
  const input = document.getElementById("numeroInput");
  
  puntos = puntos + contarCantidad(Number(input.value));
  console.log("Puntos acumulados: " + puntos);

  if (intentos < 0) {
    alert("Se acabaron los intentos");
  }
}


function contarCantidad(numero) {
  let contador = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numero) {
      contador++;
    }
  }

  return contador;
}

// console.log(contarCantidad(8)); // Debería devolver 4