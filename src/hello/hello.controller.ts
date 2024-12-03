import { Controller, Get } from '@nestjs/common';

@Controller()
export class HelloController {

    @Get('/hello')
    getqhello(){
        // se puede buscar en una base de datos
        // se puede hacer una peticion a otro backend o api
        return 'obteniendo otro controlador'
    }
}
