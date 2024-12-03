import { Controller, Get } from '@nestjs/common';
import { ClimaService } from './clima.service';

@Controller('clima')
export class ClimaController {
  constructor(private readonly climaService: ClimaService) {}

  @Get()
  async getClima() {
    const climaData = await this.climaService.obtenerClima();
    return climaData;
  }
}
