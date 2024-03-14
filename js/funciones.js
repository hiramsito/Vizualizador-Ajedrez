var PeonB = "background-image: url(./img/PeonB.png); background-size:cover;";
var PeonN = "background-image: url(./img/PeonN.png); background-size:cover;";
var AlfilB = "background-image: url(./img/AlfilB.png); background-size:cover;";
var AlfilN = "background-image: url(./img/AlfilN.png); background-size:cover;";
var CaballoB = "background-image: url(./img/CaballoB.png); background-size:cover;";
var CaballoN = "background-image: url(./img/CaballoN.png); background-size:cover;";
var ReyB = "background-image: url(./img/ReyB.png); background-size:cover;";
var ReyN = "background-image: url(./img/ReyN.png); background-size:cover;";
var ReinaB = "background-image: url(./img/ReinaB.png); background-size:cover;";
var ReinaN = "background-image: url(./img/ReinaN.png); background-size:cover;";
var TorreB = "background-image: url(./img/TorreB.png); background-size:cover;";
var TorreN = "background-image: url(./img/TorreN.png); background-size:cover;";

var borrarCelda = "background-image: none; background-size:cover;";

var contadorPaso = 0;
var j = 0;

var tokens = "";
var i = 0;
var turno = true;
var texto = "";
var columna = "";
var renglon = "";
var posicion = "";
var jaque = "";

function reglas() {
  alert(`Notación de piezas:

    Rey: K
    Reina: Q
    Torre: R
    Alfil: B
    Caballo: N
    Peón: no se indica ninguna letra (por ejemplo, e4)
    Notación de columnas:
    
    Las columnas se indican con letras de la "a" a la "h". La columna más a la izquierda es la "a" y la columna más a la derecha es la "h".
    Notación de filas:
    
    Las filas se indican con números del 1 al 8. El lado de las blancas está en las filas 1 y 2, mientras que el lado de las negras está en las filas 7 y 8.
    Notación de movimientos:
    
    Se utiliza la notación abreviada de la pieza seguida de la casilla a la que se mueve. Por ejemplo, Re4 significa que el Rey se mueve a la casilla e4.
    Capturas:
    
    Cuando una pieza captura a otra, se utiliza "x" para indicar la captura. Por ejemplo, Bxe4 significa que el Alfil captura en la casilla e4.
    Enroque:
    
    El enroque corto se indica con O-O y el enroque largo se indica con O-O-O.
    Peones:
    
    Cuando un peón avanza sin capturar, solo se indica la casilla de destino. Por ejemplo, e4 significa que el peón se mueve a e4.
    Promoción de peones:
    
    Cuando un peón alcanza la octava fila, se promociona a otra pieza (generalmente una reina). La promoción se indica agregando la letra de la pieza deseada después del movimiento del peón. Por ejemplo, e8=Q significa que el peón en e8 se promociona a una reina.
    Jaque:
    
    Se indica con el símbolo "+" al final del movimiento. Por ejemplo, Nf7+ significa que el Caballo ha dado jaque.
    Jaque mate:
    
    Se indica con el símbolo "#" al final del movimiento. Por ejemplo, Qh8# significa que la Reina ha dado jaque mate.`);
}

function removernumero() {
  texto = document.getElementById("textarea1").value.replace(/\d+\.\s*/g, "");
}

function getTokens() {
  tokens = texto.split(/\s+/);
}

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



