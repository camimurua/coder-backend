# Logs-profiling-debug---Parte-2
Entrega del desafio para la clase 32


Instrucciones para corrección de desafio

1) Se inició el server en modo FORK con el comando  "  node --prof server.js 8081  "

Se ejecuta el comando  " curl -X get http://localhost:8081/info "


-Prueba de carga sin console.log:
" artillery quick --count 50 -n 20 http://localhost:8081/info > result_fork_sinConsole.txt "


-Prueba de carga con console.log:
" artillery quick --count 50 -n 20 http://localhost:8081/info > result_fork_conConsole.txt "


-Decodificar el archivo del profiles con consola:
" node --prof-process profilerLogConsole.log > result_profiler_conConsole.txt "


-Decodificar el archivo del profiles sin consola:
" node --prof-process profilerLogConsole.log > result_profiler_sinConsole.txt "
