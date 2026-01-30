const tap = document.querySelector(".tap");
const touch = document.getElementById("touch");
const surprise = document.getElementById("surprise");
const music = document.getElementById("music");

/* 📅 Date d’aujourd’hui */
const today = new Date("2019-09-24");
const options = { day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById("date").innerText =
  "📅 " + today.toLocaleDateString('fr-FR', options);

/* 🎈 Icônes douces */
function createIcon() {
  const icons = ["🌸","🎀","✨","❤️","💖","👑","🦄"];
  const el = document.createElement("div");
  el.className = "icon";
  el.innerText = icons[Math.floor(Math.random()*icons.length)];
  el.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 8000);
}

/* 🎆 Confettis simples */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let confettis = Array.from({length: 120}, () => ({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  r: Math.random()*4+2,
  d: Math.random()*2+1
}));

function drawConfetti(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.7)";
  confettis.forEach(c=>{
    ctx.beginPath();
    ctx.arc(c.x,c.y,c.r,0,Math.PI*2);
    ctx.fill();
    c.y += c.d;
    if(c.y > canvas.height) c.y = 0;
  });
  requestAnimationFrame(drawConfetti);
}

/* 👉 CLIC */
tap.onclick = () => {
  touch.style.display = "none";
  surprise.classList.remove("hidden");
  music.play();
  drawConfetti();
  setInterval(createIcon, 700);
};
