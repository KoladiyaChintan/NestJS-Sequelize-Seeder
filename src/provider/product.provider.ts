import { product } from "src/entities/product.entity";

export const productProvider = [{
    provide: 'PRODUCT_REPOSITORY',
    useValue: product
}]