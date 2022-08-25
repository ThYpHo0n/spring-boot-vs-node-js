import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth.module';
import { BookModule } from './book.module';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { CpuService } from './service/cpu.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db-service',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService, CpuService],
})
export class AppModule {}
