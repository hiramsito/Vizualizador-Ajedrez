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
    "background-image: url(./img/ReyB.png); background-size: cover;";
  celdas.rows[8].cells[5].style =
    "background-image: url(./img/ReinaB.png); background-size: cover;";
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
