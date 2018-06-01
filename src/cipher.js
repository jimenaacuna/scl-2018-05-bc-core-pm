
window.cipher = {

  encode: (text,offset) => {

    text = text.toUpperCase();
   
  let cipher = "";

  for(let i = 0; i < text.length; i++) { 
    const ASCII = text.charCodeAt(i);
    let travelposition = (ASCII - 65 + offset) % 26 + 65;
    const newASCII = String.fromCharCode(travelposition);
    cipher += newASCII;
  }
  return cipher;

  

  },
  decode: (text,offset) => {

    text = text.toUpperCase();

    let decipher = "";

    for(let a = 0; a < text.length; a++) {
      const ASCII = text.charCodeAt(a);
      let travelposition = (ASCII + 65 - offset) % 26 + 65;
      const newASCII = String.fromCharCode(travelposition);
      decipher += newASCII;
    }
    return decipher;
    
  }
}
