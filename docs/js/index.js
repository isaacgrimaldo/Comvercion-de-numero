//importacion de funcionalidades
import {Comvercion} from './helpers/PasosComvercion.js';
import {FormateoDeNumero} from './helpers/Formateo.js';
import {AutorizacionComver} from './helpers/validaciones.js';
import{platillaReglas , sizesWidhtScreen} from './helpers/Reglas.js' 




function GenerarAlerta (Mensaje , Focus , deletResult){
   
    
    Focus.focus();
    Focus.classList.add('errorNum')
    deletResult.style.display = 'none';

 let sizesAlar = sizesWidhtScreen();
    console.log(sizesAlar)
    

    //alarma configurada
    Swal.fire({
       titleText:'Error en los datos',
        text: Mensaje,
        icon:'error',
        iconColor:'red',
        background : 'linear-gradient(to bottom, rgb(14, 13, 13)  ,  rgb(199, 21, 9) 85%  )', 
        width: '80%', 
    }) 
     
}

function CerrarPasos(){
     const HtmlDivPasos = document.getElementById('DivPasos')
     const btnPasos = document.getElementById('paso');   
           HtmlDivPasos.innerHTML = ''
           HtmlDivPasos.classList.add('initial')
           btnPasos.classList.add('initial')
}

function CerraReglas(){
    const HtmlDivPasos = document.getElementById('ValoreHex')
    HtmlDivPasos.innerHTML = ''
    HtmlDivPasos.classList.add('initial')    
}

window.onload = () => {

    const HtmlDivPasos = document.getElementById('DivPasos');

    /*Conversor de nuemeros a diferentes bases*/
    document.getElementById('form').onsubmit = (e) => {
        e.preventDefault();
        CerrarPasos()
        CerraReglas()
        //optencion de variables y elemetos HTML  para el programa
        const baseNumero = document.getElementById('baseNumero').value;
        const NumeroElementHTML = document.getElementById('numero');
        const Numero = document.getElementById('numero').value;
        const transfromBase = document.getElementById('base').value;
        const contentResult = document.getElementById('resultado');
        const HTMLpasos = document.getElementById('paso');


        //inicio de la comprovacion para poder comvertir 
        const PermisoComvertir = AutorizacionComver(Numero , baseNumero);
        const {Autorizacion:AuthNum, Mensaje} = PermisoComvertir;
   ;

        if (AuthNum) {
            //se comvierte el numero a la base desea
            const numSinEspacios = Numero.replace(/ /g, "").replace(',','');
            const numTransHisBase = parseInt(numSinEspacios, baseNumero);
           
                NumeroElementHTML.classList.remove('errorNum');

                const numsinFormatiar = numTransHisBase.toString(transfromBase);
                const numResult = FormateoDeNumero(numsinFormatiar, transfromBase);

                const PlantillaResult = `
                            <p>Numero  Comvertido de base ${baseNumero} a  base ${transfromBase}</p>
                                                  <p> Valor comvertido  ${numResult}   </p>                             
                    ` ;

                //Imprimimos el numero en pantalla
                contentResult.style.display = 'block';
                contentResult.innerHTML = PlantillaResult;
                
                /*Se perimite la opcion de mostar pasos*/
                HTMLpasos.classList.remove('initial');
                MostarPasos(Numero , baseNumero , transfromBase);
 
        } else if(!AuthNum){
           GenerarAlerta(Mensaje, NumeroElementHTML , contentResult)
           CerrarPasos()
           CerraReglas()
        }


    }

    const MostarPasos  = (num ,  base , toBase) => {
         
         const ControlPasos = document.getElementById('paso');
               ControlPasos.onclick = () => {
                  const Paso =  [...Comvercion(num , base , toBase)]  
                
                  // se muestran los pasos generados
                   HtmlDivPasos.classList.remove('initial'); 
                   const  HTMLPaso = Paso.join('');
                   HtmlDivPasos.innerHTML = HTMLPaso; 
                   
                   
                   
                   const btnRelas = document.getElementById('reglasHex');
                   if(btnRelas){

                       MostarReglasHexa()
                   }
               }
    }

    
   const MostarReglasHexa = () =>{
       const btnRelas = document.getElementById('reglasHex');
             btnRelas.onclick= () => {
                 const DivReglas = document.getElementById('ValoreHex')
                       DivReglas.classList.remove('initial');
                       const platilla = platillaReglas()
                       DivReglas.innerHTML = platilla ; 
                
             }
   }

};