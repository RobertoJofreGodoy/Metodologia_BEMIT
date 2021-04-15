
# BEM

- Metodologia de nomenclatura para definir las clases del HTML, para posteriormente modificar su CSS de manera sencilla, facil y clara.
- El objetivo de BEM es dar transparencia y claridad a nuestro HTML y CSS
- BEM te dice como se relacionan las clases entre ellas.

## BEM son tres siglas

- B de BLoque
- E de elemento
- M de Modificador

- Un bloque es una sección independiente que tiene significado propio por si solo, contiene todos los nodos HTML de una estructura a la que te estes refiriendo.
- Un elemento es una porcion más pequeña interna a un bloque, se utiliza para dividir el bloque en segmentos más pequeños.
- Un modificador es una clase que sirve para modificar algunas propiedades de un bloque o elemento

### Ejemplo

En el siguiente ejemplo, vemos como el contenedor principal contiene la clase "block" y cada uno de sus elementos contiene la clase "block__element" indicando mediante el nombre de la clase que son hijos del elemento "block", el ultimo elemento contiene las clases "block__element block element--modifier", indicando que es un elemento de "block" pero además tiene algunas propiedades modificadas.

#### HTML

```html
<div class="block">
	<div class="block__element">Elemento 1</div>
	<div class="block__element">Elemento 2</div>
	<div class="block__element block__element--modifier">Elemento 3 modificado</div>
</div>
```

#### CSS

```css
.block {color: inherit;}
.block__element {color: inherit;}
.block__element--modifier {color: blue;}
```

## B de Bloque
- Entidad intependiente con significado propio
- Existen bloques simples y compuestos (en su interior viven más bloques independientes)
- Para nombrar un bloque se puede utilizar letras, digitos y guiones
- No se puede utilizar mayúsculas
- No se puede utilizar 2 guiones bajos eguidos, está reservado para los elementos ___ (block__element)
- No se puede utilizar 2 guiones seguidos, está reservado para los modificadores ___ (block--modifier)

**Para atacar el bloque en CSS se debe utilizar solo el selector de clases** con el nombre del bloque, es decir ni etiquetas HTML, ni id's, ni selectores anidados ni clases extras.
```css
/* CORRECTO */
.block {color: inherit;} /* BLOQUE */
.form {color: inherit;} /* BLOQUE */
.tabs {color: inherit;} /* BLOQUE */

/* INCORRECTO */
div.block {color: inherit;} /* BLOQUE */
.tabs .button {color: inherit;} /* BLOQUE */
#form {color: inherit;} /* BLOQUE */
.sections > .tabs {color: inherit;} /* BLOQUE */
```
Gracias a este principio, los bloques HTML son realmente independientes entre si, además el CSS solo ataca al bloque al que pertenece

### Ejemplo de Bloque compuesto
Podemos ver como el block "header" es un bloque compuesto que contiene los bloques "col", que a su vex uno contiene otro bloque "menu", cada uno es un bloque independiente, cada uno tiene sus propios estilos, por lo que no existirá ningún tipo de conflicto
```HTML
<div class="header">
    <div class="col"></div>
    <div class="col">
        <div class="menu">Menú</div>
    </div>
</div>
```
```CSS
.header {
	width: 100%;
	display: flex;
	background-color: lightblue;
	padding: 20px;
	outline: 1px solid darkblue;
}

.col {
	width: 50%;
	display: block;
	background-color: lightgreen;
	padding: 20px;
	outline: 1px solid darkgreen;
}

.menu {
	width: 100%;
	display: block;
	background-color: lightcoral;
	color: black;
	padding: 20px;
	outline: 1px solid darkred;
}
```

## E de Elemento
- Segmento de un bloque, no tiene significado independiente por si solo.
- Está ligado su bloque, tiene que vivr dentro de el.
- Cualquier TAG HTML dentro de un bloque puede ser un elemento.
- Dentro de un bloque, todos sus elementos son iguales semanticamente.
- Para nombrar un elemento se puede utiizar letras, digitos y guiones.
- No se puede utilizar mayúsculas.
- No se puede utilizar dosa guiones seguidos, está reservado para los mofiicadores -- (block--modifier).

