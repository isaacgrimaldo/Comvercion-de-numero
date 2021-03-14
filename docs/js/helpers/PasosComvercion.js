//importaciones de funcionees
import {FormateoDeNumero ,  FormateoValoreshexasdecimales , FormateoAHexadecimal} from './Formateo.js'

//objetopara guaradar potecia
function Pontencias (){
    this.PotenciaString = '';
    this.PotenciaValue = 0;
     
    
}
 //objeto para describir pasoos
function Paso (numPaso , DescripcionPaso){
    this.numeroPaso = numPaso
    this.DescripcionPaso = DescripcionPaso
}

//quiita los espacios y comilla de los numeros
const FormateoNum = (num) => {
      
   let fromNum = num.replace(/ /g, "").replace(',','')

     return fromNum ;
}


const GenerarPotencias = (  numPotencias, numbase ) => {
      
     const ArraySave = []
     
     for(let i=0 ;  i <  numPotencias ; i++){
          
          let Potencia = new Pontencias()
              Potencia.PotenciaString = numbase
              Potencia.PotenciaString +=i.toString().sup();
              Potencia.PotenciaValue = Math.pow(parseInt(numbase) , i )

              ArraySave.push(Potencia)
     }


     return ArraySave
}
 
const GenerarPaso =  (Paso , Cuerpo) => {
    
   const PlatillaPaso = 
    `<div class="pasos">
         <p>Paso numero ${Paso.numeroPaso}</p>
        <p>${Paso.DescripcionPaso}</p>      
        <ul>
           ${Cuerpo}
        </ul>
        <hr>
    </div>`
  
    
   return PlatillaPaso; 
}

/// se hacen lo paso de la multiplicacion y se genera un resultado
const  GenerrarPaso3 = (ArrayNumInvertido , ArrayObjPotencias) =>{

    const Paso3 = new Paso(3 , 'Hacemos las suma de los resultado de las multiplicaciones');
    let ValorSUAMA = 0;

    ArrayObjPotencias.forEach((Potecia , index) =>{

          ValorSUAMA += (Potecia.PotenciaValue * parseInt(ArrayNumInvertido[index]))  
    
    })

    let  GenerarPaso3 = '' 

    ArrayNumInvertido.forEach((numero , index) => {
               
               if( index === 0){
                   GenerarPaso3 += `${parseInt(numero) * ArrayObjPotencias[index].PotenciaValue} `
               }else if ( index === ArrayNumInvertido.length - 1){
                   GenerarPaso3 += `+ ${parseInt(numero) * ArrayObjPotencias[index].PotenciaValue} `
               }else{
                GenerarPaso3 += `+ ${parseInt(numero) * ArrayObjPotencias[index].PotenciaValue} `
               }
            
    })     

     const HacerPlantillaPaso3 = ( Paso , sumaPaso3 , plantillaPaso3) => {
                
           let platilla = 
           `<div class="pasos">
            <p>Paso numero ${Paso.numeroPaso}</p>
            <p>${Paso.DescripcionPaso}</p>      
             <p>
               ${plantillaPaso3} =  <strong class ='MulResult'>${sumaPaso3}</strong>
            </p>
             <hr>
            </div>`

            return platilla
     }



     return {
          plantillaPaso3:HacerPlantillaPaso3(Paso3 , ValorSUAMA , GenerarPaso3),
          ValorSUAMA
     }
}

//se hacen los paso de las diviciones para optener los reciduos para mostrar la comvercion
const paso4 = (suma , toBase) => {
     
 const GenerarPasoDiv = (Dividendo , Divisor ,  Cociente , Reciduo) => {
         let plantilla = 
         `
            <div>
                <p> ${Dividendo} / ${Divisor} <br> 
                <strong class='residuo'> Reciduo =  ${Reciduo}</strong>   Cociente = ${Cociente} 
                </p>
           </div>
         `

         return plantilla
   }


    let ValorTemporal = 0
    let numToBase = parseInt(toBase);
    let ArrayReciduos = [] 
    let ArrayPasos = [];

    let ValorEntero = 0;
    let Dividendo = 0;
  do{  
     //dolor de cabezaaaa jajajajajjajaja
    let ValorDiv = 0
     
    if( ValorTemporal == 0 ){
      ValorTemporal = suma  
      ValorDiv = ValorTemporal/numToBase
    }else{
       ValorDiv = ValorTemporal / numToBase;
    } 
    
    //Rediduo cunando la divicion es exacta
    if(Number.isInteger(ValorDiv)){
        ArrayReciduos.push(0)
          ValorEntero = Math.trunc(ValorTemporal/numToBase);
    
            Dividendo = ValorTemporal 
            ValorTemporal = ValorEntero;
            ArrayPasos.push(GenerarPasoDiv(numToBase , Dividendo , ValorEntero , 0));

    }else if(!(Number.isInteger(ValorDiv))){//rediduo cunado la divicion no es exacta
      
         Dividendo = ValorTemporal 
         ValorEntero = Math.trunc(ValorTemporal/toBase);
         let Residuo =   ValorTemporal - (ValorEntero * numToBase);
          ArrayReciduos.push(Residuo);
          ValorTemporal = ValorEntero;
          
          ArrayPasos.push(GenerarPasoDiv(Dividendo , numToBase , ValorEntero ,  Residuo))
    } 
     //Redicuo cuando el diviendo es menor que le  divisor
    if(ValorTemporal < numToBase){
          ArrayReciduos.push(ValorTemporal)
          ArrayPasos.push(GenerarPasoDiv( ValorTemporal , numToBase ,  0  , ValorTemporal ))
    }


   } while (ValorTemporal >= numToBase);

 


   return {
        ArrayPasos,
        ArrayReciduos,
   }
}