function pasos() {
  var pieza = "";
  var tabla = document.getElementById("Tablero");
  if (!tieneMayusculas(tokens[i])) {
    pieza = "peon";
    jaque = "";

    if (tokens[i].match(".x.")) {
      posicion = tokens[i].slice(2).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1];
      //mueven blancas

      if (tabla.rows[convertirRenglon(renglon) + 1].cells[convertirLetra(columna) + 1].style.backgroundImage != "none") {
        tabla.rows[convertirRenglon(renglon) + 1].cells[convertirLetra(columna) + 1].style = borrarCelda;
      }
      else {
        tabla.rows[convertirRenglon(renglon) + 1].cells[convertirLetra(columna) - 1].style = borrarCelda;
      }
      tabla.rows[convertirRenglon(renglon)].cells[convertirLetra(columna)].style = PeonB;

    }
    else if (tokens[i].endsWith("+")) {
      jaque = "Jaque";
      posicion = tokens[i].slice(1).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1].slice(-1);
    }
    else if (tokens[i].endsWith("#")) {
      jaque = "Jaque Mate";
      posicion = tokens[i].slice(1).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1].slice(-1);
    } else {
      //Movimiento normal de Peon
      posicion = tokens[i].split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1];
      if (turno) {
        //mueven blancas

        if (tabla.rows[convertirRenglon(renglon) + 1].cells[convertirLetra(columna)].style.backgroundImage != "")
          tabla.rows[convertirRenglon(renglon) + 1].cells[convertirLetra(columna)].style = borrarCelda;
        else
          tabla.rows[convertirRenglon(renglon) + 2].cells[convertirLetra(columna)].style = borrarCelda;

      tabla.rows[convertirRenglon(renglon)].cells[convertirLetra(columna)].style = PeonB;
      //Animación
      tabla.rows[convertirRenglon(renglon)].cells[convertirLetra(columna)].classList.add('move-animation');
      setTimeout(function() {
        tabla.rows[convertirRenglon(renglon)].cells[convertirLetra(columna)].classList.remove('move-animation');
      }, 2000);

      } else {
        //mueven negras

        if (tabla.rows[convertirRenglon(renglon) - 1].cells[convertirLetra(columna)].style.backgroundImage != "")
          tabla.rows[convertirRenglon(renglon) - 1].cells[convertirLetra(columna)].style = borrarCelda;
        else
          tabla.rows[convertirRenglon(renglon) - 2].cells[convertirLetra(columna)].style = borrarCelda;

        tabla.rows[convertirRenglon(renglon)].cells[convertirLetra(columna)].style = PeonN;
        tabla.rows[convertirRenglon(renglon)].cells[convertirLetra(columna)].classList.add('move-animation');
        setTimeout(function() {
          tabla.rows[convertirRenglon(renglon)].cells[convertirLetra(columna)].classList.remove('move-animation');
        }, 2000);
      }
    }
  } else if (tokens[i].startsWith("N")) {
    pieza = "caballo";
    jaque = "";
    if (tokens[i].startsWith("Nx")) {
      posicion = tokens[i].slice(2).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1];
    } else {
      posicion = tokens[i].slice(1).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1];
    }
    if (tokens[i].endsWith("+")) {
      jaque = "Jaque";
      posicion = tokens[i].slice(1).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1].slice(-1);
    }
    if (tokens[i].endsWith("#")) {
      jaque = "Jaque Mate";
      posicion = tokens[i].slice(1).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1].slice(-1);
    }
    // Movimiento del caballo
    
  } else if (tokens[i].startsWith("B")) {
    pieza = "Alfil";
    jaque = "";
    if (tokens[i].startsWith("Bx")) {
      posicion = tokens[i].slice(2).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1];
    } else {
      posicion = tokens[i].slice(1).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1];
    }
    if (tokens[i].endsWith("+")) {
      jaque = "Jaque";
      posicion = tokens[i].slice(1).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1].slice(-1);
    }
    if (tokens[i].endsWith("#")) {
      jaque = "Jaque Mate";
      posicion = tokens[i].slice(1).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1].slice(-1);
    }

    //Movimiento normal de Alfil
    if (turno) {
      tabla.rows[convertirRenglon(renglon)].cells[convertirLetra(columna)].style = AlfilB;

      tabla.rows[convertirRenglon(renglon)].cells[convertirLetra(columna)].classList.add('move-animation');
      setTimeout(function() {
        tabla.rows[convertirRenglon(renglon)].cells[convertirLetra(columna)].classList.remove('move-animation');
      }, 2000);

      var c = convertirLetra(columna) + 1;
      var ci = convertirLetra(columna) - 1;

      for (let i = convertirRenglon(renglon) + 1; i < 9; i++) {
        console.log("Movimiento" + i + " " + c + " " + tabla.rows[i].cells[c].style.backgroundImage);

        if (tabla.rows[i].cells[c].style.backgroundImage == `url("./img/AlfilB.png")`) {
          console.log("borrar" + " " + i + " " + c + " " + tabla.rows[i].cells[c].style.backgroundImage);
          tabla.rows[i].cells[c].style = borrarCelda;
        }

        if (tabla.rows[i].cells[ci].style.backgroundImage == `url("./img/AlfilB.png")`) {
          console.log("borrar" + " " + i + " " + ci + " " + tabla.rows[i].cells[ci].style.backgroundImage);
          tabla.rows[i].cells[ci].style = borrarCelda;
        }

        c++;
        ci--;
      }
    }
    else {
      tabla.rows[convertirRenglon(renglon)].cells[convertirLetra(columna)].style = AlfilN;

      tabla.rows[convertirRenglon(renglon)].cells[convertirLetra(columna)].classList.add('move-animation');
      setTimeout(function() {
        tabla.rows[convertirRenglon(renglon)].cells[convertirLetra(columna)].classList.remove('move-animation');
      }, 2000);

      var c = convertirLetra(columna) + 1;
      var ci = convertirLetra(columna) - 1;

      for (let i = convertirRenglon(renglon) - 1; i > 0; i--) {
        console.log("Movimientowo" + i + " " + c + " " + tabla.rows[i].cells[c].style.backgroundImage);
        if (tabla.rows[i].cells[c].style.backgroundImage == `url("./img/AlfilN.png")`) {
          console.log("borrar" + " " + i + " " + c + " " + tabla.rows[i].cells[c].style.backgroundImage);
          tabla.rows[i].cells[c].style = borrarCelda;
        }

        if (tabla.rows[i].cells[ci].style.backgroundImage == `url("./img/AlfilN.png")`) {
          console.log("borrar" + " " + i + " " + ci + " " + tabla.rows[i].cells[ci].style.backgroundImage);
          tabla.rows[i].cells[ci].style = borrarCelda;
        }

        c++;
        ci--;
      }
    }
  } else if (tokens[i].startsWith("K")) {
    pieza = "Rey";
    jaque = "";
    if (tokens[i].startsWith("Kx")) {
      posicion = tokens[i].slice(2).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1];
    }
    else if (tokens[i].endsWith("+")) {
      jaque = "Jaque";
      posicion = tokens[i].slice(1).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1].slice(-1);
    }
    else if (tokens[i].endsWith("#")) {
      jaque = "Jaque Mate";
      posicion = tokens[i].slice(1).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1].slice(-1);
    } else {
      posicion = tokens[i].slice(1).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1];
    }

    // Movimiento del Rey
    if (turno) {
      tabla.rows[convertirRenglon(renglon)].cells[convertirLetra(columna)].style = ReyB;
  } else {
      tabla.rows[convertirRenglon(renglon)].cells[convertirLetra(columna)].style = ReyN;
  }

  // Animación
  tabla.rows[convertirRenglon(renglon)].cells[convertirLetra(columna)].classList.add('move-animation');
  setTimeout(function () {
      tabla.rows[convertirRenglon(renglon)].cells[convertirLetra(columna)].classList.remove('move-animation');
  }, 2000);
  
  // Actualización de la variable i
  i++;

  } else if (tokens[i].startsWith("Q")) {
    pieza = "Reina";
    jaque = "";
    if (tokens[i].startsWith("Qx")) {
      posicion = tokens[i].slice(2).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1];
    } else {
      posicion = tokens[i].slice(1).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1].replace("x", "");
    }
    if (tokens[i].endsWith("+")) {
      jaque = "Jaque";
      posicion = tokens[i].slice(1).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1].slice(-1);
    }
    if (tokens[i].endsWith("#")) {
      jaque = "Jaque Mate";
      posicion = tokens[i].slice(1).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1].slice(-1);
    }

    // Movimiento de la Reina
    

  } else if (tokens[i].startsWith("R")) {
    pieza = "Torre";
    jaque = "";
    if (tokens[i].startsWith("Rx")) {
      posicion = tokens[i].slice(2).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1];
    } else {
      posicion = tokens[i].slice(1).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1];
    }
    if (tokens[i].endsWith("+")) {
      jaque = "Jaque";
      posicion = tokens[i].slice(1).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1].slice(-1);
    }
    if (tokens[i].endsWith("#")) {
      jaque = "Jaque Mate";
      posicion = tokens[i].slice(1).split(/(\d+)/);
      columna = posicion[0].replace("x", "");
      renglon = posicion[1].slice(-1);
    }

    //Movimiento de la torre
  } else if (tokens[i].startsWith("O")) {
    pieza = "Enroque";
    jaque = "";
  }
  document.getElementById("turno").innerHTML =
    "Movimiento: " +
    (i + 1) +
    " Turno " +
    (turno == true ? "blancas " : " negras ") +
    tokens[i++] +
    " " +
    pieza +
    " y se va a mover a Columna:" +
    columna +
    " Renglon:" +
    renglon +
    " " +
    jaque;
  turno = !turno;
}

