let text = document.getElementById('text');
let mountain = document.getElementById('mountain');
let left= document.getElementById('left');
let right = document.getElementById('right');

window.addEventListener('scroll', () => {
	let value = window.scrollY;

	text.style.marginTop = value * 2.5 + 'px';
	mountain.style.marginTop = value * 1 + 'px';
	left.style.left = value * -1.5 + 'px';
	right.style.left = value * 1.5 + 'px';

	
});