import { Module } from '@nestjs/common';
import { productProvider } from 'src/provider/product.provider';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ...productProvider]
})
export class ProductModule { }
