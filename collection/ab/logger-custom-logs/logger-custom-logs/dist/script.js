// 
// set up a new logger
//

var log = new Logger();



//
// example usage
// 

log.info("Hey, here’s some ‘info’, the number 2 is equal to:", 2);
log.pass("Great Job! You ‘pass’!");
log.warn("Watch yourself. I will only ‘warn’ you once...");
log.fail("Woah, bro! Total ‘fail’! This following object is totally not what you were looking for.", { awesome: false } );
log.go("Let’s just ‘go’ with something a bit more basic.");
log.info([0,1,2,3,4,5], { more: 'data'} );



//
// the goods
//

function Logger() {
  
  return {
  
    //
    // private methods
    //

    private: {

      //
      // available colors
      // based on colors in @jscottsmith’s pen 
      // https://codepen.io/jscottsmith/pen/VLzMLo
      //

      colors: {
        red: "#EC5f67",
        orange: "#F99157",
        green: "#81CC79",
        blue: "#6699CC",
        gray: "#555",
        white: "#f9f9f9"
      },



      //
      // scheme generator. take a hex color
      //

      scheme: function(color) {
        var line_height = "line-height: 16px;",
            // title-specific styles
            title_color = "color: " + this.colors.white + ";",
            title_background = "background-color: " + color + ";",
            title_font = "font-size: 14px;" + line_height,
            title_block = "padding: 2px 8px; border-radius: 3px;",
            title_style = title_color + title_background + title_font + title_block,
            // basic text styles
            text_color = "color: " + color + ";",
            text_padding = "padding: 4px 4px;", // vertical needs to match title for vertical centering
            text_font = "font-size: 11px;" + line_height,
            text_style = text_font + text_color + text_padding,
            // universal styles
            bold = "font-weight: bold;";

        var scheme = {
          title: title_style,
          content: text_style,
          integer: text_style + bold
        };

        // return scheme
        return scheme;

      },



      //
      // condensed log function. takes a title, scheme of two values, and infinite remaining arguments
      //  

      log: function(/**/) {

        var args = arguments,
            // color scheme variables
            title = args[0], scheme = args[1],
            // collections to be combined in output
            msg = [], strs = "", data = [];

        // for each remaining argument
        for(var i = 2; i <= args.length - 1; i++){
          // if a string, we want to add it after title and add color
          if (typeof args[i] != "object") {
            // create the string
            var str = "%c" + args[i];
            // add string to our strings
            strs += str;

            // if not a string, it is integer or boolean and we want to style it differently
            if (typeof args[i] != "string") {
              msg.push(scheme.integer);
            } else {
              msg.push(scheme.content);
            }
          } else {
            data.push(args[i]);
          }
        }

        // the log that matters
        if (msg.length > 0) {
          var msg = ["%c" + title + strs, scheme.title].concat(msg);
          console.log.apply(console, msg);
        }
        
        // log objects, arrays, html etc if exists
        if (data.length > 0) {
          if (msg.length == 0) {
            var title = ["%c"+title+"%cdata →", scheme.title, scheme.integer];
            console.log.apply(console, title);
          }
          console.log.apply(console, data);
        }
      },



      //
      // message method takes existing static vars array and
      // adds variable number of arguments
      //

      message: function(msg,args) {
        for(var i = 0; i < args.length; i++) msg.push(args[i]);
        return msg;
      }

    },


    //
    // begin public methods
    // getting char entities from http://dev.w3.org/html5/html-author/charref
    //

    info: function(/**/) { // `/**/` to represent infinite params
      var msg = this.private.message(["і", this.private.scheme(this.private.colors.blue)], arguments);
      this.private.log.apply(null, msg);
    },

    warn: function(/**/) {
      var msg = this.private.message(["◬", this.private.scheme(this.private.colors.orange)], arguments);
      this.private.log.apply(null, msg);
    },

    pass: function(/**/) {
      var msg = this.private.message(["✓", this.private.scheme(this.private.colors.green)], arguments);
      this.private.log.apply(null, msg);
    },

    fail: function(/**/) {
      var msg = this.private.message(["!", this.private.scheme(this.private.colors.red)], arguments);
      this.private.log.apply(null, msg);
    },

    go: function(/**/) {
      var msg = this.private.message(["→", this.private.scheme(this.private.colors.gray)], arguments);
      this.private.log.apply(null, msg);
    }


  }
  
}

jakealbaughSignature("light");