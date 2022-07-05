function comparacao() {
    let n1 = Number(prompt('Por favor, digite o primeiro número!'));
    let n2 = Number(prompt('Agora, digite o segundo número!'));
    let soma = n1 + n2;

    if(n1 == n2){
        if(soma > 20){
            alert(`Os números ${n1} e ${n2} são iguais. Sua soma é de ${soma}, que é maior que 10 e maior que 20.`)
        }else if(soma == 20){
            alert(`Os números ${n1} e ${n2} são iguais. Sua soma é de ${soma}, que é maior que 10 e igual a 20.`)
        }else if(soma > 10){
            alert(`Os números ${n1} e ${n2} são iguais. Sua soma é de ${soma}, que é maior que 10 e menor que 20.`)
        }else if(soma == 10){
            alert(`Os números ${n1} e ${n2} são iguais. Sua soma é de ${soma}, que é igual a 10 e menor que 20.`)
        }else if (soma < 10){
            alert(`Os números ${n1} e ${n2} são iguais. Sua soma é de ${soma}, que é menor que 10 e menor que 20.`)
        }
    }else{
        if(soma > 20){
            alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é de ${soma}, que é maior que 10 e maior que 20.`)
        }else if(soma == 20){
            alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é de ${soma}, que é maior que 10 e igual a 20.`)
        }else if(soma > 10){
            alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é de ${soma}, que é maior que 10 e menor que 20.`)
        }else if(soma == 10){
            alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é de ${soma}, que é igual a 10 e menor que 20.`)
        }else if (soma < 10){
            alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é de ${soma}, que é menor que 10 e menor que 20.`)
        }
    }
}
comparacao();