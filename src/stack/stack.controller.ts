import { Controller, Get, HttpCode } from '@nestjs/common';
import StackExample from "../../resources/StackExample.json"

@Controller('stack')
export class StackController {
    @Get()
    @HttpCode(200)
    public retriveStackExample(){
        return StackExample
    }
}
