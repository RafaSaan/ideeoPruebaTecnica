## Levantamiento de sistema

### Con Docker:
### Front:
Despues de clonar el repo nos vamos a la carpeta 'client'

```sh
cd client
```
Le decimos a docker que nos cree la imagen que ya configuramos

```sh
docker compose build
```
Una vez creada, leventamos el contanedor

```sh
docker compose up -d
```
se leventara el contenedor y podremos acceder al front


### Back:
Abrimos otra prestaña o nos cambiamos a la carpeta 'server'

Abrimos el archivo .env para asegurarnos que las variables de entorno de la base de datos sean las que tienen como comentario 'docker'

Estando en la carpeta le decimos a docker que nos cree la imagen que ya configuramos

```sh
docker compose build
```
Una vez creada, leventamos el contanedor

```sh
docker compose up -d
```
se leventara el contenedor y podremos acceder alas funciones del back


### Sin Docker:
El front end esta creado con vue3, nodeJs version 20.10.0
El back end esta creado con Laravel 10, php version 8.3.1, mysql ultima version

### Front: 
Ir a la carpeta 'client' e instalar las dependencias
```sh
npm i
```
Una vez instaladas iniciamos el front
```sh
npm run dev
```

### Back end: 
Ir a la carpeta 'server' e instalar las dependencias

Abrimos el archivo .env para asegurarnos que las variables de entorno de la base de datos sean las que tienen como comentario 'desarrollo'

```sh
composer install
```
Una vez instaladas iniciamos ejecutamos migaciones
```sh
php artisan migrate
```
Una vez ejecutadas iniciamos passport
```sh
php artisan passport:install
```
Ejecutamos seeder
```sh
php artisan db:seed
```
Levantamos nuestro back
```sh
php artisan serve
```

