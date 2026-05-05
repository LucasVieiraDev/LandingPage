
const detalhesBtn = document.querySelectorAll('.detalhe-btn');


detalhesBtn.forEach(detalhesBtn =>{

    
    detalhesBtn.addEventListener('click', function() {
        
        const card = this.closest('.item-sales');
        let cardActive = document.querySelector('.item-sales.detalhes')

        if (cardActive) {

            if (cardActive != card) {
                cardActive.classList.remove('detalhes');
                card.classList.add('detalhes');
            } else{
    
                card.classList.toggle('detalhes');
            };
       
        }else{
            card.classList.toggle('detalhes');
        }

    });
});