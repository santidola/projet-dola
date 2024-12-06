import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}


    @Post("registro")
    registrouser(@Body() {username,apellido,password,correo,cel} : {username: string, password: string, apellido: string, correo: string, cel: number}){
        return this.authService.registro(username,password,apellido,correo,cel);
    }


    
    @Post("login")
    loginUser(@Body() {username, password}: {username: string, password: string}){
        if(this.authService.Login(username, password)){
            return {code: HttpStatus.OK, msg: "user logged"}
        }
        else{
            return {code: HttpStatus.UNAUTHORIZED, msg: "user not exist"}
        }
    }

    @Post("password")
    cambiouser(@Body(){username, password}: {username: string, password: string}){
        const mensaje = this.authService. cambiarPassword(username, password);

        return { message: mensaje };
    }

}
