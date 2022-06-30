// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var A = array;
  return A[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var A = array;
  return A[A.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var A = array.length;
  return A;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var A = array;
  var B = [];
  for (let i = 0; i < A.length; i++){
  B.push(A[i]+1)
  }
  return B;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
array.unshift(elemento);
return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var A = palabras;
  var B = A.join(" ");
  return B;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var A = array;
  var B = elemento;
for (let i = 0; i < A.length; i++){
  if(A[i] === B){
    return true;
  }
}
return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var A = numeros;
  var B = 0;
for(let i = 0; i < A.length; i++){
    B = B + A[i];
  }
  var C = B;
return C;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
var A = 0;
for(var i = 0; i < resultadosTest.length; i++){
 A = A +resultadosTest[i];
}
var B = A;
var C = resultadosTest.length;
var D = B / C;
return D;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var array = numeros;
  var A = 0;
  array.forEach(element => {
    if (A < element) {
      A = element;
    }
  });
  return A;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var A = 1;
if (arguments.length === 0){
return 0;
} else if (arguments.lenght === 1){
  return arguments[0];
} else {
  for (var i = 0; i < arguments.length; i++){
 A = A * arguments[i];
  }
}
return A;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var A = arreglo;
var B = A.filter(number => number > 18);
var C = B.length;
return C;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var A = numeroDeDia;
  var B = "Es fin de semana";
  var C = "Es dia Laboral";
  // Domingo = 1
  // Lunes = 2
  // Martes = 3
  // Miercoles = 4
  // Jueves = 5
  // Viernes = 6
  // Sabado = 7

  if (A == 1 || A == 7){
return B;
  } else if(A == 2 || A == 3 || A == 4 || A == 5 || A == 6){
    return C;
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var A = n.toString();
  if(A[0] == 9){
    return true;
  } else {
return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var A = arreglo;
  var B = (currentValue) => currentValue == A[0];
  var C = A.every(B);
  return C;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var A = array;
  var B = [];
  for(let i = 0; i < A.length; i++){
    A[i];
    if(A[i] == "Enero" || A[i] == "Marzo" || A[i] == "Noviembre"){
      B.push(A[i]);
    }
  }
  if (B.length < 3){
    return "No se encontraron los meses pedidos";
  } else {
    return B;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var A = array;
  var B = A.filter(number => number > 100);
  return B;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var A = numero;
  var B = [];
 for (let i = 0; i < 10; i++){
 A = A + 2;
 if(A === i){
   break;
 } else {
   B.push(A);
 }
}
if(B.length < 10){
  return "Se interrumpió la ejecución";
}
return B;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var A = numero;
  var B = [];
 for (var i = 0; i < 10; i++){
 if(i === 5){
 continue;
} else{
  A = A + 2;
  B.push(A);
}
 }
 return B;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
