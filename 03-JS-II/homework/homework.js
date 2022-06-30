// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  var A = x;
  var B = y;
  if (A > B) {
    return A;
  }
  if (A === B) {
    return A;
  }
  if (A < B){
    return B;
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var A = edad;
  if (A >= 18){
    return "Allowed";
  }
    return "Not allowed";
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  var A = status;
  if (A === 1){
    return "Online";
  }
  if (A === 2){
    return "Away";
  }
  return "Offline";
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
 switch(idioma){
   case "aleman":
     return "Guten Tag!";
   case "mandarin":
     return"Ni Hao!";
   case "ingles":
     return "Hello!";
   default:
     return"Hola!";
 }
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch(color){
    case "blue":
      return "This is blue";
    case "red":
      return "This is red";
    case "green":
      return "This is green";
    case "orange":
      return "This is orange";
    default:
     return "Color not found";
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
var A = numero;
if (A === 10 || A === 5){
  return true;
}
return false;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  var A = numero;
  if (A > 20 && A < 50){
    return true;
  }
  return false;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var A = numero;
  if (Number.isInteger(A)){
    return true;
  }
  return false;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var A = numero;
  var B = A % 3;
  var C = A % 5;
  if (B == 0 && C == 0){
    return "fizzbuzz";
  }
  if (B == 0 && C !== 0){
    return "fizz";
  }
  if (B !== 0 && C == 0){
    return "buzz";
  }
  if (B !== 0 && C !== 0){
    return A;
  }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  var A = num1;
  var B = num2;
  var C = num3;
  if (A === 0 || B === 0 || C === 0){
    return "Error";
  }
  if (A < 0 || B < 0 || C < 0){
    return "Hay negativos";
  }
  if (A > B && A > C && A > 0){
    return "Número 1 es mayor y positivo";
  }
  if (C > A && C > B){
    return C + 1;
  }
  return false;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  var A = numero;
  if (A == 0 || A == 1 || A == 4){
    return false;
  }
  for (let a = 2; a < A / 2; a++){
    if (A % a == 0) return false;
  }
  return true;
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  var A = valor;
  if (A == true){
    return "Soy verdadero";
  }
  if (A == false){
    return "Soy falso";
  }

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  var A = [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
  return A;
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  var A = numero;
  if (A > 99 && A < 1000 && Number.isInteger(A)){
    return true;
  }
  if (A < -99 && A > -1000 && Number.isInteger(A)){
    return true;
  }
return false;
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let B = '';
  let i = 0;
  let A = numero;
  
  do {
    A = A + 5;
    i = i + 1;
    B = A;
  } while (i < 8);
  return B;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
