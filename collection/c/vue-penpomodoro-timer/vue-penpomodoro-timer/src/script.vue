<template>
  <div id="app" v-cloak :class="sessions.current.type">
    <div class="container">
      <header>
        <!-- <svg class="logo" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <circle style="fill:#ffffff" cx="256" cy="256" r="256" />
        <path style="fill:#f74545" d="m 456.63607,249.93789 c 0,110.80739 -89.82667,200.63407 -200.63407,200.63407 -110.8074,0 -200.634074,-89.82668 -200.634074,-200.63407 0,-110.8074 89.826674,-150.474678 200.634074,-150.474678 110.8074,0 200.63407,39.667278 200.63407,150.474678 z" />
        <path style="fill:green" d="m 108.94617,184.20153 c 0,0 -1.38108,-109.741134 149.46249,-106.834499 150.84358,2.906635 151.48686,106.834499 151.48686,106.834499 L 307.8345,150.18236 259.42084,234.36093 211.00719,150.18236 Z" />
      </svg> -->
        <svg
          class="logo"
          viewBox="0 0 520 520"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="head"
            d="m 231.72656,-0.62695312 0.5045,36.28864012 -20.21494,-16.476229 -26.3418,18.033204 9.8081,14.941494 C 213.94284,47.369205 232.92827,44.897038 252,44.800781 c 19.07794,0.06575 38.07331,2.509062 56.54688,7.273438 L 320.3437,37.470915 294.0019,19.437711 272.77794,35.661687 272.27344,-0.62695312 h -18.72266 -3.10156 z"
          ></path>
          <path
            d="M 252 44.800781 A 229.60001 229.60001 0 0 0 22.400391 274.40039 A 229.60001 229.60001 0 0 0 252 504 A 229.60001 229.60001 0 0 0 481.59961 274.40039 A 229.60001 229.60001 0 0 0 252 44.800781 z M 252 62.101562 A 212.29829 212.29829 0 0 1 464.29883 274.40039 A 212.29829 212.29829 0 0 1 252 486.69922 A 212.29829 212.29829 0 0 1 39.701172 274.40039 A 212.29829 212.29829 0 0 1 252 62.101562 z "
          ></path>

          <path
            d="M 252 87.423828 A 186.97627 186.97627 0 0 0 65.023438 274.40039 A 186.97627 186.97627 0 0 0 252 461.37695 A 186.97627 186.97627 0 0 0 438.97656 274.40039 A 186.97627 186.97627 0 0 0 252 87.423828 z M 181.96094 137.93164 C 187.60922 137.78494 193.15791 140.6553 196.18164 145.89258 C 196.26267 146.04434 196.34187 146.19725 196.41797 146.35156 C 196.41797 146.35156 203.57892 158.30232 200.47266 185.97852 C 175.91289 174.62279 168.86914 162.25781 168.86914 162.25781 C 168.77541 162.11365 168.6842 161.96773 168.5957 161.82031 C 164.19752 154.20246 166.80791 144.46065 174.42578 140.0625 C 176.80636 138.68807 179.39354 137.99832 181.96094 137.93164 z M 321.46875 137.93164 C 324.03615 137.99832 326.62333 138.68807 329.00391 140.0625 C 336.62178 144.46065 339.23216 154.20246 334.83398 161.82031 C 334.74548 161.96773 334.65428 162.11365 334.56055 162.25781 C 334.56055 162.25781 327.5168 174.62279 302.95703 185.97852 C 299.85077 158.30232 307.01172 146.35156 307.01172 146.35156 C 307.08782 146.19725 307.16506 146.04434 307.24609 145.89258 C 310.26983 140.6553 315.82047 137.78494 321.46875 137.93164 z M 335.07422 186.0332 L 255.25195 284.85938 L 241.19727 272.85547 L 335.07422 186.0332 z M 131.86914 188.87891 C 134.43654 188.94559 137.02372 189.63729 139.4043 191.01172 C 139.55036 191.10263 139.69486 191.19542 139.83789 191.29102 C 139.83789 191.29102 152.01411 198.05866 163.16211 223.58008 C 136.21486 226.02562 123.93359 218.83984 123.93359 218.83984 C 123.78033 218.76186 123.6289 218.68106 123.47852 218.59766 C 115.86066 214.1995 113.25025 204.45768 117.64844 196.83984 C 120.67217 191.60256 126.22086 188.7322 131.86914 188.87891 z M 371.56055 188.87891 C 377.20883 188.7322 382.75752 191.60256 385.78125 196.83984 C 390.17944 204.45768 387.56903 214.1995 379.95117 218.59766 C 379.80079 218.68106 379.64935 218.76186 379.49609 218.83984 C 379.49609 218.83984 367.21287 226.02562 340.26562 223.58008 C 351.41363 198.05866 363.58984 191.29102 363.58984 191.29102 C 363.73287 191.19542 363.87738 191.10263 364.02344 191.01172 C 366.40402 189.63729 368.99315 188.94559 371.56055 188.87891 z M 112.79297 258.47266 C 112.96492 258.47836 113.13691 258.48675 113.30859 258.49805 C 113.30859 258.49805 127.23717 258.27063 149.65234 274.79883 C 127.53811 290.39036 113.30859 290.30859 113.30859 290.30859 C 113.13687 290.31769 112.96488 290.32513 112.79297 290.32812 C 103.99663 290.32814 96.867167 283.19673 96.867188 274.40039 C 96.867167 265.60405 103.99663 258.47265 112.79297 258.47266 z M 390.63672 258.47266 C 399.43306 258.47265 406.56252 265.60405 406.5625 274.40039 C 406.56252 283.19673 399.43306 290.32814 390.63672 290.32812 C 390.46481 290.32513 390.29281 290.31769 390.12109 290.30859 C 390.12109 290.30859 375.89157 290.39036 353.77734 274.79883 C 376.19251 258.27063 390.12109 258.49805 390.12109 258.49805 C 390.29277 258.48675 390.46477 258.47836 390.63672 258.47266 z M 149.62891 325.13281 C 153.7373 325.1082 158.37321 325.32969 163.5625 325.91211 C 152.20678 350.47188 139.8418 357.51562 139.8418 357.51562 C 139.69763 357.60936 139.55168 357.70056 139.4043 357.78906 C 131.78645 362.18724 122.04659 359.57684 117.64844 351.95898 C 113.25025 344.34113 115.86066 334.60129 123.47852 330.20312 C 123.63029 330.12209 123.78317 330.0429 123.9375 329.9668 C 123.9375 329.9668 131.82589 325.23945 149.62891 325.13281 z M 353.80078 325.13281 C 371.6038 325.23945 379.49219 329.9668 379.49219 329.9668 C 379.64652 330.0429 379.7994 330.12209 379.95117 330.20312 C 387.56903 334.60129 390.17944 344.34113 385.78125 351.95898 C 381.3831 359.57684 371.64129 362.18724 364.02344 357.78906 C 363.87606 357.70056 363.73206 357.60936 363.58789 357.51562 C 363.58789 357.51562 351.22291 350.47188 339.86719 325.91211 C 345.05648 325.32969 349.69239 325.1082 353.80078 325.13281 z M 201.16406 363.22266 C 203.60961 390.16991 196.42383 402.45117 196.42383 402.45117 C 196.34584 402.60444 196.26504 402.75591 196.18164 402.90625 C 191.78348 410.52411 182.04362 413.13451 174.42578 408.73633 C 166.80791 404.33817 164.19752 394.59832 168.5957 386.98047 C 168.68662 386.8344 168.7794 386.68995 168.875 386.54688 C 168.875 386.54687 175.64263 374.37067 201.16406 363.22266 z M 302.26367 363.22266 C 327.7851 374.37067 334.55469 386.54687 334.55469 386.54688 C 334.65029 386.68995 334.74306 386.8344 334.83398 386.98047 C 339.23216 394.59832 336.62178 404.33817 329.00391 408.73633 C 321.38607 413.13451 311.64425 410.52411 307.24609 402.90625 C 307.16269 402.75591 307.0819 402.60444 307.00391 402.45117 C 307.00391 402.45117 299.81812 390.16991 302.26367 363.22266 z "
          ></path>
        </svg>
        <span>{{ currentTime }}</span>
        <button v-on:click="handleSidebar" title="Toggle History Panel">
          <i
            class="fas"
            :class="isSidebarOpen ? 'fa-times-circle' : 'fa-bars'"
          ></i>
        </button>
      </header>
      <div id="pomo">
        <div id="timer">
          {{ minutes }}:{{ seconds }}
          <span>
            Long Break after {{ sessions.current.timesToLongBreak }} sessions
          </span>
          <div id="circle">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                :stroke-dasharray="arc"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              ></path>
            </svg>
          </div>
        </div>
        <div class="set-session">
          <button v-on:click="timer === null ? handleStart() : handlePause()">
            <i class="fas" :class="timer ? 'fa-pause' : 'fa-play'"></i>
          </button>
          <button id="select" v-on:click="handleMenu">
            {{ sessions.current.displayName }}
            <i class="fas fa-caret-down"></i>
          </button>
          <ul class="dropdown" v-if="isMenuOpen">
            <li>
              <a href="#" v-on:click="setSession(sessions.work)">
                Work: {{ sessions.work.time }} Minutes
              </a>
            </li>
            <li>
              <a href="#" v-on:click="setSession(sessions.short)">
                Short Break: {{ sessions.short.time }} Minutes
              </a>
            </li>
            <li>
              <a href="#" v-on:click="setSession(sessions.long)">
                Long Break: {{ sessions.long.time }} Minutes
              </a>
            </li>
          </ul>
        </div>
        <div id="controlButtons" class="buttons">
          <button v-on:click="handleReset" title="Reset Time">
            <i class="fas fa-undo-alt"></i>
          </button>
          <button v-on:click="stopSound" title="Mute">
            <i
              class="fas"
              :class="isSoundEnabled ? 'fa-volume-up' : 'fa-volume-mute'"
            ></i>
          </button>
          <button
            v-on:click="handleErgonomics"
            title="Toggle Ergonomics Notifications"
          >
            <i
              class="fas"
              :class="isErgonomicsEnabled ? 'fa-bell' : 'fa-bell-slash'"
            ></i>
          </button>
          <button v-on:click="handleDarkMode" title="Toggle Dark Mode">
            <i
              :class="isDarkMode ? 'fas fa-lightbulb' : 'far fa-lightbulb'"
            ></i>
          </button>
          <button v-on:click="handleTheme" title="Toggle Theme">
            <i class="fas fa-random"></i>
          </button>
        </div>
        <div class="input-group">
          <label>Session Time: {{ sessions.current.time }} min</label>
          <input
            type="range"
            min="1"
            max="60"
            v-model="sessions[sessions.current.name].time"
            v-on:change="setSession(sessions[sessions.current.name])"
          />
        </div>
      </div>
    </div>
    <div class="sidebar" v-if="isSidebarOpen">
      <button v-on:click="handleSidebar">
        <i
          class="fas"
          :class="isSidebarOpen ? 'fa-times-circle' : 'fa-bars'"
        ></i>
      </button>
      <h1>History</h1>
      <p v-for="(info, n) in completed">
        <span>{{ info.completedAt }}: {{ info.displayName }}</span>
        <a @click="removeFromHistory(n)">
          <i class="fas fa-times"></i>
        </a>
      </p>
    </div>
    <div class="modal" v-if="isModalOpen">
      <div class="modal-dialog">
        <div class="modal-container">
          <div class="modal-body">
            <p>{{ modalText }}</p>
            <button v-on:click="closeModal">OK</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
