const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED

const total = shoes + toys + batteries + pens + shirts;

const currentLocation = "RSA";
let shipping = null;
let currency = null;
const customers = '1';

if (currentLocation === 'RSA') {
	shipping = 400;
	currency = 'R' 
}

if (currentLocation === 'NAM') {
	shipping = 600;
	currency = '$'
} else {
	shipping = 800;
}

currentLocation === 'NK' ? 
	console.log(BANNED_WARNING) : 
	console.log('price', currency, (total + shipping)) 

if (currentLocation === "RSA" && total >= 1000 && customers === 1) {
	shipping = 0;
}

if (currentLocation === "NAM" && total >= 60 && customers === 1) {
	shipping = 0;
}

if (shipping === 0 && customers !== 1) {
	console.log(FREE_WARNING)
}