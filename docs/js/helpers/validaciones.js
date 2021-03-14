

export var limiteLetras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

//validacion si hay un numero que no persetencce a la base
const ValidacionNumsCorrectos = (num, base) => {

    let Candado1 = true;
    let Mensaje = ' '
    const numArray = num.split('')
    numArray.forEach(elem => {
        if (parseInt(elem) >= parseInt(base)) {
            Candado1 = false;
            Mensaje = `La base ${base} solo acepta valores del 0 - ${parseInt(base - 1)}`
        }
    })


    return {
        Candado1,
        Mensaje,
    }
}


//validacion de cpara la verificacion  de letras
const ValidacionHex = (num, base) => {

    const numComparacion = num.toUpperCase();
    const ArrayNum = num.split('');
    const baseNum = parseInt(base);
    let LetrasAceptadas = [];
    let Candado2 = true;
    let Mensaje = '';


    if (baseNum >= 2 && baseNum <= 10) {
        for (let i = 0; i < limiteLetras.length; i++) {

            if (numComparacion.includes(limiteLetras[i])) {
                Candado2 = false;
                Mensaje = `La base ${base} no puede acceptar letras`;
            }
        }
    };


    // se optienen las letras aceptadas
    if (baseNum > 10 && baseNum <= 16) {

        for (let i = 10; i < baseNum; i++) {

            if (i >= 10 && i <= baseNum) {
                LetrasAceptadas.push(limiteLetras[i - 10])
            }

        };


        //se optiene el array con las letras no aceptadas
        let LetrasCompracion = []
        let Tem = [...limiteLetras];
        for (let i = 0; i < LetrasAceptadas.length; i++) {

            if (i != 0) {
                Tem = [...LetrasCompracion]
            }

            for (let j = 0; j < limiteLetras.length; j++) {

                if (limiteLetras[i] === LetrasAceptadas[j]) {
                    Tem = [...Tem.filter(L => L != LetrasAceptadas[i])];
                    LetrasCompracion = [...Tem];
                }
            }


        };

        //se hace la compracion
        ArrayNum.forEach(num => {
            for (let i = 0; i < LetrasCompracion.length; i++) {
                if (numComparacion.includes(LetrasCompracion[i])) {
                        Candado2 = false,
                        Mensaje  = `La letras ${LetrasCompracion[i]} no  esta permitida en la base ${base}`
                }
            }
        });
    }


    return {
        Candado2,
        Mensaje,
    }
}


const AutorizacionComver = (num, base) => {

    let Autorizacion = true;
    let Mensaje = ' ';

    const { Candado1, Mensaje: MensajeCandado1 } = ValidacionNumsCorrectos(num, base);
    if (!Candado1) {
        Autorizacion = false;
        Mensaje = MensajeCandado1;
    }


    const { Candado2, Mensaje: MensajeCandado2 } = ValidacionHex(num, base)
    if (!Candado2) {
        Autorizacion = false;
        Mensaje = MensajeCandado2;
    }


    return {
        Autorizacion,
        Mensaje,
    }
}


export {
    AutorizacionComver
}