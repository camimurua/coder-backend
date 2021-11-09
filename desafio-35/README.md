# E-Mailing-y-Messaging
Entrega del desafio para la clase 35 de E-Mailing y Messaging


<h3>Instrucciones para la correción del desafio:</h3>

<b>Se creó el la carpeta mensajeria que contiene los 3 modulos para realizar el desafio, el de ethereal, el de gmail y el de sms con twilio.</b>

<strong>Se hace el require de cada uno en el server y en cada caso se llama a la funcion correspondiente. En la ruta del login se llama a las funciones enviarMailLogIn de Ethereal
y Gmail y en la ruta del logout se llama a la funcion enviarMailLogout de Ethereal.
Para Gmail se usa el req.user.email y req.user.picture.data.url para sacar el email y foto del usuario

Para verificar que se contiene la palabra administrador en el texto del chat se usa la funcion includes() de javascript sobre al elemento texto del objeto data que se recibe del frontend
a traves de socket.io y en caso de poseer la palabra se llama a la clase sms y a su funcion enviarSMS() que usara Twilio para enviar un SMS a un numero determinado desde el 
numero ficticio creado en Twilio. </strong>

PD: Los datos de mail de ethereal, gmail y numero de telefono estan guardados en el .env
