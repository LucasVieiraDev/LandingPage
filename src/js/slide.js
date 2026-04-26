slideArray = document.querySelectorAll('.carrosel');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

const titulo = document.querySelectorAll('.titulo');
const destaque = document.querySelectorAll('.titulo-destaque');
const conteudo = document.querySelectorAll('.conteudo');
const image = document.querySelectorAll('.image')

index = 0;
lastSlide = slideArray.length - 1;

console.log(image)

function changeSlide(){
    let activeSlide = document.querySelector('.carrosel.active');
    let activeTitulo = document.querySelector('.titulo.animacao');
    let activeDestaque = document.querySelector('.titulo-destaque.animacao');
    let activeConteudo = document.querySelector('.conteudo.animacao');
    let activeImage = document.querySelector('.image.animacao');

    activeSlide.classList.remove('active');
    activeTitulo.classList.remove('animacao');
    activeDestaque.classList.remove('animacao');
    activeConteudo.classList.remove('animacao');
    activeImage.classList.remove('animacao');

    void titulo.offsetWidth;

    slideArray[index].classList.add('active'); 
    titulo[index].classList.add('animacao'); 
    destaque[index].classList.add('animacao'); 
    conteudo[index].classList.add('animacao'); 
    image[index].classList.add('animacao'); 
    
}

right.onclick = () => {

    clearInterval(intervalo)

    if(index < lastSlide){
        index = index + 1;

        changeSlide();
    }else{
        index = 0;
        changeSlide();
    }

    intervaloInicio()
} 

left.onclick = () => {

    clearInterval(intervalo)
      
    if(index > 0) {
        index = index - 1;
        changeSlide()
        
    }else{
        index = lastSlide;
        changeSlide()
    }

    intervaloInicio()
}




let intervalo;

function intervaloInicio(){

    clearInterval(intervalo)

    intervalo = setInterval(() => {
    
        if(index < lastSlide){
            index = index + 1;

            changeSlide();
        }else{
            index = 0;
            changeSlide();
        }

    }, 10000);

}

function pararIntervalo(){
    clearInterval(intervalo)
}

intervaloInicio() 


    