</script>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");
:root {
  --primary: ""; //#f74545;
  --secondary: "";
}

@mixin space-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@mixin opacity {
  opacity: 0.8;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
}
@mixin slider-thumb {
  -webkit-appearance: none;
  height: 1em;
  width: 1em;
  border-radius: 50%;
  background: var(--primary);
  border: 0;
}

* {
  box-sizing: border-box;
}

body {
  color: var(--primary);
  margin: 0;
}

#app {
  background-color: var(--secondary);
  transition: background-color 0.15s ease;
  font-family: sans-serif;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: flex-start;

  button {
    border: none;
    cursor: pointer;
    outline: none;
    color: var(--primary);
    background: transparent;
    min-width: 2em;
  }

  a {
    color: var(--primary);
  }

  .container {
    width: 25em;
  }

  header {
    @include space-between;
    @include opacity;
    margin-top: 2em;

    .logo {
      width: 2em;
      height: 2em;

      path {
        fill: var(--primary);
      }
      .head {
        fill: green;
      }
    }
  }

  .input-group {
    @include opacity;
    @include space-between;

    label {
      width: 50%;
    }

    input[type="range"] {
      -webkit-appearance: none;
      width: 60%;
      background: var(--primary);
      height: 0.2em;
      border-radius: 0.2em;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      &::-webkit-slider-thumb {
        @include slider-thumb;
      }

      &::-moz-range-thumb {
        @include slider-thumb;
      }
    }
  }

  .sidebar {
    background: var(--primary);
    color: black; // var(--secondary);
    padding: 0 2em;
    right: 0;
    position: absolute;
    height: 100vh;
    top: 0;
    min-width: 20em;
    overflow-y: auto;
    z-index: 10;

    & > button {
      color: black; // var(--secondary);
      position: absolute;
      right: 1em;
      top: 1.4em;
    }
    p {
      @include space-between;
    }
    & a {
      cursor: pointer;
      color: var(--secondary);
    }
  }

  #pomo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1em;

    button {
      padding: 0.9em 1em;
      border: 2px solid var(--primary);
      position: relative;
      border-radius: 0.4em;
      font-size: 1em;
    }

    div {
      padding: 1.5em 0;
      width: 100%;
    }

    div:last-child {
      padding-top: 0;
    }

    #timer {
      font-size: 5em;
      position: relative;
      text-align: center;
      display: flex;
      flex-direction: column;
      span {
        font-size: 0.2em;
      }
      #circle {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 5em;
        height: 5em;
        padding: 0;
        pointer-events: none;

        path {
          @include opacity;
          stroke-width: 1px;
          stroke-linecap: round;
          transform: rotate(90deg);
          transform-origin: center;
          transition: 1s linear all;
          fill-rule: nonzero;
          stroke: var(--primary);
          fill: none;
        }
      }
    }

    .set-session {
      border: 2px solid var(--primary);
      width: 100%;
      padding: 0;
      border-radius: 0.4em;
      position: relative;
      display: flex;
      @include opacity;

      button {
        border: none;
        border-radius: 0;

        &:first-child {
          border-right: 2px solid var(--primary);
        }

        &:nth-child(2) {
          @include space-between;
          flex-grow: 1;
        }
      }

      ul {
        position: absolute;
        z-index: 4;
        top: 1.5em;
        right: 0;
        transition: all 0.5s ease;
        list-style: none;
        padding: 0.5em 0;

        & li a {
          background: var(--primary);
          color: var(--secondary);
          text-decoration: none;
          padding: 1em;
          display: block;
          text-align: center;
        }

        & li:first-child a {
          border-radius: 0.4em 0.4em 0 0;
        }
        & li:last-child a {
          border-radius: 0 0 0.4em 0.4em;
        }
      }
    }

    #controlButtons button {
      @include opacity;
    }

    .buttons {
      @include space-between;
    }
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: table;
    transition: opacity 0.3s ease;
    text-align: center;

    &-dialog {
      display: table-cell;
      vertical-align: middle;
    }

    &-container {
      background-color: var(--secondary);
      width: 30em;
      border-radius: 0.4em;
      box-shadow: 0 0.2em 0.8em rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;
      margin: 0 auto;
      padding: 1em 1em 2em;

      p {
        font-size: 2em;
      }

      button {
        padding: 0.9em 1em;
        border: 2px solid var(--primary);
        position: relative;
        border-radius: 0.4em;
        font-size: 1em;
      }
    }
  }
}

[v-cloak] {
  display: none !important;
}
</style>
