# Administrador-de-Registros

## Consta de un a aplicacion que trabaja con los registros personales del usuario permitiendole diferentes acciones para asi poder controlar ingresos y egresos de gastos Tambien lleva un balance personal de los Ingresos y Egresos, Ademas de poder modificarlos.

## Este programa toma los datos de una base de datos y te los muestra en pantalla, se pueden efectuar varias llamadas y peticiones a la base de datos pero este programa los hace automaticamente en una interfaz del cliente. Tambien Crea la tabla a donde efectuar las llamadas si se la requiere y le da valores por defecto. Se puede adecuar a cualquier tabla ya que se basa en componentes de React. Y Cambiar los valores para otras tablas y otras consultas resulta sencillo.

Se utilizo React para el front y node para el back

Cuenta de dos carpetas principales
1) Nodejs = En donde se encuentra el archivo que realiza las peticiones y da las respuestas
2) React = El archivo que funciona como interfaz del servidor
3) Y tambien una  pequeña carpeta donde se encuentra la base de datos que esta hecha en mySQL que es usada de donde tomar las peticiones y actualizarla


#Como usarlo : 

Descargar todos los archivos del repositorio
Abrir el programa de gestion de base de datos: Yo en mi caso uso Xampp con los modulos Apache y Mysql encendidos.
Crear la base de datos en MySQL con el nombre node20_mysql, importar en esta base el archivo node20_mysql.sql, (es una tabla con registros prearmados)..
Con el cmd de node.js ubicarse en la carpeta  donde descargaron la carpeta nodejs y escribir el comando "npm install" y luego con el comando "nodemon" para que se conecte a la base de datos. Si se logra conectar dara el mensaje "Database server running" (Si tienen problema miren de intalar express en el package.json encontraran las versiones)
Luego con otra terminal de node ubicarse en la carpeta react y luego escribir el comando "node install" y luego  "npm start" y enter.
El cual iniciara en el Navegador el cliente, tendra que habilitar el Cors en el navegador . 

Cualquier cosa si no pueden entrar, o si el cliente no retorna datos de la tabla, escribidme y vemos de solucionarlo.



Se realizo en React.js, el BackEnd  en Node.js con express, La base de datos en mySql


Creador: Miroshnitshenko Patricio

