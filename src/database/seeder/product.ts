import { product } from "src/entities/product.entity"

export class ProductSeeder {
    public static Data = [
        {
            product_name: "sdz",
            product_category: "goss",
            description: "abc",
            image_url: "https://images.unsplash.com/photo-1655850106862-b39c99631c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        },
        {
            product_name: "sdz",
            product_category: "goss",
            description: "abc",
            image_url: "https://images.unsplash.com/photo-1655850106862-b39c99631c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        },
        {
            product_name: "sdz",
            product_category: "goss",
            description: "abc",
            image_url: "https://images.unsplash.com/photo-1655850106862-b39c99631c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        },
        {
            product_name: "sdz",
            product_category: "goss",
            description: "abc",
            image_url: "https://images.unsplash.com/photo-1655850106862-b39c99631c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        },
        {
            product_name: "sdz",
            product_category: "goss",
            description: "abc",
            image_url: "https://images.unsplash.com/photo-1655850106862-b39c99631c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        }
    ]
    public static async execute() {
        for (const item of this.Data) {
            try {
                await product.create(item)
            } catch (err) {
                console.log(err)
            }
        }
    }
}