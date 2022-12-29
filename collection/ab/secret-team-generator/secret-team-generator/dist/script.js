console.clear();

// extend prototype functions
loadExtensions();


var stg = new SecretTeamGenerator();


/**************
Secret Team Generator
**************/

function SecretTeamGenerator() {
  var STG = {};
  
  init();
  
  return STG;
  
  /**************
  initialize
  **************/
  
  function init() {
    setData();
    setElements();
    setEvents();
  }  

  /**************
  setters
  **************/
  
  function setData() {
    STG.players = null;
  }
  
  function setElements() {
    createPlayersForm();
    createPlayersContainer();
  }
  
  function setEvents() {
    STG.$load.on("click", handleLoadPlayers);
  }
  
  /**************
  events
  **************/
  
  function handleLoadPlayers(e) {
    STG.current_player = 0;  
    STG.players = getPlayers();
    STG.$players.empty();
    if(STG.players) {
      createPlayers();
      STG.$intro.addClass("hide");
      STG.$players.removeClass("hide");
      $(".player-0").removeClass("hide");
    }
  }
  
  function handleShowPal(e) {
    var $parent = $(e.target.parentElement);
    $parent.addClass("show");
  }
  
  function handleNextPlayer(e) {
    var $parent = $(e.target.parentElement);
    $parent.removeClass("show");
    
    var $old_player = $(".player-" + STG.current_player);      
    STG.current_player++;
    if(STG.current_player < STG.players.length) {
      $old_player.addClass("hide");
      $(".player-" + STG.current_player).removeClass("hide");      
    } else {
      STG.$players.addClass("hide");
      STG.$intro.removeClass("hide");
    }
  }
  
  /**************
  creators
  **************/

  function createPlayersForm() {
    var title = "Secret Team Generator";
    var msg = "Comma-separated player names";
    STG.$intro = $('<section class="intro" />');
    STG.$title = $("<h1>" + title + "</h1>");
    STG.$labeli = $('<label for="players-input">' + msg + '</label>');
    STG.$input = $('<input id="players-input" type="text" />');
    STG.$labelq = $('<label for="players-quant">Number of people per team (excess becomes Lone Wolf)</label>');
    STG.$quant = $('<input id="players-quant" type="number" value="2" min="2" />');
    STG.$load  = $("<button>Go</button>");
    STG.$intro.render();
    STG.$intro.append(STG.$title);
    STG.$intro.append(STG.$labeli);
    STG.$intro.append(STG.$input);
    STG.$intro.append(STG.$labelq);
    STG.$intro.append(STG.$quant);
    STG.$intro.append(STG.$load);
    STG.$input.attr("value", "Davey, Jennie, Carlos, Gina, Waldo");
  }
  
  function createPlayersContainer() {
    STG.$players = $('<section class="players" />');
    STG.$players.addClass("hide");
    STG.$players.render();
  }
  
  function createPlayers() {
    STG.players.shuffle();
    STG.players.each(createPlayer);
  }
  
  function createPlayer(player, i) {
    var msg;
    var s = player.pals.length > 1 ? "s are" : " is";
    if(player.pals.length) {
      msg = "Your secret teammate" + s + " <strong>" + player.pals.join("</strong>, <strong>").replace(/, ([^,]+?)$/, " and $1") + "</strong>";
    } else {
      msg = "You are a <strong>Lone Wolf</strong>";
    }
    
    var $el = $('<div class="player-' + i + ' hide" />'),
        $pal = $('<div>' + msg + '</div>'),
        $show = $('<button class="show">' + player.name + ", click to see secret team</button>"),
        $next = $('<button class="next">' + player.name + ", click when done</button>");
    $show.on("click", handleShowPal);
    $next.on("click", handleNextPlayer);
    $el.append($show);
    $el.append($pal);
    $el.append($next);
    STG.$players.append($el);
  }
  
  /**************
  private
  **************/
  
  function getPlayers() {
    var players_string = STG.$input.val();
    var quant  = parseInt(STG.$quant.val());
    if(!quant) quant = 2;
    if(!players_string.match(/[^ ]/g)) return null;
    players_string = players_string.replace(/, +/g, ",").replace(/^ +/g, "");
    var player_names = players_string.split(",");
    var players = [];
    player_names.shuffle();
    var name_count = player_names.length;
    var remainder = name_count % quant;
    var loop_length = remainder === 0 ? name_count : name_count - remainder;
    // for each team    
    for(var i = 0; i < loop_length; i += quant) {
      var team = [];
      for(var t = 0; t < quant; t++) {
        team.push(player_names[i + t]);
      }
      team.each(function(name) {
        var unique = team.slice(0);
        var index = unique.indexOf(name);
        unique.splice(index, 1);
        players.push({ name: name, pals: unique });
      });
    }
    // lone wolves
    for(var i = 0; i < remainder; i++) {
      players.push({ name: player_names[i + loop_length - 1], pals: [] });
    }
    
    console.debug(players);
    return players;
  }
  
}






/**************
JakeWeary: wut on earth am i doing.
**************/

