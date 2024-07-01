/*
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro.ex:
removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}
*/
function remov (a,b){
 
   for (const property in a) {
      if( property == b){
         delete a[b]
      }
    }

    return a 

}

let obj = {
   "nome":"julia",
   "idade":8,
   "peso":45    
}

let result = remov(obj,"nome")

console.log(result)




