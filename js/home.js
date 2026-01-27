const charas = [
    {
        img: "images/sLala.jpg",
        text: "ララ・サタリン・デビルーク"
    },
    {
        img: "images/sNana.jpg",
        text: "ナナ・アスタ・デビルーク"
    },
    {
        img: "images/sMomo.jpg",
        text: "モモ・べリア・デビルーク"
    },
];

let index = 0;

const img = document.getElementById("chara-img");
const text = document.getElementById("chara-text");
const next = document.getElementById("next");

function updateChara() {
    img.classList.remove("slide");
    text.classList.remove("slide");

    void img.offsetWidth; 
    void text.offsetWidth;

    img.src = charas[index].img;
    text.textContent = charas[index].text;

    img.classList.add("slide");
    text.classList.add("slide");
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
});

setInterval(nextChara, 3000);