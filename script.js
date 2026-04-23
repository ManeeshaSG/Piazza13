function nextScreen(num) {
  const currentScreen = document.querySelector(".screen.active");
  const next = document.getElementById("screen" + num);

  currentScreen.style.transform = "translateX(-100%)";
  currentScreen.style.opacity = "0";

  setTimeout(() => {
    currentScreen.classList.remove("active");
    currentScreen.style.transform = "";

    next.classList.add("active");

    // effects inside function (correct place)
    if (num === 4) {
      document.getElementById("message").innerText = texts[0];
      document.getElementById("message").classList.add("show");
    }

    if (num === 5) {
      createConfetti();
      heartBurst();
      setTimeout(animateGallery, 200);
       setTimeout(() => {
  document.getElementById("finalText").classList.add("showText");
}, 500);
setTimeout(createConfetti, 300);
setTimeout(heartBurst, 500);
setTimeout(animateGallery, 800);
    }
setTimeout(() => {
  document.getElementById("finalText").classList.add("show");
}, 500);
  }, 300);
}

function noClick() {
  document.getElementById("noText").innerText = "Come on 😏 press yes!";
}

let current = 0;

const photos = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg"
];

const texts = [
  "From the moment I met you… 💖",
  "You became my happiness… ✨",
  "Every moment with you feels special… 🥺"
];

function nextPhoto() {
  const photo = document.getElementById("photo");
  const message = document.getElementById("message");
  photo.classList.remove("zoom");
setTimeout(() => {
  photo.classList.add("zoom");
}, 100);

  current++;

  if (current < photos.length) {
    photo.style.opacity = 0;

    setTimeout(() => {
      photo.src = photos[current];
      message.innerText = texts[current];

      photo.style.opacity = 1;

      message.classList.remove("show");
      setTimeout(() => {
        message.classList.add("show");
      }, 100);
    }, 300);

  } else {
    nextScreen(5);
  }
}

function createConfetti() {
  for (let i = 0; i < 30; i++) {
    const conf = document.createElement("div");
    conf.className = "confetti";

    conf.style.left = Math.random() * 100 + "vw";
    conf.style.background = `hsl(${Math.random()*360},100%,50%)`;

    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 3000);
  }
}

function restart() {
  location.reload();
}


function animateGallery() {
  const images = document.querySelectorAll(".gallery img");

  images.forEach((img, index) => {
    img.style.opacity = 0;
    img.style.transform = "translateY(20px)";

    setTimeout(() => {
      img.style.transition = "all 0.5s ease";
      img.style.opacity = 1;
      img.style.transform = "translateY(0)";
    }, index * 200);
  });
}

function heartBurst() {
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = "20px";
    heart.style.transform = `translate(-50%, -50%) scale(${Math.random()})`;

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.style.transition = "all 1s ease";
      heart.style.top = Math.random() * 100 + "vh";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.opacity = 0;
    }, 100);

    setTimeout(() => heart.remove(), 1200);
  }
}


let noCount = 0;

function moveNo() {
  const btn = document.getElementById("noBtn");
  noCount++;

  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "%";
  btn.style.top = Math.random() * 80 + "%";

  document.getElementById("noText").innerText = "Hehe 😏 you can't say no!";

  // after 3 tries → remove NO button
  if (noCount >= 3) {
    btn.style.display = "none";
    document.getElementById("noText").innerText = "Okay okay… you have to press YES now 😌💖";
  }
}