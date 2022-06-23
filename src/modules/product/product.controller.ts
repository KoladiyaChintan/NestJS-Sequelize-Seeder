import { Body, Controller, Post } from '@nestjs/common';
import { AddProductDto } from './dto/add-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(public productService: ProductService) { }

    @Post()
    async addproduct(@Body() addproductDto: AddProductDto) {
        return await this.productService.addproduct(addproductDto)
    }
}
