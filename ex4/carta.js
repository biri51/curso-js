// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function getCard(carta){
    let valor = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    let num = math.floor(Math.random*valor.length);
    val = valor[num];
    console.log('valor',val);
    let naipe = ['paus', 'ouros', 'espadas', 'copas'];
    let figura = math.floor(math.random*figura.length);
    np = naipe[figura]
    console.log('naipe',np);
    const carta = {valor: val, naipe: np};
    console.log(carta);
}


