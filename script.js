function mediaAluno() {
    

//Lógica de Programação
// Problema: obter 3 notas de um aluno, calcular a média,
// exibir a média e exibir a situação do aluno: aprovado,
// em exame ou reprovado.

console.log('Início do programa');

//declaração das variáveis

const nota1 = parseInt(document.getElementById('nota1').value);
const nota2 = parseInt(document.getElementById('nota2').value);
const nota3 = parseInt(document.getElementById('nota3').value);


// cálculo da média
const media = (nota1 + nota2 + nota3)/3;

document.getElementById('resultado').innerHTML = 'A média do aluno é: ' + media +'<br>';

console.log('A nota 1 é:' , nota1)
console.log('A nota 2 é:' , nota2)
console.log('A nota 3 é:' , nota3)

console.log('A média do aluno é:' , media);

if (media >= 7) {
    document.getElementById('resultado').innerHTML += 'Situação: APROVADO';
    // console.log('APROVADO'); QUANDO ERA PARA VER NO CONSOLE
} else if (media < 7 && media >= 5) {
    // console.log('EXAME'); QUANDO ERA PARA VER NO CONSOLE
    document.getElementById('resultado').innerHTML += 'Situação: EXAME';
} else {
    document.getElementById('resultado').innerHTML += 'Situação: REPROVADO';
    // console.log('REPROVADO'); QUANDO ERA PARA VER NO CONSOLE
}


console.log('Fim do Programa')

}