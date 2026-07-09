# desafio3-funciones
Modulo 3 - Desafio 3 - Funciones

# Desafío 3 - Funciones

## Descripción

Este desafío tiene como objetivo evaluar el dominio de las funciones en JavaScript, la manipulación del DOM y el manejo de eventos mediante una serie de ejercicios prácticos.

A lo largo del desafío se aplican conceptos fundamentales como:

* Declaración de funciones.
* Funciones de expresión.
* Arrow Functions.
* Parámetros y argumentos.
* Parámetros con valores por defecto.
* Eventos del DOM.
* Manipulación de elementos HTML.
* Creación dinámica de elementos.
* Manejo de eventos del teclado.

---

# Objetivos de aprendizaje

Al finalizar este desafío el estudiante deberá ser capaz de:

* Comprender las distintas formas de declarar funciones en JavaScript.
* Transformar funciones tradicionales en funciones de expresión.
* Utilizar Arrow Functions correctamente.
* Manipular elementos HTML mediante JavaScript.
* Utilizar `addEventListener()` para responder a eventos.
* Enviar argumentos a funciones.
* Crear elementos HTML dinámicamente.
* Capturar eventos del teclado.
* Modificar estilos CSS desde JavaScript.

---

# Requerimientos

## 1. Transformar una función declarada en una función de expresión

### Función original

```javascript
function example(a, b, c){
    return a + b + c;
}
```

### Objetivo

Transformar la función anterior en una **Función de Expresión**.

### Concepto evaluado

Las funciones de expresión se almacenan dentro de una variable.

Ejemplo general:

```javascript
const nombreFuncion = function(){
    // código
}
```

### Archivo solicitado

```
1_funcion.js
```

### Puntaje

**1 punto**

---

# 2. Transformar una función de expresión en Arrow Function

### Función original

```javascript
let suma = function(a, b){
    return a + b;
}
```

### Objetivo

Transformarla en una Arrow Function de una sola línea.

### Conceptos evaluados

* Arrow Functions
* Retorno implícito
* Sintaxis simplificada

Ejemplo general:

```javascript
const funcion = (a,b) => a + b;
```

### Archivo solicitado

```
2_arrow.js
```

### Puntaje

**1 punto**

---

# 3. Modificación del ejercicio "Pintar"

Se proporciona un ejemplo que cambia el color de un elemento HTML al hacer clic.

## Código base

```html
<div id="ele1">hello</div>
```

```javascript
function pintar(){
    ele.style.backgroundColor = "yellow";
}

const ele = document.getElementById("ele1");

ele.addEventListener("click", pintar);
```

---

## 3.1 Separar el proyecto

### Objetivo

Separar el código en dos archivos.

### Estructura esperada

```
Proyecto
│
├── pintar.html
│
└── assets
    └── js
        └── script.js
```

### Concepto evaluado

Separación entre HTML y JavaScript.

### Puntaje

**1 punto**

---

## 3.2 Recibir el elemento clickeado

### Objetivo

La función no debe buscar nuevamente el elemento mediante `getElementById()`.

Debe recibir directamente el elemento que generó el evento.

### Conceptos evaluados

* Parámetros
* Eventos
* Funciones anónimas
* Objeto Event

### Beneficios

* Código reutilizable.
* Menor acoplamiento.
* Mejor rendimiento.
* Buenas prácticas.

### Puntaje

**1 punto**

---

## 3.3 Parámetro color

### Objetivo

Modificar la función para que reciba un color como parámetro.

Debe existir un valor por defecto:

```
green
```

Al hacer clic sobre el elemento debe enviarse:

```
yellow
```

### Conceptos evaluados

* Parámetros
* Argumentos
* Parámetros por defecto

Ejemplo conceptual

```javascript
function pintar(elemento, color = "green"){
}
```

### Puntaje

**1 punto**

---

# 4. Página 4_colores.html

Esta sección representa la parte más extensa del desafío.

Valor total:

**5 puntos**

---

## 4.1 Crear cuatro DIV

