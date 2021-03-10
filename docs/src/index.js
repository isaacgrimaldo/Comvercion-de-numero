
var MensajeError = '';

var limiteLetras = [ 'A', 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' ,'I' , 'J' , 'K', 
   'L' ,'M','N','O','P', 'Q', 'R', 'S' ,'T', 'U', 'V', 'W', 'X' ,'Y', 'Z'
];




function verificacionHex(base , ArrayNumero){
     
    
    const numeroBase =  parseInt(base);
    let validacion = true;
    let limite = [] ;

     //validacion de base  2 a 10
     if( numeroBase >= 2 &&  numeroBase <= 10){
          ArrayNumero.forEach(num =>{
               for(let i=0; i < limiteLetras.length; i++){
                   if(num.includes(limiteLetras[i])){
                         validacion = false;
                         MensajeError = `La base ${base} no puede tener letras solo numeros del 0-${(numeroBase-1)}`
                   }
               }
          })
     }
         

    if( numeroBase >= 11 && numeroBase <= 16){
        
        for(let  i = 10 ; i <= numeroBase ; i++){
               if( i >  10  &&  i <= numeroBase  ){
                    limite.push(limiteLetras[i-11])
                }
        }

     }

     console.log(limite.length);
     let ArrayVerefic = [];
     let Temporal = [...limiteLetras];
     //sacamos el array para la verificacion
     for(let i=0 ; i < limiteLetras.length ; i++ ){
        
        if( i != 0 ){
            Temporal = ArrayVerefic;
         }

         for(let j=0 ; j < limite.length ; j++){
              if(limiteLetras[i] === limite[j]){
                  Temporal = [...Temporal.filter( L => L != limite[j] )]
                  ArrayVerefic = [...Temporal];
              }
         }
     }

     //verificacion hexadecimal
     ArrayNumero.forEach( num => {
           for(let i=0 ; i <  ArrayVerefic.length; i++){
                 if(num.includes(ArrayVerefic[i]) ){
                     validacion = false;
                     MensajeError = `Alguna letras no entra en el rango de la base`;
                 }
           }
     })
           
     
      return validacion ;

};


function FormatearNumero(numero , base , baseComvetir){
    
    if( parseInt(base)  === 2 || parseInt(baseComvetir) === 2 ){
            
       return  numero.replace(/\B(?=(\d{4})+(?!\d))/g, " ");    
    }
    const num1 =  numero.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const num2 = num1.toUpperCase();
    return num2;
};





function VerificacioComvercion(numero , base){
    
     const numeroComparar =  numero.toUpperCase();
     let verificacion  = true ;
     
     const ArrayNumeroComvetir = numeroComparar.split('');
           console.log(ArrayNumeroComvetir)
           ArrayNumeroComvetir.forEach(Numero  => {
                
            if( parseInt(Numero) >= parseInt(base) ){
                       verificacion = false ;
                       MensajeError = `en la base ${base} solo se permiten valores del ${ '0  -' + (parseInt(base) - 1 )}`
                 }
           })     
              
          const validhex = verificacionHex(base, ArrayNumeroComvetir);
          if(!validhex){
             verificacion = false;
          }   
          
          

     return verificacion;
}
           


window.onload = () => {
       
    
        /*Conversor de nuemeros a diferentes bases*/
      document.getElementById('form').onsubmit = (e) =>{
            e.preventDefault();
            const baseNumero = document.getElementById('baseNumero').value;
            const NumeroElementHTML =  document.getElementById('numero');
            const Numero =  document.getElementById('numero').value.trim();
            const transfromBase = document.getElementById('base').value;
            const contentResult = document.getElementById('resultado');
        

            //inicio de la comprovacion para poder comvertir 
             const PermisoComvertir = VerificacioComvercion( Numero , baseNumero);
             
        
             if(PermisoComvertir ){          
                 //se comvierte el numero a la base desea
            
                const numTransHisBase = parseInt(Numero, baseNumero);
            
                NumeroElementHTML.classList.remove('errorNum')     
                 
                const numsinFormatiar =  numTransHisBase.toString(transfromBase);
                if(numsinFormatiar !== NaN){

                    const numResult = FormatearNumero(numsinFormatiar , transfromBase , baseNumero );
                    const PlantillaResult =  `
                            <p>Numero  Comvertido de base ${baseNumero} a  base ${transfromBase}</p>
                                                  <p> Valor comvertido  ${numResult}   </p>                             
                    ` ;
                  
                     //Imprimimos el numero en pantalla
                      contentResult.style.display = 'block';
                      contentResult.innerHTML = PlantillaResult; 
                   
                   }


             }else{

                 //si un error en los datos 
                  NumeroElementHTML.focus();
                  NumeroElementHTML.classList.add('errorNum');
                  contentResult.style.display = 'none'
           

                   //alarma configurada
                 Swal.fire({
                    titleText:'Error en los datos',
                     text: MensajeError,
                     icon:'error',
                     iconColor:'red',
                     background : 'linear-gradient(to bottom, rgb(14, 13, 13)  ,  rgb(199, 21, 9) 85%  )', 
                     width: '50%', 
                 }) 
            }   

             
      }
};