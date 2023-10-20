let minhaMatriz = [[], [], []];

// mesmo que

// let minhaMatriz = [
//     [],
//     [],
//     []
// ];


let minhaMatriz = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I']
];

for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
        console.log(minhaMatriz[i][j]);
    }
}


EXEMPLO

// const candidatos = [
//     [71,72,73],
//     ['candidato1', 'candidato2', 'candidato3'],
//     ['PPFCL', 'PPCO', 'PPCM']
// ];

const candidatos = [
    [71, 'candidato1', 'PPFCL'],
    [72, 'candidato2', 'PPCO'],
    [73, 'candidato3', 'PPCM']
];

for (let i=0; i<3; i++) {
    console.log('Número do candidato: ' + candidatos [i][0]);
    console.log('Nome do candidato: ' + candidatos[i][1]);
    console.log('Partido: ' + candidatos[i][2]);
    console.log('---------')
}


for (let i=0; i<3; i++) {
    for (let j=0; j<3; j++){
        console.log(candidatos[i][j]);
    }
    console.log('---------');
}