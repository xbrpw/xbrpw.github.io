window.onload = function (e) {


    // Sticky menu 

    var menuNav = document.querySelector('.mainNav'),
        itemContainer = document.querySelector(".dailyItems");

    window.onscroll = function () {

        if (window.pageYOffset >= 100) {
            menuNav.classList.add('sticky');

        } else {
            menuNav.classList.add('sticky-out');

            setTimeout(function () {
                menuNav.classList.remove('sticky');
                menuNav.classList.remove('sticky-out');
            }, 200);
        }
    }


    // Add Works

    var nu = 1,
        nm = 1,
        im = 1,
        folder = "img",
        total = 0;


    const items = [{
            url: `https://www.xbr.pw/adivina-quien/index.html`,
            name: `01`,
            image: `img/adivina-quien-juego-para-celular.webp`,
            desc: "Adivina Quién?",
            color: "#144B9C"
        },
        {
            url: `https://www.xbr.pw/sharon/spinners-page-loaders/index.html`,
            name: `02`,
            image: `img/sharon-spinners-and-page-loaders.webp`,
            desc: "Sharon Spinners page loaders",
            color: "#98111f"
        },
        {
            url: `https://www.xbr.pw/assets/css/hey/image-gallery-with-detailed-info/index.html`,
            name: `03`,
            image: `img/cgtravel-2017.webp`,
            desc: "CG Travel 2017",
            color: "#6aa0b6"
        },
        {
            url: `https://xbrpw.github.io/eso/index.html`,
            name: `04`,
            image: `img/eso-0514.webp`,
            desc: "ESO-0514",
            color: "#1a9991"
        },
        {
            url: `https://codepen.io/luisangelmaciel/full/wveJyvP`,
            name: `05`,
            image: `img/Goku%20vs%20Moro%20Game%20Save%20the%20universe.webp`,
            desc: "Goku vs Moro Game Save the universe",
            color: "#b0b0b3"
        },
        {
            url: `https://codepen.io/luisangelmaciel/full/vYjZQPG`,
            name: `06`,
            image: `img/cerrado.webp`,
            desc: "Singboard e-commerce",
            color: "#e28473"
        },
        {
            url: `www.xbr.pw/assets/clone/fakebook/src/index.html`,
            name: `07`,
            image: `img/placeholder.webp`,
            desc: "Bookmarks",
            color: "#8160de"
        },
        {
            url: `https://www.luisangelmaciel.one/yicel/indextml`,
            name: `Name URL`,
            image: `img/placeholder.webp`,
            desc: "404 Page",
            color: "#61378a"
        },
        {
            url: `https://codepen.io/luisangelmaciel/full/dyRVXLW`,
            name: `08`,
            image: `img/placeholder.webp`,
            desc: "Pokerangers App. Ringtone Pokemon + Power Rangers ",
            // desc: "Music Player Social Share ",
            color: "#e2a902"
        },
        {
            url: `https://codepen.io/luisangelmaciel/full/jOwrYBJ`,
            name: `09`,
            image: `img/placeholder.webp`,
            desc: "Vegeta | FCC-Tribute-Page ",
            color: "#359ed2"
        },
        {
            url: `#`,
            name: `10`,
            image: `img/placeholder.webp`,
            desc: "Flash Message",
            color: "#62ccb9"
        },
        {
            url: `#`,
            name: `11`,
            image: `img/placeholder.webp`,
            desc: "E-Commerce Shop (Single Item)",
            color: "#F3615C"
        },
        {
            url: `#`,
            name: `12`,
            image: `img/placeholder.webp`,
            desc: "Direct Messaging",
            color: "#60c4c7"
        },
        {
            url: `#`,
            name: `13`,
            image: `img/placeholder.webp`,
            desc: "Countdown Timer",
            color: "#fe9014"
        },
        {
            url: `#`,
            name: `14`,
            image: `img/placeholder.webp`,
            desc: "On/Off Switch",
            color: "#1db0b9"
        },
        {
            url: `#`,
            name: `15`,
            image: `img/placeholder.webp`,
            desc: "Pop-Up / Overlay",
            color: "#5d48c9"
        },
        {
            url: `#`,
            name: `16`,
            image: `img/placeholder.webp`,
            desc: "Email Receipt",
            color: "#435072"
        },
        {
            url: `#`,
            name: `17`,
            image: `img/placeholder.webp`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `18`,
            image: `img/placeholder.webp`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `19`,
            image: `img/placeholder.webp`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `20`,
            image: `img/placeholder.webp`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `21`,
            image: `img/placeholder.webp`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `22`,
            image: `img/placeholder.webp`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `23`,
            image: `img/placeholder.webp`,
            desc: "E-Commerce Shop (Single Item)",
            color: "#F3615C"
        },
        {
            url: `#`,
            name: `24`,
            image: `img/placeholder.webp`,
            desc: "Direct Messaging",
            color: "#60c4c7"
        },
        {
            url: `#`,
            name: `25`,
            image: `img/placeholder.webp`,
            desc: "Countdown Timer",
            color: "#fe9014"
        },
        {
            url: `#`,
            name: `26`,
            image: `img/placeholder.webp`,
            desc: "On/Off Switch",
            color: "#1db0b9"
        },
        {
            url: `#`,
            name: `27`,
            image: `img/placeholder.webp`,
            desc: "Pop-Up / Overlay",
            color: "#5d48c9"
        },
        {
            url: `#`,
            name: `28`,
            image: `img/placeholder.webp`,
            desc: "Email Receipt",
            color: "#435072"
        },
       
        {
            url: `#`,
            name: `29`,
            image: `img/error404.webp`,
            desc: "Error 404",
            color: "#70d3b2"
        },
        {
            url: `https://xbrpw.github.io/bookmarks.html`,
            name: `30`,
            image: `img/placeholder.webp`,
            desc: "Bookmarks",
            color: "#144B9C"
        },
    ];

    const itemEmpty = [{
        name: `31`,
        image: `placeholder.webp`,
        desc: "Coming soon",
        color: "#000000"
    }];


    function addItems() {

        for (let i = 0; i < items.length; i++) {
            var name = items[i].name,
                img = items[i].image,
                desc = items[i].desc,
                url = items[i].url,
                color = items[i].color;

            var template = `
            <a href="${url}" target="_blank"  rel="noopener" class="dailyItem">
            
                    <div class="dailyItem__content">
                    <div class="dailyItem__itemBg" style="background-color:${color}f0"></div>
                    <article class="dailyItem__text">
                        <h3 class="dailyItem__name">#${name}</h3>
                        <p class="dailyItem__desc">${desc}</p>
                    </article>
                    </div>
                    <div class="dailyItem__image"> 
                        <img src="${img}" alt="Daily UI ${name} - ${desc}">
                    </div>
                
            </a>`;
            itemContainer.insertAdjacentHTML('beforeend', template);
        }
    }

    function addEmpty(total) {

        for (let i = 0; i < total; i++) {
            var name2 = itemEmpty[0].name++,
                img2 = itemEmpty[0].image,
                desc2 = itemEmpty[0].desc,
                color2 = itemEmpty[0].color;

            var template = `
            <div class="dailyItem">
                    <div class="dailyItem__content">
                    <div class="dailyItem__itemBg" style="background-color:${color2}70"></div>
                    <article class="dailyItem__text">
                        <h3 class="dailyItem__name">#${name2}</h3>
                        <p class="dailyItem__desc">${desc2}</p>
                    </article>
                    </div>
                    <div class="dailyItem__image"> 
                        <img src="${img2}" alt="${desc2}">
                    </div>
            </div>`;
            itemContainer.insertAdjacentHTML('beforeend', template);
        }
    }

    addItems();

    addEmpty(total);


    ///////// Animate Modules //////////
    const dailyItem = document.querySelectorAll('.dailyItem');
    let delay = 1;


    const anime = (element, animation) => {
        if (element.offsetParent != null) {

            if (!element.classList.contains(animation)) {
                element.classList.add(animation);

                element.style.animationDelay = `${delay}` * 0.2 + "s";
                delay++;
            }
        }
    };

    const isInViewport = (element) => {
        var bounding = element.getBoundingClientRect();
        return (
            bounding.bottom >= 0 &&
            bounding.right >= 0 &&
            bounding.top <= document.documentElement.clientHeight &&
            bounding.left <= document.documentElement.clientWidth
        )
    };

    const isItemVisible = (element, animation) => {
        if (isInViewport(element)) {
            if (window.innerWidth >= 800) {
                anime(element, animation);
            }
        }
    };


    // for viewport
    const animeItem = (item, animation) => {
        item.forEach(item => {
            isItemVisible(item, animation);
        })
        delay = 1;
    };


    // for scroll
    window.addEventListener('scroll', () => {
        if (window.innerWidth >= 600) {
            animeItem(dailyItem, "anime");
        }

    });
    // to load the animations

    animeItem(dailyItem, "anime");

}
