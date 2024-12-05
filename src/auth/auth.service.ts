import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    Login(username: string, password: string) : boolean{
        if(username == process.env.USER && password == process.env.PASS){
            return true
        }
        else{
            return false
        }
    }
}
