import { Controller, Get, HttpCode } from '@nestjs/common';
import ArrayExample from "../../resources/ArrayExample.json"

@Controller('array')
export class ArrayController {
    @Get()
    @HttpCode(200)
    public retriveArrayExample(){
        return ArrayExample
    }
}
