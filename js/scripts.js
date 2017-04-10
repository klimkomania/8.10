var buttons = document.getElementsByClassName ("button");
console.log(buttons);

	for (var i = 0; i < buttons.length; i++) {
		var k = i+1;
		alert("Tekst zawarty w przycisku nr " + k + " = " + buttons[i].innerText);
		console.log(buttons[i].innerText);
}