import { limiteLetras } from "./validaciones.js";

//FORMATeo  de nuemro para hacer operacioes
const ReglasDeComparacionADeciamal = (valoreHexadecimal) =>{
    
   for(let i=0 ; i < valoreHexadecimal.length; i++){
     for( let j=0 ;  j < limiteLetras.length; j++){
      
      if (valoreHexadecimal[i].includes(limiteLetras[j])){
          let AsicnarValor = j+10; 
          valoreHexadecimal[i] = AsicnarValor.toString() ;
     }

   };
  };
      
   return valoreHexadecimal
}



const ReglasDeComparacionAHexadecimal = (ArrayNumAComveritr) => {
           
          for(let i=0 ; i < ArrayNumAComveritr.length; i++){
            for( let j=0 ;  j < limiteLetras.length; j++){
              let ValorCom  = parseInt(ArrayNumAComveritr[i])
          
            if ((ValorCom - 10) ===  j ){  
                ArrayNumAComveritr[i] = limiteLetras[j];
            }

          };
        };
       
  return ArrayNumAComveritr;

}

  
const FormateoDeNumero = (numero , base) =>{
   
  if ( parseInt(base) === 2) {

        return numero.replace(/\B(?=(\d{4})+(?!\d))/g, " ");
    }

    const num1 = numero.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const num2 = num1.toUpperCase();
    return num2;
}



const FormateoValoreshexasdecimales = ( ArrayConValoreaHexadecimales ) => {
   let ArrayTRanformado =  ReglasDeComparacionADeciamal(ArrayConValoreaHexadecimales);
   return ArrayTRanformado;
}


const FormateoAHexadecimal = (ArraNumeros) => {
   
   let ArrayTRanformado = ReglasDeComparacionAHexadecimal(ArraNumeros);

  return ArrayTRanformado;
}



export {
     FormateoDeNumero,
     FormateoValoreshexasdecimales,
     FormateoAHexadecimal,

}