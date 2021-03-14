 const ReglasHex = ['A = 10' , 'B =  11', 'C =  12', 'D =  13', 'E =  14', 'F =  15'];

export const  platillaReglas = () =>{

   const platillaReglas = ReglasHex.map(element => `<p>${element}</p>` ).join(' ')
   
   return platillaReglas
} 


export const sizesWidhtScreen = () =>{
     
   let ScreenWidth = screen.width;
   let sizesAlert = '50%'
     if( ScreenWidth >= 1020){
        sizesAlert = '50%'
     }else if(ScreenWidth < 600  ){
           sizesAlert ='80%'
     }

    return sizesAlert;

} 