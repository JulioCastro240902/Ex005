// Crie um array que receba 5 itens e exiba no console.

let dado = ["Julio", "Duda", "Magd", "Leandro", "Stefanie"];
console.log(dado);

// Utilize um método para adicionar um nome ao inicio do array.

dado.unshift("Draks");
console.log(dado);

// Utilize um método para remover o último nome do array.

dado.pop();
console.log(dado);

// Utilize um método para adicionar dois nomes ao fim do array.
dado.push("Cissa", "Antony");
console.log(dado);

// Utilize um método para remover o primeiro nome do array.

dado.shift();
console.log(dado);

// Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];

numbers.sort(function (a, z) {
  return a - z;
});
console.log(numbers);
