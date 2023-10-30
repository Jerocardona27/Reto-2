const images = [
    './img/golem.png',
    './img/Pekka.webp',
    './img/caballero.png',
    './img/bruja.png',
    './img/los-pillos.png',
    './img/goblin.webp',
    './img/arquero.png',
    './img/montaPuercos.webp',
    './img/Miner_info.webp',
    './img/principe.png'
];

const arrayImg = [
    {
        id: 0,
        name: "Golem",
        description: "Es lento, pero persistente, y solo ataca las estructuras.Cuando se destruye, explota y se convierte en dos golemitas que infligen daño en área.Gólem es una carta de rareza épica de Clash Royale que puede obtenerse a partir de la arena 3.",
        img: "./img/golem.png"
    }, {
        id: 1,
        name: "Pekka",
        description: "Es una tropa poderosa y puede hacer bastante daño con la colocación y el apoyo correctos. Hace daño masivo a un objetivo a la vez. Sólo a niveles decentes, una P.E.K.K.A puede matar a un Bárbaro de un solo golpe.",
        img: "./img/Pekka.webp"
    },
    {
        id: 2,
        name: "Caballero",
        description: 'Se puede utilizar como tanque para tropas más pequeñas como los Duendes. Es una gran carta para usar al frente de un mini-ataque. Tiene una gran sinergia en particular con los mazos de carnada de hechizos, y con el Barril de duendes, además es también común en mazos de Bait junto a la Valquiria.',
        img: "./img/caballero.png"
    },
    {
        id: 3,
        name: "Bruja nocturna",
        description: 'es una tropa de base constructora que proviene de Clash Royale, junto con el bombardero y el bebé dragón. Sin embargo, dispara el mismo proyectil que la Bruja, a diferencia de su contraparte cuerpo a cuerpo de Clash Royale, a pesar de blandir un hacha.',
        img: "./img/bruja.png"
    },
    {
        id: 4,
        name: "Los pillos",
        description: 'Está formada por dos "niñas pillas" y un "niño pillo", el cual tiene la función de defender a sus amigas mientras estas lanzan "chicles" a sus enemigos. Por lo tanto, la función de esta carta es muy sencilla: realizar el daño con las niñas pillas mientras distraemos con el niño pillo.',
        img: "./img/los-pillos.png"
    },
    {
        id: 5,
        name: "Sneaky goblins",
        description: 'es una Súper Tropa basada en el Goblin. Se puede desbloquear aumentando el Goblin cuando el Goblin tiene al menos el nivel 7 y cuando el Ayuntamiento se actualiza al nivel 11 o superior.',
        img: "./img/goblin.webp"
    },
    {
        id: 6,
        name: "Arquero",
        description: 'Dispara una flecha mágica que atraviesa y daña a los enemigos que se interponen en su camino. No es ningún truco, ¡es magia! Arquero mágico es una carta de rareza legendaria de Clash Royale que puede obtenerse a partir de la arena 5.',
        img: "./img/arquero.png"
    },
    {
        id: 7,
        name: "Montapuercos",
        description: 'es una tropa terrestre rápida con puntos de vida medios, poco daño y la capacidad de saltar sobre los muros enemigos. Se desbloquea en el nivel 2 del Cuartel oscuro.',
        img: "./img/montaPuercos.webp"
    },
    {
        id: 8,
        name: "Minero",
        description: 'Es una carta legendaria que puede obtenerse de los cofres una vez alcanzamos la arena 6. Cuesta 3 de elixir, una cifra bastante asequible, y puede desplegarse en cualquier parte de la Arena. Tiene bastantes puntos de vida, 1.000 a nivel 1 y de 1.460 a nivel 5, que no está nada mal.',
        img: "./img/Miner_info.webp"
    },
    {
        id: 9,
        name: "Principe",
        description: 'Es una tropa muy fuerte, además que tiene una gran velocidad, acompañar esta carta con otras unidades que ataquen con daño en área suele ser un buen combo.',
        img: "./img/principe.png"
    }

]

const btnDescription = document.querySelector('#boton-desc1');
const botonVolver = document.getElementById('btn-volver');

btnDescription.addEventListener('click', toggleDescription);
botonVolver.addEventListener('click', me2);

let items = document.getElementById('subMenu');

const imageContainer = document.getElementById('marco');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
let currentIndex = 0;

btnRight.addEventListener('click', nextImage);
btnLeft.addEventListener('click', prevImage);

function showImage(index) {
    if (index < 0) {

        btnLeft.setAttribute('disabled', "");
        btnLeft.style.color = 'gray';
        btnLeft.style.cursor = 'not-allowed';
    } else if (index >= images.length) {

        btnRight.setAttribute('disabled', "");
        btnRight.style.color = 'gray';
        btnRight.style.cursor = 'not-allowed';
    } else {
        
        imageContainer.src = images[index];
        btnLeft.disabled = false;
        btnRight.disabled = false;
        btnLeft.style.color = 'white';
        btnRight.style.color = 'white';
        btnLeft.style.cursor = 'pointer';
        btnRight.style.cursor = 'pointer';

        btnDescription.textContent = arrayImg[index].name;
        btnDescription.index = index;
    }
}

function nextImage() {
    currentIndex = currentIndex + 1;
    showImage(currentIndex);
    localStorage.setItem("image", currentIndex);
}

function prevImage() {
    currentIndex = currentIndex - 1;
    showImage(currentIndex);
    localStorage.setItem("image", currentIndex);
}

showImage(currentIndex = Number(localStorage.getItem('image')));

function toggleDescription() {
    const index = parseInt(btnDescription.index);
    me(index);
}

function me(index) {
    imageContainer.style.display = 'none';
    btnLeft.style.display = 'none';
    btnRight.style.display = 'none';
    btnDescription.style.display = 'none';
    botonVolver.style.display = 'block';

    items.innerHTML = `
    <div class="div-desc">
        <img src="${arrayImg[index].img}" alt="${arrayImg[index].name}" title="${arrayImg[index].name}">
        <div class="container2">
        <h1>${arrayImg[index].name}</h1>
        <p>${arrayImg[index].description}</p>
        </div>
    </div> `;
}

function me2() {
    imageContainer.style.display = 'initial';
    btnLeft.style.display = 'initial';
    btnRight.style.display = 'initial';
    btnDescription.style.display = 'initial';
    botonVolver.style.display = 'none';

    items.innerHTML = '';
}
