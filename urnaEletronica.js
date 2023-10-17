function urnaEletronica() {
    
    //Aqui vai todo o código do programa

    console.log('Iniciando o programa');

    let totalVotosCandidato1 = 0;
    let totalVotosCandidato2 = 0;
    let totalVotosCandidato3 = 0;
    let totalVotosBranco = 0;
    let totalVotosNulo = 0;

    let voto;
    
    do {
        //instruções
        console.log('|1| Candidato1'); //const nomeCandidato1 prompt ('Digite o nome do candidato 1')
        console.log('|2| Candidato2'); //const nomeCandidato2 prompt ('Digite o nome do candidato 2')
        console.log('|3| Candidato3'); //const nomeCandidato3 prompt ('Digite o nome do candidato 3')
        console.log('|5| Branco');
        console.log('|8| Nulo');
        console.log('|0| Encerrar a votação');

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
       } else if (voto === 8) {
        totalVotosNulo++;
        console.log('O voto foi anulado');
       } else if (voto === 0) {
        console.log('Encerrada a votação');
       } else {
        return;
       }

    } while (voto !== 0);

    
    console.log('Total de votos candidato 1: ' + totalVotosCandidato1);
    console.log('Total de votos candidato 2: ' + totalVotosCandidato2);
    console.log('Total de votos candidato 3: ' + totalVotosCandidato3);
    console.log('Total de votos em branco: ' + totalVotosBranco);
    console.log('Total de votos nulos: ' + totalVotosNulo);

    let totalVotosValidos = totalVotosCandidato1 + totalVotosCandidato2 + totalVotosCandidato3 + totalVotosBranco + totalVotosNulo;

    console.log('Percentual de votos do candidato 1: ' + (totalVotosCandidato1/totalVotosValidos * 100) + '%');
    console.log('Percentual de votos do candidato 2: ' + (totalVotosCandidato2/totalVotosValidos * 100) + '%');
    console.log('Percentual de votos do candidato 3: '+ (totalVotosCandidato3/totalVotosValidos * 100) + '%');
    console.log('Percentual de votos em branco: ' + (totalVotosBranco/totalVotosValidos * 100) + '%');
    console.log('Percentual de votos nulos: '+ (totalVotosNulo/totalVotosValidos * 100) + '%');

       
    if (totalVotosCandidato1 > totalVotosCandidato2 && totalVotosCandidato1 > totalVotosCandidato3) {
        console.log('Ganhador: Candidato1');
    } else if (totalVotosCandidato2 > totalVotosCandidato1 && totalVotosCandidato2 > totalVotosCandidato3) {
        console.log('Ganhador: Candidato2');
    } else if (totalVotosCandidato3 > totalVotosCandidato1 && totalVotosCandidato3 > totalVotosCandidato2) {
        console.log('Ganhador: Candidato3');
    } else {
        console.log('Não há um ganhador.');
    }

    let candidatoEleito 

    console.log('Ganhador: ')


}