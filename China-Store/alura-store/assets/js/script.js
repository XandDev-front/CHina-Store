// let ativaCor = false

// SE LIGAR POIS O querySelectorAll E elementByClassName reconhecem seus filho como uma lista,
// então tentar adicionar uma propriedade como o color não dá certo, logo você tem que passar algo
//para percorrer essa lista, como forEach


// EFEITO DO MENU AO ROLAR O SCROLL
let posicaoScroll = () => {
  // CASO QUEIRA MUDAR A COR DAS LETRAS
  //          ||
  //          V
  // document.querySelectorAll(".menu__link").forEach((link) =>{
  //     link.style.color = window.scrollY > 20 ? "#fff" : "#fdfdfd"
  // });

  document.querySelector(".header").style.background =
   window.scrollY > 20 ? "rgba(51, 51, 51,.8)" : " #333";
  
};

window.addEventListener("scroll", posicaoScroll);



// BOTÃO DE VOLTAR AO TOPO
let some = ()=>{window.scrollY > 800 ?   document.getElementById('botaoTopo').style.display = 'flex'
 : document.getElementById('botaoTopo').style.display = 'none';}

 window.addEventListener("scroll", some);

 
   
 
// document.querySelector('.botaoTopo').style.display = window.scrollY > 1200 ? "flex" : "none";