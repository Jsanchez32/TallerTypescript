var Centro = /** @class */ (function () {
    function Centro(id, nombre, cantidadCampers) {
        this.id = id;
        this.nombre = nombre;
        this.cantidadCampers = cantidadCampers;
    }
    return Centro;
}());
var Ruta = /** @class */ (function () {
    function Ruta(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    return Ruta;
}());
var Nivel = /** @class */ (function () {
    function Nivel(id, nombre, duracion) {
        this.id = id;
        this.nombre = nombre;
        this.duracion = duracion;
    }
    return Nivel;
}());
var Camper = /** @class */ (function () {
    function Camper(id, nombre, ruta, edad, estadoRuta, modalidad) {
        this.id = id;
        this.nombre = nombre;
        this.ruta = ruta;
        this.edad = edad;
        this.estadoRuta = estadoRuta;
        this.modalidad = modalidad;
    }
    return Camper;
}());
var Contrato = /** @class */ (function () {
    function Contrato(id, empresa, modalidad) {
        this.id = id;
        this.empresa = empresa;
        this.modalidad = modalidad;
    }
    return Contrato;
}());
var centro1 = new Centro(1, 'CampusLands', 300);
var centro2 = new Centro(2, 'Campus42', 700);
var centro3 = new Centro(3, 'OpenBootcamp', 200);
var ruta1 = new Ruta(1, 'Artemis');
var contrato1 = new Contrato(1, 'Solvo', 'Virtual');
var contrato2 = new Contrato(1, 'Microsoft', 'Presencial');
var camper = new Camper(1, 'Juan', ruta1.nombre, 18, false, contrato1.modalidad);
var camper2 = new Camper(1, 'Juan A', ruta1.nombre, 18, true, contrato2.modalidad);
if (camper.estadoRuta == false) {
    camper.modalidad = '';
}
var arrayCampers = [];
var arrayCentros = [];
arrayCampers.push(camper, camper2);
var virtuales = 0;
var preseciales = 0;
arrayCampers.forEach(function (arrayCamper) {
    var modalidad = arrayCamper.modalidad;
    if (modalidad === 'Presencial') {
        virtuales++;
    }
    if (modalidad === 'Virtual') {
        preseciales++;
    }
});
console.log("Total de campers presenciales ".concat(preseciales));
console.log("Total de campers virtuales ".concat(virtuales));
console.log(arrayCampers);
arrayCentros.push(centro1, centro2, centro3);
/* let datos:number [] = []

let max:number= 0
arrayCentros.forEach((arrayCentro)=>{
    const {cantidadCampers} = arrayCentro;
    datos.push(cantidadCampers)
})
max = Math.max(...datos);

console.log(datos); */
arrayCentros.sort(function (x, y) { return x.cantidadCampers - y.cantidadCampers; });
console.log(arrayCentros);