function partidas() {
  var textarea = document.getElementById("textarea1");
  var valor = document.getElementById("Combo").value;

  switch (valor) {
    case "0":
      textarea.value = "";
      break;
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
    document.getElementById("textarea1").value = e.target.result;
  };
  scanner.readAsText(archivo);
  removernumero();
  getTokens();
}

// function pasoAPaso() {
//   var tabla = document.getElementById("Tablero");
//   console.log(tokens[i]);

//   if (!tieneMayusculas(tokens[i])) {
//     var posicion = tokens[i].split(/([a-zA-Z])(\d+)/);
//     console.log(posicion);
//     var columna = parseInt(convertirLetra(posicion[1]));
//     var renglon = parseInt(convertirNumero(posicion[2]));
//     console.log(
//       "Estoy en la columna: " + columna + " Y estoy en el renglon: " + renglon
//     );
//     if (turno) {
//       tabla.rows[renglon].cells[columna].style =
//         "background-image: url(./img/PeonB.png); background-size:cover;";
//     } else {
//       tabla.rows[renglon].cells[columna].style =
//         "background-image: url(./img/PeonN.png); background-size:cover;";
//     }
//   } else {
//     var posicion = tokens[i].split(/([a-zA-Z])(\d+)/);
//     console.log(posicion);
//     var columna = parseInt(convertirLetra(posicion[1]));
//     var renglon = parseInt(convertirNumero(posicion[2]));
//     console.log(
//       "Estoy en la columna: " + columna + " Y estoy en el renglon: " + renglon
//     );
//     if (turno) {
//       tabla.rows[renglon].cells[columna].style =
//         "background-image: url(./img/PeonB.png); background-size:cover;";
//     } else {
//       tabla.rows[renglon].cells[columna].style =
//         "background-image: url(./img/PeonN.png); background-size:cover;";
//     }
//   }

