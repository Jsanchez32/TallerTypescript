var Reservaciones = /** @class */ (function () {
    function Reservaciones(nombre, deporte, fecha, hora) {
        this.nombre = nombre;
        this.deporte = deporte;
        this.fecha = fecha;
        this.hora = hora;
    }
    Reservaciones.prototype.sendEmail = function () {
        if (this.nombre) {
            console.log("No olvides tu reservacion de ".concat(this.deporte, " para el dia ").concat(this.fecha, ". Disfruta la experiencia"));
        }
    };
    Reservaciones.prototype.editar = function (nombre, deporte, fecha, hora) {
        var datos = { nombre: nombre, deporte: deporte, fecha: fecha, hora: hora };
        console.log("Reservacion editada ".concat(JSON.stringify(datos)));
    };
    return Reservaciones;
}());
var Usuarios = /** @class */ (function () {
    function Usuarios(email, username, password, rol) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.rol = rol;
    }
    Usuarios.prototype.login = function (email, password) {
        if (this.email == email && this.password == password) {
            console.log("Iniciando sesion. Bienvenindo ".concat(this.username));
        }
        else {
            console.log('Email o password incorrecta');
        }
    };
    Usuarios.prototype.isAdminRole = function () {
        if (this.rol === 'Admin') {
            console.log('Bienvenido al panel de administracion');
        }
        else {
            console.log('No es admin, no puedes acceder a este panel');
        }
    };
    return Usuarios;
}());
var Deportes = /** @class */ (function () {
    function Deportes(nombre, precio, lugar) {
        this.nombre = nombre;
        this.precio = precio;
        this.lugar = lugar;
    }
    return Deportes;
}());
var deporte1 = new Deportes('Parapente', 50000, 'Curiti');
var deporte2 = new Deportes('Rafting', 40000, 'San Gil');
var usuario1 = new Usuarios('jsanchez@gmail.com', 'Jsanchez32', '12345', 'Admin');
var reservacion1 = new Reservaciones('Juan', deporte1.nombre, '24/11/2023', '10:15Pm');
usuario1.login('jsanchez@gmail.com', '12345');
usuario1.isAdminRole();
reservacion1.sendEmail();
reservacion1.editar('Carlos', deporte2.nombre, '07/07/2023', '10:00Am');
