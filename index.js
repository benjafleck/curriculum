funcion1= (x,y)=> {
   var casa = $(".b2").val()
   var casa2 = $(".b1") .val() ;
   $(".b2").css("background-color","red")

    funcion2 (casa,casa2,(z) => {
        $(".parrafo").html ("<p>resultado" + z + "</p>")
    
    })
}
funcion2= (casa,casa2,respuesta) => {
    var calculo =  parseFloat(casa) + parseFloat (casa2) 
    respuesta (calculo)
    
}

