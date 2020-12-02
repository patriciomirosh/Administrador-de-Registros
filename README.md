# Administrador-de-Registros

## Consta de un a aplicacion que trabaja con los registros personales del usuario permitiendole diferentes acciones para asi poder controlar ingresos y egresos de gastos Tambien lleva un balance personal de los Ingresos y Egresos, Ademas de poder modificarlos.

## Este programa toma los datos de una base de datos y te los muestra en pantalla, se pueden efectuar varias llamadas y peticiones a la base de datos pero este programa los hace automaticamente en una interfaz del cliente. Tambien Crea la tabla a donde efectuar las llamadas si se la requiere y le da valores por defecto. Se puede adecuar a cualquier tabla ya que se basa en componentes de React. Y Cambiar los valores para otras tablas y otras consultas resulta sencillo.

Se utilizo React para el front y node para el back

Cuenta de dos carpetas principales
1) Nodejs = En donde se encuentra el archivo que realiza las peticiones y da las respuestas
2) React = El archivo que funciona como interfaz del servidor
3) Y tambien una  pequeña carpeta donde se encuentra la base de datos que esta hecha en mySQL que es usada de donde tomar las peticiones y actualizarla
4)Se usa el localhost para realizar los intercambios entre la base de datos y el cliente.

#Como usarlo : 

1 forma)
Descargar todos los archivos del repositorio
Crear la base de datos con el nombre node20_mysql, importar en esta base el archivo node20_mysql.sql,
Con el cmd de node ubicarse en la carpeta nodejs y escribir el comando nodemon para que se conecte a la base de datos. Si se logra conectar dara el mensaje "Database server running"
Luego con otra terminal de node ubicarse en la carpeta react y luego escribir el comando npm start
El cual iniciara en el Navegador el cliente. 

