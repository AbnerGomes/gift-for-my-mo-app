// Cartas
function novaCarta() {
    fetch("/nova_carta")
        .then(res => res.json())
        .then(data => {
            const carta = document.getElementById("carta");
            carta.style.opacity = 0;
            setTimeout(() => {
                carta.textContent = data.mensagem;
                carta.style.opacity = 1;
            }, 300);
        });
}

// Galeria de fotos
const fotos = [
    { src: "fotos/foto1.jpeg", legenda: "Minha foto favorita com voce 💍" },
    { src: "fotos/foto2.jpeg", legenda: "Dia que fomos na redenção (que desenhamos um tico no chao) 🤣" },
    { src: "fotos/foto3.jpeg", legenda: "Dia que me apaixonei por você 🤣❤️😍" },
    { src: "fotos/foto4.jpeg", legenda: "Bravinha" },
    { src: "fotos/foto5.jpeg", legenda: "Nós em santo antonio" },
    { src: "fotos/foto6.jpeg", legenda: "Você ensinando nosso filho a dirigir" },
    { src: "fotos/foto7.jpeg", legenda: "A gente magrinhos" },
    { src: "fotos/foto8.jpeg", legenda: "em gramado pensando o que comer" },
    { src: "fotos/foto9.jpeg", legenda: "Café da manhã no chalé (eu nao sei o q vc tava fazendo kk)" },
    { src: "fotos/foto10.jpeg", legenda: "🔞🔞🔞" },
    { src: "fotos/foto11.jpeg", legenda: "Nós em gramado na fonte do amor eterno" },
    { src: "fotos/foto12.jpeg", legenda: "Nóe em gramado denovo na igreja" },
    { src: "fotos/foto13.jpeg", legenda: "Eu vc no nosso casamento" },
    { src: "fotos/foto14.jpeg", legenda: "Voce me pedindo pra mandar o Zeca calar a boca" },
    { src: "fotos/foto15.jpeg", legenda: "Eu e você no mato" },
    { src: "fotos/foto16.jpeg", legenda: "Nosso ensaio pre wedding nos eucaliptos knajnic" },
    { src: "fotos/foto17.jpeg", legenda: "O dia do SIM" },
    { src: "fotos/foto18.jpeg", legenda: "Amo essa foto no gasometro com  vc" },
    { src: "fotos/foto19.jpeg", legenda: "Uma das primeiras fotos juntos"},
    { src: "fotos/foto20.jpeg", legenda: "Fofinhos"},
    { src: "fotos/foto21.jpeg", legenda: "Sei q voce gosta dessa"},
    { src: "fotos/foto22.jpeg", legenda: "Eu vc magrinhos estilosos"},
    { src: "fotos/foto23.jpeg", legenda: ""},
    { src: "fotos/foto24.jpeg", legenda: "Skin care"},
    { src: "fotos/foto25.jpeg", legenda: "Nos na cascata do chusvisqueiro"},
    { 
        src: "fotos/foto26.jpeg", 
        legenda: "Nossa pequena Ohana\nEssa é a minha família Eu achei. Sozinho. Eu achei.\nÉ pequena e incompleta. Mas é boa.\n É, é boa.\n\nOhana quer dizer família, família quer dizer NUNCA mais abandonar.\n ..ou esquecer." 
    }

];
let fotoAtual = 0;

function proximaFoto() {
    fotoAtual = (fotoAtual + 1) % fotos.length;
    document.getElementById("foto").src = `/static/${fotos[fotoAtual].src}`;
    document.getElementById("legenda").textContent = fotos[fotoAtual].legenda;
}

// Contador de tempo juntos
// function atualizarContador() {
//     const agora = new Date();
//     const diff = agora - dataInicio;

//     const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
//     const minutos = Math.floor((diff / (1000 * 60)) % 60);
//     const segundos = Math.floor((diff / 1000) % 60);

//     document.getElementById("contador").textContent =
//         `${dias} dias, ${horas}h, ${minutos}min, ${segundos}s`;
// }

// setInterval(atualizarContador, 1000);


const dataInicio = new Date("2021-03-09T00:00:00"); 

function atualizarContador() {
    const agora = new Date();

    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();
    let horas = agora.getHours() - dataInicio.getHours();
    let minutos = agora.getMinutes() - dataInicio.getMinutes();
    let segundos = agora.getSeconds() - dataInicio.getSeconds();

    // Correções para valores negativos
    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }
    if (horas < 0) {
        horas += 24;
        dias--;
    }
    if (dias < 0) {
        const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
        meses--;
    }
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    document.getElementById("contador").textContent =
        `${anos} ano${anos !== 1 ? 's' : ''}, ${meses} mes${meses !== 1 ? 'es' : ''}, ${dias} dia${dias !== 1 ? 's' : ''}, ${horas}horas, ${minutos}minutos, ${segundos}segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador(); // inicializa ao carregar


function toggleMusica() {
    const musica = document.getElementById("musica");
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
}

// // Flores caindo
// const canvas = document.getElementById('floresCanvas');
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let flores = [];

// function criarFlor() {
//     return {
//         x: Math.random() * canvas.width,
//         y: 0,
//         r: 8 + Math.random() * 5,
//         d: Math.random() * 1,
//         color: ["#ffc0cb", "#ff69b4", "#ffb6c1"][Math.floor(Math.random() * 3)]
//     };
// }

// for (let i = 0; i < 40; i++) {
//     flores.push(criarFlor());
// }

// function desenharFlores() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (let i = 0; i < flores.length; i++) {
//         let f = flores[i];
//         ctx.beginPath();
//         ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
//         ctx.fillStyle = f.color;
//         ctx.fill();
//         f.y += f.d + 1;
//         if (f.y > canvas.height) {
//             flores[i] = criarFlor();
//             flores[i].y = 0;
//         }
//     }
//     requestAnimationFrame(desenharFlores);
// }

// desenharFlores();

// Corações caindo
const canvas = document.getElementById('floresCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let coracoes = [];

function criarCoracao() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        size: 12 + Math.random() * 8,
        speed: 0.5 + Math.random() * 1.5,
        color: ["#ff4d6d", "#ff6b81", "#ff8fa3"][Math.floor(Math.random() * 3)]
    };
}

for (let i = 0; i < 40; i++) {
    coracoes.push(criarCoracao());
}

function desenharCoracao(x, y, size, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-size / 2, -size / 2, -size, size / 3, 0, size);
    ctx.bezierCurveTo(size, size / 3, size / 2, -size / 2, 0, 0);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
}

function animarCoracoes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < coracoes.length; i++) {
        let c = coracoes[i];
        desenharCoracao(c.x, c.y, c.size, c.color);
        c.y += c.speed;
        if (c.y > canvas.height) {
            coracoes[i] = criarCoracao();
            coracoes[i].y = -c.size;
        }
    }
    requestAnimationFrame(animarCoracoes);
}

animarCoracoes();

