function zegar() {
	data = new Date();
	let godzina = data.getHours();
	let minuta = data.getMinutes();
	let sekunda = data.getSeconds();
	if (minuta < 10) minuta = "0" + minuta;
	if (sekunda < 10) sekunda = "0" + sekunda;
	document.getElementById("czas").innerHTML = `${godzina}:${minuta}:${sekunda}`;
	setTimeout("zegar()", 1000);
}
