/* Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
 Considere que todas as palavras só são separadas por um espaço.
Exemplos:
contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará 5
*/

function contagem(a){
  let param = a
  let tamanho = param.split(" ")
  
  return tamanho.length
}
console.log(contagem("ola tudo bem"))