//   document.getElementById("turno").innerHTML =
//     "Movimiento: " +
//     (i + 1) +
//     " Turno " +
//     (turno == true ? "blancas " : " negras ") +
//     tokens[i++];
//   turno = !turno;

//   // if (!tieneMayusculas(tokens[j])) {
//   //   var posicion = tokens[j].split(/(\d+)/);
//   //   console.log(
//   //     "Columna " + convertirLetra(posicion[0]) + " Renglon " + posicion[1]
//   //   );
//   //   var columna = parseInt(convertirLetra(posicion[0]));
//   //   var renglon = parseInt(posicion[1]);

//   //   if (turno) {
//   //     tabla.rows[renglon + 1].cells[columna + 1].style =
//   //       "background-image: url(./img/PeonB.png); background-size:cover;";
//   //   } else {
//   //     tabla.rows[renglon - 1].cells[columna + 1].style =
//   //       "background-image: url(./img/PeonN.png); background-size:cover;";
//   //   }
//   // } else {
//   //   //console.log("Tokens antes de la division: " + tokens[j]);
//   //   var posicion = tokens[j].split(/([a-zA-Z])(\d+)/);
//   //   //console.log("Tokens después de la division: " + posicion[0]);

//   //   console.log(
//   //     "Columna " + convertirLetra(posicion[1]) + " Renglon " + posicion[2]
//   //   );
//   //   var columna = parseInt(convertirLetra(posicion[1]));
//   //   var renglon = parseInt(posicion[2]);

//   //   if (turno) {
//   //     tabla.rows[renglon + 1].cells[columna + 1].style =
//   //       "background-image: url(./img/PeonB.png); background-size:cover;";
//   //   } else {
//   //     tabla.rows[renglon - 1].cells[columna + 1].style =
//   //       "background-image: url(./img/PeonN.png); background-size:cover;";
//   //   }
//   // }

//   //console.log("Estamos en el renglon: " + i + " Y la columna: " + j);
//   //console.log(tokens[j]);
// }

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

function convertirRenglon(renglon) {
  switch (renglon) {
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

