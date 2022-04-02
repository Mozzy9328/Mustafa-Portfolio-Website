const headerTwo = document.querySelector("h2");

document.addEventListener(`DOMContentLoaded`, (event) => {
	const headerText = [
		"Experienced in Project Management",
		"Experienced in JavaScript",
		"Experienced in CSS & HTML",
		"Experienced in CRM",
	];

	function typeWriter(text, i, fnCallback) {
		if (i < text.length) {
			headerTwo.innerHTML =
				text.substring(0, i + 1) +
				`<span class="index-span" aria-hidden="true"></span>`;

			setTimeout(function () {
				typeWriter(text, i + 1, fnCallback);
			}, 100);
		} else if (typeof fnCallback == `function`) {
			setTimeout(fnCallback, 700);
		}
	}
	function startAnimation(i) {
		if (typeof headerText[i] == `undefined`) {
			setTimeout(function () {
				startAnimation(0);
			}, 20000);
		}
		if (i < headerText[i].length) {
			typeWriter(headerText[i], 0, function () {
				startAnimation(i + 1);
			});
		}
	}
	startAnimation(0);
});

// BACKGROUND

const circleBackground = document.querySelector("#circle-background");

circleBackground.innerHTML += `
<div class=" circle xxlarge shade1"></div>
<div class=" circle xlarge shade2"></div>
<div class=" circle large shade3"></div>
<div class=" circle medium shade4"></div>
<div class=" circle small shade5"></div>

`;
