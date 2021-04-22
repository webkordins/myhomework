
function hi() {
	let nameUser = prompt('Как вас зовут?');
	alert(`Привет, ${nameUser}!`);
}

function age() {
	let userYearBirthday = parseInt(prompt('Введите год своего рождения'));
	const currentYear = 2021;
	alert(`Вам всего лишь ${currentYear - userYearBirthday}. Вы в самом расцвете сил!`);
}

function squarePerimetr() {
	let side = parseFloat(prompt('Введите длину стороны квадрата, получите его периметр'));
	alert(`Периметр вашего квадрата равен ${side * 4}`);
}

function circleArea() {
	let radius = parseFloat(prompt('Введите радиус окружности, получите площадь круга'));
	alert(`Площадь вашего круга равна ${Math.PI * Math.pow(radius,2)}`);
}

function speed() {
	let distance = parseFloat(prompt('Введите расстояние до нужного вам города в километрах'));
	let time = parseFloat(prompt('Введите время, за которое хотите добраться, в часах'));
	alert(`Вам нужно двигаться со скоростью ${distance / time} километров в час. Приятной поездки!`);
}

function convToEvro() {
	let dol = parseInt(prompt('Сколько долларов вам нужно поменять?'));
	const rate = 0.8314;
	alert(`Вы получите ${dol * rate} евро`);
}

function filesNumber() {
	let gig = parseInt(prompt('Укажите объём флешки в Гб'));
	const megaBites = 820;
	let rez = parseInt(gig * 1024 / 820);
	alert(`На вашу флешку поместится ${rez} файлов размером 820Mb`);
}

function chocolate() {
	let cash = parseFloat(prompt('Какую сумму вы готовы потратить на шоколад?')),
		priceOfBar = parseFloat(prompt('Сколько стоит ваша любимая шоколадка?')),
		numberOfBar = parseInt(cash / priceOfBar),
		change = (cash - (numberOfBar * priceOfBar));
	alert(`Вы можете купить ${numberOfBar} плиток шоколада. У вас останется ${(change.toFixed(2))} гривен сдачи`);
	// alert(`У вас останется ${(change.toFixed(2))} гривен сдачи`);
}

function backwards() {
	let threeDigitNumber = parseInt(prompt('Введите трехзначное число')),
		last = threeDigitNumber % 10,
		first = parseInt(threeDigitNumber / 100),
		middle = parseInt((threeDigitNumber % 100) / 10);
		alert(`Ваше перевернутое число ${String(last) + String(middle) + String(first)}`);
}

function getPercent() {
	let deposit = parseFloat(prompt('Введите сумму вклада')),
	 	term = parseInt(prompt('Введите срок депозита в месяцах'));
	const percent = 5;
	let sumOfPercent = percent / 12 * deposit / 100 * term;
	alert(`Вам будет начислено ${sumOfPercent.toFixed(2)} гривен в виде процентов`);
}