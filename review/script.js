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
            image: `adivina-quien-juego-para-celular.png`,
            desc: "Adivina Quién?",
            color: "#144B9C"
        },
        {
            url: `https://www.xbr.pw/sharon/spinners-page-loaders/index.html`,
            name: `02`,
            image: `sharon-spinners-and-page-loaders.png`,
            desc: "Sharon Spinners page loaders",
            color: "#98111f"
        },
        {
            url: `#`,
            name: `03`,
            image: `dailyui-3.jpg`,
            desc: "Landing Page",
            color: "#6aa0b6"
        },
        {
            url: `#`,
            name: `04`,
            image: `error404.png`,
            desc: "Calculator ",
            color: "#1a9991"
        },
        {
            url: `#`,
            name: `05`,
            image: `placeholder.jpg`,
            desc: "App Icon",
            color: "#b0b0b3"
        },
        {
            url: `#`,
            name: `06`,
            image: `placeholder.jpg`,
            desc: "Profile",
            color: "#e28473"
        },
        {
            url: `#`,
            name: `07`,
            image: `placeholder.jpg`,
            desc: "Settings",
            color: "#8160de"
        },
        {
            url: `#`,
            name: `Name URL`,
            image: `placeholder.jpg`,
            desc: "404 Page",
            color: "#61378a"
        },
        {
            url: `#`,
            name: `08`,
            image: `placeholder.jpg`,
            desc: "Music Player",
            color: "#e2a902"
        },
        {
            url: `#`,
            name: `09`,
            image: `placeholder.jpg`,
            desc: "Social Share",
            color: "#359ed2"
        },
        {
            url: `#`,
            name: `10`,
            image: `placeholder.jpg`,
            desc: "Flash Message",
            color: "#62ccb9"
        },
        {
            url: `#`,
            name: `11`,
            image: `placeholder.jpg`,
            desc: "E-Commerce Shop (Single Item)",
            color: "#F3615C"
        },
        {
            url: `#`,
            name: `12`,
            image: `placeholder.jpg`,
            desc: "Direct Messaging",
            color: "#60c4c7"
        },
        {
            url: `#`,
            name: `13`,
            image: `placeholder.jpg`,
            desc: "Countdown Timer",
            color: "#fe9014"
        },
        {
            url: `#`,
            name: `14`,
            image: `placeholder.jpg`,
            desc: "On/Off Switch",
            color: "#1db0b9"
        },
        {
            url: `#`,
            name: `15`,
            image: `placeholder.jpg`,
            desc: "Pop-Up / Overlay",
            color: "#5d48c9"
        },
        {
            url: `#`,
            name: `16`,
            image: `placeholder.jpg`,
            desc: "Email Receipt",
            color: "#435072"
        },
        {
            url: `#`,
            name: `17`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `18`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `19`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `20`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `21`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `22`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `23`,
            image: `placeholder.jpg`,
            desc: "E-Commerce Shop (Single Item)",
            color: "#F3615C"
        },
        {
            url: `#`,
            name: `24`,
            image: `placeholder.jpg`,
            desc: "Direct Messaging",
            color: "#60c4c7"
        },
        {
            url: `#`,
            name: `25`,
            image: `placeholder.jpg`,
            desc: "Countdown Timer",
            color: "#fe9014"
        },
        {
            url: `#`,
            name: `26`,
            image: `placeholder.jpg`,
            desc: "On/Off Switch",
            color: "#1db0b9"
        },
        {
            url: `#`,
            name: `27`,
            image: `placeholder.jpg`,
            desc: "Pop-Up / Overlay",
            color: "#5d48c9"
        },
        {
            url: `#`,
            name: `28`,
            image: `placeholder.jpg`,
            desc: "Email Receipt",
            color: "#435072"
        },
        {
            url: `#`,
            name: `29`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `30`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `31`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `32`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `33`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `34`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `35`,
            image: `placeholder.jpg`,
            desc: "E-Commerce Shop (Single Item)",
            color: "#F3615C"
        },
        {
            url: `#`,
            name: `36`,
            image: `placeholder.jpg`,
            desc: "Direct Messaging",
            color: "#60c4c7"
        },
        {
            url: `#`,
            name: `37`,
            image: `placeholder.jpg`,
            desc: "Countdown Timer",
            color: "#fe9014"
        },
        {
            url: `#`,
            name: `38`,
            image: `placeholder.jpg`,
            desc: "On/Off Switch",
            color: "#1db0b9"
        },
        {
            url: `#`,
            name: `39`,
            image: `placeholder.jpg`,
            desc: "Pop-Up / Overlay",
            color: "#5d48c9"
        },
        {
            url: `#`,
            name: `40`,
            image: `placeholder.jpg`,
            desc: "Email Receipt",
            color: "#435072"
        },
        {
            url: `#`,
            name: `41`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `42`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `43`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `44`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `45`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `46`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `47`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `48`,
            image: `placeholder.jpg`,
            desc: "Desing",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `49`,
            image: `placeholder.jpg`,
            desc: "Coming soon",
            color: "#70d3b2"
        },
        {
            url: `#`,
            name: `50`,
            image: `placeholder.jpg`,
            desc: "Coming soon",
            color: "#144B9C"
        },
    ];

    const itemEmpty = [{
        name: `51`,
        image: `placeholder.jpg`,
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
