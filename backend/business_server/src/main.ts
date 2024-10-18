import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS 설정
  app.enableCors({
    origin: ['http://localhost:5173'], // 허용할 출처
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // 허용할 HTTP 메서드
    credentials: true, // 쿠키와 인증 정보를 포함한 요청 허용
  });

  await app.listen(8081);
}
bootstrap();
