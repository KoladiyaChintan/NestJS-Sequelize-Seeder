import { Inject, Injectable } from '@nestjs/common';
import { product } from 'src/entities/product.entity';
import { AddProductDto } from './dto/add-product.dto';

@Injectable()
export class ProductService {
    constructor(@Inject('PRODUCT_REPOSITORY') private readonly PRODUCT_REPOSITORY: typeof product) { }

    async addproduct(addproductDto: AddProductDto) {
        return await this.PRODUCT_REPOSITORY.create(addproductDto)
    }
}
