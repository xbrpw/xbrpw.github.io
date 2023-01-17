const container = document.querySelector('.container');
const lines = container.querySelectorAll('.line');

const init = () => {
	lines.forEach((line, idx) => {
		let inner = line.querySelector('.inner');
		
		inner.innerHTML = inner.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

		let letter = inner.querySelectorAll('.letter');
		let timeline = gsap.timeline({ paused: true });

		gsap.set(letter, {
			x: 0,
			y: 0,
			textShadow: "-0.156vw 0.156vw 0.260vw rgba(0,0,0,.3)"
		});

		timeline.to(letter, {
			x: "-0.417vw",
			y: "-0.208vw",
			textShadow: "0.260vw 0.260vw 0.521vw rgba(0,0,0,.7)",
			stagger: {
				amount: .5,
				from: 0
			},
			duration: .5,
			ease: "power2.out"
		}, 1);

		setTimeout(() => {
			timeline.play();
		}, 1000 * idx);
	})
}

window.addEventListener('load', init);
window.addEventListener('resize', () => {
	gsap.set(container, {
		width: 'auto',
		height: 'auto'
	});
})