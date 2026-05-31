slideArray = document.querySelectorAll('.carrosel');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

const titulo = document.querySelectorAll('.titulo_slide');
const destaque = document.querySelectorAll('.titulo-destaque');
const conteudo = document.querySelectorAll('.conteudo');
const image = document.querySelectorAll('.image');
const content = document.querySelectorAll('.content')
const glass = document.querySelectorAll('.glass')

index = 0;
lastSlide = slideArray.length - 1;


function changeSlide(){
    let activeSlide = document.querySelector('.carrosel.active');
    let activeTitulo = document.querySelector('.titulo_slide.animacao');
    let activeDestaque = document.querySelector('.titulo-destaque.animacao');
    let activeConteudo = document.querySelector('.conteudo.animacao');
    let activeImage = document.querySelector('.image.animacao');
    let activeContent = document.querySelector('.content.animacao')
    let activeGlass = document.querySelector('.glass.animacao')

    activeSlide.classList.remove('active');
    activeTitulo.classList.remove('animacao');
    activeDestaque.classList.remove('animacao');
    activeConteudo.classList.remove('animacao');
    activeImage.classList.remove('animacao');
    activeContent.classList.remove('animacao')
    activeGlass.classList.remove('animacao')

    void titulo.offsetWidth;

    slideArray[index].classList.add('active'); 
    titulo[index].classList.add('animacao'); 
    destaque[index].classList.add('animacao'); 
    conteudo[index].classList.add('animacao'); 
    image[index].classList.add('animacao'); 
    content[index].classList.add('animacao')
    glass[index].classList.add('animacao')
    
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

    }, 25000);

}

function pararIntervalo(){
    clearInterval(intervalo)
}

intervaloInicio() 


    









