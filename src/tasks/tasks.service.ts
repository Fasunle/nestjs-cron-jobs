import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TasksService {
    public time = 0;
    @Cron( CronExpression.EVERY_30_SECONDS )
    handleCron() {
        this.time += 45;
        console.log("\n:::::\n", this.time, "\n:::::\n" )
    }
}