function $(wut) {
  
  if(wut) {
    var JakeWeary = {};
    
    setData();
    setMethods();
    
    return JakeWeary;
  } else {
    return err("Nothing provided.");    
  }
  
  
  /**************
  setters
  **************/  
  
  function setData() {
    JakeWeary.jake_weary = true;
    JakeWeary.multi = false;      
    var el;
    if (typeof wut === "object") {
      JakeWeary.data = wut;
    } else if(wut.match(/^</)) {
      JakeWeary.data = createElement(wut);
    } else if(wut.match(/^[^ ]+#[^ ]+ *?$/)) {
      JakeWeary.data = document.querySelector(wut);
    } else {
      JakeWeary.data = document.querySelectorAll(wut);
      JakeWeary.multi = true;      
    }
  }
  
  function setMethods() {
    JakeWeary.append      = JW_Append;
    JakeWeary.attr        = JW_Attr;
    JakeWeary.each        = JW_Each;
    JakeWeary.empty       = JW_Empty;
    JakeWeary.find        = JW_Find;
    JakeWeary.first       = JW_First;
    JakeWeary.on          = JW_On;
    JakeWeary.render      = JW_Render;
    JakeWeary.val         = JW_Val;
    JakeWeary.addClass    = JW_AddClass;
    JakeWeary.removeClass = JW_RemoveClass;
    JakeWeary.toggleClass = JW_ToggleClass;
  }
  
  /**************
  methods
  **************/
  
  function JW_Append(child) {
    if(JakeWeary.multi) return err("Parent node must be a single node.");
    if(child.jake_weary) {
      child.each(function(el) {
        JakeWeary.data.appendChild(el);
      });
    } else {
      err("Appended item is not a JakeWeary node.");
    }
  }
  
  function JW_Attr(attr, set) {
    if(!attr) return err("You must provide an attribute.");
    if(set) {
      return JakeWeary.data.setAttribute(attr, set);
    } else {
      return JakeWeary.data.getAttribute(attr);
    }
  }
  
  function JW_Each(fn) {
    if(!fn) return err("You must provide a function.");
    if(JakeWeary.multi) {
      for(var i = 0, len = JakeWeary.data.length; i < len; i++) {
        fn(JakeWeary.data[i]);
      }
    } else {
      fn(JakeWeary.data);
    }
  }
  
  function JW_Empty() {
    JW_Each(function(el) {
      el.innerHTML = "";
    });
  }
  
  function JW_Find(query) {
    if(!query) return err("You must provide a selector.");
    if(JakeWeary.multi) return err("Node must not be multi.");
    var selector = JakeWeary.data.tagName;
    if(JakeWeary.id) selector += "#" + JakeWeary.id;
    if(!JakeWeary.data.className.match(/^ *?$/)) {
      var arr = JakeWeary.data.className.replace(/  /g, "").split(" ");
      console.log(arr);
      arr.each(function(name) {
        selector += "." + name;
      });
    }
    return $(selector + " " + query);
  }
  
  function JW_First() {
    if(JakeWeary.multi) return JakeWeary.data[0];
    return JakeWeary.data;
  }
  
  function JW_On(e, fn) {
    if(!e) return err("You must provide an event.");
    if(!fn) return err("You must provide a function.");
    JW_Each(function(el) {
      el.addEventListener(e, fn);        
    });
  }
  
  function JW_Render(parent) {
    if(!parent) {
      JW_Each(function(el) {
        document.body.appendChild(el);
      });
    } else {
      JW_Each(function(el) {
        parent.appendChild(el);
      });
    }
  }
  
  function JW_AddClass(classname) {
    JW_Each(function(el) {
      if(!el.className.match(classname)) {
        el.className += el.className ? " " + classname : classname;
      }     
    });
  }
  
  function JW_RemoveClass(classname) {
    JW_Each(function(el) {
      if(el.className.match(classname)) {
        el.className = el.className.replace(classname, "").replace(/ $/g, "");
      }
    });
  }
  
  function JW_ToggleClass(classname) {
    JW_Each(function(el) {
      if(el.className.match(classname)) {
        JW_RemoveClass(classname);
      } else {
        JW_AddClass(classname);
      }     
    });
  }
  
  function JW_Val() {
    if(JakeWeary.multi) return err("Node must be a single node.");
    return JakeWeary.data.value;
  }
  
  
  
  /**************
  private
  **************/
  
  function createElement(stringy) {
    var tagname = stringy.match(/^<[^ >]+/g)[0].replace("<","");
    var has_content = stringy.match("</" + tagname);
    var content;
    if(has_content) {
      var open_tag = stringy.match(/^<.+?>/)[0];
      content = stringy.replace(open_tag, "").replace("</" + tagname + ">", "");
      stringy = open_tag;
    }
    // attributes
    var attributes = stringy.match(/[ "][^=]+=["'].+?["']/g);
    var attrs = [];
    if(attributes) {
      // capture attributes for the element
      for(var a = 0; a < attributes.length; a++) {
        var attr = attributes[a];
        attr = attr.replace(/^ /, "");
        // clean element tag name
        stringy = stringy.replace(attr, "");
        attrs.push({
          name: attr.match(/^[^=]+/)[0],
          value: attr.match(/["'][^"']+["']/)[0].replace(/"|'/g, "")
        });
      }
    }
    // remove tag clutter
    stringy = stringy.replace(/[<>\/ ]/g, "");
    // create the element
    var el = document.createElement(stringy);
    // set attributes on the element
    if(attrs && attrs.length) {
      attrs.each(function(attr) {
        el.setAttribute(attr.name, attr.value);
      });
    }
    // set inner html
    if(content) {
      el.innerHTML = content;
    }
    return el;
  }
  
  function err(whammy) {
    console.error(whammy);
  }
}



/**************
Extensions
**************/

function loadExtensions() {
  Array.prototype.each = function(fn) {
    if(fn && typeof fn == "function") {
      for(var i = 0, length = this.length; i < length; i++) fn(this[i], i);
    } else {
      console.error("not a function");
    }
  } 
  
  // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  Array.prototype.shuffle = function() {
    var currentIndex = this.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = this[currentIndex];
      this[currentIndex] = this[randomIndex];
      this[randomIndex] = temporaryValue;
    }
  }
}