import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from './events/events.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: `sqlite`,
    database: `Booking`,
    entities: [`dist/**/*.entity{.ts,.js}`],
    synchronize: true,
  }), EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
