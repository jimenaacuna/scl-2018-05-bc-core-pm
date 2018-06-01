/* Acá va tu código */

document.getElementById('encode').addEventListener('click',function(){
    let string2 = document.getElementById("boxCipher");
    let num = document.getElementById("positions");
    document.getElementById("boxMensaje").innerHTML = window.cipher.encode(string2.value,parseInt(num.value));
})
    


document.getElementById('decode').addEventListener('click',function(){
    let string2 = document.getElementById("boxCipher");
    let num = document.getElementById("positions");
    document.getElementById("boxMensaje").innerHTML = window.cipher.decode(string2.value,parseInt(num.value));
})





    /* document.getElementById("boxMensaje").innerHTML = window.cipher.decode(string2.value,parseInt(offset2.value)); */

/* function reiniciar() {
    document.getElementById("boxMensaje").reset;
} */
























