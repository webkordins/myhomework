function  text() {
	const t = document.getElementById("my_text").value;
	document.getElementById("text_rez").innerHTML = 'Hello, <b>'+t+'</b>!';
}

function diez() {
	const n = parseInt(document.getElementById("diez_number").value);
	if(n!=0 && !isNaN(n) && n > 0) {
		let rez = '';
		let i = 0;
		while(i < n) {
			i++;
			rez += '#' ;
		}
		document.getElementById('diez_rez').innerText = rez;
	} else {
		alert("Enter diez number!");
	}
}
function reverse() {
	let n = parseInt(document.getElementById("reverse_number").value);
	if(n!=0 && !isNaN(n) && n > 0) {
		let rez = '';
		while(n > 0) {
			
			rez += n+', ' ;
			n--;
		}
		document.getElementById('reverse_rez').innerText = rez;
	} else {
		alert("Enter number!");
	}
}
function pow() {
	const n = parseInt(document.getElementById("pow_number").value);
	const s = parseInt(document.getElementById("pow_stepen").value);
	let valid = true;
	let errMsg = '';
	if(isNaN(n)) {
		errMsg += "Enter number!";
		valid = false;
	}
	if(isNaN(s)) {
		errMsg += "Enter stepen!";
		valid = false;
	}
	if (valid) {
		let rez = n;
		i = 1;
		while(i < s) {
			rez = rez * n;
			i++;
		}


		document.getElementById('pow_rez').innerText = rez;
	} else {
		document.getElementById('pow_rez').innerHTML = `<span class="text-danger">${errMsg}</span>`;
	}
}