- La sintaxis para crear nombres de elementos es la siguiente:
    - nombre-bloque + dos guiones bajos (__) + nombre-del-elemento
    - block + __ + element
    - block__element

**Para atacar los elementos en CSS se debe utilizar solo el selector de clases**, es decir ni etiquetas HTML, ni id's, ni selectores anidados ni clases extras.

### Ejemplo

```HTML
<div class="form">
    <input class="form__input" type="text">
    <input class="form__input" type="text">
    <textarea class="form__textarea"></textarea>
</div>
```

```CSS
.form {/*  */}
.form__input {/*  */}
.form__textarea {/*  */}
```

## M de Modificador
- Clase adicional a un bloque o elemento que modifica sus estilos definidos.
- No tiene significado independiente por si solo
- Está ligado a su bloque o elemento, tiene que vivir en el.
- A cualquier TAG HTML que sea un bloque o elemento se le puede añadir un modificador
- Se puede utilizar más de un modificador a la vez para el mismo bloque o elemento.
- Para nombrar un modificador se puede utiizar letras, digitos y guiones.
- No se puede utilizar mayúsculas.

- La sintaxis para crear nombres de elementos es la siguiente:
    - nombre-bloque + dos guiones (--) + nombre-del-modificador
    - block + -- + modifier
    - block--modifier

```HTML
<div class="form">
	<input class="form__input form__input--border" type="text" />
	<input class="form__input" type="text" />
	<textarea class="form__textarea"></textarea>
	<button class="form__submit form__submit--big form__submit--black">
		Enviar
	</button>
</div>
```

```CSS
.form {/* BLOQUE */}
.form__input {/* ELEMENTO */}
.form__input--border{/* MODIFICADOR */}
.form__textarea {/* ELEMENTO */}
.form__submit{/* ELEMENTO */}
.form__submit--big {/* MODIFICADOR */}
.form__submit--black{/* MODIFICADOR */}
```

# ITCSS
Inverted Triangle CSS 
- Metodologia de trabajo propuesta por Harry Roberts.
- Ayuda a organizar las carpetas y archivos CSS.
- Pretende resolver el caos que se genera en los proyectos a nivel de CSS con los selectores y su nivel de fuerza.

- Separa tu código CSS en varias capas:
    - **SETTINGS**: variables SCSS (preprocesador) - No genera CSS
    - **TOOLS**: funciones y mixins SCSS (preprocesador) - No genera CSS
    - **GENERIC**: código genérico (reset CSS, normalize CSS o propios estilos globales)
    - **TAGS**: estilos aplicados a los TAGS HTML
    - **OBJECTS**: clases reutilizables en cualquier contexto. Un bloque BEM puede ser un objeto, de ser así, sus estilos vivirán en esta capa.
    - **COMPONENTS**: clases que atacaran a una parte específica de la interfaz. Un bloque BEM puede ser un componente, de ser así, sus estilos vivirán en esta capa.
    - **UTILITIES**: clases con la capacidad de anular todo el CSS previo. Solo aquí está permitido usar *!important*. Último recurso a utilizar, no abusar de esta capa.

- El orden de capas es el orden en el que van a ser definidor los estilos en el CSS resultante.
- Este tipo de organización de código en el CSS nos dá 3 características:
    - **MAGNITUD**: Impacto de una capa sobre las demás, el código de una capa solo afectará a las capas ingeriores, nunca a una superior, ya que cada capa va heredando los estilos de las capas superiores.
    - **CLARIDAD**: Localización de selector.
    - **ESPECIFICIDAD**: Nivel de fuerza de selector

Es muy recomendable utilizar **SASS**, para poder tener cada capa en una carpeta diferente y juntar todo en un solo archivo CSS

En este repositorio se encuentra la **carpeta ITCSS** que almacena cada capa en una carpeta con su respectivo nombre, y estas son llamadas desde el archivo "styless.scss", cuando se ejecute el preprocesador este devolverá un solo archivo CSS con todo lo que importemos de las carpetas.

Se puede apreciar que tanto en la carpeta "objects" y "components" existe más de un archivo, esto es a que es recomendable separar cada clase en su propio archivo.


## ITCSS: Pseudoclases y Pseudoelementos
- Las pseudoclases y los pseudoelementos de CSS se añadirán donde se encuentre el selector afectado, es decir, en el mismo archivo y capa

