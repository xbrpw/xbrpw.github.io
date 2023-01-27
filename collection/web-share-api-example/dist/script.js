// Fetch some CSS boilerplate
fetch('https://gist.githubusercontent.com/shotrifork/662614c8b53c4c4f3612b980ef2024c9/raw/71de5a081d867acad610114450c88259ec498a14/codepen.css').
then(r => r.text()).
then(css => {
	const style = document.body.appendChild(document.createElement('style'));
	style.innerHTML = css;
})

const shareData = {
	title: "Web Share API example",
	text: "A simple pen, found on MDN for showing Web Share API",
	url: "https://codepen.io/netsi1964/pen/KKeMOGL"
};

const btn = document.querySelector("button");
const resultPara = document.querySelector(".result");

if ("share" in navigator) {
	document.querySelector(".app").classList.remove("disabled");
	btn.addEventListener("click", async () => {
		try {
			await navigator.share(shareData);
			resultPara.textContent = "MDN shared successfully";
		} catch (err) {
			resultPara.textContent = `Error: ${err}`;
		}
	});
} else {
	document.querySelector(".notAnOption").classList.remove("hidden");
}