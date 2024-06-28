//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 6;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}, lo hiciste en ${intentos} ${intentos == 1 ? 'vez'   : 'veces' }`);
    } else {
        if (numeroSecreto < numeroUsuario) {
            alert ('El numero secreto es menor');
        } else {
            alert ('El numero secreto es mayor');
        }
        //incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        intentos++;
        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert (`Llegaste al numero maximo de ${maximosIntentos} intentos`);
        }
    }

}