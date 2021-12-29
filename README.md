# SuplesUy

## Available Scripts

SuplesUy es un e-commerce de venta de suplementos deportivos. Fue desarrollado en el marco de la realización del curso de ReactJS de CoderHouse, con la autoría de Rodrigo Rabasquiño. Como tecnologías base, utiliza Node, Sass, y el framework ReactJS para el desarrollo.

## Ejecutando el proyecto localmente

### Requisitos previos

Para correr el proyecto en una máquina local, se debe tener instalado Node en su versión 14.15.1.

### Ejecutando el servidor de Node

Una vez clonado el repositorio, para poder correr el proyecto sólo basta con ejecutar los siguientes comandos:

### `npm i`
### `npm start`

Esto va a ejecutar SuplesUy en modo de desarrollo.

El sitio se puede visitar en [http://localhost:3000](http://localhost:3000) en cualquier navegador.

## Principales decisiones de diseño

Para describir las decisiones de diseño, se detalla a continuación la estructura de carpetas del proyecto y la intención de cada una.

### assets

Contiene todas las imágenes y demás assets estáticos del proyecto.

### components

Contiene todos los componentes de React que son utilizados en el proyecto, cada uno con sus estilos correspondientes si aplica.

### context

Contiene el objeto `CartContext` utilizado para encapsular y almacenar el contexto de la aplicación utilizando Context API.

### data

Contiene información de prueba, utilizada al comienzo del proyecto para tener un mock-up de los datos que luego fueron leídos de Firebase.

### firebase

Contiene el archivo de configuración utilizado para conectarse a Firebase.

### helpers

Contiene dos funciones estáticas útiles:

- `pedirDatos`: función de prueba para establecer un delay de 3 segundos a la hora de devolver los datos contenidos en la carpeta `data`
- `validarDatos`: función utilizada para validar los datos ingresados por el usuario a la hora de ejecutar y confirmar una compra

### router

Contiene el componente `AppRouter` utilizado para definir las rutas de la SPA.

## GIF con el procedimiento de una compra

![compra](https://user-images.githubusercontent.com/75456191/147621378-721f33b9-761a-4b7f-ab9e-21c90b0984db.gif)