## ITCSS: KeyFrames
- La definición de los keyframes no tienen un lugar especifico en donde vivir dentro de ITCSS, en caso de requerirlos, se recomienda agregarlos en una capa previa la capa "objetos"

```SCSS
// SETTINGS
@import './settings/settings';

// TOOLS - (FUNCS - MIXINS)
@import './tools/functions';
@import './tools/mixins';

// GENERIC
@import './generic/generic';

// TAGS
@import './tags/tags';

// KEYGRAMES
@import './keyframes/keyframes'; // <---- AQUI 

// OBJECTS
@import './objects/container';
@import './objects/color';

// COMPONENTS
@import './components/footer';
@import './components/tabs';

// UTILITIES
@import './utilities/utilities';
```

## ITCSS: Responsive
- Para gestionar el responsive en esta estructura de capas y archivos, se añade el responsive allí donde esté el selector con el estilo predeterminado

- Al organizarlo de esta manera, se tendrá en el mismo archivo y capa todos los estilos del selector atacado, incluso el responsive, estará todo muy bien localizado.

- Lo más recomendable es tener **Mixins con los diferentes puntos de ruptura**, debido a que si por algún motivo estos deben ser modificados en el futuro, solo se tendrá que modificar el archivo de mixins.

```SCSS
/* =====================================================================================================
    TOOLS - MIXINS
=====================================================================================================
 */

 @mixin sm(){
     @media (min-width: 501px){
         @content;
     }
 }

 @mixin md(){
    @media (min-width: 1101px){
        @content;
    }
}
```

```SCSS
/* =====================================================================================================
    COMPONENT - FOOTER
=====================================================================================================
 */

 .footer{
    font-size: 20px;
    line-height: 22px;

    &__menu{
        display: block;
        width: 100%;

        @include md{  // <----  SE LLAMA AL MIXIN
            width: 50%;
        }
    }
}
```

# BEMIT
- Metodología de trabajo propuesta por **Harry Roberts**
- Apodada así por la unión de **BEM + ITCSS**
- BEMIT es BEM pero con algunas reglas extras, estas reglas son **prefijar y sufijar las clases**.
- BEMIT no es una convención de nomenclatura alternmativa o diferente a BEM, sino un aumento, **BEMIT es una extensión de BEM**.
- BEMIT, al igual que BEM, es una metodología de nomenclatura para definir las clases de los nodos HTML.
- El problema de BEM es que solo te dice cómo se relacionan las clases entre sí, no te dice como se comportan o deberían actuar en su sentido global.
- BEMIT no agrega ningún tipo de clase, pero **agrega inforamción de uso y estado**, gracias a los prefijos y sufijos.
- Al momento de crear una clase se sigue teniendo:
    - Bloques
    - Elementos
    - Modificadores
    - y las clases independientes a la nomenclatura BEM
- Las clases independientes son clases que se escapan a la metodologia BEM, porque, por ejemplo, las escribe un plugin externo.
- Algunas de estas clases independientes, ahora las añadiremos nosotros con la metodología BEMIT, es decir, una clase que no es ni bloque, ni elemento ni modificador.
- Añadir prefijos y sufijos a las clases, nos permite determinar exactamente que tipo de trabajo puede tener una clase, cómo se puede utilizar, dónde podemos encontrar sus estilos definidos, si podemos modificarla o no y mucho más.

## BEMIT: Prefijos y Sufijos

**Listado de Prefijos**:
- **o-** para objetos.
- **c-** para componentes.
- **u-** para utilidades
- **is-** o **has-** para determinar un estado
- **js-** para referenciar un nodo que interactúa con JavaScript
- **t-** para un tema de estilos determinado.
- **s-** para contextos y alcance de ámbito (scope)
- **qa-** para testing de control de calidad.
- **_** para hacks

**Los sufijos son para las media query**:
- Se escribe con el @
```
class@breakpoint
```
Dónde @breakpoint será la media query que tú decidas

