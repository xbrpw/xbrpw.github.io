var script = {
  el: "#app",

  data: {
    currentTime: "",
    sessions: {
      work: {
        name: "work",
        displayName: "Work",
        time: 25,
        type: "work"
      },
      short: {
        name: "short",
        displayName: "Short Break",
        time: 5,
        type: "break"
      },

      long: {
        name: "long",
        displayName: "Long Break",
        time: 15,
        type: "break"
      },

      current: {
        name: "",
        displayName: "",
        time: 0,
        type: "",
        timesToLongBreak: 4
      }
    },
    completed: [],
    remainingTime: 0,
    timer: null,
    colors: ["#f74545", "green", "white", "#192429"],
    sound: new Audio(
      "https://soundbible.com/mp3/analog-watch-alarm_daniel-simion.mp3"
    ),
    isSoundEnabled: true,
    isSidebarOpen: false,
    isMenuOpen: false,
    isDarkMode: true,
    isErgonomicsEnabled: true,
    isThemeOriginal: true,
    isModalOpen: false,
    modalText: ""
  },

  methods: {
    handleStart: function () {
      this.timer = setInterval(() => this.decreaseTimer(), 1000);
      this.stopSound();
    },
    handlePause: function () {
      clearInterval(this.timer);
      this.timer = null;
    },
    handleReset: function () {
      this.remainingTime = this.sessions.current.time * 60;
      clearInterval(this.timer);
      this.timer = null;
    },
    handleSidebar: function () {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    handleDarkMode: function () {
      this.isDarkMode = !this.isDarkMode;
      this.isThemeOriginal = false;
      this.setColors(this.sessions.current);
    },
    handleMenu: function () {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleErgonomics: function () {
      this.isErgonomicsEnabled = !this.isErgonomicsEnabled;
    },
    handleTheme: function () {
      this.isThemeOriginal = !this.isThemeOriginal;
      this.setColors();
    },

    setSession: function (session) {
      this.remainingTime = session.time * 60;
      Object.assign(this.sessions.current, session);
      this.setColors();
      this.isMenuOpen = false;
    },
    setColors: function () {
      let color1 =
        this.sessions.current.type === "work" ? this.colors[0] : this.colors[1];
      let color2 = this.isDarkMode ? this.colors[3] : this.colors[2];
      if (!this.isThemeOriginal) [color1, color2] = [color2, color1];
      document.querySelector(":root").style.setProperty("--primary", color1);
      document.querySelector(":root").style.setProperty("--secondary", color2);
    },
    decreaseTimer: function () {
      if (this.remainingTime >= 1) {
        this.remainingTime--;
      } else {
        if (this.isSoundEnabled) this.playSound();
        this.addToHistory();
        this.remainingTime = 0;
        this.handlePause();
        if (this.sessions.current.type === "work") {
          this.sessions.current.type = "break";
          if (this.sessions.current.timesToLongBreak > 1) {
            this.setSession(this.sessions.short);
            this.sessions.current.timesToLongBreak--;
          } else {
            this.setSession(this.sessions.long);
            this.sessions.current.timesToLongBreak = 4;
          }
        } else {
          this.sessions.current.type = "work";
          this.setSession(this.sessions.work);
        }
      }
    },
    getCurrentTime: function () {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      };
      const time = new Date();
      this.currentTime = time.toLocaleDateString("en-IE", options);
    },
    callEvery: function (func, time, type = "seconds", message = null) {
      time = type === "minutes" ? 1000 * 60 * time : 1000 * time;
      if (message) {
        setInterval(() => {
          this.playSound();
          this.openModal(message);
        }, time);
      } else {
        setInterval(() => func(), time);
      }
    },

    playSound: function () {
      this.sound.play();
    },
    stopSound: function () {
      this.sound.pause();
      this.isSoundEnabled = !this.isSoundEnabled;
    },

    openModal: function (text) {
      this.isModalOpen = true;
      this.modalText = text;
    },
    closeModal: function () {
      this.isModalOpen = false;
      this.stopSound();
    },

    addToHistory: function () {
      this.completed.push({
        completedAt: this.currentTime.split(", ").pop(),
        type: this.sessions.current.type,
        name: this.sessions.current.name,
        displayName: this.sessions.current.displayName
      });
      this.saveHistory();
    },
    removeFromHistory: function (x) {
      this.completed.splice(x, 1);
      this.saveHistory();
    },
    saveHistory: function () {
      let parsed = JSON.stringify(this.completed);
      try {
        localStorage.setItem("completed", parsed);
      } catch (e) {
        console.log(e);
      }
    }
  },

  created() {
    this.setSession(this.sessions.work);
    this.getCurrentTime();
    this.callEvery(this.getCurrentTime, 1);
    if (this.isErgonomicsEnabled) {
      this.callEvery(null, 60, "minutes", "Drink water");
      this.callEvery(null, 30, "minutes", "Look away");
    }
    
    // credits
    const funs = new Funs("light");
    funs.signature();
  },

  mounted() {
    if (localStorage) {
      try {
        this.cats = JSON.parse(localStorage.getItem("completed"));
      } catch (e) {
        localStorage.removeItem("completed");
      }
    }
  },

  computed: {
    minutes: function () {
      const minutes = Math.floor(this.remainingTime / 60);
      if (minutes >= 10) return minutes;
      else return "0" + minutes;
    },
    seconds: function () {
      const seconds = this.remainingTime - this.minutes * 60;
      if (seconds >= 10) return seconds;
      else return "0" + seconds;
    },
    arc: function () {
      return (
        (this.remainingTime / this.sessions.current.time / 60) * 472 + "  472"
      );
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.sessions.current.type, attrs: { id: "app" } }, [
    _c("div", { staticClass: "container" }, [
      _c("header", [
        _c(
          "svg",
          {
            staticClass: "logo",
            attrs: {
              viewBox: "0 0 520 520",
              xmlns: "http://www.w3.org/2000/svg"
            }
          },
          [
            _c("path", {
              staticClass: "head",
              attrs: {
                d:
                  "m 231.72656,-0.62695312 0.5045,36.28864012 -20.21494,-16.476229 -26.3418,18.033204 9.8081,14.941494 C 213.94284,47.369205 232.92827,44.897038 252,44.800781 c 19.07794,0.06575 38.07331,2.509062 56.54688,7.273438 L 320.3437,37.470915 294.0019,19.437711 272.77794,35.661687 272.27344,-0.62695312 h -18.72266 -3.10156 z"
              }
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                d:
                  "M 252 44.800781 A 229.60001 229.60001 0 0 0 22.400391 274.40039 A 229.60001 229.60001 0 0 0 252 504 A 229.60001 229.60001 0 0 0 481.59961 274.40039 A 229.60001 229.60001 0 0 0 252 44.800781 z M 252 62.101562 A 212.29829 212.29829 0 0 1 464.29883 274.40039 A 212.29829 212.29829 0 0 1 252 486.69922 A 212.29829 212.29829 0 0 1 39.701172 274.40039 A 212.29829 212.29829 0 0 1 252 62.101562 z "
              }
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                d:
                  "M 252 87.423828 A 186.97627 186.97627 0 0 0 65.023438 274.40039 A 186.97627 186.97627 0 0 0 252 461.37695 A 186.97627 186.97627 0 0 0 438.97656 274.40039 A 186.97627 186.97627 0 0 0 252 87.423828 z M 181.96094 137.93164 C 187.60922 137.78494 193.15791 140.6553 196.18164 145.89258 C 196.26267 146.04434 196.34187 146.19725 196.41797 146.35156 C 196.41797 146.35156 203.57892 158.30232 200.47266 185.97852 C 175.91289 174.62279 168.86914 162.25781 168.86914 162.25781 C 168.77541 162.11365 168.6842 161.96773 168.5957 161.82031 C 164.19752 154.20246 166.80791 144.46065 174.42578 140.0625 C 176.80636 138.68807 179.39354 137.99832 181.96094 137.93164 z M 321.46875 137.93164 C 324.03615 137.99832 326.62333 138.68807 329.00391 140.0625 C 336.62178 144.46065 339.23216 154.20246 334.83398 161.82031 C 334.74548 161.96773 334.65428 162.11365 334.56055 162.25781 C 334.56055 162.25781 327.5168 174.62279 302.95703 185.97852 C 299.85077 158.30232 307.01172 146.35156 307.01172 146.35156 C 307.08782 146.19725 307.16506 146.04434 307.24609 145.89258 C 310.26983 140.6553 315.82047 137.78494 321.46875 137.93164 z M 335.07422 186.0332 L 255.25195 284.85938 L 241.19727 272.85547 L 335.07422 186.0332 z M 131.86914 188.87891 C 134.43654 188.94559 137.02372 189.63729 139.4043 191.01172 C 139.55036 191.10263 139.69486 191.19542 139.83789 191.29102 C 139.83789 191.29102 152.01411 198.05866 163.16211 223.58008 C 136.21486 226.02562 123.93359 218.83984 123.93359 218.83984 C 123.78033 218.76186 123.6289 218.68106 123.47852 218.59766 C 115.86066 214.1995 113.25025 204.45768 117.64844 196.83984 C 120.67217 191.60256 126.22086 188.7322 131.86914 188.87891 z M 371.56055 188.87891 C 377.20883 188.7322 382.75752 191.60256 385.78125 196.83984 C 390.17944 204.45768 387.56903 214.1995 379.95117 218.59766 C 379.80079 218.68106 379.64935 218.76186 379.49609 218.83984 C 379.49609 218.83984 367.21287 226.02562 340.26562 223.58008 C 351.41363 198.05866 363.58984 191.29102 363.58984 191.29102 C 363.73287 191.19542 363.87738 191.10263 364.02344 191.01172 C 366.40402 189.63729 368.99315 188.94559 371.56055 188.87891 z M 112.79297 258.47266 C 112.96492 258.47836 113.13691 258.48675 113.30859 258.49805 C 113.30859 258.49805 127.23717 258.27063 149.65234 274.79883 C 127.53811 290.39036 113.30859 290.30859 113.30859 290.30859 C 113.13687 290.31769 112.96488 290.32513 112.79297 290.32812 C 103.99663 290.32814 96.867167 283.19673 96.867188 274.40039 C 96.867167 265.60405 103.99663 258.47265 112.79297 258.47266 z M 390.63672 258.47266 C 399.43306 258.47265 406.56252 265.60405 406.5625 274.40039 C 406.56252 283.19673 399.43306 290.32814 390.63672 290.32812 C 390.46481 290.32513 390.29281 290.31769 390.12109 290.30859 C 390.12109 290.30859 375.89157 290.39036 353.77734 274.79883 C 376.19251 258.27063 390.12109 258.49805 390.12109 258.49805 C 390.29277 258.48675 390.46477 258.47836 390.63672 258.47266 z M 149.62891 325.13281 C 153.7373 325.1082 158.37321 325.32969 163.5625 325.91211 C 152.20678 350.47188 139.8418 357.51562 139.8418 357.51562 C 139.69763 357.60936 139.55168 357.70056 139.4043 357.78906 C 131.78645 362.18724 122.04659 359.57684 117.64844 351.95898 C 113.25025 344.34113 115.86066 334.60129 123.47852 330.20312 C 123.63029 330.12209 123.78317 330.0429 123.9375 329.9668 C 123.9375 329.9668 131.82589 325.23945 149.62891 325.13281 z M 353.80078 325.13281 C 371.6038 325.23945 379.49219 329.9668 379.49219 329.9668 C 379.64652 330.0429 379.7994 330.12209 379.95117 330.20312 C 387.56903 334.60129 390.17944 344.34113 385.78125 351.95898 C 381.3831 359.57684 371.64129 362.18724 364.02344 357.78906 C 363.87606 357.70056 363.73206 357.60936 363.58789 357.51562 C 363.58789 357.51562 351.22291 350.47188 339.86719 325.91211 C 345.05648 325.32969 349.69239 325.1082 353.80078 325.13281 z M 201.16406 363.22266 C 203.60961 390.16991 196.42383 402.45117 196.42383 402.45117 C 196.34584 402.60444 196.26504 402.75591 196.18164 402.90625 C 191.78348 410.52411 182.04362 413.13451 174.42578 408.73633 C 166.80791 404.33817 164.19752 394.59832 168.5957 386.98047 C 168.68662 386.8344 168.7794 386.68995 168.875 386.54688 C 168.875 386.54687 175.64263 374.37067 201.16406 363.22266 z M 302.26367 363.22266 C 327.7851 374.37067 334.55469 386.54687 334.55469 386.54688 C 334.65029 386.68995 334.74306 386.8344 334.83398 386.98047 C 339.23216 394.59832 336.62178 404.33817 329.00391 408.73633 C 321.38607 413.13451 311.64425 410.52411 307.24609 402.90625 C 307.16269 402.75591 307.0819 402.60444 307.00391 402.45117 C 307.00391 402.45117 299.81812 390.16991 302.26367 363.22266 z "
              }
            })
          ]
        ),
        _vm._v(" "),
        _c("span", [_vm._v(_vm._s(_vm.currentTime))]),
        _vm._v(" "),
        _c(
          "button",
          {
            attrs: { title: "Toggle History Panel" },
            on: { click: _vm.handleSidebar }
          },
          [
            _c("i", {
              staticClass: "fas",
              class: _vm.isSidebarOpen ? "fa-times-circle" : "fa-bars"
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { attrs: { id: "pomo" } }, [
        _c("div", { attrs: { id: "timer" } }, [
          _vm._v(
            "\n        " +
              _vm._s(_vm.minutes) +
              ":" +
              _vm._s(_vm.seconds) +
              "\n        "
          ),
          _c("span", [
            _vm._v(
              "\n          Long Break after " +
                _vm._s(_vm.sessions.current.timesToLongBreak) +
                " sessions\n        "
            )
          ]),
          _vm._v(" "),
          _c("div", { attrs: { id: "circle" } }, [
            _c(
              "svg",
              {
                attrs: {
                  viewBox: "0 0 200 200",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              },
              [
                _c("path", {
                  attrs: {
                    "stroke-dasharray": _vm.arc,
                    d:
                      "M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  }
                })
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "set-session" }, [
          _c(
            "button",
            {
              on: {
                click: function($event) {
                  _vm.timer === null ? _vm.handleStart() : _vm.handlePause();
                }
              }
            },
            [
              _c("i", {
                staticClass: "fas",
                class: _vm.timer ? "fa-pause" : "fa-play"
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            { attrs: { id: "select" }, on: { click: _vm.handleMenu } },
            [
              _vm._v(
                "\n          " +
                  _vm._s(_vm.sessions.current.displayName) +
                  "\n          "
              ),
              _c("i", { staticClass: "fas fa-caret-down" })
            ]
          ),
          _vm._v(" "),
          _vm.isMenuOpen
            ? _c("ul", { staticClass: "dropdown" }, [
                _c("li", [
                  _c(
                    "a",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          return _vm.setSession(_vm.sessions.work)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n              Work: " +
                          _vm._s(_vm.sessions.work.time) +
                          " Minutes\n            "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          return _vm.setSession(_vm.sessions.short)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n              Short Break: " +
                          _vm._s(_vm.sessions.short.time) +
                          " Minutes\n            "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          return _vm.setSession(_vm.sessions.long)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n              Long Break: " +
                          _vm._s(_vm.sessions.long.time) +
                          " Minutes\n            "
                      )
                    ]
                  )
                ])
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "buttons", attrs: { id: "controlButtons" } }, [
          _c(
            "button",
            { attrs: { title: "Reset Time" }, on: { click: _vm.handleReset } },
            [_c("i", { staticClass: "fas fa-undo-alt" })]
          ),
          _vm._v(" "),
          _c(
            "button",
            { attrs: { title: "Mute" }, on: { click: _vm.stopSound } },
            [
              _c("i", {
                staticClass: "fas",
                class: _vm.isSoundEnabled ? "fa-volume-up" : "fa-volume-mute"
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              attrs: { title: "Toggle Ergonomics Notifications" },
              on: { click: _vm.handleErgonomics }
            },
            [
              _c("i", {
                staticClass: "fas",
                class: _vm.isErgonomicsEnabled ? "fa-bell" : "fa-bell-slash"
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              attrs: { title: "Toggle Dark Mode" },
              on: { click: _vm.handleDarkMode }
            },
            [
              _c("i", {
                class: _vm.isDarkMode ? "fas fa-lightbulb" : "far fa-lightbulb"
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              attrs: { title: "Toggle Theme" },
              on: { click: _vm.handleTheme }
            },
            [_c("i", { staticClass: "fas fa-random" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-group" }, [
          _c("label", [
            _vm._v(
              "Session Time: " + _vm._s(_vm.sessions.current.time) + " min"
            )
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.sessions[_vm.sessions.current.name].time,
                expression: "sessions[sessions.current.name].time"
              }
            ],
            attrs: { type: "range", min: "1", max: "60" },
            domProps: { value: _vm.sessions[_vm.sessions.current.name].time },
            on: {
              change: function($event) {
                return _vm.setSession(_vm.sessions[_vm.sessions.current.name])
              },
              __r: function($event) {
                return _vm.$set(
                  _vm.sessions[_vm.sessions.current.name],
                  "time",
                  $event.target.value
                )
              }
            }
          })
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.isSidebarOpen
      ? _c(
          "div",
          { staticClass: "sidebar" },
          [
            _c("button", { on: { click: _vm.handleSidebar } }, [
              _c("i", {
                staticClass: "fas",
                class: _vm.isSidebarOpen ? "fa-times-circle" : "fa-bars"
              })
            ]),
            _vm._v(" "),
            _c("h1", [_vm._v("History")]),
            _vm._v(" "),
            _vm._l(_vm.completed, function(info, n) {
              return _c("p", [
                _c("span", [
                  _vm._v(
                    _vm._s(info.completedAt) + ": " + _vm._s(info.displayName)
                  )
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    on: {
                      click: function($event) {
                        return _vm.removeFromHistory(n)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fas fa-times" })]
                )
              ])
            })
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.isModalOpen
      ? _c("div", { staticClass: "modal" }, [
          _c("div", { staticClass: "modal-dialog" }, [
            _c("div", { staticClass: "modal-container" }, [
              _c("div", { staticClass: "modal-body" }, [
                _c("p", [_vm._v(_vm._s(_vm.modalText))]),
                _vm._v(" "),
                _c("button", { on: { click: _vm.closeModal } }, [_vm._v("OK")])
              ])
            ])
          ])
        ])
      : _vm._e()
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-e85653fe_0", { source: "@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css\");\n:root {\n  --primary: \"\";\n  --secondary: \"\";\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  color: var(--primary);\n  margin: 0;\n}\n#app {\n  background-color: var(--secondary);\n  transition: background-color 0.15s ease;\n  font-family: sans-serif;\n  display: flex;\n  min-height: 100vh;\n  justify-content: center;\n  align-items: flex-start;\n}\n#app button {\n  border: none;\n  cursor: pointer;\n  outline: none;\n  color: var(--primary);\n  background: transparent;\n  min-width: 2em;\n}\n#app a {\n  color: var(--primary);\n}\n#app .container {\n  width: 25em;\n}\n#app header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: 0.8;\n  transition: opacity 0.3s;\n  margin-top: 2em;\n}\n#app header:hover {\n  opacity: 1;\n}\n#app header .logo {\n  width: 2em;\n  height: 2em;\n}\n#app header .logo path {\n  fill: var(--primary);\n}\n#app header .logo .head {\n  fill: green;\n}\n#app .input-group {\n  opacity: 0.8;\n  transition: opacity 0.3s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#app .input-group:hover {\n  opacity: 1;\n}\n#app .input-group label {\n  width: 50%;\n}\n#app .input-group input[type=range] {\n  -webkit-appearance: none;\n  width: 60%;\n  background: var(--primary);\n  height: 0.2em;\n  border-radius: 0.2em;\n  cursor: pointer;\n}\n#app .input-group input[type=range]:focus {\n  outline: none;\n}\n#app .input-group input[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  height: 1em;\n  width: 1em;\n  border-radius: 50%;\n  background: var(--primary);\n  border: 0;\n}\n#app .input-group input[type=range]::-moz-range-thumb {\n  -webkit-appearance: none;\n  height: 1em;\n  width: 1em;\n  border-radius: 50%;\n  background: var(--primary);\n  border: 0;\n}\n#app .sidebar {\n  background: var(--primary);\n  color: black;\n  padding: 0 2em;\n  right: 0;\n  position: absolute;\n  height: 100vh;\n  top: 0;\n  min-width: 20em;\n  overflow-y: auto;\n  z-index: 10;\n}\n#app .sidebar > button {\n  color: black;\n  position: absolute;\n  right: 1em;\n  top: 1.4em;\n}\n#app .sidebar p {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#app .sidebar a {\n  cursor: pointer;\n  color: var(--secondary);\n}\n#app #pomo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 1em;\n}\n#app #pomo button {\n  padding: 0.9em 1em;\n  border: 2px solid var(--primary);\n  position: relative;\n  border-radius: 0.4em;\n  font-size: 1em;\n}\n#app #pomo div {\n  padding: 1.5em 0;\n  width: 100%;\n}\n#app #pomo div:last-child {\n  padding-top: 0;\n}\n#app #pomo #timer {\n  font-size: 5em;\n  position: relative;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n#app #pomo #timer span {\n  font-size: 0.2em;\n}\n#app #pomo #timer #circle {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 5em;\n  height: 5em;\n  padding: 0;\n  pointer-events: none;\n}\n#app #pomo #timer #circle path {\n  opacity: 0.8;\n  transition: opacity 0.3s;\n  stroke-width: 1px;\n  stroke-linecap: round;\n  transform: rotate(90deg);\n  transform-origin: center;\n  transition: 1s linear all;\n  fill-rule: nonzero;\n  stroke: var(--primary);\n  fill: none;\n}\n#app #pomo #timer #circle path:hover {\n  opacity: 1;\n}\n#app #pomo .set-session {\n  border: 2px solid var(--primary);\n  width: 100%;\n  padding: 0;\n  border-radius: 0.4em;\n  position: relative;\n  display: flex;\n  opacity: 0.8;\n  transition: opacity 0.3s;\n}\n#app #pomo .set-session:hover {\n  opacity: 1;\n}\n#app #pomo .set-session button {\n  border: none;\n  border-radius: 0;\n}\n#app #pomo .set-session button:first-child {\n  border-right: 2px solid var(--primary);\n}\n#app #pomo .set-session button:nth-child(2) {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-grow: 1;\n}\n#app #pomo .set-session ul {\n  position: absolute;\n  z-index: 4;\n  top: 1.5em;\n  right: 0;\n  transition: all 0.5s ease;\n  list-style: none;\n  padding: 0.5em 0;\n}\n#app #pomo .set-session ul li a {\n  background: var(--primary);\n  color: var(--secondary);\n  text-decoration: none;\n  padding: 1em;\n  display: block;\n  text-align: center;\n}\n#app #pomo .set-session ul li:first-child a {\n  border-radius: 0.4em 0.4em 0 0;\n}\n#app #pomo .set-session ul li:last-child a {\n  border-radius: 0 0 0.4em 0.4em;\n}\n#app #pomo #controlButtons button {\n  opacity: 0.8;\n  transition: opacity 0.3s;\n}\n#app #pomo #controlButtons button:hover {\n  opacity: 1;\n}\n#app #pomo .buttons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#app .modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  display: table;\n  transition: opacity 0.3s ease;\n  text-align: center;\n}\n#app .modal-dialog {\n  display: table-cell;\n  vertical-align: middle;\n}\n#app .modal-container {\n  background-color: var(--secondary);\n  width: 30em;\n  border-radius: 0.4em;\n  box-shadow: 0 0.2em 0.8em rgba(0, 0, 0, 0.33);\n  transition: all 0.3s ease;\n  margin: 0 auto;\n  padding: 1em 1em 2em;\n}\n#app .modal-container p {\n  font-size: 2em;\n}\n#app .modal-container button {\n  padding: 0.9em 1em;\n  border: 2px solid var(--primary);\n  position: relative;\n  border-radius: 0.4em;\n  font-size: 1em;\n}\n[v-cloak] {\n  display: none !important;\n}\n\n/*# sourceMappingURL=pen.vue.map */", map: {"version":3,"sources":["/tmp/codepen/vuejs/src/pen.vue","pen.vue"],"names":[],"mappings":"AAuXA,yFAAA;AACA;EACA,aAAA;EACA,eAAA;ACtXA;AD+YA;EACA,sBAAA;AC5YA;AD+YA;EACA,qBAAA;EACA,SAAA;AC5YA;AD+YA;EACA,kCAAA;EACA,uCAAA;EACA,uBAAA;EACA,aAAA;EACA,iBAAA;EACA,uBAAA;EACA,uBAAA;AC5YA;AD8YA;EACA,YAAA;EACA,eAAA;EACA,aAAA;EACA,qBAAA;EACA,uBAAA;EACA,cAAA;AC5YA;AD+YA;EACA,qBAAA;AC7YA;ADgZA;EACA,WAAA;AC9YA;ADiZA;EAxDA,aAAA;EACA,8BAAA;EACA,mBAAA;EAGA,YAAA;EACA,wBAAA;EAqDA,eAAA;AC5YA;ADyVA;EACA,UAAA;ACvVA;AD2YA;EACA,UAAA;EACA,WAAA;ACzYA;AD2YA;EACA,oBAAA;ACzYA;AD2YA;EACA,WAAA;ACzYA;AD8YA;EArEA,YAAA;EACA,wBAAA;EANA,aAAA;EACA,8BAAA;EACA,mBAAA;AC/TA;ADqUA;EACA,UAAA;ACnUA;ADwYA;EACA,UAAA;ACtYA;ADyYA;EACA,wBAAA;EACA,UAAA;EACA,0BAAA;EACA,aAAA;EACA,oBAAA;EACA,eAAA;ACvYA;ADyYA;EACA,aAAA;ACvYA;AD0YA;EAjFA,wBAAA;EACA,WAAA;EACA,UAAA;EACA,kBAAA;EACA,0BAAA;EACA,SAAA;ACtTA;ADsYA;EArFA,wBAAA;EACA,WAAA;EACA,UAAA;EACA,kBAAA;EACA,0BAAA;EACA,SAAA;AC9SA;ADoYA;EACA,0BAAA;EACA,YAAA;EACA,cAAA;EACA,QAAA;EACA,kBAAA;EACA,aAAA;EACA,MAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;AClYA;ADoYA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;AClYA;ADoYA;EA1HA,aAAA;EACA,8BAAA;EACA,mBAAA;ACvQA;ADkYA;EACA,eAAA;EACA,uBAAA;AChYA;ADoYA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;AClYA;ADoYA;EACA,kBAAA;EACA,gCAAA;EACA,kBAAA;EACA,oBAAA;EACA,cAAA;AClYA;ADqYA;EACA,gBAAA;EACA,WAAA;ACnYA;ADsYA;EACA,cAAA;ACpYA;ADuYA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;ACrYA;ADsYA;EACA,gBAAA;ACpYA;ADsYA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;EACA,oBAAA;ACpYA;ADsYA;EAxKA,YAAA;EACA,wBAAA;EAyKA,iBAAA;EACA,qBAAA;EACA,wBAAA;EACA,wBAAA;EACA,yBAAA;EACA,kBAAA;EACA,sBAAA;EACA,UAAA;ACnYA;ADqNA;EACA,UAAA;ACnNA;ADqYA;EACA,gCAAA;EACA,WAAA;EACA,UAAA;EACA,oBAAA;EACA,kBAAA;EACA,aAAA;EA5LA,YAAA;EACA,wBAAA;ACtMA;ADwMA;EACA,UAAA;ACtMA;ADiYA;EACA,YAAA;EACA,gBAAA;AC/XA;ADiYA;EACA,sCAAA;AC/XA;ADkYA;EA5MA,aAAA;EACA,8BAAA;EACA,mBAAA;EA4MA,YAAA;AC9XA;ADkYA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;EACA,QAAA;EACA,yBAAA;EACA,gBAAA;EACA,gBAAA;AChYA;ADkYA;EACA,0BAAA;EACA,uBAAA;EACA,qBAAA;EACA,YAAA;EACA,cAAA;EACA,kBAAA;AChYA;ADmYA;EACA,8BAAA;ACjYA;ADmYA;EACA,8BAAA;ACjYA;ADsYA;EAxOA,YAAA;EACA,wBAAA;AC3JA;AD6JA;EACA,UAAA;AC3JA;ADmYA;EAjPA,aAAA;EACA,8BAAA;EACA,mBAAA;AC/IA;ADmYA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,8BAAA;EACA,cAAA;EACA,6BAAA;EACA,kBAAA;ACjYA;ADmYA;EACA,mBAAA;EACA,sBAAA;ACjYA;ADoYA;EACA,kCAAA;EACA,WAAA;EACA,oBAAA;EACA,6CAAA;EACA,yBAAA;EACA,cAAA;EACA,oBAAA;AClYA;ADoYA;EACA,cAAA;AClYA;ADqYA;EACA,kBAAA;EACA,gCAAA;EACA,kBAAA;EACA,oBAAA;EACA,cAAA;ACnYA;ADyYA;EACA,wBAAA;ACtYA;;AAEA,kCAAkC","file":"pen.vue","sourcesContent":["<template>\n  <div id=\"app\" v-cloak :class=\"sessions.current.type\">\n    <div class=\"container\">\n      <header>\n        <!-- <svg class=\"logo\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle style=\"fill:#ffffff\" cx=\"256\" cy=\"256\" r=\"256\" />\n        <path style=\"fill:#f74545\" d=\"m 456.63607,249.93789 c 0,110.80739 -89.82667,200.63407 -200.63407,200.63407 -110.8074,0 -200.634074,-89.82668 -200.634074,-200.63407 0,-110.8074 89.826674,-150.474678 200.634074,-150.474678 110.8074,0 200.63407,39.667278 200.63407,150.474678 z\" />\n        <path style=\"fill:green\" d=\"m 108.94617,184.20153 c 0,0 -1.38108,-109.741134 149.46249,-106.834499 150.84358,2.906635 151.48686,106.834499 151.48686,106.834499 L 307.8345,150.18236 259.42084,234.36093 211.00719,150.18236 Z\" />\n      </svg> -->\n        <svg\n          class=\"logo\"\n          viewBox=\"0 0 520 520\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n        >\n          <path\n            class=\"head\"\n            d=\"m 231.72656,-0.62695312 0.5045,36.28864012 -20.21494,-16.476229 -26.3418,18.033204 9.8081,14.941494 C 213.94284,47.369205 232.92827,44.897038 252,44.800781 c 19.07794,0.06575 38.07331,2.509062 56.54688,7.273438 L 320.3437,37.470915 294.0019,19.437711 272.77794,35.661687 272.27344,-0.62695312 h -18.72266 -3.10156 z\"\n          ></path>\n          <path\n            d=\"M 252 44.800781 A 229.60001 229.60001 0 0 0 22.400391 274.40039 A 229.60001 229.60001 0 0 0 252 504 A 229.60001 229.60001 0 0 0 481.59961 274.40039 A 229.60001 229.60001 0 0 0 252 44.800781 z M 252 62.101562 A 212.29829 212.29829 0 0 1 464.29883 274.40039 A 212.29829 212.29829 0 0 1 252 486.69922 A 212.29829 212.29829 0 0 1 39.701172 274.40039 A 212.29829 212.29829 0 0 1 252 62.101562 z \"\n          ></path>\n\n          <path\n            d=\"M 252 87.423828 A 186.97627 186.97627 0 0 0 65.023438 274.40039 A 186.97627 186.97627 0 0 0 252 461.37695 A 186.97627 186.97627 0 0 0 438.97656 274.40039 A 186.97627 186.97627 0 0 0 252 87.423828 z M 181.96094 137.93164 C 187.60922 137.78494 193.15791 140.6553 196.18164 145.89258 C 196.26267 146.04434 196.34187 146.19725 196.41797 146.35156 C 196.41797 146.35156 203.57892 158.30232 200.47266 185.97852 C 175.91289 174.62279 168.86914 162.25781 168.86914 162.25781 C 168.77541 162.11365 168.6842 161.96773 168.5957 161.82031 C 164.19752 154.20246 166.80791 144.46065 174.42578 140.0625 C 176.80636 138.68807 179.39354 137.99832 181.96094 137.93164 z M 321.46875 137.93164 C 324.03615 137.99832 326.62333 138.68807 329.00391 140.0625 C 336.62178 144.46065 339.23216 154.20246 334.83398 161.82031 C 334.74548 161.96773 334.65428 162.11365 334.56055 162.25781 C 334.56055 162.25781 327.5168 174.62279 302.95703 185.97852 C 299.85077 158.30232 307.01172 146.35156 307.01172 146.35156 C 307.08782 146.19725 307.16506 146.04434 307.24609 145.89258 C 310.26983 140.6553 315.82047 137.78494 321.46875 137.93164 z M 335.07422 186.0332 L 255.25195 284.85938 L 241.19727 272.85547 L 335.07422 186.0332 z M 131.86914 188.87891 C 134.43654 188.94559 137.02372 189.63729 139.4043 191.01172 C 139.55036 191.10263 139.69486 191.19542 139.83789 191.29102 C 139.83789 191.29102 152.01411 198.05866 163.16211 223.58008 C 136.21486 226.02562 123.93359 218.83984 123.93359 218.83984 C 123.78033 218.76186 123.6289 218.68106 123.47852 218.59766 C 115.86066 214.1995 113.25025 204.45768 117.64844 196.83984 C 120.67217 191.60256 126.22086 188.7322 131.86914 188.87891 z M 371.56055 188.87891 C 377.20883 188.7322 382.75752 191.60256 385.78125 196.83984 C 390.17944 204.45768 387.56903 214.1995 379.95117 218.59766 C 379.80079 218.68106 379.64935 218.76186 379.49609 218.83984 C 379.49609 218.83984 367.21287 226.02562 340.26562 223.58008 C 351.41363 198.05866 363.58984 191.29102 363.58984 191.29102 C 363.73287 191.19542 363.87738 191.10263 364.02344 191.01172 C 366.40402 189.63729 368.99315 188.94559 371.56055 188.87891 z M 112.79297 258.47266 C 112.96492 258.47836 113.13691 258.48675 113.30859 258.49805 C 113.30859 258.49805 127.23717 258.27063 149.65234 274.79883 C 127.53811 290.39036 113.30859 290.30859 113.30859 290.30859 C 113.13687 290.31769 112.96488 290.32513 112.79297 290.32812 C 103.99663 290.32814 96.867167 283.19673 96.867188 274.40039 C 96.867167 265.60405 103.99663 258.47265 112.79297 258.47266 z M 390.63672 258.47266 C 399.43306 258.47265 406.56252 265.60405 406.5625 274.40039 C 406.56252 283.19673 399.43306 290.32814 390.63672 290.32812 C 390.46481 290.32513 390.29281 290.31769 390.12109 290.30859 C 390.12109 290.30859 375.89157 290.39036 353.77734 274.79883 C 376.19251 258.27063 390.12109 258.49805 390.12109 258.49805 C 390.29277 258.48675 390.46477 258.47836 390.63672 258.47266 z M 149.62891 325.13281 C 153.7373 325.1082 158.37321 325.32969 163.5625 325.91211 C 152.20678 350.47188 139.8418 357.51562 139.8418 357.51562 C 139.69763 357.60936 139.55168 357.70056 139.4043 357.78906 C 131.78645 362.18724 122.04659 359.57684 117.64844 351.95898 C 113.25025 344.34113 115.86066 334.60129 123.47852 330.20312 C 123.63029 330.12209 123.78317 330.0429 123.9375 329.9668 C 123.9375 329.9668 131.82589 325.23945 149.62891 325.13281 z M 353.80078 325.13281 C 371.6038 325.23945 379.49219 329.9668 379.49219 329.9668 C 379.64652 330.0429 379.7994 330.12209 379.95117 330.20312 C 387.56903 334.60129 390.17944 344.34113 385.78125 351.95898 C 381.3831 359.57684 371.64129 362.18724 364.02344 357.78906 C 363.87606 357.70056 363.73206 357.60936 363.58789 357.51562 C 363.58789 357.51562 351.22291 350.47188 339.86719 325.91211 C 345.05648 325.32969 349.69239 325.1082 353.80078 325.13281 z M 201.16406 363.22266 C 203.60961 390.16991 196.42383 402.45117 196.42383 402.45117 C 196.34584 402.60444 196.26504 402.75591 196.18164 402.90625 C 191.78348 410.52411 182.04362 413.13451 174.42578 408.73633 C 166.80791 404.33817 164.19752 394.59832 168.5957 386.98047 C 168.68662 386.8344 168.7794 386.68995 168.875 386.54688 C 168.875 386.54687 175.64263 374.37067 201.16406 363.22266 z M 302.26367 363.22266 C 327.7851 374.37067 334.55469 386.54687 334.55469 386.54688 C 334.65029 386.68995 334.74306 386.8344 334.83398 386.98047 C 339.23216 394.59832 336.62178 404.33817 329.00391 408.73633 C 321.38607 413.13451 311.64425 410.52411 307.24609 402.90625 C 307.16269 402.75591 307.0819 402.60444 307.00391 402.45117 C 307.00391 402.45117 299.81812 390.16991 302.26367 363.22266 z \"\n          ></path>\n        </svg>\n        <span>{{ currentTime }}</span>\n        <button v-on:click=\"handleSidebar\" title=\"Toggle History Panel\">\n          <i\n            class=\"fas\"\n            :class=\"isSidebarOpen ? 'fa-times-circle' : 'fa-bars'\"\n          ></i>\n        </button>\n      </header>\n      <div id=\"pomo\">\n        <div id=\"timer\">\n          {{ minutes }}:{{ seconds }}\n          <span>\n            Long Break after {{ sessions.current.timesToLongBreak }} sessions\n          </span>\n          <div id=\"circle\">\n            <svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path\n                :stroke-dasharray=\"arc\"\n                d=\"M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0\"\n              ></path>\n            </svg>\n          </div>\n        </div>\n        <div class=\"set-session\">\n          <button v-on:click=\"timer === null ? handleStart() : handlePause()\">\n            <i class=\"fas\" :class=\"timer ? 'fa-pause' : 'fa-play'\"></i>\n          </button>\n          <button id=\"select\" v-on:click=\"handleMenu\">\n            {{ sessions.current.displayName }}\n            <i class=\"fas fa-caret-down\"></i>\n          </button>\n          <ul class=\"dropdown\" v-if=\"isMenuOpen\">\n            <li>\n              <a href=\"#\" v-on:click=\"setSession(sessions.work)\">\n                Work: {{ sessions.work.time }} Minutes\n              </a>\n            </li>\n            <li>\n              <a href=\"#\" v-on:click=\"setSession(sessions.short)\">\n                Short Break: {{ sessions.short.time }} Minutes\n              </a>\n            </li>\n            <li>\n              <a href=\"#\" v-on:click=\"setSession(sessions.long)\">\n                Long Break: {{ sessions.long.time }} Minutes\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div id=\"controlButtons\" class=\"buttons\">\n          <button v-on:click=\"handleReset\" title=\"Reset Time\">\n            <i class=\"fas fa-undo-alt\"></i>\n          </button>\n          <button v-on:click=\"stopSound\" title=\"Mute\">\n            <i\n              class=\"fas\"\n              :class=\"isSoundEnabled ? 'fa-volume-up' : 'fa-volume-mute'\"\n            ></i>\n          </button>\n          <button\n            v-on:click=\"handleErgonomics\"\n            title=\"Toggle Ergonomics Notifications\"\n          >\n            <i\n              class=\"fas\"\n              :class=\"isErgonomicsEnabled ? 'fa-bell' : 'fa-bell-slash'\"\n            ></i>\n          </button>\n          <button v-on:click=\"handleDarkMode\" title=\"Toggle Dark Mode\">\n            <i\n              :class=\"isDarkMode ? 'fas fa-lightbulb' : 'far fa-lightbulb'\"\n            ></i>\n          </button>\n          <button v-on:click=\"handleTheme\" title=\"Toggle Theme\">\n            <i class=\"fas fa-random\"></i>\n          </button>\n        </div>\n        <div class=\"input-group\">\n          <label>Session Time: {{ sessions.current.time }} min</label>\n          <input\n            type=\"range\"\n            min=\"1\"\n            max=\"60\"\n            v-model=\"sessions[sessions.current.name].time\"\n            v-on:change=\"setSession(sessions[sessions.current.name])\"\n          />\n        </div>\n      </div>\n    </div>\n    <div class=\"sidebar\" v-if=\"isSidebarOpen\">\n      <button v-on:click=\"handleSidebar\">\n        <i\n          class=\"fas\"\n          :class=\"isSidebarOpen ? 'fa-times-circle' : 'fa-bars'\"\n        ></i>\n      </button>\n      <h1>History</h1>\n      <p v-for=\"(info, n) in completed\">\n        <span>{{ info.completedAt }}: {{ info.displayName }}</span>\n        <a @click=\"removeFromHistory(n)\">\n          <i class=\"fas fa-times\"></i>\n        </a>\n      </p>\n    </div>\n    <div class=\"modal\" v-if=\"isModalOpen\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-container\">\n          <div class=\"modal-body\">\n            <p>{{ modalText }}</p>\n            <button v-on:click=\"closeModal\">OK</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  el: \"#app\",\n\n  data: {\n    currentTime: \"\",\n    sessions: {\n      work: {\n        name: \"work\",\n        displayName: \"Work\",\n        time: 25,\n        type: \"work\"\n      },\n      short: {\n        name: \"short\",\n        displayName: \"Short Break\",\n        time: 5,\n        type: \"break\"\n      },\n\n      long: {\n        name: \"long\",\n        displayName: \"Long Break\",\n        time: 15,\n        type: \"break\"\n      },\n\n      current: {\n        name: \"\",\n        displayName: \"\",\n        time: 0,\n        type: \"\",\n        timesToLongBreak: 4\n      }\n    },\n    completed: [],\n    remainingTime: 0,\n    timer: null,\n    colors: [\"#f74545\", \"green\", \"white\", \"#192429\"],\n    sound: new Audio(\n      \"https://soundbible.com/mp3/analog-watch-alarm_daniel-simion.mp3\"\n    ),\n    isSoundEnabled: true,\n    isSidebarOpen: false,\n    isMenuOpen: false,\n    isDarkMode: true,\n    isErgonomicsEnabled: true,\n    isThemeOriginal: true,\n    isModalOpen: false,\n    modalText: \"\"\n  },\n\n  methods: {\n    handleStart: function () {\n      this.timer = setInterval(() => this.decreaseTimer(), 1000);\n      this.stopSound();\n    },\n    handlePause: function () {\n      clearInterval(this.timer);\n      this.timer = null;\n    },\n    handleReset: function () {\n      this.remainingTime = this.sessions.current.time * 60;\n      clearInterval(this.timer);\n      this.timer = null;\n    },\n    handleSidebar: function () {\n      this.isSidebarOpen = !this.isSidebarOpen;\n    },\n    handleDarkMode: function () {\n      this.isDarkMode = !this.isDarkMode;\n      this.isThemeOriginal = false;\n      this.setColors(this.sessions.current);\n    },\n    handleMenu: function () {\n      this.isMenuOpen = !this.isMenuOpen;\n    },\n    handleErgonomics: function () {\n      this.isErgonomicsEnabled = !this.isErgonomicsEnabled;\n    },\n    handleTheme: function () {\n      this.isThemeOriginal = !this.isThemeOriginal;\n      this.setColors();\n    },\n\n    setSession: function (session) {\n      this.remainingTime = session.time * 60;\n      Object.assign(this.sessions.current, session);\n      this.setColors();\n      this.isMenuOpen = false;\n    },\n    setColors: function () {\n      let color1 =\n        this.sessions.current.type === \"work\" ? this.colors[0] : this.colors[1];\n      let color2 = this.isDarkMode ? this.colors[3] : this.colors[2];\n      if (!this.isThemeOriginal) [color1, color2] = [color2, color1];\n      document.querySelector(\":root\").style.setProperty(\"--primary\", color1);\n      document.querySelector(\":root\").style.setProperty(\"--secondary\", color2);\n    },\n    decreaseTimer: function () {\n      if (this.remainingTime >= 1) {\n        this.remainingTime--;\n      } else {\n        if (this.isSoundEnabled) this.playSound();\n        this.addToHistory();\n        this.remainingTime = 0;\n        this.handlePause();\n        if (this.sessions.current.type === \"work\") {\n          this.sessions.current.type = \"break\";\n          if (this.sessions.current.timesToLongBreak > 1) {\n            this.setSession(this.sessions.short);\n            this.sessions.current.timesToLongBreak--;\n          } else {\n            this.setSession(this.sessions.long);\n            this.sessions.current.timesToLongBreak = 4;\n          }\n        } else {\n          this.sessions.current.type = \"work\";\n          this.setSession(this.sessions.work);\n        }\n      }\n    },\n    getCurrentTime: function () {\n      const options = {\n        weekday: \"long\",\n        year: \"numeric\",\n        month: \"long\",\n        day: \"numeric\",\n        hour: \"numeric\",\n        minute: \"numeric\",\n        second: \"numeric\"\n      };\n      const time = new Date();\n      this.currentTime = time.toLocaleDateString(\"en-IE\", options);\n    },\n    callEvery: function (func, time, type = \"seconds\", message = null) {\n      time = type === \"minutes\" ? 1000 * 60 * time : 1000 * time;\n      if (message) {\n        setInterval(() => {\n          this.playSound();\n          this.openModal(message);\n        }, time);\n      } else {\n        setInterval(() => func(), time);\n      }\n    },\n\n    playSound: function () {\n      this.sound.play();\n    },\n    stopSound: function () {\n      this.sound.pause();\n      this.isSoundEnabled = !this.isSoundEnabled;\n    },\n\n    openModal: function (text) {\n      this.isModalOpen = true;\n      this.modalText = text;\n    },\n    closeModal: function () {\n      this.isModalOpen = false;\n      this.stopSound();\n    },\n\n    addToHistory: function () {\n      this.completed.push({\n        completedAt: this.currentTime.split(\", \").pop(),\n        type: this.sessions.current.type,\n        name: this.sessions.current.name,\n        displayName: this.sessions.current.displayName\n      });\n      this.saveHistory();\n    },\n    removeFromHistory: function (x) {\n      this.completed.splice(x, 1);\n      this.saveHistory();\n    },\n    saveHistory: function () {\n      let parsed = JSON.stringify(this.completed);\n      try {\n        localStorage.setItem(\"completed\", parsed);\n      } catch (e) {\n        console.log(e);\n      }\n    }\n  },\n\n  created() {\n    this.setSession(this.sessions.work);\n    this.getCurrentTime();\n    this.callEvery(this.getCurrentTime, 1);\n    if (this.isErgonomicsEnabled) {\n      this.callEvery(null, 60, \"minutes\", \"Drink water\");\n      this.callEvery(null, 30, \"minutes\", \"Look away\");\n    }\n    \n    // credits\n    const funs = new Funs(\"light\");\n    funs.signature();\n  },\n\n  mounted() {\n    if (localStorage) {\n      try {\n        this.cats = JSON.parse(localStorage.getItem(\"completed\"));\n      } catch (e) {\n        localStorage.removeItem(\"completed\");\n      }\n    }\n  },\n\n  computed: {\n    minutes: function () {\n      const minutes = Math.floor(this.remainingTime / 60);\n      if (minutes >= 10) return minutes;\n      else return \"0\" + minutes;\n    },\n    seconds: function () {\n      const seconds = this.remainingTime - this.minutes * 60;\n      if (seconds >= 10) return seconds;\n      else return \"0\" + seconds;\n    },\n    arc: function () {\n      return (\n        (this.remainingTime / this.sessions.current.time / 60) * 472 + \"  472\"\n      );\n    }\n  }\n};\n</script>\n\n<style lang=\"scss\">\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css\");\n:root {\n  --primary: \"\"; //#f74545;\n  --secondary: \"\";\n}\n\n@mixin space-between {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@mixin opacity {\n  opacity: 0.8;\n  transition: opacity 0.3s;\n\n  &:hover {\n    opacity: 1;\n  }\n}\n@mixin slider-thumb {\n  -webkit-appearance: none;\n  height: 1em;\n  width: 1em;\n  border-radius: 50%;\n  background: var(--primary);\n  border: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  color: var(--primary);\n  margin: 0;\n}\n\n#app {\n  background-color: var(--secondary);\n  transition: background-color 0.15s ease;\n  font-family: sans-serif;\n  display: flex;\n  min-height: 100vh;\n  justify-content: center;\n  align-items: flex-start;\n\n  button {\n    border: none;\n    cursor: pointer;\n    outline: none;\n    color: var(--primary);\n    background: transparent;\n    min-width: 2em;\n  }\n\n  a {\n    color: var(--primary);\n  }\n\n  .container {\n    width: 25em;\n  }\n\n  header {\n    @include space-between;\n    @include opacity;\n    margin-top: 2em;\n\n    .logo {\n      width: 2em;\n      height: 2em;\n\n      path {\n        fill: var(--primary);\n      }\n      .head {\n        fill: green;\n      }\n    }\n  }\n\n  .input-group {\n    @include opacity;\n    @include space-between;\n\n    label {\n      width: 50%;\n    }\n\n    input[type=\"range\"] {\n      -webkit-appearance: none;\n      width: 60%;\n      background: var(--primary);\n      height: 0.2em;\n      border-radius: 0.2em;\n      cursor: pointer;\n\n      &:focus {\n        outline: none;\n      }\n\n      &::-webkit-slider-thumb {\n        @include slider-thumb;\n      }\n\n      &::-moz-range-thumb {\n        @include slider-thumb;\n      }\n    }\n  }\n\n  .sidebar {\n    background: var(--primary);\n    color: black; // var(--secondary);\n    padding: 0 2em;\n    right: 0;\n    position: absolute;\n    height: 100vh;\n    top: 0;\n    min-width: 20em;\n    overflow-y: auto;\n    z-index: 10;\n\n    & > button {\n      color: black; // var(--secondary);\n      position: absolute;\n      right: 1em;\n      top: 1.4em;\n    }\n    p {\n      @include space-between;\n    }\n    & a {\n      cursor: pointer;\n      color: var(--secondary);\n    }\n  }\n\n  #pomo {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 1em;\n\n    button {\n      padding: 0.9em 1em;\n      border: 2px solid var(--primary);\n      position: relative;\n      border-radius: 0.4em;\n      font-size: 1em;\n    }\n\n    div {\n      padding: 1.5em 0;\n      width: 100%;\n    }\n\n    div:last-child {\n      padding-top: 0;\n    }\n\n    #timer {\n      font-size: 5em;\n      position: relative;\n      text-align: center;\n      display: flex;\n      flex-direction: column;\n      span {\n        font-size: 0.2em;\n      }\n      #circle {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n        width: 5em;\n        height: 5em;\n        padding: 0;\n        pointer-events: none;\n\n        path {\n          @include opacity;\n          stroke-width: 1px;\n          stroke-linecap: round;\n          transform: rotate(90deg);\n          transform-origin: center;\n          transition: 1s linear all;\n          fill-rule: nonzero;\n          stroke: var(--primary);\n          fill: none;\n        }\n      }\n    }\n\n    .set-session {\n      border: 2px solid var(--primary);\n      width: 100%;\n      padding: 0;\n      border-radius: 0.4em;\n      position: relative;\n      display: flex;\n      @include opacity;\n\n      button {\n        border: none;\n        border-radius: 0;\n\n        &:first-child {\n          border-right: 2px solid var(--primary);\n        }\n\n        &:nth-child(2) {\n          @include space-between;\n          flex-grow: 1;\n        }\n      }\n\n      ul {\n        position: absolute;\n        z-index: 4;\n        top: 1.5em;\n        right: 0;\n        transition: all 0.5s ease;\n        list-style: none;\n        padding: 0.5em 0;\n\n        & li a {\n          background: var(--primary);\n          color: var(--secondary);\n          text-decoration: none;\n          padding: 1em;\n          display: block;\n          text-align: center;\n        }\n\n        & li:first-child a {\n          border-radius: 0.4em 0.4em 0 0;\n        }\n        & li:last-child a {\n          border-radius: 0 0 0.4em 0.4em;\n        }\n      }\n    }\n\n    #controlButtons button {\n      @include opacity;\n    }\n\n    .buttons {\n      @include space-between;\n    }\n  }\n\n  .modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.4);\n    display: table;\n    transition: opacity 0.3s ease;\n    text-align: center;\n\n    &-dialog {\n      display: table-cell;\n      vertical-align: middle;\n    }\n\n    &-container {\n      background-color: var(--secondary);\n      width: 30em;\n      border-radius: 0.4em;\n      box-shadow: 0 0.2em 0.8em rgba(0, 0, 0, 0.33);\n      transition: all 0.3s ease;\n      margin: 0 auto;\n      padding: 1em 1em 2em;\n\n      p {\n        font-size: 2em;\n      }\n\n      button {\n        padding: 0.9em 1em;\n        border: 2px solid var(--primary);\n        position: relative;\n        border-radius: 0.4em;\n        font-size: 1em;\n      }\n    }\n  }\n}\n\n[v-cloak] {\n  display: none !important;\n}\n</style>\n","@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css\");\n:root {\n  --primary: \"\";\n  --secondary: \"\";\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  color: var(--primary);\n  margin: 0;\n}\n\n#app {\n  background-color: var(--secondary);\n  transition: background-color 0.15s ease;\n  font-family: sans-serif;\n  display: flex;\n  min-height: 100vh;\n  justify-content: center;\n  align-items: flex-start;\n}\n#app button {\n  border: none;\n  cursor: pointer;\n  outline: none;\n  color: var(--primary);\n  background: transparent;\n  min-width: 2em;\n}\n#app a {\n  color: var(--primary);\n}\n#app .container {\n  width: 25em;\n}\n#app header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: 0.8;\n  transition: opacity 0.3s;\n  margin-top: 2em;\n}\n#app header:hover {\n  opacity: 1;\n}\n#app header .logo {\n  width: 2em;\n  height: 2em;\n}\n#app header .logo path {\n  fill: var(--primary);\n}\n#app header .logo .head {\n  fill: green;\n}\n#app .input-group {\n  opacity: 0.8;\n  transition: opacity 0.3s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#app .input-group:hover {\n  opacity: 1;\n}\n#app .input-group label {\n  width: 50%;\n}\n#app .input-group input[type=range] {\n  -webkit-appearance: none;\n  width: 60%;\n  background: var(--primary);\n  height: 0.2em;\n  border-radius: 0.2em;\n  cursor: pointer;\n}\n#app .input-group input[type=range]:focus {\n  outline: none;\n}\n#app .input-group input[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  height: 1em;\n  width: 1em;\n  border-radius: 50%;\n  background: var(--primary);\n  border: 0;\n}\n#app .input-group input[type=range]::-moz-range-thumb {\n  -webkit-appearance: none;\n  height: 1em;\n  width: 1em;\n  border-radius: 50%;\n  background: var(--primary);\n  border: 0;\n}\n#app .sidebar {\n  background: var(--primary);\n  color: black;\n  padding: 0 2em;\n  right: 0;\n  position: absolute;\n  height: 100vh;\n  top: 0;\n  min-width: 20em;\n  overflow-y: auto;\n  z-index: 10;\n}\n#app .sidebar > button {\n  color: black;\n  position: absolute;\n  right: 1em;\n  top: 1.4em;\n}\n#app .sidebar p {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#app .sidebar a {\n  cursor: pointer;\n  color: var(--secondary);\n}\n#app #pomo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 1em;\n}\n#app #pomo button {\n  padding: 0.9em 1em;\n  border: 2px solid var(--primary);\n  position: relative;\n  border-radius: 0.4em;\n  font-size: 1em;\n}\n#app #pomo div {\n  padding: 1.5em 0;\n  width: 100%;\n}\n#app #pomo div:last-child {\n  padding-top: 0;\n}\n#app #pomo #timer {\n  font-size: 5em;\n  position: relative;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n#app #pomo #timer span {\n  font-size: 0.2em;\n}\n#app #pomo #timer #circle {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 5em;\n  height: 5em;\n  padding: 0;\n  pointer-events: none;\n}\n#app #pomo #timer #circle path {\n  opacity: 0.8;\n  transition: opacity 0.3s;\n  stroke-width: 1px;\n  stroke-linecap: round;\n  transform: rotate(90deg);\n  transform-origin: center;\n  transition: 1s linear all;\n  fill-rule: nonzero;\n  stroke: var(--primary);\n  fill: none;\n}\n#app #pomo #timer #circle path:hover {\n  opacity: 1;\n}\n#app #pomo .set-session {\n  border: 2px solid var(--primary);\n  width: 100%;\n  padding: 0;\n  border-radius: 0.4em;\n  position: relative;\n  display: flex;\n  opacity: 0.8;\n  transition: opacity 0.3s;\n}\n#app #pomo .set-session:hover {\n  opacity: 1;\n}\n#app #pomo .set-session button {\n  border: none;\n  border-radius: 0;\n}\n#app #pomo .set-session button:first-child {\n  border-right: 2px solid var(--primary);\n}\n#app #pomo .set-session button:nth-child(2) {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-grow: 1;\n}\n#app #pomo .set-session ul {\n  position: absolute;\n  z-index: 4;\n  top: 1.5em;\n  right: 0;\n  transition: all 0.5s ease;\n  list-style: none;\n  padding: 0.5em 0;\n}\n#app #pomo .set-session ul li a {\n  background: var(--primary);\n  color: var(--secondary);\n  text-decoration: none;\n  padding: 1em;\n  display: block;\n  text-align: center;\n}\n#app #pomo .set-session ul li:first-child a {\n  border-radius: 0.4em 0.4em 0 0;\n}\n#app #pomo .set-session ul li:last-child a {\n  border-radius: 0 0 0.4em 0.4em;\n}\n#app #pomo #controlButtons button {\n  opacity: 0.8;\n  transition: opacity 0.3s;\n}\n#app #pomo #controlButtons button:hover {\n  opacity: 1;\n}\n#app #pomo .buttons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#app .modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  display: table;\n  transition: opacity 0.3s ease;\n  text-align: center;\n}\n#app .modal-dialog {\n  display: table-cell;\n  vertical-align: middle;\n}\n#app .modal-container {\n  background-color: var(--secondary);\n  width: 30em;\n  border-radius: 0.4em;\n  box-shadow: 0 0.2em 0.8em rgba(0, 0, 0, 0.33);\n  transition: all 0.3s ease;\n  margin: 0 auto;\n  padding: 1em 1em 2em;\n}\n#app .modal-container p {\n  font-size: 2em;\n}\n#app .modal-container button {\n  padding: 0.9em 1em;\n  border: 2px solid var(--primary);\n  position: relative;\n  border-radius: 0.4em;\n  font-size: 1em;\n}\n\n[v-cloak] {\n  display: none !important;\n}\n\n/*# sourceMappingURL=pen.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

export default __vue_component__;