import { ProductSeeder } from './product';

class DatabaseSeeder {
    async run() {
        await ProductSeeder.execute()
    }
}

export default new DatabaseSeeder();