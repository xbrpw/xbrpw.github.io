// Basado en Memory Game © 2014 Nate Wiley
// License -- MIT
// best in full screen, works on phones/tablets (min height for game is 500px..) enjoy ;)


(function(){
	
	var Memory = {

		init: function(cards){
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(cards, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.paused = false;
     	this.guess = null;
			this.binding();
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 1000);
		},

		showModal: function(){
			this.$overlay.show();
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img loading="lazy" width="300px" height="auto" src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="./goku-peque-4-estrellas.png"\
				alt="Juego de memoria | Dragon Ball" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var cards = [
		{
			name: "Capsule Corp",
			img: "./Capsule-Corp.svg",
			id: 1,
		},
		{
			name: "Ejercito de Cooler",
			img: "./Ejercito-de-Cooler.svg",
			id: 2
		},
		{
			name: "Ejercito Saiyan",
			img: "./Ejercito-Saiyan.svg",
			id: 3
		},
		{
			name: "Fuerza Freezer",
			img: "./Fuerza-Freezer.svg",
			id: 4
		}, 
		{
			name: "Kame. Es el kanjin del Maestro Roshi y símbolo del traje de la Escuela Tortuga. Aparecio por primera vez en los primeros capítulos del anime.",
			img: "./kame.svg",
			id: 5
		},
		{
			name: "Majin Buu",
			img: "./majin-buu.svg",
			id: 6
		},
		{
			name: "Moro",
			img: "./moro.svg",
			id: 7
		},
		{
			name: "Patrulla-Galáctica",
			img: "./Patrulla-Galáctica.svg",
			id: 8
		},
		{
			name: "Patrulla Ginyu",
			img: "./Patrulla-Ginyu.svg",
			id: 9
		},
		{
			name: "Preparatoria Estrella Naranja",
			img: "./Preparatoria-Estrella-Naranja.svg",
			id: 10
		},
		{
			name: "Wis-Paciencia",
			img: "./Wis-Paciencia.svg",
			id: 11
		},
		{
			name: "Zamasu",
			img: "./Zamasu.svg",
			id: 12
		},
	];
    
	Memory.init(cards);


})();