Se deben crear cuatro elementos `<div>`.

Características:

* 200 px de ancho.
* 200 px de alto.
* Color azul.
* Color rojo.
* Color verde.
* Color amarillo.

Cada uno debe tener:

* Un identificador único.
* Estilos mediante el atributo `style`.

### Conceptos evaluados

* HTML
* Identificadores
* Estilos en línea

### Puntaje

**1 punto**

---

## 4.2 Cambiar color al hacer clic

Cada uno de los cuatro div debe cambiar a color negro cuando se haga clic.

Debe utilizarse:

```javascript
addEventListener()
```

### Conceptos evaluados

* Eventos
* DOM
* Manipulación de estilos

### Puntaje

**1 punto**

---

## 4.3 Manejo del teclado

Debe existir una variable global que almacene un color dependiendo de la tecla presionada.

Las teclas son:

| Tecla | Color   |
| ----- | ------- |
| a     | Rosado  |
| s     | Naranjo |
| d     | Celeste |

Además debe existir un div con:

```
id="key"
```

Características:

* 200px x 200px
* Blanco
* Borde negro

Cuando se presione:

* a → Rosado
* s → Naranjo
* d → Celeste

el div debe cambiar de color.

### Conceptos evaluados

* Eventos del teclado
* Variables globales
* DOM
* Manipulación de estilos

### Puntaje

**2 puntos**

---

## 4.4 Crear nuevos DIV dinámicamente

Al presionar:

| Tecla | Color  |
| ----- | ------ |
| q     | Morado |
| w     | Gris   |
| e     | Café   |

Debe crearse automáticamente un nuevo `<div>`.

Características:

* 200px de ancho
* 200px de alto
* Color correspondiente

### Conceptos evaluados

* createElement()
* appendChild()
* Manipulación dinámica del DOM

### Puntaje

**1 punto**

---

# Conceptos de JavaScript utilizados

Durante este desafío se ponen en práctica los siguientes conocimientos:

## Funciones

* Declaración
* Expresión
* Arrow Functions
* Parámetros
* Valores por defecto

---

## DOM

* getElementById()
* style
* createElement()
* appendChild()

---

## Eventos

* click
* keydown
* addEventListener()

---

## Objetos Event

Uso del objeto `event` para:

* conocer qué tecla fue presionada
* conocer qué elemento disparó el evento

---

# Estructura sugerida del proyecto

```
Desafio_Funciones
│
├── 1_funcion.js
├── 2_arrow.js
├── pintar.html
├── 4_colores.html
│
└── assets
    └── js
        └── script.js
```

---

# Criterios de evaluación

| Requerimiento                  | Puntaje |
| ------------------------------ | ------: |
| Función de expresión           |       1 |
| Arrow Function                 |       1 |
| Separación HTML y JS           |       1 |
| Recibir elemento por parámetro |       1 |
| Parámetro color                |       1 |
| Crear cuatro div               |       1 |
| Cambiar a negro                |       1 |
| Teclas a/s/d                   |       2 |
| Teclas q/w/e                   |       1 |

**Total: 10 puntos**

---

# Buenas prácticas recomendadas

* Mantener HTML y JavaScript separados.
* Utilizar nombres descriptivos para variables y funciones.
* Evitar repetir código.
* Reutilizar funciones mediante parámetros.
* Utilizar `const` cuando la variable no cambie.
* Utilizar `let` únicamente cuando sea necesario.
* Comentar únicamente el código complejo.
* Mantener una estructura ordenada de carpetas.

---

# Conclusión

Este desafío reúne los principales conceptos introductorios de JavaScript relacionados con funciones y manipulación del DOM. Además de evaluar la sintaxis de funciones tradicionales, funciones de expresión y Arrow Functions, también verifica la capacidad para trabajar con eventos, modificar estilos dinámicamente, reutilizar código mediante parámetros y crear elementos HTML desde JavaScript, consolidando así las bases necesarias para el desarrollo de aplicaciones web interactivas.
