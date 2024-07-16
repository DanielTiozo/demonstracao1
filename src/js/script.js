const formulario = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function abrirForm(){
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function fecharForm(){
    formulario.style.left = "-230px"
    formulario.style.transform = "translateX(0%)"
    mascara.style.visibility = "hidden"
}
