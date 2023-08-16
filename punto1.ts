import * as readlineSync from "readline-sync";

class Centro{
    constructor(
        public id:number,
        public nombre:string,
        public cantidadCampers:number,){
    }

    cantidadCentros(){
        arrayCentros.sort((x, y) => x.cantidadCampers - y.cantidadCampers);
        
        console.log(`El centro con mayor campers es ${arrayCentros[arrayCentros.length-1].nombre} con ${arrayCentros[arrayCentros.length-1].cantidadCampers} campers`);
        console.log(`El centro con menor campers es ${arrayCentros[0].nombre} con ${arrayCentros[0].cantidadCampers} campers`);
    }
}

class Ruta{
    constructor(
        public id:number,
        public nombre:string,
    ){
    }

}

class Camper{
    constructor(
        public id:number,
        public nombre:string,
        public ruta:string,
        public edad:number,
        public estadoRuta:boolean,
        public modalidad:string
    ){
      
        
    }
    modalidadCampers(){
        arrayCampers.forEach((arrayCamper)=>{
            const {modalidad} = arrayCamper
            if(modalidad==='Presencial'){
                preseciales++
            }
            if(modalidad==='Virtual'){
                virtuales++
            }
            
        })
        console.log(`Total de campers presenciales ${preseciales}`);
        console.log(`Total de campers virtuales ${virtuales}`); 
    }
}

class Contrato{
    constructor(
        public id:number,
        public empresa:string,
        public modalidad:string
    ){}
}

// Datos Centros //
const centro1 = new Centro(1,'CampusLands',300);
const centro2 = new Centro(2,'Campus42',700);
const centro3 = new Centro(3,'OpenBootcamp',200);
const centro4 = new Centro(3,'Udemy',600);
const centro5 = new Centro(3,'FreeCodeCamp',300);

// Datos Rutas //
const ruta1 = new Ruta(1,'Artemis');
const ruta2 = new Ruta(2,'Apolo');
const ruta3 = new Ruta(3,'Sputnik');

// Datos contratos//
const contrato1 = new Contrato(1,'Solvo','Virtual')
const contrato2 = new Contrato(2,'Microsoft','Presencial')
const contrato3 = new Contrato(3,'Facebook','Presencial')
const contrato4 = new Contrato(4,'Whatsapp','Presencial')

// Datos campers // 
const camper = new Camper(1,'Juan',ruta1.nombre,18,false,contrato1.modalidad);
const camper2 = new Camper(2,'Carlos',ruta2.nombre,17,true,contrato2.modalidad);
const camper3 = new Camper(3,'Sebastian',ruta1.nombre,18,false,contrato3.modalidad);
const camper4 = new Camper(4,'Cristian',ruta3.nombre,18,true,contrato4.modalidad);
const camper5 = new Camper(5,'Raul',ruta1.nombre,18,true,contrato1.modalidad);

if(camper.estadoRuta==false){
    camper.modalidad=''
}

let arrayCampers:any [] = []
let arrayCentros:any [] = []
let arrayRutas:any [] = []
let arrayContratos:any [] = []

arrayCampers.push(camper,camper2,camper3,camper4,camper5);
arrayCentros.push(centro1,centro2,centro3,centro4,centro5);
arrayRutas.push(ruta1,ruta2,ruta3);
arrayContratos.push(contrato1,contrato2,contrato3,contrato4);


let virtuales:number = 0
let preseciales:number = 0






let option:number=1;

while (option!=0) {
    console.log(
        `Seleccione lo que desea visualizar:
        
        1. Arrays Campers
        2. Arrays Rutas
        3. Arrays Centros
        4. Arrays Contratos
        5. Total campers presenciales y virtuales
        6. Centros con mayor y menor cantidad de campers
        0. Salir
        `
    );
    option = Number(readlineSync.question())

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
            camper.modalidadCampers()
        break;
        case 6:
            centro1.cantidadCentros();
        break;
    
        default:
            break;
    }
    
}



