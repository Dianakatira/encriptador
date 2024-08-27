//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

const input=document.querySelector(".input");
const output=document.querySelector(".output");
var copiarTexto = document.querySelector(".output");

function btnEncriptar(){
    const textoEncrip = encriptar(input.value);
    output.value=textoEncrip;
    input.value="";
    output.style.backgroundImage = "none";
}
function btnDesencriptar(){
    const textodesEncrip = desencriptar(input.value);
    output.value=textodesEncrip;
    input.value="";
}
function copiar() {  
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copiarTexto.value);
}


function encriptar(stringUsuario){
    let matrix=[["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        console.table(matrix)
        stringUsuario=stringUsuario.toLowerCase();
        for(let i = 0; i<matrix.length;i++){
            if(stringUsuario.includes(matrix[i][0])){
                stringUsuario=stringUsuario.replaceAll(matrix[i][0], matrix[i][1]);
            }
        }
        return stringUsuario; 
    }

function desencriptar(stringUsuario){
    let matrix=[["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        console.table(matrix)
        stringUsuario=stringUsuario.toLowerCase();
        for(let i = 0; i<matrix.length;i++){
            if(stringUsuario.includes(matrix[i][1])){
                stringUsuario=stringUsuario.replaceAll(matrix[i][1] , matrix[i][0]);
            }
        }
        return stringUsuario; 
    }