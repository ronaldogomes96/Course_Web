function soma(){
    let soma = 0
    for (i in arguments){
        soma+= arguments[i] //arguments cria um array dos valores passados como parametros
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.5,6.9))
console.log(soma('a', 'b', 'c')) // Concatena tudo
