function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Nathan',
    idade: 19
}

const pessoa2 = {
    nome: 'Laura',
    idade: 25
}

const animal = {
    nome: 'Rex',
    idade: 4,
    raca: 'Husky'
}

//console.log(calculaIdade.call(pessoa2, 15));
console.log(calculaIdade.apply(pessoa2, [15]));