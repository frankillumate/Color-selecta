const colors = ["green", "red", "rgba(133,122,200)", "#f15025", 'blue', 'orange', 'purple', 'indigo'];

const btn = document.querySelector("button");
const span = document.querySelector('.color');

function changecolor() {
	const randomColor = Math.floor(Math.random() * colors.length);
	document.body.style.backgroundColor = colors[randomColor];
    span.textContent= colors[randomColor];
}
btn.addEventListener("click", changecolor);


