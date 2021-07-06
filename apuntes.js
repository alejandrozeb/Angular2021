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

cada componente(personacomopnent.ts) lo registramos en app.module en el decorador ngModule

podemos usar del componente sus variables y sus estilos--creando componento con el cli de angular----

ng generate component persona

ng gc persona 

para crear el comopnente persona en largo y simplificado
 se crea el html, spec(test), ts y css

en ts define la clase e implementa una interface
que agrega un modo ngOnInit y un constructor.
ademas agrega el decorador component
ademas ya se regitra el app module de manera automatica

--componentes in line-----
Es recomendable cuando la inforamcion es pequeña

componentes inline
ng g c persona -s -t
-s el css -t el html indicamos que seran inline

--instalar bootstrap 4 con el cli ---
npm install bootstrap --save
en la version 4 se usa jquery y popper pero en la 5 ya no son necesarios
npm install jquery --save
npm install popper.js --save

ahora se debe configurar en angular
en angular json en styles cargamos el css min de boostrap
en scripts el jquery, el popper , y el bootstrap que estan referenciados en node_modules bootstap
ademas se debe verificar que estan referenciando en seccion build del angular.json 
existe otra para los test.

--agreagdno estilos----
podemos hacer referencia a varios archivos css, se referencia en el decorador.
tambien se puede hacer inline con la propiedad styles
ambos atributos son arreglos

--interpolacion---
podemos declarar unu avariable y usarla
{{<<variable>>}}
la declaramosen componentts y lo usamos en conponent html con {{}}

adentro de las interpolaciones se puede usar ecxpreciones{{numero +5}}
se sumara

--templte reference--
podemos declarar vatiables en una plantillasy mostrar

--property binding---
permite asignar valores a los tags html []
agregamos un boton en ts con un valor 
[<<atributohtml>>]='<<propiedad del ts>>';
podemos manipular el valor de una propiedad de un tag y referenciar con atributo de la clase de conponent ts

--event binding--
escuchamos los eventos html y podemos capturarlos
referenciamos un evento en la vista con un metodo de component .ts
(<<evento>>)='<<nombre metodo>>()'

ademas los eventos no son os mismos que js 
onclick js
click Angular

--argumentos con event binding----
--dos formas de event binding------
two way binding
de htmml a ts y de ts al html

debeos agregar un module formsMOdule
de node_modules en app modules


---NGif---
pdemos agregar un if con angular a la vista
*ngif="condition"
ademas no tenemos que agregar logica devolvemos un false el tag no se muestra por true si se muestra
ademas el elemento se agrega despues de que pasa el evento mientras no cambie el estado no se agrega al DOM
tambien podemos agregar un else 
*ngif="condition: else elseBlock"
<#elseBlock>

podemos usarlo como estado por defecto y con el cambio recien ejecutamos

----perosna listado---
npm i bootstrap jquery popper.js --save para instalar todo

-----directivas---
@input nos permite recibir informacion del componente padre al hijo
@output del hijo al padre
decorador

ng g c persona --skipTests=true
evitamos el archivo test al crear el componente

"strictPropertyInitialization": false

agregamos al tsconfig.json
para que no se tenga que inicializar todos los objetos

*/