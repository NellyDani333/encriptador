/*e --> enter 
o --> ober 
i --> imes 
a --> ai 
u --> ufat*/



function verificarvacio(){
    let texto=document.getElementById("inputTexto");
    if ( texto.value.trim()==""){ 
            texto.value="";
            texto.focus();
            return true;
        }
    return false;
        }
        





function encriptar(){

  
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    /* i para que afecte tanto mayusculas como minusculas --e else*/
    /* g  Es para toda la linea u oracion*/
    /* m es para que afecte multiples lineas o parrafos*/


    
    var txtCifrado= texto.replace(/e/igm,"enter");
    var txtCifrado= txtCifrado.replace(/o/igm,"ober");
    var txtCifrado= txtCifrado.replace(/i/igm,"imes");
    var txtCifrado= txtCifrado.replace(/a/igm,"ai");
    var txtCifrado= txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgDerecha").style.display ="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("texto2").innerHTML =txtCifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display= "inherit";
    
    let textoMinusculas = texto.toLowerCase();
    if (textoMinusculas == "" || textoMinusculas == +textoMinusculas) {

        alert ("No hay texto para encriptar.");
    }

    let resultadoPatron=texto.match(/[^A-Za-z0-9\s]/g);
    if(texto=resultadoPatron)  {
        alert ("No utilizar letras con acentos ni caracteres especiales")
    }






}

    



function desencriptar(){

    
    
    var texto =document.getElementById("inputTexto").value.toLowerCase();
    /* i para que afecte tanto mayusculas como minusculas --e else*/
    /* g  Es para toda la linea u oracion*/
    /* m es para que afecte multiples lineas o parrafos*/

    let textoMinusculas = texto.toLowerCase();

    if (textoMinusculas == "" || textoMinusculas == +textoMinusculas) {

        alert ("No hay texto para desencriptar.");

    }



    var txtCifrado= texto.replace(/enter/igm,"e");
    var txtCifrado= txtCifrado.replace(/ober/igm,"o");
    var txtCifrado= txtCifrado.replace(/imes/igm,"i");
    var txtCifrado= txtCifrado.replace(/ai/igm,"a");
    var txtCifrado= txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("imgDerecha").style.display ="none";
    document.getElementById("texto").style.display ="none";
    document.getElementById("texto2").innerHTML =txtCifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display= "inherit";
    

   
}



function copiar(){
    var contenido=document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copió!");

}

