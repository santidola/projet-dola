import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post()
    loginUser(@Body() {username, password}: {username: string, password: string}){
        if(this.authService.Login(username, password)){
            return {code: HttpStatus.OK, msg: "user logged"}
        }
        else{
            return {code: HttpStatus.UNAUTHORIZED, msg: "user not exist"}
        }
    }
}
