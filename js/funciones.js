var turno = true;
var i = 0;
var texto = "";
var noNums = "";
var tokens = "";
var salida = "";



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
    texto = document.getElementById("texto").value;
    //console.log(texto);

    noNums = texto.replace(/\d+\.\s*/g, "");
    //console.log(noNums);

    tokens = noNums.split(/\s+/);

    if (tokens && tokens.length > 0) {
      for (let i = 0; i < tokens.length; i++) {
        salida += tokens[i] + "\n";
      }
      //console.log(salida);
    } else {
      console.log("La variable tokens está vacía o no está definida.");
    }
  };

  scanner.readAsText(archivo);
}

function pasoAPaso() {
  var tabla = document.getElementById("Tablero");
  console.log(tokens[i]);

  if (!tieneMayusculas(tokens[i])) {
    var posicion = tokens[i].split(/([a-zA-Z])(\d+)/);
    console.log(posicion);
    var columna = parseInt(convertirLetra(posicion[1]));
    var renglon = parseInt(convertirNumero(posicion[2]));
    console.log(
      "Estoy en la columna: " + columna + " Y estoy en el renglon: " + renglon
    );
    if (turno) {
      tabla.rows[renglon].cells[columna].style =
        "background-image: url(./img/PeonB.png); background-size:cover;";
    } else {
      tabla.rows[renglon].cells[columna].style =
        "background-image: url(./img/PeonN.png); background-size:cover;";
    }
  } else {
    var posicion = tokens[i].split(/([a-zA-Z])(\d+)/);
    console.log(posicion);
    var columna = parseInt(convertirLetra(posicion[1]));
    var renglon = parseInt(convertirNumero(posicion[2]));
    console.log(
      "Estoy en la columna: " + columna + " Y estoy en el renglon: " + renglon
    );
    if (turno) {
      tabla.rows[renglon].cells[columna].style =
        "background-image: url(./img/PeonB.png); background-size:cover;";
    } else {
      tabla.rows[renglon].cells[columna].style =
        "background-image: url(./img/PeonN.png); background-size:cover;";
    }
  }

  document.getElementById("turno").innerHTML =
    "Movimiento: " +
    (i + 1) +
    " Turno " +
    (turno == true ? "blancas " : " negras ") +
    tokens[i++];
  turno = !turno;

  // if (!tieneMayusculas(tokens[j])) {
  //   var posicion = tokens[j].split(/(\d+)/);
  //   console.log(
  //     "Columna " + convertirLetra(posicion[0]) + " Renglon " + posicion[1]
  //   );
  //   var columna = parseInt(convertirLetra(posicion[0]));
  //   var renglon = parseInt(posicion[1]);

  //   if (turno) {
  //     tabla.rows[renglon + 1].cells[columna + 1].style =
  //       "background-image: url(./img/PeonB.png); background-size:cover;";
  //   } else {
  //     tabla.rows[renglon - 1].cells[columna + 1].style =
  //       "background-image: url(./img/PeonN.png); background-size:cover;";
  //   }
  // } else {
  //   //console.log("Tokens antes de la division: " + tokens[j]);
  //   var posicion = tokens[j].split(/([a-zA-Z])(\d+)/);
  //   //console.log("Tokens después de la division: " + posicion[0]);

  //   console.log(
  //     "Columna " + convertirLetra(posicion[1]) + " Renglon " + posicion[2]
  //   );
  //   var columna = parseInt(convertirLetra(posicion[1]));
  //   var renglon = parseInt(posicion[2]);

  //   if (turno) {
  //     tabla.rows[renglon + 1].cells[columna + 1].style =
  //       "background-image: url(./img/PeonB.png); background-size:cover;";
  //   } else {
  //     tabla.rows[renglon - 1].cells[columna + 1].style =
  //       "background-image: url(./img/PeonN.png); background-size:cover;";
  //   }
  // }

  //console.log("Estamos en el renglon: " + i + " Y la columna: " + j);
  //console.log(tokens[j]);
}

async function partidaCompleta() {
  var celdas = document.getElementById("texto").value;
  var tabla = document.getElementById("Tablero");
  var lineas = celdas.split("\n");

  for (let i = 0; i < lineas.length; i++) {
    // alert(lineas[i]);
    var tokens = lineas[i].split(" ");
    for (let j = 1; j < tokens.length; j++) {
      // console.log(tokens[j]);
      if (!tieneMayusculas(tokens[j])) {
        var posicion = tokens[j].split(/(\d+)/);
        console.log(
          "Columna " + convertirLetra(posicion[0]) + " Renglon " + posicion[1]
        );
        var columna = parseInt(convertirLetra(posicion[0]));
        var renglon = parseInt(posicion[1]);
        if (turno) {
          tabla.rows[renglon + 1].cells[columna + 1].style =
            "background-image: url(./img/PeonB.png); background-size:cover;";
        } else {
          tabla.rows[renglon - 1].cells[columna + 1].style =
            "background-image: url(./img/PeonN.png); background-size:cover;";
        }

        //DELAY
        console.log(turno);
        cambiarTurno();
        document.getElementById("turno").innerHTML =
          "Turno de las " + (turno ? "Blancas" : "Negras") + renglon + columna;
        await delay(3000);
      }
    }
  }
}

function cambiarTurno() {
  turno = !turno;
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
      return 1;
      break;
    case "b":
      return 2;
      break;
    case "c":
      return 3;
      break;
    case "d":
      return 4;
      break;
    case "e":
      return 5;
      break;
    case "f":
      return 6;
      break;
    case "g":
      return 7;
      break;
    case "h":
      return 8;
      break;
  }
}

function convertirNumero(numero) {
  switch (numero) {
    case "1":
      return 8;
      break;
    case "2":
      return 7;
      break;
    case "3":
      return 6;
      break;
    case "4":
      return 5;
      break;
    case "5":
      return 4;
      break;
    case "6":
      return 3;
      break;
    case "7":
      return 2;
      break;
    case "8":
      return 1;
      break;
  }
}
