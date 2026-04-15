import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Products } from './products/entities/products.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678', 
      database: 'product_inventory_db',
      entities: [Products],
      synchronize: true, 
    }),
    ProductsModule,
  ],
})
export class AppModule {}