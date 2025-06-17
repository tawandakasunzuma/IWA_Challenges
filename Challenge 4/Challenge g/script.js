const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED

const customers = 1
const currentLocation = 'RSA'
let currency = null;
let shipping = null;

const total = shoes + toys + batteries + pens + shirts;

const isFreeLocal = currency === "R" && total > 1000;
const isFreeInt = currency === "$" & total > 60;
const isFree = isFreeLocal || isFreeInt;
const isFreeWarning = isFree && customers !== 1;
const totalWithShipping = total + shipping;
const isBanned = currentLocation === "NK";

if (isFreeWarning) {
	console.log(FREE_WARNING);
}

if (isFree && !isFreeWarning) {
	shipping = 0;
}

if (currentLocation === "RSA") {
	shipping = 400;
	currency = "R"
} else { 
	currency = "$";
	shipping = currentLocation === "NAM" ? 600 : 800
}

console.log(isBanned ? BANNED_WARNING : `Price:` + currency + totalWithShipping)