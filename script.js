const inputTexto = document.querySelector(".texto-entrada")
const mensaje = document.querySelector(".mensaje")


function btnEncriptar(){
    const TextoEncriptado = encriptar(inputTexto.value)
    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

function btnDesencriptar(){
    const Textodesencriptado = desencriptar(inputTexto.value)
    mensaje.value = Textodesencriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

function encriptar(stringEncriptada){
 let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],
 ["o","ober"],["u","ufat"]];
 // transformo el texto a minuscula
 stringEncriptada = stringEncriptada.toLowerCase();

// recorro el largo del texto en busca de vocales
 for (let i = 0; i < matrizCodigo.length; i++){
   if (stringEncriptada.includes(matrizCodigo[i][0])){
    stringEncriptada = stringEncriptada.replaceAll
    (matrizCodigo[i][0],matrizCodigo[i][1])
   }

 }
return stringEncriptada;
}

function desencriptar(stringdesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],
    ["o","ober"],["u","ufat"]];
    // transformo el texto a minuscula
    stringdesencriptada = stringdesencriptada.toLowerCase();
   
   // recorro el largo del texto en busca de vocales
    for (let i = 0; i < matrizCodigo.length; i++){
      if (stringdesencriptada.includes(matrizCodigo[i][1])){
       stringdesencriptada = stringdesencriptada.replaceAll
       (matrizCodigo[i][1],matrizCodigo[i][0])
      }
   
    }
   return stringdesencriptada;
}
function copiar(){

    mensaje.select()
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado")

}