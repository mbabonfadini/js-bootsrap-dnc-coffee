const btcompra = document.querySelectorAll(".comprar")
const card = document.querySelectorAll(".card")

btcompra.forEach(botao =>{
    botao.style.visibility="hidden"
})

card.forEach(cd=>{
    cd.addEventListener('mouseover',()=>{
        let teste = cd.querySelector('.comprar')
        teste.style.visibility ="visible"
    })

    cd.addEventListener('mouseout',()=>{
        let teste = cd.querySelector('.comprar')
        teste.style.visibility ="hidden"
    })
    })  