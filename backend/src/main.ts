import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Izinkan frontend (Live Server / file HTML) memanggil API ini.
  app.enableCors();

  // Validasi body & query otomatis berdasarkan DTO.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Warung UMKM API berjalan di http://localhost:${port}`);
}
void bootstrap();
