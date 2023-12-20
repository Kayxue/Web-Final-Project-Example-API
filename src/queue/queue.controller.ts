import { Controller, Get, HttpCode } from '@nestjs/common';
import QueueExample from "../../resources/QueueExample.json"

@Controller('queue')
export class QueueController {
    @Get()
    @HttpCode(200)
    public retriveQueueExample(){
        return QueueExample
    }
}
