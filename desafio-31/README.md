# Logs-profiling-debug---Parte-1
Entrega del desafio para la clase 31 de Logs, profiling &amp; debug - Parte 1

INSTRUCCIONES PARA COMPROBAR EL DESAFIO:

- Una vez arrancado el server con  "node server.js" se pueden comprobar algunos warnings de entrada en el warn.log. 
Un warning deberia ser el de que no se ingresó un puerto por linea de comandos y el otro que no se mandaron datos para ingresar a una app de facebook asi que se procede a usar los datos por defecto


- Para corroborar que fucione el error.log se puede probar entrar a la ruta /random y enviar por parametros un valor que no sea numero. Por ej: /random?=asd
Se deberia crear en el error.log un mensaje que diga que no se pudo ejecutar porque no se ingresó un valor numerico.
