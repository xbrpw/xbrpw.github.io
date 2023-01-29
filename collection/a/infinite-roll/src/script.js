const themes = [
  ["black", "whitesmoke"],
  ["mediumblue", "gold"],
  ["crimson", "black"],
  ["palegreen", "deeppink"],
  ["rebeccapurple", "cyan"],
  ["yellow", "seagreen"],
  ["whitesmoke", "black"]
];
let selected = 0;

document.addEventListener("click", () => {
  selected === themes.length - 1 ? (selected = 0) : selected++;
  document.body.style.setProperty("--color-primary", themes[selected][0]);
  document.body.style.setProperty("--color-secondary", themes[selected][1]);
});
