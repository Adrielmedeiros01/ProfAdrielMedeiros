function clickMenu(){ 
    const mostra = document.getElementById("mostrar");      

    if(mostra.style.display === "block"){
        mostra.style.display = "none";        
    } else {
        mostra.style.display = "block";
    }  
}

function mudoutamanho() {
    const mostra = document.getElementById("mostrar");

    if (window.innerWidth >= 768) {
        mostra.style.display = "flex";                      
    } else {                        
        mostra.style.display = "none";
    }
}

window.onload = mudoutamanho;
window.onresize = mudoutamanho;
