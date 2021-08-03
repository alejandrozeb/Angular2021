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
---con @input---
podemos enviar informacion del padre al hijo

---con @output---
podemos enviar informacion del hijo al padre

---referencias localoes---
solo podemos envir informacin de la plantilla al componente

-----viewChild y referencias locales-------
usamos un decorador para recuperar la informacion

----SERVICIOS--------------
un sercivio representa un clase de ts que pude ser usada por varias clases
son metodos que se centalizan comparte informacion
normalmente devuelve datos de terceros
se usan con inyeccion de dependencias los usamos en el contructor
ademas de inyectarlo debemos definir un proveedor en el decorador component
de las misma manera podemos usar la misma tecnica

pero tambien podemos hacerlo singleton
registrando como provider en appmodule en el decorador @ngmodule aggando providers
asi la instacia se crea a nivel app y no solo locales en componentes

----ASSETS-----
todos los archivos estaticos van a assets

-----form---
al agregar un form se debe añadir el name igual que el ngmodel

----cambios de data---
si se afecta auna variables de app componente se recarga la pagina

----eventos y logica---
puedes manejar eventos que cambien la vista independiente del manejo de la data
select

-------routing--------------
agregaremos un modulo que manejara el app routing
permite navegar entre paginas en angular en un componente
/login -> /inbox

los muestra dinamicamente
agregar manualmente 
ng g module app-routing

al crear el proyecto podemos decir que si queremos manejar el routing

----child routes------
dos rutas son hijas

en las rutas hijas se cargan directamente los componentes ya no cambia de ruta

-----errores----
debe ser el ulitmo de las rutas

----firebase---------
Usaremos como bd para nuestro proyecto
debemos loggear con una cuenta gmail
abrimos la consola

es gratutita hasta algunos limites.
consola-> add project (damos un nombre)-> siguente acepamos condiciones y espermos a que se pueda crear el proyecto -> 

dos tipos de bd 
realdatatime database o could firestore usaremosla primera

cramos la bd en modo test.

https://listado-personas-74bcf-default-rtdb.firebaseio.com/

con este link podemos realizar las operaciones
debemos manejar el concepto de subscribe.

POSt por cada peticion post se agrega de nuevo toda la informacion.

PUT pone un recurso en la dirección especificada en la URL. Exactamente en esa dirección. Si no existe, lo crea, si existe lo reemplaza.

GEt al realizar la peticion devuelve un observable, un buen para procesar la data es la vista el componente como tal


modificar
https://listado-personas-74bcf-default-rtdb.firebaseio.com/datos/0

en firebase podemos ver que se 0 es el identificador de ese registro


----AUTENTICACION CON FIREBASE------

entramos a seccion de autenticacion

habilitamos el email/password
luego revisamos las reglas de nuestra bd 
auth != null 
añadimos a read y write
generamos un token para autenticarnos con la app

debemos crear un usuario en autenticacion para poder ingresar a la aplicacion
 
------instalar firebase------
npm install --save firebase

con httpclient se registra en dataservices
y tenemos que registrar el service de login en el archivo dataservices


token

'https://listado-personas-74bcf-default-rtdb.firebaseio.com/datos.json?auth='+token

usamos de esta forma el token para autenticarnos en cada request

-----GUARDIANES---------------------
evitan el ingreso a paginas que solo se pueden ver despues del login

creasmo el servicio y añadimos las clases qeu usaremos para este behavior

implmentamos el guradian en el app routing funcona como un midlleware

ademos podemos tener mas de un guardian

---produccion-----------------------
no podemos publicar la informacion por que es muy grande pero debemos copilar la pagina

ng build --prod --aot

genera una carpeta llamada dist
esta pensado a nivel raiz de uns ervidor

ng build --prod --aot --base-href /listado-personas/
asi desplegamos en una carpeta debemos especificar el nombre de la app


error budget debemos modificar el angularjson

"budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "2mb",
                  "maximumError": "5mb"
                }

 investigar acerca de estos limites!!!      
 
 ---produccion en firebase-----
usamos la seccion de hosting en la pagina de firebase en nuestro proyecto ya creado

npm install -g firebase-tools

debemos instalar primero este package de firebase
se instala de manera global

firebase login
ingresamos a nustra cuenta de google con la que creamoms en firebase

firebase init
damos y
elegimos la opciones de hosting  Y DATABASE

luego debemos seleccionar
existing project
elegimos nuestro proyecto

nos pregunta por la configuracion de database rules y  database.json dejamos que sea por default.
 nos pregunta la integracion con github por ahora no los usaremos

 en fibase.josn
 "public": "dist/listado-personas",

 configuramos la ruta del proyecto por que tenemos una subcarptea

 firebase deploy

 hace el deploy de nustra aplicacion

 firebase open hosting:site

 para brir el sitio desde e navegador o podemos ingresar a la URL.
 tambien podemos ver los dominios en la seccion de hosting de firebase
 https://listado-personas-74bcf.web.app/login

-----PROYECTO 2----------------------
se creara un nuevo proyecto en firebas llamado control-clientes

en este caso usaremos cloud firestore

creamos la bd en modo prueba luego creamos las colecciones 
clientes
         nombre,apellido,mail,saldo       
Configuracion
        permitirRegistro

creamos el proyecto control clientes
ng new control-clientes 
indicamos que vamos a usar el routing de angular y con css

usaremos bootstrap
npm i bootstrap jquery popper.js --save

y agregamos al angular.json

npm install firebase @angular/fire --save
este modulo nos ayuda a conectar mas facil la bd en firestore con nuetra aplicacion

npm install angular2-flash-messages --save
nos yuadara para manejar mensajes

<app-cabecero></app-cabecero>

<router-outlet></router-outlet>

<app-pie-pagina></app-pie-pagina>

de este modo el header y el pie de pagina no cambian
la pagina va variando su contenido con el router 

*/