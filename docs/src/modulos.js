import {nombre} from './module/module'
//comtrola las funciones y la muestra de las pantallas de operaciones
const Operaciones = {
    suma:'suma',
    resta:'resta',
    multiplicacion:'multiplicacion',
    divicion:'divicion',
}

 //pantallas de operacioens
 var panSuma = document.getElementById('suma');
 var panResat = document.getElementById('resta');  
 var panMultiplicacion =  document.getElementById('multiplicacion');
 var panDivicion = document.getElementById('divicion');


//para optener valores  de las panttlas  para hacer operaciones
const panatallas = [   
  document.getElementById('suma'),
  document.getElementById('resta'),
  document.getElementById('multiplicacion'),
  document.getElementById('divicion'),

]

//funcion que muestra las pantallas
function ShoworHidden (idElemeto){
     for (let index = 0; index < panatallas.length; index++) {
          
          if(idElemeto === panatallas[index].id){
               panatallas[index].classList.add('show');
               panatallas[index].classList.remove('hidden')
               console.log(panatallas[index]);
          }else{
              panatallas[index].classList.add('show');
              panatallas[index].classList.add('hidden');
          }
    }
};
   
 

 
window.onload = () => {
     
    
         
    document.getElementById('operaciones').onchange = () =>{

         // controlador de la pantalla de operaciones y  proceso de operacion
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
   
    

}