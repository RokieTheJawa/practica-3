Repositorio de Ejemplo para Examen Final de la materia Programación Web, 3er. Semestre, Ing. en Tecnologías de Internet.

### Crear una aplicación web que consuma una API que aquí te proporcionamos.

## Requerimientos:
Conocimientos de manejo de objetos en JavaScript
Conocimientos de front-end (HTML, Javascript y CSS)
Conocimientos de manejo de base de datos (de su materia respectiva)

## Procedimiento:

1.- Usa los archivos de ejemplo para montar un servidor backend con nodejs. Puedes hacerlo en el mismo directorio de la práctica 3.
Inicializar con comando en terminal:

> npm init

2.- Creará un archivo package.json

Estos archivo es la configuración de paquetes que necesita la aplicación API para correr.

3.- Instalar paquetes de mysql y de conector a base de datos de express:

> npm i mysql express-myconnection

4.- Instalar nodemon:

> npm i nodemon --save-dev

La aplicación API (backend) consta de 2 archivos:
server.js Es la aplicación principal donde se ejecuta el servidor web en el puerto 9000 (puedes usar el 3000 para tus pruebas también, NOTA: no usar puertos reservados)
routes.js Es donde se ejecuta el CRUD (Create - Crear, Read - Leer, Update - Actualizar, Delete - Borrar) de nuestra API.
La API se conecta a una base de datos en tu servidor local (localhost) que debe estar configurada en tu servidor SQL, puedes usar Workbench o cualquier manejador de base de datos SQL que tengas instalado en tu PC. Modifica los datos de conección en el archivo server.js para que coincidan con tu base de datos (database), tu usuario (user) y contraseña (password). Puedes modificar los campos, agregar y quitar, pero colocar captura del esquema.

El diseño del Front-End de consumo es libre, pero debe ser en javascript. Puedes usar el ejemplo del repositorio.

## Objetivo:
Deberás crear una aplicación web que consuma esa API en específico usando únicamente Javascript (usar bootstrap o CSS es un plus), 

## Requisitos:
- **NO usar PHP, NI frameworks que NO sean de javascript.**
- Puedes usar ReactJS, Angular, AJAX, Vanilla JS, etc.
- Puedes usar la base de datos que tu quieras, con los campos de la tabla que tu quieras, lo importante es que esté en su máquina local en un servidor SQL, puedes usar Workbench, puedes usar XAMPP y montar el puro servidor MySQL.
- Puedes usar videos de YouTube de referencia, lo importante es que pongas esa referencia en tu reporte.

## Entregable:
- Subir a classroom un reporte que debe contener:
- Hoja de presentación (Incluir personas del equipo).
- Indice.
- Indicaciones (este texto).
- Capturas de pantalla de la página, con todo y la barra de dirección
- Código fuente. (No incluir server.js, ni routes.js, únicamente lo que desarrollaste)

NOTAS: Puedes aprovechar carpeta de la práctica 3 para no volver a instalar express.
Puedes también compartir la liga del repositorio en github de preferencia o en gitlab. Si tienes dudas consulta cómo hacerlo desde VSC con tu maestro.

### Créditos:
Web de Consumo: @juanzeta33
Creación de API: @monkeywit
