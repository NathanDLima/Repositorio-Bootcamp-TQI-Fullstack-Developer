const alunos = [
    {
        nome: 'Pedro',
        nota: 6,
        turma: '1A'
    },
    {
        nome: 'Joana',
        nota: 10,
        turma: '1A'
    },
    {
        nome: 'Carlos',
        nota: 3,
        turma: '2A'
    }
]

function alunosAprovados(array, media) {
    let aprovados = [];
    for (let i = 0; i < array.length; i++){

        const {nota, nome} = array[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));