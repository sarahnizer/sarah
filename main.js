const botoes= document.querySelectorAll(".botoes");
console.log(botoes)

for(let i=0;i<botoes.length,i++){
    botoes[i].onclck= function (){
        botoes[i].classList.add("ativo");
    }
}
