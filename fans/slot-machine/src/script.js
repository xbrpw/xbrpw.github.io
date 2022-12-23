var loses = 0
class SlotMachine {
  constructor (args) {
    this.start = args;
    this.positions = [ '-5px', '-108px', '120px' ];
    this.winningCombinations = [
      { id: 1, name: '$5' },
      { id: 2, name: '$10' },
      { id: 3, name: '$15 '}
    ];
  }

  init () {
    const startBtns = document.getElementsByClassName(this.start);

    for (let i = 0; i<startBtns.length; i++) {
      startBtns[i].addEventListener('click', function () {
        this.playSlots();
      }.bind(this), false);
    }
  }

  playSlots () {
    if (document.getElementById('ResultBanner').classList.contains('show')) {
      document.getElementById('ResultBanner').style.transition = 'none';
      document.getElementById('ResultBanner').classList.remove('show');
    }

    // current odds are: $5-70%, $10-30%, $15-10%, Lose-30%
    var chance = Math.random()  //gives a number between 0-1
    if(chance < .7) {
      var win = 0
      } 
    if(chance < .3) {
      var win = 1
      }
    if(chance < .1) {
      var win = 2
      }
    if(chance > .7) {
      var reelOne = 2;
      var reelTwo = 0;
      var reelThree = 1;
    } else {
      var reelOne = win;
      var reelTwo = win;
      var reelThree = win;
    }

    this.setReels(reelOne, 'Slot1');
    this.setReels(reelTwo, 'Slot2');
    this.setReels(reelThree, 'Slot3');

    this.delay(4000).then(function () {
      this.stopReels(reelOne, 'Slot1');
      this.stopReels(reelTwo, 'Slot2');
      this.stopReels(reelThree, 'Slot3'); 
    }.bind(this)).then(function () {
      // Winner Winner
      if (reelOne === reelTwo && reelOne === reelThree) {
        document.getElementById('ResultBanner').style.transition = 'max-height 3s ease-in, opacity .5s ease-in';
        document.getElementById('ResultBanner').className += ' show';
        document.getElementById('Result').innerHTML = `Has ganado   ${this.winningCombinations[reelOne].name}!`;
      }
      else {
        document.getElementById('ResultBanner').style.transition = 'max-height 3s ease-in, opacity .5s ease-in';
        document.getElementById('ResultBanner').className += ' show';
        document.getElementById('Result').innerHTML = 'Suerte para la próxima';
      }
    }.bind(this));
  }

  setReels (rand, slot) {
    setTimeout(function () {
      document.getElementById(slot).className += ' motion';
    }, rand*200);
  }

  stopReels (rand, slot) {
    document.getElementById(slot).style.backgroundPositionY = this.positions[rand];
    document.getElementById(slot).style.transition = 'background-position ease-out 5s';
    document.getElementById(slot).classList.remove('motion');
  }

  delay (ms){
    let ctr,
        rej,
        promise = new Promise(function (resolve, reject) {
          ctr = setTimeout(resolve, ms);
        });

    promise.cancel = function () {
      clearTimeout(ctr);
      rej(Error('Delay Cancelled'));
    }

    return promise; 
  }

}

// App Init
(function () {
  let newSlotsGame = new SlotMachine('cta-btn');
  newSlotsGame.init();
})();