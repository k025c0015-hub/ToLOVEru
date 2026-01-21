const charas = [
    {
        img: "images/sLala.jpg",
        text: "デビルーク星の第一王女 明るくて天真爛漫"
    },
    {
        img: "images/sNana.jpg",
        text: "デビルーク星の第二王女 動物と話せる元気なツンデレ娘"
    },
    {
        img: "images/sMomo.jpg",
        text: "デビルーク星の第三王女 恋愛に積極的で甘え上手"
    },
];

let index = 0;

const img = document.getElementById("chara-img");
const text = document.getElementById("chara-text");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function updateChara() {
    img.style.opacity = 0;
    text.style.opacity = 0;

    setTimeout(() => {
        img.src = charas[index].img;
        text.textContent = charas[index].text;

        img.style.opacity = 1;
        text.style.opacity = 1;
    }, 300);
}

function nextChara() {
    index = (index + 1) % charas.length;
    updateChara();
}

function prevChara() {
    index = (index - 1 + charas.length) % charas.length;
    updateChara();
}

next.addEventListener("click", nextChara);
prev.addEventListener("click", prevChara);

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextChara();
    if (e.key === "ArrowLeft") prevChara();
});

setInterval(nextChara, 3000);