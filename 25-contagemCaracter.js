/* Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.
Exemplos:
contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1
*/

function contagemCaracter( letra,frase ){
    var quantidade = 0
    
    for (var i = 0; i < frase.length; i++) {
      if (frase[i] === letra) {
        quantidade++
      }
    }
    
    return quantidade
}

console.log(contagemCaracter("O","como voce esta"))