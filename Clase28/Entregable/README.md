# Desafio28 - Usando el Objeto Process
Coderhouse - Programación Backend

1) En base al último proyecto entregado, permitir ingresar por línea de comandos el puerto local de escucha del servidor, luego el FACEBOOK_CLIENT_ID y el FACEBOOK_CLIENT_SECRET. Si no se ingresan estos valores, se tomarán valores default presentes en el programa. El servidor imprimirá en consola el código de salida del proceso de node.js

2) Asimismo, se dispondrá de una nueva ruta get '/info', que devolverá una vista con los siguientes datos:
    - Argumentos de entrada                                       
    - Path de ejecución
    - Nombre de la plataforma (sistema operativo)       
    - Process id
    - Versión de node.js                                               
    - Carpeta corriente
    - Uso de memoria

3) Se creará una ruta '/randoms' que permita calcular un cantidad de números aleatorios en el rango del 1 al 1000 especificada por query params, por ej. ..../randoms?cant=20000. Si dicho parámetro no se ingresa, calcular 100000000 números.
El dato devuelto al frontend será un objeto que contendrá como claves los números random generados junto a la cantidad de veces que salió cada uno. Esta ruta no será bloqueante (utilizar el método fork de child process). 