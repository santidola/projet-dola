import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { ApiSelecuService } from './api-selecu.service';
import { Response } from 'express';

@Controller('api-selecu')
export class ApiSelecuController {
    constructor(private readonly apiSelecu: ApiSelecuService){}

    @Get()
    hello(){
        return "hello"
    }

    @Get("selecu/:user_doc")
    validationUSer(@Param('user_doc') userdoc: string | number, @Res() res: Response){
        if(this.apiSelecu.validateUser(userdoc)){
            res.status(HttpStatus.OK).send("ok")
        }
        else{
            res.status(HttpStatus.NOT_FOUND).send("document not exist")
        }
    }
}