### Prefijos
#### Prefijo de objeto: o-
- Una clase de objeto se forma de la siguiente manera:
```
o-object-name[element|modifier]
```
por ejemplo:
```
o-color-red
o-layout__col
o-container--fixed
```
- Un Bloque BEM puede ser un objeto.
- Los objetos son clases reutilizables en todo el proyecto de manera genérica.
- Un objeto se puede usar en cualquier número de contextos no relacionados entre sí.
- Un objeto vive en la capa de objetos de nuestro sistema.
- Un objeto tendrá su propio archivo donde se definen sus estilos.
- Es muy arriesgado modificar los estilos de uno, puede romper en diferentes lugares.

#### Prefijo de componente: c-
- Una clase de componente se forma de la siguiente manera:
```
c-object-name[element|modifier]
```
por ejemplo:
```
c-form
c-tabs__button
c-footer--fixed
```
- Un compoenente siempre es un bloque BEM
- Un componente es una pieza de la interfaz concreta, específica.
- Un componente vivirá en la capa de componentes de nuestro sistema.
- Un componente tendrá su propio archivo donde se definen sus estilos.
- La modificación de estas clases es segura y no debería tener efectos secundarios. De romper algo al editar una clase de componente, sabes que solo romperá el propio componente allí donde aparezca, ya qeu sus estilos no afectan a ningún otro ítem. 

#### Prefijo de utilidades: u-
- Una clase de utilidad se forma de la siguiente manera:
```
u-utility-name
```
por ejemplo:
```
u-full-width
u-block
```
- Una clase de utilidad es una clase independiente, es dcir, no es ni bloque, ni elemento ni modificador
- Las clases de utilidad son las más específicas de nuestro proyecto.
- Es bastante común que las declaraciones de estas clases tengan el valor **!important** para garantizar que se sobreponen al resto de estilos.
- Usar este tipo de clase como último recurso para abordar alguna circunstancia muy especial.
- No deberías tener que modificar estas clases ya que su declaración es muy específica y concreta.
- No deberías ver casi clases de utilidad en tu proyecto, de hecho, si no tienes ninguna, mejor.

#### Prefijo para determinar un estado: is- has-
- Una clase de estado se forma de la siguiente manera:
```
[is][has]-state
```
por ejemplo: 
```
is-active
has-children
```
- Las clases de estado nos informan sobre los estados temporales o de corta duración de los diferentes nodos.
- Es una forma legible y muy obvia de entender sobre el estado actual del ítem.
- Las clases estado, también son increíblemente útiles es nuestro CSS para decirle a los desarrolladores posibles estados en los que puede existir una parte de la interfaz de usuario.
- Estas clases funcionan encadenando otras clases, es decir, anidando clases para su selector en el CSS.
- Al crear un selector anidado de dos clases, sube el nivel de fuerza del selector a 20 puntos, esto garantiza que el estado siempre tome protagonismo sobre el estilo predeterminado.
- Nunca veremos una clase de estado en nuestro CSS viviendo sola.
- No se aplican estilos a una clase de estado, se le aplica el estilo a un nodo cuando cumple dicho estado.
- La diferencia que hay en los estados a los modificadores de BEM es que los estados son temporales.
- Los estados pueden cambiar de un momento a otro, en función de kas acciones del usuario.

#### Prefijo para referenciar un nodo que interactúa con JavaScript: js-
- Una clase de hook para JavaScript se forma de la siguiente manera:
```
js-name
```
Por ejemplo: 
```
js-tab-button
js-loader
```
- La idea es prefijar clases para atacar con JavaScript es separar nuestro código, para no tener estilos y comportamiento vinculados al mismo selector.
- Unir ambas tecnologías en el mismo selector significa que no podemos tener una sin la otra.
- Dicja separación rd uns buena práctica de desarrollo frontend a tener en cuenta.
- Es una forma muy legible y muy obvia de entender de un vistazo rápido que ese nodo del html con clases de prefijo js- tiene un evento o comportamiento específico asociado en tu JavaScript.
- Tener ese prefijo significa trabajar de forma mucho más segura.
- Este tipo de clase no añade estilos en tu CSS.
- Si utilizas en tu JavaScript una nomenclatura diferente, por ejemplo, CamelCase o cualquier otro método, entonces se puede permitir usar clases como .jsModal si es necesario. Aunque se recomienda que todo se haga en el mismo formato BEMIT.

