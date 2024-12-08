import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class ApiSelecuService {
    constructor(private readonly auth: AuthService){}

    validateUser(username: string | number): boolean{
        const isFound = this.auth.usuar.some((us)=>us.nombre === username.toString());

        if(isFound){
            return true
        }
        else{
            return false
        }
    }
}
