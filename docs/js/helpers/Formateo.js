const FormateoDeNumero = (numero , base) =>{
   
  if ( parseInt(base) === 2) {

        return numero.replace(/\B(?=(\d{4})+(?!\d))/g, " ");
    }

    const num1 = numero.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const num2 = num1.toUpperCase();
    return num2;
}


export {
     FormateoDeNumero
}