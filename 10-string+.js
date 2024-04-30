/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
*/

function contagem (num) {
    let ret = ``
    for(let i=0;i<num;i++){
        ret=ret+"+"
    }
    console.log(ret)
}

contagem(2)