#### Prefijo para un tema de estilos determinado: t-
- Una clase de tema se forma de ña siguiente manera:
```
t-theme-name
```
Por ejemplo: 
```
t-dark
t-light
```
- Una clase de tema es un tipo de clase que modifica estilos aplicados a varias secciones para que sigan la misma temática.
- Las clases de tema no tienen un archivo específico donde vivir, viven en la clase a la que modifican
- Las clases de tema, utilizan un selector anidado, por lo que tienen una fuerza de selector mayor que una clase única.
- Es un tipo de clases que preferiblemente hay que evitar


#### Prefijo para contextos y alcance de ámbito (scope): s-
- Una clase de scope, o también llamda de contexto o alcance de ámbito, se forma de la siguiente manera:
```
s-scope-name
```
Por ejemplo: 
```
s-cms-content
s-about
```
- Una clase de scope es una clase que añade un contexto en alguna sección de tu web para poder tratar de manera especial esa sección.
- Las ckases de scope en CSS resuelven un problemas muy específicos y particular. Asegurate de que realmente encesitas este recurso antes de utilizar este tipo de clases, ya que pueden utilizarse de forma incorrecta y acabar en un CSS caótico.
- A veces, puede ser útil añadir un nuevo contexto de estilo para una sección en particular del proyecto. Un ejemplo èrfecto de esto son las áreas de contenido generado por un CMS, es las uqe parde del HTML proviene de un usuario que puede subir contenido en el backend, por ejemplo en Wordpress.
- Este tipo de clases generan un selector de anidamiento, ganando mucha fuerza de selector. Puede causar muchos problemas, así que es mejor evitarlas.
- Estas clases no tienen un lugar específico dodne vivir, las podemos añadir en una nueva cpapa llamada "scopes" emtre los componentes y las utilidades.

#### Prefijo para testing de control de calidad: qa-
- Una clase de control de calidad se forma de la siguiente manera:
```
qa-node-name
```
Por ejemplo: 
```
qa-message-success
qa-error-login
```
- Este tipo de clases es inusual, pero potencialmente útil.
- Cuando se ejecutan pruebas automatizadas de la interfaz, es una buena práctica separar tus selectores cd CSS de los hooks para dichas pruebas.
- Este tipo de clase sigue el mismo concepto qwue la clase de hook para Javascript.
- Usar este tipo de clases nos permite tener separado el estilo de las pruebas de calidad.
- Si no vas a tener que hacer pruebas automatizadas, no utilices este tipo de clase.
- Podemos hacer todos los cambios de CSS que necesitemos, siempre y cuando nos aseguremos que el hooj para el control de calidad permanezca en su lugar.


#### Prefijo para hacks: _

- Una clase para hacks se forma de la siguiente manera:
```
_hack-name
```
Por ejemplo: 
```
_c-form__input
```
- En ciertas circunstancias, generalmente muy raras, es posible que debamos agregar una clas e a nuestro HTML únicamente para ayudarnos a nular o modificar algo temporalmente.
- Evitar este tipo de clases
- Si ves una clase con prefijo _, que sepas que es una clase temporal y está modificando algo muy concreto.

### Sufijos

#### Sufijos de responsive: @

- Una clase de responsive, se forma de la siguiente manera:
```
class-name@breakpoint
```
Por ejemplo: 
```
o-text-align-right@xs  <--- este objeto se alineará a la direcha solo en el breakpoint xs
u-none@md  <--- oculta el nodo en md
u-none@print  <--- oculta nodos cuando se encuetran en el contexto de impresión
```
- Estas clases solo son de ayuda, y son más utiles en objetos y utilidades, NO en componentes, si quieres aplicar responsive a un componente, lo mejor es aplicar la media query directamente en su selector, asi podemos mantener todos los estilos referentes al componente en el mismo lugar.

### ! Debug

- Al tener todos los patrones estrictos y consistentes de BEMIT en nuestro HTML, podemos realizar un debug visual en nuesatra interfaz de usuario.
- Podríamos resaltar las diferentes clases en función de lo que son.
- Por supuesto esto solo es orientativo, pero podemos comenzar a obtener una buena instantánea visual de la composición de cualquier página (con metodología BEMIT).
- Pondremos el código en un archivo de scopes, en _scopes.scss.
- Cuando se quiera activar el debug, solo hay que agregar al body la clase **s-debug**

