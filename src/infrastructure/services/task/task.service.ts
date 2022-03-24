import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
    
    private taskList = ['prepare coffee', 'make some code', 'spend some money in food']

    getAllTasks(){
        return this.taskList;
    }
}
