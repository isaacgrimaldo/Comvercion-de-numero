//importaciones de fuciones
import {HacerSuma ,  HacerResta, HacerMultiplicacion} from './helpers/Operaciones.js'
import {AutorizacionComver} from './helpers/validaciones.js'
import {FormateoDeNumero} from './helpers/Formateo.js'


//comtrola las funciones y la muestra de las pantallas de operaciones
const Operaciones = {
    suma:'suma',
    resta:'resta',
    multiplicacion:'multiplicacion',
    divicion:'divicion',
}



//instruccione de la operacion
function ShoworHidden (idElemeto){
       
    const instruccione =  document.getElementById

      switch(idElemeto){
           
      }
      
};




//imprime los valores en pantalla
function ImprimirDatosPantalla(resultado , numero1 , numero2, operacion, base ){
    
     const num1NewFormato = FormateoDeNumero(numero1 , base);
     const num2NewFormato = FormateoDeNumero(numero2 , base);
     const resultNewFormato = FormateoDeNumero(resultado , base);
     const DecimalNum =  FormateoDeNumero(parseInt(resultado , base).toString(), ('3'));

     const  Plantilla = ` 
                <p>la ${operacion} de ${num1NewFormato} - ${num2NewFormato} en base ${base} </p>
                <p> El resultado en base ${base} = ${resultNewFormato}</p>
                <p> El resultado decimal es = ${DecimalNum}</p>
      `
     const divResutlHTML = document.getElementById('divResultado'); 
       
       if(divResutlHTML.classList.toString().includes('initial')){
            divResutlHTML.classList.remove('initial');
       } 


       divResutlHTML.innerHTML = Plantilla;
}

function GenerarAlerta (Mensaje , Focus){
   
       
       //borramos los datos anteriores
       const divResutlHTML = document.getElementById('divResultado');
       if(!divResutlHTML.classList.toString().includes('initial')){
            divResutlHTML.classList.add('initial')
       }
     
       Focus.focus();
       Focus.classList.add('errorNum')


       //alarma configurada
       Swal.fire({
          titleText:'Error en los datos',
           text: Mensaje,
           icon:'error',
           iconColor:'red',
           background : 'linear-gradient(to bottom, rgb(14, 13, 13)  ,  rgb(199, 21, 9) 85%  )', 
           width: '50%', 
       }) 
      

}

function RestesClass(ElementoHtml){
     if(ElementoHtml.classList.toString().includes('errorNum')){
                ElementoHtml.classList.remove('errorNum');             
     }
}


//control de la operacion suma
function Sumar ( baseOP , operacion){

     const HTMLNum1 = document.getElementById('Num1');
     const HTMLNum2 = document.getElementById('Num2');
     const num1 = HTMLNum1.value;
     const num2 = HTMLNum2.value;
      
     const {Autorizacion:AuthNum1 , Mensaje:MensajeNum1} = AutorizacionComver(num1, baseOP);
     const {Autorizacion:AuthNum2 , Mensaje:MensajeNum2} = AutorizacionComver(num2, baseOP);
     
     console.log(AuthNum2 , AuthNum1 , MensajeNum1, MensajeNum2);
     
     if( AuthNum1 && AuthNum2 ){
           
           //resetiar  estilos de los inputs
           RestesClass(HTMLNum1);
           RestesClass(HTMLNum2);

           const resultado  = HacerSuma(num1 , num2 , baseOP);
           ImprimirDatosPantalla(resultado , num1 ,  num2 , operacion , baseOP );
          
     
       }else if(!AuthNum1){
            GenerarAlerta(MensajeNum1 , HTMLNum1);
       }else if(!AuthNum2){
            GenerarAlerta(MensajeNum2, HTMLNum2)
       }


}     




function Resta (baseOP ,  operacion) {
      
     const HTMLNum1 = document.getElementById('Num2');
     const HTMLNum2 = document.getElementById('Num2');
     const num1 = HTMLNum1.value;
     const num2 = HTMLNum2.value;
      
     const {Autorizacion:AuthNum1 , Mensaje:MensajeNum1} = AutorizacionComver(num1, baseOP);
     const {Autorizacion:AuthNum2 , Mensaje:MensajeNum2} = AutorizacionComver(num2, baseOP);
     
     console.log(AuthNum2 , AuthNum1 , MensajeNum1, MensajeNum2);
     
     if( AuthNum1 && AuthNum2 ){
           
           //resetiar  estilos de los inputs
           RestesClass(HTMLNum1);
           RestesClass(HTMLNum2);

           const resultado  = HacerResta(num1 , num2 , baseOP);
           ImprimirDatosPantalla(resultado , num1 ,  num2 , operacion , baseOP );
          
     
       }else if(!AuthNum1){
            GenerarAlerta(MensajeNum1 , HTMLNum1);
       }else if(!AuthNum2){
            GenerarAlerta(MensajeNum2, HTMLNum2)
       }
} 


function Multiplicacion(baseOP ,  operacion) {
      
     const HTMLNum1 = document.getElementById('Num2');
     const HTMLNum2 = document.getElementById('Num2');
     const num1 = HTMLNum1.value;
     const num2 = HTMLNum2.value;
      
     const {Autorizacion:AuthNum1 , Mensaje:MensajeNum1} = AutorizacionComver(num1, baseOP);
     const {Autorizacion:AuthNum2 , Mensaje:MensajeNum2} = AutorizacionComver(num2, baseOP);
     
     console.log(AuthNum2 , AuthNum1 , MensajeNum1, MensajeNum2);
     
     if( AuthNum1 && AuthNum2 ){
           
           //resetiar  estilos de los inputs
           RestesClass(HTMLNum1);
           RestesClass(HTMLNum2);

           const resultado  = HacerMultiplicacion(num1 , num2 , baseOP);
           ImprimirDatosPantalla(resultado , num1 ,  num2 , operacion , baseOP );
          
     
       }else if(!AuthNum1){
            GenerarAlerta(MensajeNum1 , HTMLNum1);
       }else if(!AuthNum2){
            GenerarAlerta(MensajeNum2, HTMLNum2)
       }
} 


function Divicion (baseOP){
       console.log('divicon');
}
 


// aqui empieza la magia
window.onload = () => {
     
    
    document.getElementById('operaciones').onchange = () =>{

         // controlador de la pantalla de operaciones
        const Operacion =  document.getElementById('operaciones').value;
        
        switch(Operacion){
            case Operaciones.suma: ShoworHidden(Operacion);
                 break;
            case Operaciones.resta: ShoworHidden(Operacion);
                 break;
                 case Operaciones.multiplicacion: ShoworHidden(Operacion);
                 break;
           case Operaciones.divicion: ShoworHidden(Operacion);
                 break;
           default : PantallaError();
                 break;
    }
  };
    
     // hace dependiendo del valor del seleccionado se hacen las operaciones 
  document.getElementById('OperacionesSub').onsubmit = (e) =>{
            e.preventDefault();   
            
        //se optiene los valores necesarios para realizar la operaciones
        const Operacion =  document.getElementById('operaciones').value;
        const  baseOperacion = document.getElementById('baseOperacion').value;

            switch (Operacion) {
                 case Operaciones.suma: Sumar(baseOperacion , Operacion);
                      break;

                case Operaciones.resta: Resta(baseOperacion, Operacion);
                     break; 

                case Operaciones.multiplicacion: Multiplicacion(baseOperacion , Operacion);
                     break;

               case Operaciones.divicion: Divicion(baseOperacion);
                    break;

                 default: alert('Error en la seleccion de datos')
                      break;
            }
  }; 
    

}