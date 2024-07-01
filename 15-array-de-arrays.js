/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
Exemplos:
objetoParaArray({
nome: "Maria",
profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
objetoParaArray({
codigo: 11111,
preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]]*/

function percorre (obj){
    let arr = []

    for (const property in obj) {
        let b = []
        b.push(property)
        b.push(obj[property])
        arr.push(b)
    
    }
    return arr
}

let a = {
    "nome":"julia",
    "idade":8,
    "peso":45
}
let result = percorre(a)

console.log(result)

