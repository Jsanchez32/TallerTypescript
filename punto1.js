"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Centro = /** @class */ (function () {
    function Centro(id, nombre, cantidadCampers) {
        this.id = id;
        this.nombre = nombre;
        this.cantidadCampers = cantidadCampers;
    }
    Centro.prototype.cantidadCentros = function () {
        arrayCentros.sort(function (x, y) { return x.cantidadCampers - y.cantidadCampers; });
        console.log("El centro con mayor campers es ".concat(arrayCentros[arrayCentros.length - 1].nombre, " con ").concat(arrayCentros[arrayCentros.length - 1].cantidadCampers, " campers"));
        console.log("El centro con menor campers es ".concat(arrayCentros[0].nombre, " con ").concat(arrayCentros[0].cantidadCampers, " campers"));
    };
    return Centro;
}());
var Ruta = /** @class */ (function () {
    function Ruta(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    return Ruta;
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
    Camper.prototype.modalidadCampers = function () {
        arrayCampers.forEach(function (arrayCamper) {
            var modalidad = arrayCamper.modalidad;
            if (modalidad === 'Presencial') {
                preseciales++;
            }
            if (modalidad === 'Virtual') {
                virtuales++;
            }
        });
        console.log("Total de campers presenciales ".concat(preseciales));
        console.log("Total de campers virtuales ".concat(virtuales));
    };
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
// Datos Centros //
var centro1 = new Centro(1, 'CampusLands', 300);
var centro2 = new Centro(2, 'Campus42', 700);
var centro3 = new Centro(3, 'OpenBootcamp', 200);
var centro4 = new Centro(3, 'Udemy', 600);
var centro5 = new Centro(3, 'FreeCodeCamp', 300);
// Datos Rutas //
var ruta1 = new Ruta(1, 'Artemis');
var ruta2 = new Ruta(2, 'Apolo');
var ruta3 = new Ruta(3, 'Sputnik');
// Datos contratos//
var contrato1 = new Contrato(1, 'Solvo', 'Virtual');
var contrato2 = new Contrato(2, 'Microsoft', 'Presencial');
var contrato3 = new Contrato(3, 'Facebook', 'Presencial');
var contrato4 = new Contrato(4, 'Whatsapp', 'Presencial');
// Datos campers // 
var camper = new Camper(1, 'Juan', ruta1.nombre, 18, false, contrato1.modalidad);
var camper2 = new Camper(2, 'Carlos', ruta2.nombre, 17, true, contrato2.modalidad);
var camper3 = new Camper(3, 'Sebastian', ruta1.nombre, 18, false, contrato3.modalidad);
var camper4 = new Camper(4, 'Cristian', ruta3.nombre, 18, true, contrato4.modalidad);
var camper5 = new Camper(5, 'Raul', ruta1.nombre, 18, true, contrato1.modalidad);
if (camper.estadoRuta == false) {
    camper.modalidad = '';
}
var arrayCampers = [];
var arrayCentros = [];
var arrayRutas = [];
var arrayContratos = [];
arrayCampers.push(camper, camper2, camper3, camper4, camper5);
arrayCentros.push(centro1, centro2, centro3, centro4, centro5);
arrayRutas.push(ruta1, ruta2, ruta3);
arrayContratos.push(contrato1, contrato2, contrato3, contrato4);
var virtuales = 0;
var preseciales = 0;
var option = 1;
while (option != 0) {
    console.log("Seleccione lo que desea visualizar:\n        \n        1. Arrays Campers\n        2. Arrays Rutas\n        3. Arrays Centros\n        4. Arrays Contratos\n        5. Total campers presenciales y virtuales\n        6. Centros con mayor y menor cantidad de campers\n        0. Salir\n        ");
    option = Number(readlineSync.question());
    switch (option) {
        case 1:
            console.log(arrayCampers);
            break;
        case 2:
            console.log(arrayRutas);
            break;
        case 3:
            console.log(arrayCentros);
            break;
        case 4:
            console.log(arrayContratos);
            break;
        case 5:
            camper.modalidadCampers();
            break;
        case 6:
            centro1.cantidadCentros();
            break;
        default:
            break;
    }
}
