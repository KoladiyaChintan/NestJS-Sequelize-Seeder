import { Module } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [DatabaseModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
