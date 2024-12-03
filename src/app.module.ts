import { Module } from '@nestjs/common';
import { ClimaModule } from './clima/clima.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ClimaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
