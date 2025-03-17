/** 
 * Buscar un pez en el mar.
 * 
 * Utiliza adecuadamente el método "includes" dentro de la función para buscar el pez 'fishToFind' en el banco de peces 'fishes'. Tu función debe devolver un true o un false
*/

function isFishHere(fishes, fishToFind) {

    return fishes.includes(fishToFind);

}

// fishes -> la lista de peces que nos pasan
// fishToFind -> el pez que buscan

// 1. Mostrar por console.log las variables fishes y fishToFind

// 2. En ejercicio ex5.js hemos usado un método útil para saber si un elemento esta dentro de un array. ¿Podríamos aprovechar y usarlo también aquí dentro de la función?

// let found = fishes.includes(fishToFind);

// 3. Recordad que para que la función devuelve algo debe tener la palabra reservada "return". En este caso, debe devolver true o false, en funcion de si el fishToFind se encuentra en el array de fishes

return found;

// Tenemos que devolver true o false (en función de si fishToFind se encuentra en el array de fishes o no)

// Conjunto de pruebas para isFishHere

console.log(isFishHere(["Nemo", "Dory", "Marlin", "Bruce"], "Nemo")); // true  -> Nemo está en la lista
console.log(isFishHere(["Nemo", "Dory", "Marlin", "Bruce"], "Dory")); // true  -> Dory está en la lista
console.log(isFishHere(["Nemo", "Dory", "Marlin", "Bruce"], "Marlin")); // true  -> Marlin está en la lista
console.log(isFishHere(["Nemo", "Dory", "Marlin", "Bruce"], "Bruce")); // true  -> Bruce está en la lista (aunque es un tiburón)
console.log(isFishHere(["Nemo", "Dory", "Marlin", "Bruce"], "Flounder")); // false -> Flounder (de La Sirenita) no está en la lista
console.log(isFishHere(["Flounder", "Sebastian", "Scuttle"], "Flounder")); // true  -> Flounder está en la lista
console.log(isFishHere(["Flounder", "Sebastian", "Scuttle"], "Dory")); // false -> Dory no está en la lista
console.log(isFishHere(["Nemo", "Dory", "Marlin"], "nemo")); // false -> Diferencia entre mayúsculas y minúsculas, "nemo" no es igual a "Nemo"


