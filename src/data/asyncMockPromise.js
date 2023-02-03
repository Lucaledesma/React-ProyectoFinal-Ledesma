const productos = [
    {
        id: 1,
        titulo: "Captain Tsubasa",
        imagen: "../../assets/img/deportes/01.jpg",
        stock: 1,
        precio: 1500,
        categoria: "deportes",
        detalle: "Captain Tsubasa: Rise of New Champions, basado en la aclamada serie de animé, es un juego de fútbol y acción con las gráficas más nuevas."
    },
    {
        id: 2,
        titulo: "WWE 2K22",
        imagen: "../../assets/img/deportes/02.jpg",
        stock: 2,
        precio: 1600,
        categoria: "deportes",
        detalle: "WWE 2K22 es un videojuego de lucha libre profesional. Es el vigésimo-tercer juego en la WWE y el noveno bajo el estandarte de WWE 2K."
    },
    {
        id: 3,
        titulo: "NBA 2K23",
        imagen: "../../assets/img/deportes/03.jpg",
        stock: 3,
        precio: 1700,
        categoria: "deportes",
        detalle: "Juego contra los equipos de la NBA, crea tu propia dinastía como director del club o lleva la liga en una nueva dirección como comisario en NBA 2K23."
    },
    {
        id: 4,
        titulo: "Ryders Republic",
        imagen: "../../assets/img/deportes/04.jpg",
        stock: 4,
        precio: 1800,
        categoria: "deportes",
        detalle: "Compite en Ryders Republics: ¡choca, grinda y ábrete paso hasta la meta! Personaliza a tu personaje para que lo vean tus amigos y competidores."
    },
    {
        id: 5,
        titulo: "F1 2022",
        imagen: "../../assets/img/deportes/05.jpg",
        stock: 5,
        precio: 1900,
        categoria: "deportes",
        detalle: "Ponte al volante en una nueva temporada con coches rediseñados y nuevas reglas que definen las carreras. Pon a prueba tus habilidades en F1 2022"
    },
    {
        id: 6,
        titulo: "FIFA 2023",
        imagen: "../../assets/img/deportes/06.jpg",
        stock: 6,
        precio: 2000,
        categoria: "deportes",
        detalle: "Descubre las novedades de FIFA 23 con la tecnología HyperMotion2, los torneos de la FIFA World Cup™ masculina y femenil, el Cross-Play y más."
    },
    {
        id: 7,
        titulo: "A Way Out",
        imagen: "../../assets/img/cooperativo/01.jpg",
        stock: 1,
        precio: 1500,
        categoria: "cooperativo",
        detalle: "A Way Out es un intenso juego de aventuras cooperativo en el que los personajes se fugan de la cárcel y unen fuerzas en busca de un objetivo común."
    },
    {
        id: 8,
        titulo: "Black Blood 4",
        imagen: "../../assets/img/cooperativo/02.jpg",
        stock: 2,
        precio: 1600,
        categoria: "cooperativo",
        detalle: "Back 4 Blood es un emocionante juego de disparos en primera persona cooperativo, de los creadores de la aclamada franquicia de Left 4 Dead."
    },
    {
        id: 9,
        titulo: "It Takes Two",
        imagen: "../../assets/img/cooperativo/03.jpg",
        stock: 3,
        precio: 1700,
        categoria: "cooperativo",
        detalle: "It Takes Two es un videojuego de acción y aventura con elementos de plataformas desarrollado por Hazelight Studios y publicado por Electronic Arts."
    },
    {
        id: 10,
        titulo: "Crash Team Racing",
        imagen: "../../assets/img/cooperativo/04.jpg",
        stock: 4,
        precio: 1800,
        categoria: "cooperativo",
        detalle: "Crash Team Racing Nitro Fueled es un videojuego, perteneciente al género de videojuego de kartings desarrollado por el estudio Beenox."
    },
    {
        id: 11,
        titulo: "Mortal Kombat 11",
        imagen: "../../assets/img/cooperativo/05.jpg",
        stock: 5,
        precio: 1900,
        categoria: "cooperativo",
        detalle: "Mortal Kombat 11 (MK11) es la undécima y más reciente entrega principal de la saga de Mortal Kombat, siendo además la vigésima segunda entrega de la misma."
    },
    {
        id: 12,
        titulo: "Little Nightmares 2",
        imagen: "../../assets/img/cooperativo/06.jpg",
        stock: 6,
        precio: 2000,
        categoria: "cooperativo",
        detalle: "Little Nightmares II es un juego de aventura de suspense en el que juegas como Mono, un joven chico atrapado en un mundo que ha sido tergiversado."
    },
    {
        id: 13,
        titulo: "Battlefield 2042",
        imagen: "../../assets/img/disparos/01.jpg",
        stock: 1,
        precio: 1500,
        categoria: "disparos",
        detalle: "Cambia las reglas de la guerra y descubre batallas inesperadas en el amplio universo de Battlefield 2042."
    },
    {
        id: 14,
        titulo: "DOOM Eternal",
        imagen: "../../assets/img/disparos/02.jpg",
        stock: 2,
        precio: 1600,
        categoria: "disparos",
        detalle: "Desarrollado por id Software, DOOM® Eternal™ es la secuela directa del juego galardonado y más vendido DOOM® (2016)."
    },
    {
        id: 15,
        titulo: "COD Modern Warfare 2",
        imagen: "../../assets/img/disparos/03.jpg",
        stock: 3,
        precio: 1700,
        categoria: "disparos",
        detalle: "Call of Duty: Modern Warfare 2 es una nueva entrega de la saga de acción first person shooter a cargo de Infinity Ward y Activision."
    },
    {
        id: 16,
        titulo: "Sniper Elite 5",
        imagen: "../../assets/img/disparos/04.jpg",
        stock: 4,
        precio: 1800,
        categoria: "disparos",
        detalle: "Sniper Elite 5, la nueva entrega de la galardonada franquicia, ofrece una experiencia sin parangón a la hora de disparar con un fusil de francotirador."
    },
    {
        id: 17,
        titulo: "Insurgency Sandstorm",
        imagen: "../../assets/img/disparos/05.jpg",
        stock: 5,
        precio: 1900,
        categoria: "disparos",
        detalle: "Insurgency: Sandstorm es un videojuego de acción ambientado en la guerra de Oriente Medio, que apostando por la primera persona, apuesta por el realismo."
    },
    {
        id: 18,
        titulo: "MAFIA 3",
        imagen: "../../assets/img/disparos/06.jpg",
        stock: 6,
        precio: 2000,
        categoria: "disparos",
        detalle: "Mafia III es un videojuego de acción y aventura de mundo abierto desarrollado por la compañía estadounidense Hangar 13 y distribuido por 2K Games."
    },
    {
        id: 19,
        titulo: "Elder Ring",
        imagen: "../../assets/img/mundo-abierto/01.jpg",
        stock: 1,
        precio: 1500,
        categoria: "mundoabierto",
        detalle: "ELDEN RING ofrece vastos parajes de fantasía y sombrías e intricadas mazmorras que están conectadas de forma fluida y sin interrupciones."
    },
    {
        id: 20,
        titulo: "GOW Ragnarok",
        imagen: "../../assets/img/mundo-abierto/02.jpg",
        stock: 2,
        precio: 1600,
        categoria: "mundoabierto",
        detalle: "God of War Ragnarök es un videojuego de acción y aventuras desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment (SIE)."
    },
    {
        id: 21,
        titulo: "Red Dead Redemption 2",
        imagen: "../../assets/img/mundo-abierto/03.jpg",
        stock: 3,
        precio: 1700,
        categoria: "mundoabierto",
        detalle: "Red Dead Redemption 2, estilizado Red Dead Redemption II, es un videojuego de acción-aventura western basado en el drama, en un mundo abierto."
    },
    {
        id: 22,
        titulo: "The Witcher 3",
        imagen: "../../assets/img/mundo-abierto/04.jpg",
        stock: 4,
        precio: 1800,
        categoria: "mundoabierto",
        detalle: "The Witcher 3: Wild Hunt es un videojuego de rol desarrollado y publicado por la compañía polaca CD Projekt RED."
    },
    {
        id: 23,
        titulo: "Assasins Creed Valhalla",
        imagen: "../../assets/img/mundo-abierto/05.jpg",
        stock: 5,
        precio: 1900,
        categoria: "mundoabierto",
        detalle: "Assassin's Creed Valhalla es un videojuego desarrollado por Ubisoft Montreal y publicado por Ubisoft."
    },
    {
        id: 24,
        titulo: "Far Cry 6",
        imagen: "../../assets/img/mundo-abierto/06.jpg",
        stock: 6,
        precio: 2000,
        categoria: "mundoabierto",
        detalle: "Far Cry 6 es un videojuego de disparos y mundo abierto en primera persona desarrollado por Ubisoft Toronto y publicado por Ubisoft."
    }
];

export default function getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 0);
    });
}

export function getSingleItem(itemid) {

    let singleItem = productos.find( (producto) => {
        return producto.id === parseInt(itemid);
    }); 

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (singleItem !== undefined) resolve(singleItem);
        else reject("Item no encotrado.");
      }, 0);
    });
}

export function getItemsByCategory(categoryid) {
    let itemsCat = productos.filter((item) => item.categoria === categoryid);
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(itemsCat);
      }, 0);
    });
  }