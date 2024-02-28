## Levantamiento de sistema

para el login ya tengo un usuaio creado, las credenciales son: 
email: rsaan02@gmail.com
pass: 12345678

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

Abrimos el archivo .env para asegurarnos que las variables de entorno de la base de datos sean las que tienen como comentario 'docker'

```sh
  DB_CONNECTION=mysql
  DB_HOST=mysql_db
  DB_PORT=3306
  DB_DATABASE=ideeo
  DB_USERNAME=root
  DB_PASSWORD=root
```

### NOTAAA
  #### si tienes el puerto 3306 ocupado, desactivalo xfa para no crear un conflicto con docker para mysql
  si estas en windows: abre cdm como administrador y ejecuta alguno de los dos comandos
```sh
mysqld stop ó net stop MySQL80
```
Abrimos la carpeta 'server'
Estando en la carpeta 'server' le decimos a docker que nos cree la imagen que ya configuramos

```sh
docker compose build
```
Una vez creada, leventamos el contenedor

```sh
docker compose up
```
se leventara el contenedor y podremos acceder a las funciones del back

### NOTAAA
  #### si te da un error con el nombre de la base de datos, al hacer el php artisan migrate, baja el contenedor y vuelve a levantarlo
```sh
docker compose up
```


## Sin Docker:
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
Necesitamos la base de datos 'ideeo' asi que primero tenemos que crearla

Nos vamos a la carpeta 'server'
Abrimos el archivo .env para asegurarnos que las variables de entorno de la base de datos sean las que tienen como comentario 'desarrollo'

```sh
  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=ideeo
  DB_USERNAME=root
  DB_PASSWORD=pass
```

Ir a la carpeta 'server' e instalar las dependencias

```sh
composer install
```
Una vez instaladas ejecutamos migaciones
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

