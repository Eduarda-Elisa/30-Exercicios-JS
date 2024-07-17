/* Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
Exemplos:
removerVogais("Codar") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
*/ 

function remov(palavra){
    return palavra.replace(/[aeiouAEIOU]/g, '')

}

console.log(remov("eduarda"))