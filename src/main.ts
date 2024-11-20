import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    rawBody:true
  });
  app.connectMicroservice<MicroserviceOptions>({
    transport:Transport.NATS,
    options:{
      servers:"nats://localhost:4222"
    }
  },{
    inheritAppConfig:true
  });
  await app.startAllMicroservices();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
    })
  )
  await app.listen(3001);
}
bootstrap();
