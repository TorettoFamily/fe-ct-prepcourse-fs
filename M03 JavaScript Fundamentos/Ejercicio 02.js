/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var a = x;
   var b = y;
   var suma = x + y ;
   return suma;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var a = x;
   var b = y;
   var resta = x - y ;
   return resta;

}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var a = x;
   var b = y;
   var division = x / y ;
   return division;
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var a = x;
   var b = y;
   var multi = x * y ;
   return multi;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var a = x;
   var b = y;
   var restito = x % y ;
   return restito;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
