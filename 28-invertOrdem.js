/*Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
Exemplo:
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}*/

function invertOrdem (obj){
    let resultado = {}

    for(var key in obj){
        resultado[obj[key]] = key;
    } 

    return resultado
}

console.log(invertOrdem({ a: 1, b: 2, c: 3}))