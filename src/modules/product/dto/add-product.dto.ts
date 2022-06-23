import { IsNotEmpty } from "class-validator";

export class AddProductDto {

    @IsNotEmpty()
    product_name: string;

    @IsNotEmpty()
    product_category: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    image_url: string;
}