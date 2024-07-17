/* Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
Exemplos:
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6
*/

function encontrarSegundoMaior(param) {
    let maior = 0
    let segundoMaior = 0

    for (let i = 0; i < param.length; i++) {

        if (param[i] > maior) {
            maior = param[i]
        }
    }

    for (let i = 0; i < param.length; i++) {

        if (param[i] > segundoMaior && param[i] < maior) {
            segundoMaior = param[i]
        }
   }

   return segundoMaior


}

console.log(encontrarSegundoMaior([8, 4, 5, 6]))