const textarea = document.querySelector(".textarea");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEcrinptado = Encriptar (textarea.value);
    mensagem.value = textoEcrinptado;
    textarea.value = "";
}

function Encriptar (stringEncriptada) {
    let matrizCodigo = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) { 
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    
    return stringEncriptada;
}


function btnDesencriptar() {
    const textoDesencrinptado = Desencriptar(textarea.value);
    mensagem.value = textoDesencrinptado;
    textarea.value = "";
}

function Desencriptar (stringDesencriptada) {
    let matrizCodigo = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) { 
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    
    return stringDesencriptada;
}

function copiarCodigo() {
    const mensagemElement = document.querySelector(".mensagem");
    const codigo = mensagemElement.value;

    navigator.clipboard.writeText(codigo)
        .then(() => {
            alert("Código copiado para a área de transferência!");
        })
        .catch(err => {
            console.error('Falha ao copiar:', err);
        });
}