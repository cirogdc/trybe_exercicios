    // Exercício 1
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
}

console.log(fatorial);

    //Exercício 2
// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = "Ciro Garcia Drago Couto";
let reverseWord = "";

for (let index = 0; index < word.length; index += 1) {
    reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

    //Exercício 3
// Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ["java", "javascript", "python", "html", "css"];
let longestWord = array[0];
let shortestWord = array[0];

for (let indexLongest = 0; indexLongest < array.length; indexLongest += 1) {
    if (array[indexLongest].length > longestWord.length) {
        longestWord = array[indexLongest];
    }
}

for (let indexShortest = 0; indexShortest < array.length; indexShortest += 1) {
    if (array[indexShortest].length < shortestWord.length) {
        shortestWord = array[indexShortest];
    }
}

console.log("A maior palavra é " + longestWord);
console.log("A menor palavra é " + shortestWord);