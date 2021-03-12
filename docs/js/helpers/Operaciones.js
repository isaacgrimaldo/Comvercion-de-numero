

//hace la funcion de sumar 
const HacerSuma =  ( num1 , num2 , baseOp) => {
     
     const Formatiar1Numero = num1.replace(/ /g, "").replace(',','')
     const Formatiar2Numero = num2.replace(/ /g, "").replace(',','')
     const  numParse1 = parseInt(Formatiar1Numero, parseInt(baseOp) );
     const  numParse2 = parseInt(Formatiar2Numero , parseInt(baseOp));
      
     const resultado = numParse1 + numParse2;


     return resultado.toString(baseOp);
} 

const HacerResta = (num1 , num2 , baseOp) => {
    
     const Formatiar1Numero = num1.replace(/ /g, "").replace(',','')
     const Formatiar2Numero = num2.replace(/ /g, "").replace(',','')
     const  numParse1 = parseInt(Formatiar1Numero, parseInt(baseOp) );
     const  numParse2 = parseInt(Formatiar2Numero , parseInt(baseOp));
       
     
     const resultado = numParse1 - numParse2;  

     return  resultado.toString(baseOp);

} 


const HacerMultiplicacion = (num1 , num2 , baseOp) => {
    
     const Formatiar1Numero = num1.replace(/ /g, "").replace(',','')
     const Formatiar2Numero = num2.replace(/ /g, "").replace(',','')
     const  numParse1 = parseInt(Formatiar1Numero, parseInt(baseOp) );
     const  numParse2 = parseInt(Formatiar2Numero , parseInt(baseOp));
       
     
     const resultado = numParse1 * numParse2;  

     return  resultado.toString(baseOp);

} 

const HacerDivicion = (num1 , num2 , baseOp) => {
    
     const Formatiar1Numero = num1.replace(/ /g, "").replace(',','')
     const Formatiar2Numero = num2.replace(/ /g, "").replace(',','')
     const  numParse1 = parseInt(Formatiar1Numero, parseInt(baseOp) );
     const  numParse2 = parseInt(Formatiar2Numero , parseInt(baseOp));
       
     
     const resultado = numParse1 / numParse2;  

     return  resultado.toString(baseOp);

} 


export {
     HacerSuma,
     HacerResta,
     HacerMultiplicacion,
     HacerDivicion,
}