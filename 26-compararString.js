/* A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
Exemplos:
buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []
*/
function compararString( param1, param2 ){
    let arr = []

   for(let i = 0; i < param2.length; i++){
        if(param2[i].includes(param1)){
            arr.push(param2[i])
        }
   }
   return arr 
}
console.log(compararString("dia",["diariamente", "noite", "tarde"]))