import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ClimaService {
  private readonly baseUrl = 'https://api.open-meteo.com/v1/forecast';
  private readonly latitude = 42.5078;
  private readonly longitude = 1.5211;

  async obtenerClima() {
    try {
      const response = await axios.get(this.baseUrl, {
        params: {
          latitude: this.latitude,
          longitude: this.longitude,
          hourly: 'temperature_2m',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error al obtener el clima:', error.message);
      if (axios.isAxiosError(error)) {
        console.error('Detalles de la respuesta:', error.response?.data);
      }
      throw new Error('No se pudo obtener el clima');
    }
  }
}
