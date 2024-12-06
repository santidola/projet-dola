
// decorador
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {


        // Arreglo para almacenar los usuarios
    usuar = [];
   
    // Arreglo para almacenar los usuarios
    // creo el metodo con los parametros y los defino : defino q tipado me va a retornar (int, string)
    registro(username: string, password: string, apellido: string, correo: string, cel: number): string {

        // creo variable (existe ) para verificar si el usuario ya existe
        // this.usuario.some acceder a un atributo de la clase junto con el some 
        // e hace las veces de todos los usuarios, asi compara nombre y contraseña con los q estan en el arreglo

        const existe = this.usuar.some(e => e.nombre === username && e.password === password);

        if (existe) {
            return "El usuario ya existe";
        } else {
            // Crear un nuevo usuario y agregarlo al arreglo
            this.usuar.push({ nombre: username, password: password, apellido: apellido, correo: correo, cel: cel });
            return "Registro exitoso";
        }
    }

    Login(username: string, password: string): boolean {
        console.log(this.usuar)

        const existe = this.usuar.some(e => e.nombre === username && e.password === password);
        if (existe) {
            return true
        }
        else {
            return false
        }
    }

    
   


}
