# Proyecto práctico para HotelGest: Clima app backend

Este proyecto utiliza Docker para facilitar la instalación y ejecución de la aplicación NestJS.

## Requisitos previos

Asegúrate de tener Docker instalado en tu sistema. Puedes descargarlo desde [aquí](https://www.docker.com/products/docker-desktop).

## Instrucciones de instalación

Sigue estos pasos para construir y ejecutar la aplicación utilizando Docker:

1. **Clonar el repositorio**

   Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/matiaslionel/clima-app-backend.git
   cd clima-app-backend
   ```

2. **Construir la imagen de Docker**

   Construye la imagen de Docker utilizando el `Dockerfile` incluido:

   ```bash
   docker build -t clima-app-backend .
   ```

3. **Ejecutar el contenedor**

   Ejecuta el contenedor de Docker:

   ```bash
   docker run -p 3000:3000 clima-app-backend
   ```

   Esto expondrá la aplicación en el puerto 3000 de tu máquina local.

## Acceso a la aplicación

Una vez que el contenedor esté en ejecución, puedes acceder a la aplicación en tu navegador web en la siguiente URL:

```
http://localhost:3000
```

## Notas adicionales

- Asegúrate de que el puerto 3000 no esté siendo utilizado por otra aplicación en tu máquina.
- Puedes modificar el `Dockerfile` para cambiar configuraciones específicas según tus necesidades.
- El puerto 3000 tiene que estar configurado en el endpoint del frontend para que la aplicación funcione correctamente.
