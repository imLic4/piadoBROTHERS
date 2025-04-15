let pontuacao = 0;
const safecria = document.getElementById('safe')

function gerarpiada(){
  let url
  if (safecria.checked) {
     url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
  } else {
     url = 'https://v2.jokeapi.dev/joke/Any'
  }
  fetch(url).then(Response => Response.json()).then(data => {
    let pergunta = data.setup;
    let resposta = data.delivery;
    document.querySelector('#caixapiada').innerHTML=pergunta + "..." + resposta;
  })

}




//function safecria(){
  
// let safecria = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religioso,político,racista,sexista,explícito'
//  gerarpiada(safecria)
//}

// function gerarpiada(){
  
//   if (safecria == safekids) {
//     fetch(safekids)
//   } else {
    
















  //funções para aumentar, diminuir e resetar a pontuação dos participantes
   function aumentarpontuaçao() {
    pontuacao++;
    document.getElementById("score").innerText = pontuacao;
  }
  function aumentarpontuaçao2() {
    pontuacao++;
    document.getElementById("score2").innerText = pontuacao;
  }
  function diminuirpontuaçao() {
    pontuacao--;
    document.getElementById("score").innerText = pontuacao;
  }
  function diminuirpontuaçao2() {
    pontuacao--;
    document.getElementById("score2").innerText = pontuacao;
  }
function Reset(){
  document.getElementById("score").innerText = 0;
  document.getElementById("score2").innerText = 0;
}

function tocarSom() {
  const som = document.getElementById("sound-effect");
  som.currentTime = 0;
  som.play();
}

function aumentarpontuaçao() {
  let score = document.getElementById("score");
  score.textContent = parseInt(score.textContent) + 1;
  tocarSom();
}

function diminuirpontuaçao() {
  let score = document.getElementById("score");
  score.textContent = parseInt(score.textContent) - 1;
  tocarSom();
}

const bg = document.querySelector('.background-image');
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5;

bg.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / windowWidth;
    const mouseY = e.clientY / windowHeight;
    
    bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});



