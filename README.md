# Administrador-de-Registros

## Consta de un a aplicacion que trabaja con los registros personales de cada usuario permitiendole diferentes acciones para asi poder controlar ingresos y egresos de gastos Tambien lleva un balance personal de los Ingresos y Egresos, Ademas de poder modificarlos en la misma aplicacion, todo se realiza de manera automatica.

## Este programa toma los datos de una base de datos y te los muestra en pantalla, se pueden efectuar varias llamadas y peticiones a la base de datos pero este programa los hace automaticamente en una interfaz del cliente. Tambien Crea la tabla a donde efectuar las llamadas si se la requiere y le da 1 valor  a al primer registro por defecto. Se puede adecuar a cualquier tabla ya que se basa en componentes de React. Y Cambiar los valores para otras tablas y otras consultas resulta sencillo.

## Tiene una seccion donde se puede crear un nuevo usuario que se almacena en una tabla. Esta tabla lleva el registro de los usuarios con tablas propias

En la proxima actualizacion que le haga le agregare un modulo que envie por mails las tablas al usuario. Como el desafio es en node, y el programa de envio de mail automaticos lo tengo en python, no lo agregue.

## Posee un usuario y contraseña secretos para habilitar el boton de la tabla que almacena los usuarios, mas abajo explicare esta seccion.



Cuenta de dos carpetas principales
1) Nodejs = En donde se encuentra el archivo que realiza las peticiones y da las respuestas
2) React = El archivo que funciona como interfaz del servidor
3) Y tambien un pequeño archivo donde se encuentra la base de datos que esta hecha en mySQL que es usada de donde tomar las peticiones y actualizarla


#Como usarlo : 

Descargar todos los archivos del repositorio
Abrir el programa de gestion de base de datos: Yo en mi caso uso Xampp con los modulos Apache y Mysql encendidos.
1) Hay dos formas de utilizar esta aplicacion. 



La primer forma es usando el archivo de sql incluido en el repositorio que posee la tabla de registros de usuarios y algunos usuarios con registros.
Crear la base de datos en MySQL con el nombre node20_mysql, **importar en esta base el archivo node20_mysql.sql, (es una tabla con registros prearmados).
Los usuarios para llamar desde el programa se llaman mper,patricio, Melani con sus respectivas contraseñas: pato, patricio16 y 12**


Luego Con el cmd de node.js ubicarse en la carpeta  donde descargaron la carpeta nodejs y escribir el comando "npm i mysql" para luego instalar con el comamdo
"npm i -D express nodemon" (nodemon era para no tener que reiniciar el server despues de un error en el desarrollo es muy util)
Luego pegar el archivo app.js en esta dependencia.
Y escribir el comando "nodemon" para que se conecte con la base de datos. Con esto ya tenemos vinculado nuestra base de datos a nuesto servidor de Solicitudes y respuestas.



Luego en otra terminal de node ubicarse en la carpeta react y luego escribir el comando "node install" y  "npm  install axios" y luego  "npm start" y enter.
El cual iniciara en el Navegador el cliente con el puerto 3000, tendra que habilitar el Cors en el navegador . 


2) La segunda forma es crear nosotros todas las tablas de bases de datos e iniciar nuevos registros desde la interfas de usuario. 
De esta forma tenemos que repetir los pasos previos  de la primer pero sin descargar el archivo de Mysql (omitir las intrucciones en negrita)
Y luego en la interfaz del usuario en la seccion de inicio de sesion usar el usuario : Patricio y contraseña : Miroshnitshenko  Aparecera un boton que te permitira crear la tabla madre donde se guardan los usuarios. (Ojo apretar este boton solo una sola vez y nunca mas sino tratara de crear esta misma carpeta y el servidor de node lanzara error por intentar crear una carpeta que ya existe y tendras que entrar a la app.js de la carpeta nodejs y apretar algun boton para que reinicie la conexion al servidor de MySql) Y luego crear un usuario con contraseña, iniciar sesion en este y usar la aplicacion.  


Cualquier cosa si no pueden entrar, o si el cliente no retorna datos de la tabla, escribidme y vemos de solucionarlo.



Se realizo en React.js el Frontend, el BackEnd  en Node.js con express, La base de datos en MySql.




Creador: Miroshnitshenko Patricio

