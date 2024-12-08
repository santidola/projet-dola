
// decorador
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {


    // Arreglo para almacenar los usuarios
    usuar = [{
        nombre: "1013339909",
        apellido: "castaño",
        password: "123456",
        correo: "harold@gmail.com",
        cel: 3006397804
    }];

    // creo el metodo con los parametros y los defino : defino q tipado me va a retornar (int, string)
    registro(username: string, password: string, apellido: string, correo: string, cel: number): string {


        // this.usuario.some acceder a un atributo de la clase junto con el some 
        // e hace las veces de todos los usuarios, asi compara nombre y contraseña con los q estan en el arreglo
        const existe = this.usuar.some(e => e.nombre === username && e.password === password);
        // creo variable (existe ) para verificar si el usuario ya existe
        if (existe) {
            return "El usuario ya existe";
        } else {
            // Crear un nuevo usuario y agregarlo al arreglo
            this.usuar.push({ nombre: username, password: password, apellido: apellido, correo: correo, cel: cel });
            return "Registro exitoso";
        }
    }

    // creo metodo para saber si el usuario ya esta registrado
    // login con los parametros a comparar que serian el nombre y la contraseña con un boleano q me retornara si esta logueado o no
    Login(username: string, password: string): boolean {
        console.log(this.usuar)

        //creo una variable llamada existe, con el this busco en el arreglo y con el some comparo si existe o no este usuario

        const existe = this.usuar.some(e => e.nombre === username && e.password === password);
        //si esxiste me rotornara que esta llogueado si no existe q no lo esta
        if (existe) {
            return true
        }
        else {
            return false
        }
    }


    
    cambiarPassword(username: string, nuevaPassword: string): string {
        // Buscar al usuario
        const usuario = this.usuar.find(e => e.nombre === username);
    
        if (!usuario) {
            return "El usuario no existe";
        }
    
        // Cambiar la contraseña
        usuario.password = nuevaPassword;
    
        // Validar si la contraseña se cambió
        const validacion = this.usuar.some(e => e.nombre === username && e.password === nuevaPassword);
    
        if (validacion) {
            return "Contraseña cambiada exitosamente";
        } else {
            return "Hubo un problema al cambiar la contraseña";
        }
    }
}
