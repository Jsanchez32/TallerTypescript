class Centro{
    constructor(
        public id:number,
        public nombre:string,
        public cantidadCampers:number,){
    }
}

class Ruta{
    constructor(
        public id:number,
        public nombre:string,
    ){

    }

}

class Nivel{
    constructor(
        public id:number,
        public nombre:string,
        public duracion:string
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
}

class Contrato{
    constructor(
        public id:number,
        public empresa:string,
        public modalidad:string
    ){}
}

const centro1 = new Centro(1,'CampusLands',300);
const centro2 = new Centro(2,'Campus42',700);
const centro3 = new Centro(3,'OpenBootcamp',200);

const ruta1 = new Ruta(1,'Artemis');
const contrato1 = new Contrato(1,'Solvo','Virtual')
const contrato2 = new Contrato(1,'Microsoft','Presencial')

const camper = new Camper(1,'Juan',ruta1.nombre,18,false,contrato1.modalidad);
const camper2 = new Camper(1,'Juan A',ruta1.nombre,18,true,contrato2.modalidad);

if(camper.estadoRuta==false){
    camper.modalidad=''
}

let arrayCampers:any [] = []
let arrayCentros:any [] = []

arrayCampers.push(camper,camper2)


let virtuales:number = 0
let preseciales:number = 0
arrayCampers.forEach((arrayCamper)=>{
    const {modalidad} = arrayCamper
    if(modalidad==='Presencial'){
        virtuales++
    }
    if(modalidad==='Virtual'){
        preseciales++
    }
    
})
console.log(`Total de campers presenciales ${preseciales}`);
console.log(`Total de campers virtuales ${virtuales}`); 

console.log(arrayCampers);


arrayCentros.push(centro1,centro2,centro3);
/* let datos:number [] = []

let max:number= 0
arrayCentros.forEach((arrayCentro)=>{
    const {cantidadCampers} = arrayCentro;
    datos.push(cantidadCampers)    
})
max = Math.max(...datos);

console.log(datos); */

arrayCentros.sort((x, y) => x.cantidadCampers - y.cantidadCampers);

console.log(arrayCentros);




