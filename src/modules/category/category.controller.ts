import { Controller, Get } from '@nestjs/common';

@Controller('category')
export class CategoryController {
  @Get()
  findAll() {
    // return this.service.findAll();
    return 'category list';
  }
}
