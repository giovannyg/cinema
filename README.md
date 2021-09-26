<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Rquerimientos:
- Back end:
  - PHP >= 7.3
  - BCMath PHP Extension
  - Ctype PHP Extension
  - Fileinfo PHP Extension
  - JSON PHP Extension
  - Mbstring PHP Extension
  - OpenSSL PHP Extension
  - PDO PHP Extension
  - Tokenizer PHP Extension
  - XML PHP Extension
- Front end:
  - Node & npm

## Deployment:

1. Clonar repositorio
```
git clone https://github.com/giovannyg/cinema.git
```

2. Ejecutar composer install:
```
composer install
```
3. Importar base de datos ```database.pgsql``` en tu servidor de base de datos.

5. Configurar .env </br>
Crear una copia del archivo .env.example llamada .env en la raíz del proyecto y modificar/agregar lo siguiente
```
DB_CONNECTION=pgsql
DB_HOST=<DB_HOST>
DB_PORT=<DB_PORT, default: 5432>
DB_DATABASE=<DB_NAME>
DB_USERNAME=<DB_USER>
DB_PASSWORD=<DB_PASSWORD>

SESSION_DOMAIN=.localhost

SANCTUM_STATEFUL_DOMAINS="localhost,127.0.0.1"
```