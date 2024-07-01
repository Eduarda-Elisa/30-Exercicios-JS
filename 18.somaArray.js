/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60*/

function somaArray(arr){
    let soma = 0
    for( let i = 0; i < arr.length; i++){
        soma = soma + arr[i]
    }
    return soma
    
}
console.log(somaArray([1,2,3]))