const Ultimpaso = (ArrayReciduos) => {
   
   let ArrayReciduosText = ArrayReciduos.join(' ');
   let ArrayReciduosInvertido = ArrayReciduos.reverse()
   let ArrayReciduosInvertidoText = ArrayReciduosInvertido.join(' '); 
    let platilla = 
    ` 
     <div>
          
       <p class='im-intruc'>Tomamos todos lo  reciduos de las divciones</p>
       <p class='resultado'>${ArrayReciduosText}</p>
  
       <p class='im-intruc'>los Invertimos y optenemos el resultado de la comvercion</p>
       <p class='resultado'>${ArrayReciduosInvertidoText}</p>

     </div> 
     
    ` 

    return platilla;

}


const pasoFinalParaExadecimales = (ArrayReciduos , toBase) => {
    
    let ArregloTranfromado = FormateoAHexadecimal(ArrayReciduos);
   
    const plantilla =
    ` 
      <div>
        <p class='im-intruc'>Para saber el valor en base${toBase} se hace una comvercion de los valores a valores Hexadeciamles </p>
        <p class='resultado'>${ArregloTranfromado.join(' ')}</p>

        <button id='reglasHex' class="btn btn-primary m-2">Click Para ver valores</button>
      </div>
    `

   return plantilla;
}



 const Comvercion = (num , base ,  toBase) => {
     const NewNum = FormateoNum(num) 
     const ArrayNum =  NewNum.split('');
     
     const ArrayObjPotencias = [ ...GenerarPotencias(ArrayNum.length, base)]//potencias por las cuales multiplicarees las bases
     const ArrayPasos = []; //guarda todos lo pasos para mostrarlo en el HTML
     
     

    //invertimos los valore del array para poder hacer operaciones
     let ArrayNumInvertido = ArrayNum.reverse()
     
     //paso1
     const Paso1 = new Paso(1 , `se pasa el numero a comverti de  base ${base} a  base decimal`)
     const GenerarPaso1 = ArrayNumInvertido.map( (numero , index) => `<p>${numero} | ${ArrayObjPotencias[index].PotenciaString}</p>`  )
     const HTMLPaso1 =  GenerarPaso1.join('')
     ArrayPasos.push(GenerarPaso(Paso1, HTMLPaso1));
     
     if(base > 10 && base <= 16 ){

         ArrayNumInvertido = FormateoValoreshexasdecimales(ArrayNumInvertido)
     }

      //paso2
     const Paso2  = new Paso(2 ,  'se multimplica cada valor del numero por la valor de su base potenciado susecibamente' );
     const  GenerarPaso2 = ArrayNumInvertido.map((numero , index) => `<p>${numero} x ${ArrayObjPotencias[index].PotenciaValue} =  ${numero * ArrayObjPotencias[index].PotenciaValue}</p>`)
     const HTMLPaso2 = GenerarPaso2.join('')    
    ArrayPasos.push(GenerarPaso(Paso2 , HTMLPaso2)); 
    
    //paso3
    const  {plantillaPaso3 ,  ValorSUAMA}  = GenerrarPaso3(ArrayNumInvertido , ArrayObjPotencias);
    ArrayPasos.push(plantillaPaso3);
     
    //paso 4
     let {ArrayPasos:PasosDiv , ArrayReciduos} = paso4(ValorSUAMA , toBase); 
     PasosDiv = [ '<p>Se divide le valor de la multiplicacion por el numero de las base a comvertir</p>' ,...PasosDiv]  
     ArrayPasos.push(PasosDiv.join(''))
     
     //para mostrar la solucion en Hexadecimal
     if(toBase > 10 && toBase <=16){
          
          ArrayPasos.push(Ultimpaso(ArrayReciduos));
         ArrayPasos.push(pasoFinalParaExadecimales(ArrayReciduos , toBase)); //ultimo paso para exadecimales
     }else{
         
         //UltimoPaso sin valores hexadeciamales
        ArrayPasos.push(Ultimpaso(ArrayReciduos));
     }

     return ArrayPasos;
             
 } 


 export { 
      Comvercion
 }