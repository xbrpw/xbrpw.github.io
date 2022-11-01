const imageArray = [
	"https://www.xbr.pw/go/icon-xbrpw/esfera-del-dragon-negra.svg",
	"https://www.xbr.pw/go/icon-xbrpw/esfera-del-dragon.svg",
	"https://www.xbr.pw/go/icon-xbrpw/usuario-verificado.svg",
  "https://www.xbr.pw/go/icon-xbrpw/xbr-coins.svg",
  "https://www.xbr.pw/go/icon-xbrpw/who-homero-escondiendose-en-una-bolsa.svg",
  "https://www.xbr.pw/go/icon-xbrpw/pokebolas.svg"
];


const image = document.querySelector("avatar");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}