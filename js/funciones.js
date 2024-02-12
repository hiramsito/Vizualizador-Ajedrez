var contadorPaso = 0;

function iniciar() {
  var celdas = document.getElementById("Tablero");
  /* Cargar imagenes en el tablero */
  celdas.rows[1].cells[1].style =
    "background-image: url(./img/TorreN.png); background-size: cover;";
  celdas.rows[1].cells[2].style =
    "background-image: url(./img/CaballoN.png); background-size: cover;";
  celdas.rows[1].cells[3].style =
    "background-image: url(./img/AlfilN.png); background-size: cover;";
  celdas.rows[1].cells[4].style =
    "background-image: url(./img/ReinaN.png); background-size: cover;";
  celdas.rows[1].cells[5].style =
    "background-image: url(./img/ReyN.png); background-size: cover;";
  celdas.rows[1].cells[6].style =
    "background-image: url(./img/AlfilN.png); background-size: cover;";
  celdas.rows[1].cells[7].style =
    "background-image: url(./img/CaballoN.png); background-size: cover;";
  celdas.rows[1].cells[8].style =
    "background-image: url(./img/TorreN.png); background-size: cover;";
  celdas.rows[2].cells[1].style =
    "background-image: url(./img/PeonN.png); background-size: cover;";
  celdas.rows[2].cells[2].style =
    "background-image: url(./img/PeonN.png); background-size: cover;";
  celdas.rows[2].cells[3].style =
    "background-image: url(./img/PeonN.png); background-size: cover;";
  celdas.rows[2].cells[4].style =
    "background-image: url(./img/PeonN.png); background-size: cover;";
  celdas.rows[2].cells[5].style =
    "background-image: url(./img/PeonN.png); background-size: cover;";
  celdas.rows[2].cells[6].style =
    "background-image: url(./img/PeonN.png); background-size: cover;";
  celdas.rows[2].cells[7].style =
    "background-image: url(./img/PeonN.png); background-size: cover;";
  celdas.rows[2].cells[8].style =
    "background-image: url(./img/PeonN.png); background-size: cover;";

  celdas.rows[8].cells[1].style =
    "background-image: url(./img/TorreB.png); background-size: cover;";
  celdas.rows[8].cells[2].style =
    "background-image: url(./img/CaballoB.png); background-size: cover;";
  celdas.rows[8].cells[3].style =
    "background-image: url(./img/AlfilB.png); background-size: cover;";
  celdas.rows[8].cells[4].style =
    "background-image: url(./img/ReinaB.png); background-size: cover;";
  celdas.rows[8].cells[5].style =
    "background-image: url(./img/ReyB.png); background-size: cover;";
  celdas.rows[8].cells[6].style =
    "background-image: url(./img/AlfilB.png); background-size: cover;";
  celdas.rows[8].cells[7].style =
    "background-image: url(./img/CaballoB.png); background-size: cover;";
  celdas.rows[8].cells[8].style =
    "background-image: url(./img/TorreB.png); background-size: cover;";
  celdas.rows[7].cells[1].style =
    "background-image: url(./img/PeonB.png); background-size: cover;";
  celdas.rows[7].cells[2].style =
    "background-image: url(./img/PeonB.png); background-size: cover;";
  celdas.rows[7].cells[3].style =
    "background-image: url(./img/PeonB.png); background-size: cover;";
  celdas.rows[7].cells[4].style =
    "background-image: url(./img/PeonB.png); background-size: cover;";
  celdas.rows[7].cells[5].style =
    "background-image: url(./img/PeonB.png); background-size: cover;";
  celdas.rows[7].cells[6].style =
    "background-image: url(./img/PeonB.png); background-size: cover;";
  celdas.rows[7].cells[7].style =
    "background-image: url(./img/PeonB.png); background-size: cover;";
  celdas.rows[7].cells[8].style =
    "background-image: url(./img/PeonB.png); background-size: cover;";
}

function partidas() {
  var textarea = document.getElementById("texto");
  var valor = document.getElementById("Combo").value;

  switch (valor) {
    case "1":
      textarea.value = "Partida 1";
      break;
    case "2":
      textarea.value = "Partida 2";
      break;
    case "3":
      textarea.value = "Partida 3";
      break;
    default:
      break;
  }
}

function cargarPartida() {
  var archivo = document.getElementById("cargarBoton").files[0];
  var scanner = new FileReader();

  scanner.onload = function (e) {
    document.getElementById("texto").value = e.target.result;
    // document.getElementById("texto").value = document.getElementById("cargarBoton").files;
  };

  scanner.readAsText(archivo);
}

var turnoBlancas = true;

function cambiarTurno() {
  turnoBlancas = !turnoBlancas;
}

async function pasoAPaso() {
  var celdas = document.getElementById("texto").value;

  // celdas.rows[2].cells[1].style = "background-image: none; background-size:cover;";
  // celdas.rows[3].cells[1].style = "background-image: url(./img/PeonN.png); background-size:cover;";
  // switch(contadorPaso){
  //   case 0:
  //     celdas.rows[2].cells[1].style = "background-image: none; background-size:cover;";
  //     celdas.rows[3].cells[1].style = "background-image: url(./img/PeonN.png); background-size:cover;";
  //     break;
  //   case 1:
  //     celdas.rows[2].cells[2].style = "background-image: none; background-size:cover;";
  //     celdas.rows[3].cells[2].style = "background-image: url(./img/PeonN.png); background-size:cover;";
  //     break;
  // }
  // contadorPaso++;
  // console.log(contadorPaso);
  var tabla = document.getElementById("Tablero");
  var lineas = celdas.split("\n");
  for (let i = 0; i < lineas.length; i++) {
    // alert(lineas[i]);
    var tokens = lineas[i].split(" ");
    for (let j = 1; j < tokens.length; j++) {
      // console.log(tokens[j]);
      if (!tieneMayusculas(tokens[j])) {
      }
      var posicion = tokens[j].split(/(\d+)/);
      console.log(
        "Columna " + convertirLetra(posicion[0]) + " Renglon " + posicion[1]
      );
      var columna = parseInt(convertirLetra(posicion[0]));
      var renglon = parseInt(posicion[1]);
      // CAMBIO DE PIEZA uwu
      tabla.rows[renglon].cells[columna].style =
        "background-image: url(./img/PeonN.png); background-size:cover;";

      //DELAY
      console.log(turnoBlancas);
      cambiarTurno();

      await delay(1000);
    }
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function tieneMayusculas(cadena) {
  return /[A-Z]/.test(cadena);
}

function convertirLetra(letra) {
  switch (letra) {
    case "a":
      return 0;
      break;
    case "b":
      return 1;
      break;
    case "c":
      return 2;
      break;
    case "d":
      return 3;
      break;
    case "e":
      return 4;
      break;
    case "f":
      return 5;
      break;
    case "g":
      return 6;
      break;
    case "h":
      return 7;
      break;
  }
}
