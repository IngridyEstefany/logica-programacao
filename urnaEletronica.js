function urnaEletronica() {
    
    //Aqui vai todo o código do programa

    console.log('Iniciando o programa');

    let totalVotosCandidato1 = 0;
    let totalVotosCandidato2 = 0;
    let totalVotosCandidato3 = 0;
    let totalVotosBranco = 0;
    let totalVotosNulo = 0;
    
    let voto;
    let votoGanhador;
    let totalVotoGanhador = 0;
    let totalPercentualGanhador = 0;

    let confirmacaoEncerramento = '';
    let anulacaoVoto;
    let totalVotosValidos = 0;

    let senhaMesario;
    let confirmacaoLiberacaoUrna;


    console.log('**CONFIGURAÇÃO DA URNA**')
    senhaMesario = parseInt(prompt('Defina a senha do mesário:'))

    do {
        const candidato1 = prompt('Digite o nome do candidato 1');
        const candidato2 = prompt('Digite o nome do candidato 2');
        const candidato3 = prompt('Digite o nome do candidato 3');

        confirmacaoLiberacaoUrna = confirm ('Confirme o nome dos candidados: ' + candidato1 + ', ' + candidato2 + ', '  + candidato3 + ' Caso esteja correto, clique OK, caso contrário clique CANCELAR.') 
        
       
    } while (!confirmacaoLiberacaoUrna);


    do {
        //instruções
        console.log('|1| ' + candidato1); 
        console.log('|2| ' + candidato2); 
        console.log('|3| ' + candidato3); 
        console.log('|5| Branco');
            
       voto = parseInt(prompt('Digite sua opção de voto:'));

       console.clear(); //limpa o console

       if (voto === 1) {
        totalVotosCandidato1++; //++ equivale ao totalVotosCandidato1 += 1
        console.log('O candidato 1 recebeu um voto');
       } else if (voto === 2) {
        totalVotosCandidato2++;
        console.log('O candidato 2 recebeu um voto');
       } else if (voto === 3) {
        totalVotosCandidato3++;
        console.log('O candidato 3 recebeu um voto');
       } else if (voto === 5) {
        totalVotosBranco++;
        console.log('O voto foi em branco');
       } else if (voto === senhaMesario) {
        confirmacaoEncerramento = prompt('Deseja REALMENTE encerrar a votação? Digite S para Sim ou N para Não').charAt(0).toUpperCase();

        if (confirmacaoEncerramento !== 'S' && confirmacaoEncerramento !== 'N') {
            alert('Opção inválida!');
        }

        console.log('Encerrada a votação');
       } else {
        anulacaoVoto = confirm('Opção inválida. SEU VOTO SERÁ ANULADO!');

        if (anulacaoVoto) {
            totalVotosNulo++
        } 
        
       }

    } while (confirmacaoEncerramento !== 'S');

    totalVotosValidos = totalVotosCandidato1 + totalVotosCandidato2 + totalVotosCandidato3 + totalVotosBranco + totalVotosNulo;
    
    console.log('**BOLETIM DE URNA - RESULTADOS**')

    console.log('Total de votos: ' + totalVotosValidos);
    console.log('Total de votos: ' + candidato1 + " " + totalVotosCandidato1);
    console.log('Total de votos: '+ candidato2 + " " + totalVotosCandidato2);
    console.log('Total de votos: '+ candidato3 +  " " + totalVotosCandidato3);
    console.log('Total de votos em branco: ' + totalVotosBranco);
    console.log('Total de votos nulos: ' + totalVotosNulo);
    

    console.log('Percentual de votos: ' + candidato1 +  " " + (totalVotosCandidato1/totalVotosValidos * 100).toFixed(2) + '%');
    console.log('Percentual de votos: ' + candidato2 + " " + (totalVotosCandidato2/totalVotosValidos * 100).toFixed(2) + '%');
    console.log('Percentual de votos: '+ candidato3 + " " + (totalVotosCandidato3/totalVotosValidos * 100).toFixed(2) + '%');
    console.log('Percentual de votos em branco: '+ (totalVotosBranco/totalVotosValidos * 100).toFixed(2) + '%');
    console.log('Percentual de votos nulos: '+ (totalVotosNulo/totalVotosValidos * 100).toFixed(2) + '%');

    
    if (totalVotosCandidato1 > totalVotosCandidato2 && totalVotosCandidato1 > totalVotosCandidato3) {
        votoGanhador = candidato1;
        totalVotoGanhador = totalVotosCandidato1 + totalVotosBranco;
        totalPercentualGanhador = ((totalVotosCandidato1 + totalVotosBranco)/totalVotosValidos * 100).toFixed(2);
    } else if (totalVotosCandidato2 > totalVotosCandidato1 && totalVotosCandidato2 > totalVotosCandidato3) {
        votoGanhador = candidato2;
        totalVotoGanhador = totalVotosCandidato2 + totalVotosBranco;
        totalPercentualGanhador = ((totalVotosCandidato2 + totalVotosBranco)/totalVotosValidos * 100).toFixed(2);
    } else if (totalVotosCandidato3 > totalVotosCandidato1 && totalVotosCandidato3 > totalVotosCandidato2) {
        votoGanhador = candidato3;
        totalVotoGanhador = totalVotosCandidato3 + totalVotosBranco;
        totalPercentualGanhador = ((totalVotosCandidato3 + totalVotosBranco)/totalVotosValidos * 100).toFixed(2);
    } else {
        votoGanhador = "Não há um ganhador";
    }

    console.log('Ganhador: ' + votoGanhador)
    console.log('Total de votos do ganhador: '+ totalVotoGanhador)
    console.log('Percentual de votos do ganhador: ' + totalPercentualGanhador + '%')

    console.log('Fim do Programa')
}