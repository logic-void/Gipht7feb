const container = document.querySelector(".petal-container");
const revealbtn = document.getElementById("revealbtn");
const messagePara = document.querySelector(".message");
const message = "Dis rose iz not jast a philabar, its a ichmol simbal oph bhat ai pheel. Ai cud not do much 🍑 this iz tu remind yu that yu bheri ispesal tu someban. Hab a gud day bootiphul.🐐🎀";
let messageIndex = 1;
let messageInterval;
function addLetters(){
  messagePara.textContent = message.slice(0,messageIndex)+"|";
  messageIndex++;
  if(messageIndex>message.length){
    messagePara.textContent = message;
    clearInterval(messageInterval);
  }
}
function startTyping(){
  document.querySelector("audio").play();
  document.querySelector(".container").style.display = "flex";
  document.querySelector(".container").classList.add("show");
  document.querySelector("footer").classList.add("show");
  document.querySelector("h1").classList.add("show");
  document.querySelector("h1").style.display = "block";
  document.querySelector("footer").style.display = "block";
  setTimeout(()=>{
    messageInterval = setInterval(addLetters,70);
    for(let i=0; i<25; i++){
      const petal = document.createElement("div");
      petal.classList.add("petal");
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.animationDuration = (3 + Math.random() * 5) + "s";
      petal.style.animationDelay = Math.random() * 5 + "s";
      petal.style.opacity = Math.random();
      container.appendChild(petal);
    }
  },1000)
}
revealbtn.onclick = ()=>{
  revealbtn.style.display = "none";
  setTimeout(startTyping,500);
}
