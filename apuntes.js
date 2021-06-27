/* 
es un framework desarrollado por google en la version 11
https://angular.io/
tiene una buena performance.
maneja typescript 4.1 que es javascript tipado
SPA single page aplication
pero tiene diferentes componentes
como header, cabezeras, elementos extra en tags 
vamos tener una pagina que va a tener componentes
herramientas
-nodejs descargamos de la pagina de nodejs ademas vamos a necesitar npm pero ya se instala con nodejs

versiones de uso para este curso
nodejs 12.18
npm 6.14

Id visual studio

framework angular
npm angular -g @angular/cli
instalamos el cliente de angular de manera global ahora tenemos en el path el ng
ng --version 
vemos la version de angular 
angularCLI 12.0
los cambios son menores entre versiones
-----Primera aplicacion ----------
ng new mi-primera-app
guion medio o bajo luego no se recmienda caracteres especiales
y
modo estricto
n
roouting 
CSS
formato de hojas de estilo
 debe mostrar que los paquetes se crearon correctamente se crean varios archivos pero al desplegar en produccion no se usan tantos.
 
 ng serve -o 

 se abre un servidor y se abre un navegador asegurate de estar en la ruta del proyecto, en el puerto 4200 y es uno de desarrollo
 crtl +c para dar de baja el servidor

 En app ts podemos encontrar el selector llamado app-root y es el tag de inserion de nuestro componente. 

 selector 
 temeplateUrl   //cual es la plantilla que se va a utilizar 
 styleUrls  //cual es la hoja de estilos a utilizar

 por cada componente podemos agregar su css
 ademas definimos una clase con variables 
 que podemos usar en nuestras  vistas html con {{}}

angular.json
podemos agregar css y scripts personalizados

extensiones en vs
angular services
angular files //para crear mas facil
angular support
angular2 typescrip emmet para escribir html
bootsstrap 4
---main ts---

podemos ver que app module indica que esta levantando un modulo en app.module.ts podemos encontrar como se exportando la clase,

los decoradores permite aañdir anotaciones y metadatos o cambiar el comportamiento de clases, propiedades, metodos, parametros y accesors

tenemos un decorador llamado ngModule
nos interesa saber el bootstrap que extrae de donde esta la clase.

---crear componente---
es bueno crear una carpeta por componente
manual 




*/