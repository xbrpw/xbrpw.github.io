new Vue({
  el: "#app",
  data: {
    message: "Hi, hello, hello!"
  },
  methods: {
    share() {
      navigator.share({
        title: "hello world",
        text: "Te puede interesar esto. Saludos, bye. bye.",
        url: "https://luisangelmaciel.github.io"
      });
    }
  }
});