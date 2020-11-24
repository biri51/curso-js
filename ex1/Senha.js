// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

function senhaValida(senha,login) 
{
    if( 
        senha.length < 8 ||
        senha.indexOf(' ') !== -1 ||
        senha.indexOf(login) !== -1
    ) {   
    console.log('senha invalida');
    }
    console.log('senha valida');
}

senhaValida('123abc789', 'biri51');
console.log('teste')