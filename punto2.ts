class Reservaciones {
    constructor(
        public nombre:string,
        public deporte:string,
        public fecha:string,
        public hora:string
    ){}

    sendEmail(){
        if(this.nombre){
            console.log(`No olvides tu reservacion de ${this.deporte} para el dia ${this.fecha}. Disfruta la experiencia`);
        }
    }
    
    editar(nombre:string,deporte:string,fecha:string,hora:string){
        let datos:object = {nombre,deporte,fecha,hora}
        console.log(`Reservacion editada ${JSON.stringify(datos)}`);
    }

}

class Usuarios {
    constructor(
        public email:string,
        public username:string,
        public password:string,
        public rol:string
    ){}

    login(email:string,password:string){
        if(this.email==email && this.password==password){
            console.log(`Iniciando sesion. Bienvenindo ${this.username}`);
        }
        else{
            console.log('Email o password incorrecta');
        }
    }

    isAdminRole(){
        if(this.rol==='Admin'){
            console.log('Bienvenido al panel de administracion');
        }
        else{
            console.log('No es admin, no puedes acceder a este panel');
        }
    }
}

class Deportes{
    constructor(
        public nombre:string,
        public precio:number,
        public lugar:string
    ){
    }
}


const deporte1 = new Deportes('Parapente',50000,'Curiti');
const deporte2 = new Deportes('Rafting',40000,'San Gil');

const usuario1 = new Usuarios('jsanchez@gmail.com','Jsanchez32','12345','Admin');
const reservacion1 = new Reservaciones('Juan',deporte1.nombre,'24/11/2023','10:15Pm');

usuario1.login('jsanchez@gmail.com','12345');
usuario1.isAdminRole()

reservacion1.sendEmail();

reservacion1.editar('Carlos',deporte2.nombre,'07/07/2023','10:00Am');