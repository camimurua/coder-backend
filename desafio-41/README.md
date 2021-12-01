# Arquitectura-del-servidor-Persistencia
Entrega del desafio para la clase 41 de Arquitectura del servidor: Persistencia

<h2>Instrucciones para la corrección:</h2>

1.  Se crearon las carpetas de DAO y DTO que contendran los DAO para las distintas persistencias y al factory que maneje todos los otros DAOs

2. Cree un archivo llamado pruebasDAO para probar la funcionalidad de pedir con linea de comandos las peticiones del CRUD. 

<hr>

<h4>Como usar pruebasDAO</h4>

Los comandos son:

cmd --> LISTAR || GUARDAR || ACTUALIZAR || BORRAR

listar -->  no usa parametros, entrega la lista completa

guardar --> guarda un producto ingresado a traves de parametros ===> title(string), price(number), thumbnail(string)

actualizar --> actualiza un producto que ya exista en la base de datos ingresando parametros ===> id(id de producto), title(string), price(number), thumbnail(string)

borrar --> elimina un producto que exista en la base de datos ingresando parametros ===> id(id de producto)

EJEMPLO:

$ node pruebasDAO.js --cmd actualizar --id 60ed7758186ecd099113a482 --title Actualizacion --price 42 --thumbnail asd.jpg

<hr>

En la carpeta config, archivo config, se puede cambiar la persistencia que se quiera usar.
Se puede elegir entre persistencia ' Mongo ' y ' File ' que usarán Mongo local y File system respectivamente
