function sayHello(event) {
	console.log(event);

	var input1 = document.querySelector("#i1").value;

	if (input1 === '') {
		return;
	}

	var msg = "<h2>Hello, " + input1 + "! =)</h2>";
	document.querySelector("#content").innerHTML = msg;

	if(input1 === 'Sky' || input1 === 'sky') {
		document.querySelector("#headin").textContent = 
		"Welcome to Sky's Den";
	}

	this.textContent = 'GREETED'
}

// document.querySelector('#b1').addEventListener('click', sayHello);
document.querySelector('#b1').onclick = sayHello;

document.querySelector('body').onmousemove = 
	function printCoOrds(event) {
		if (event.shiftKey) {
			console.log('x: ' + event.clientX);
			console.log('y: ' + event.clientY);
		}
	}