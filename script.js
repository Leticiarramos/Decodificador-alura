const textArea = document.querySelector(".texto");
const mensagem = document.querySelector(".mensagem");
const propriedade = "background-image";


function btnCriptografar() {
    const textoCriptografado = criptografar(textArea.value);
    mensagem.value = textoCriptografado;
    textArea.value = "";
}

function criptografar (stringCriptografada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"] ];
    stringCriptografada = stringCriptografada.toLowerCase();
    stringCriptografada = stringCriptografada.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
     

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringCriptografada.replace(/[^a-zA-Z0-9]/g, "");}

function btnDescriptografar() {
    const textoDescriptografado = descriptografar(textArea.value);
    mensagem.value = textoDescriptografado;
    textArea.value = "";
}

function descriptografar (stringDescriptografado) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"] ];
    stringDescriptografado = stringDescriptografado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptografado.includes(matrizCodigo[i][1])) {
            stringDescriptografado = stringDescriptografado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptografado;
}

function btnCopiar() {
    navigator.clipboard.writeText(mensagem.value).then()
}

