import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller({})
export class TaskController {

    // metodo por el cual va ser visitado en http
    @Get('/tasks')
    getALLTasks(){
        // se puede buscar en una base de datos
        // se puede hacer una peticion a otro backend o api
        return 'Obteniendo todas las tareas'
    }
}