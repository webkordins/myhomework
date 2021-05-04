// задача 1
function userAge() {
	let age = prompt('Введите ваш возраст');
	if (age >= 0 && age <= 12) {
		alert('Вы еще ребенок');
	} else if (age > 12 && age <= 18) {
		alert('Вы подросток');
	} else if (age > 18 && age <= 60) {
		alert('Вы уже взрослый');
	} else if (age > 60) {
		alert('Вы пенсионер');
	} else {
		alert('Введите корректные данные!');
	}
}
// задача 2
function special() {
	let numeral = prompt('Введите цифру от 0 до 9');
	switch (numeral) {
		case '0' : alert('На клавише с этой цифрой расположен спецсимвол " ) "');
		break;
		case '1' : alert('На клавише с этой цифрой расположен спецсимвол " ! "');
		break;
		case '2' : alert('На клавише с этой цифрой расположен спецсимвол " @ "');
		break;
		case '3' : alert('На клавише с этой цифрой расположен спецсимвол " # "');
		break;
		case '4' : alert('На клавише с этой цифрой расположен спецсимвол " $ "');
		break;
		case '5' : alert('На клавише с этой цифрой расположен спецсимвол " % "');
		break;
		case '6' : alert('На клавише с этой цифрой расположен спецсимвол " ^ "');
		break;
		case '7' : alert('На клавише с этой цифрой расположен спецсимвол " & "');
		break;
		case '8' : alert('На клавише с этой цифрой расположен спецсимвол " * "');
		break;
		case '9' : alert('На клавише с этой цифрой расположен спецсимвол " ( "');
		break;
	default : alert('Вы ошиблись! Введите, пожалуйста, цифру от 0 до 9');
	}
}
// задача 3
function sameDigit() {
	let threeDig = parseInt(prompt('Введите трехзначное число')),
		dig1 = parseInt(threeDig / 100),
		dig2 = parseInt((threeDig % 100) / 10),
		dig3 = threeDig % 10;

	if (isNaN(threeDig)) {
		alert('Вы ошиблись! Введите, пожалуйста, трехзначное число');
	} else if (dig1 == dig2 || dig1 == dig3 || dig2 == dig3) {
		alert('В этом числе есть одинаковые цифры');
	} else {
		alert('В этом числе нет одинаковых цифр');
	}
}
// задача 4
function leapYear() {
	let leapYear = prompt('Введите год');
	if (leapYear.length != 4) {
		alert('Введите год в правильном формате')
	} else if (leapYear % 400 == 0 || (leapYear % 4 == 0 && leapYear % 100 != 0)) {
		alert('Этот год является високосным');
	} else {
		alert('Этот год не является високосным');
	}
}
// задача 5
function palindrome() {
	let fiveDig = parseInt(prompt('Введите пятизначное число')),
		digit1 = parseInt(fiveDig / 10000),
		digit2 = parseInt((fiveDig % 10000) / 1000),
		digit4 = parseInt((fiveDig % 100) / 10),
		digit5 = fiveDig % 10;
	
	if (isNaN(fiveDig)) {
		alert('Ошибка! Введите пожалуйста пятизначное число');
	} else if (digit1 == digit5 && digit2 == digit4) {
		alert('Ваше число является палиндромом');
	} else {
		alert('Ваше число не является палиндромом');
	}
}
// задача 6
function conv() {
	let mySum = parseFloat(prompt('Введите сумму в долларах')),
		myVal = prompt("Введите код желаемой валюты: \nEUR\nUAH\nAZN");
	if(isNaN(mySum)) {
		alert('Введите корректные данные');
	} else if(myVal == 'EUR') {
		evr = mySum * 0.8276;
		alert(`Вы получите ${evr} евро`);
	} else if (myVal == 'UAH') {
		hrv = mySum * 27.83;
		alert(`Вы получите ${hrv} гривен`);
	} else if (myVal == 'AZN') {
		azn = mySum * 1.7;
		alert(`Вы получите ${azn} манатов`);
	} else {
		alert('Проверьте правильность введенных данных');
	}

}
// задача 7
function purchase() {
	let sumOfPurchase = parseFloat(prompt('Введите сумму покупки. От 200 гривен действуют скидки!'));
	if (isNaN(sumOfPurchase)) {
		alert('Проверьте правильность введенных данных');
	} else if (sumOfPurchase >= 200 && sumOfPurchase <= 300) {
		alert(`Ваша скидка 3%, сумма к оплате ${sumOfPurchase - sumOfPurchase  * 0.03}`);
	} else if (sumOfPurchase > 300 && sumOfPurchase <= 500) {
		alert(`Ваша скидка 5%, сумма к оплате ${sumOfPurchase - sumOfPurchase  * 0.05}`);
	} else if (sumOfPurchase > 500) {
		alert(`Ваша скидка 7%, сумма к оплате ${sumOfPurchase - sumOfPurchase  * 0.07}`);
	} else {
		alert(`На эту сумму покупки скидка не предоставляется! К оплате ${sumOfPurchase} гривен`);
	}
}
// задача 8
function circle() {
	let lengthOfCircle = parseFloat(prompt('Введите длину окружности')),
		perOfSquare = parseFloat(prompt('Введите периметр квадрата')),
		diamOfCircle = lengthOfCircle / Math.PI,
		sideOfSquare = perOfSquare / 4;
	if (isNaN(lengthOfCircle) || isNaN(perOfSquare)) {
		alert('Проверьте правильность введенных данных');
	} else if (diamOfCircle <= sideOfSquare) {
		alert('Окружность помещается в квадрат');
	} else {
		alert('Окружность не поместится в квадрат');
	}
}
// задача 9 
function game() {
	let question1 = parseInt(prompt("Столица Украины это... Выберите код ответа: \n1.Винница\n2.Львов\n3.Киев")),
		question2 = parseInt(prompt("Фудзияма это... Выберите код ответа:\n1.Гора в Японии\n2.Большая яма\n3.Женское имя в Бирме")),
		question3 = parseInt(prompt("Самое быстрое животное это... Выберите код ответа:\n1.Тушканчик\n2.Гепард\n3.Жираф")),
		rez1 = (question1 == 3) ? 2 : 0,
		rez2 = (question2 == 1) ? 2 : 0,
		rez3 = (question3 == 2) ? 2 : 0,
		rez =  rez1 + rez2 + rez3;
		alert(`Ваш результат ${rez} баллов.`);
}

// задача 10 не решено
function Date() {
	let currentDate = prompt('Введите текущую дату, в формате день:месяц:год')
}// задача 1
function userAge() {
	let age = prompt('Введите ваш возраст');
	if (age >= 0 && age <= 12) {
		alert('Вы еще ребенок');
	} else if (age > 12 && age <= 18) {
		alert('Вы подросток');
	} else if (age > 18 && age <= 60) {
		alert('Вы уже взрослый');
	} else if (age > 60) {
		alert('Вы пенсионер');
	} else {
		alert('Введите корректные данные!');
	}
}
