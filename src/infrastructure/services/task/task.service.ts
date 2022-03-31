import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
    
    private taskList = [ { name: 'prepare coffee'}, { name: 'make some code'}, { name: 'spend some money in food'}]

    getAllTasks(){
        return this.taskList;
    }
}
