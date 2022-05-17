# Backend Ecommerce - Proyecto final Programacion Backend Coderhouse
## _Una API RESTFULL que nos brinda el backend para un ecommerce_

## Tecnologia Backend
- NodeJS - Version 14.17.6 o superior 
- express - Version 4.18.1
- express-session - Version 1.17.3
- passport - Version 0.5.3
- passport-local - Version 1.0.0
- bcrypt - Version 5.0.1
- mongoose - Version 6.3.3
- log4js - Version 6.4.7
- multer - Version 1.4.4
- socket.io - Version 4.5.0
- nodemailer - Version 6.7.5
- twilio - Version 3.77.0
- dotenv - Version 16.0.1
- nodemon - version 2.0.16

## Instalacion
Esta app require [Node.js](https://nodejs.org/)

Instalar las dependencias antes de inicar el servidor, en el achivo DB podras encontrar una base de datos simples para poder probar
```sh
npm i
npm start
```
## El archivo .env requiere

- USERPASSMONGO = 'Usuario y password para MongoDB SAAS'  
- NODE_ENV = 'El entorno de desarollo en el que iniciara el servidor, puede ser test, development ó production'  
- SESSION_SECRET = 'Una palabra secreta para las sesiones'  
- NODEMMAILER_USER = 'Un email de gmail'  
- NODEMAILER_PASS = 'La contraseña del mail'
- TWILIO_SID = 'sid de twilio'
- TWILIO_TOKEN = 'token de twilio'


## Deploy

- Algo de Front muy sencillo con la finalidad unica de probar la app, incluyendo en esta el chat general y chat con el administrador implementado mediante websocket
https://ecommerce-coderhousefinal.herokuapp.com/