// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

// i tem que ser menot que notas.length, pois o primeiro indice do array eh zero


let soma = 0;
let media = 0;

function mediaNotas(notas) {
    for(let i=0; i < notas.length; i++) {
        soma = soma + notas[i];
    }
    media = soma/notas.length;
    console.log('media', media);
}

const notas1 = [10,9,4,6,8];
const notas2 = [10,8,9,3,2];

mediaNotas(notas1);

// function mediaNotas(notas) {
//     let soma = 0;
//     let media = 0;

//     for(let i = 0; i < notas.length; i ++) {
//         soma = soma + notas[i]
//     }

//     media = soma/notas.length

//     return media
// }

// listaDeNotasSala1 = [0, 100, 60, 34, 96]
// listaDeNotasSala2 = [75,76,80,95,100]

// console.log('media da sala 1', mediaNotas(listaDeNotasSala1))
// console.log('media da sala 2', mediaNotas(listaDeNotasSala2))