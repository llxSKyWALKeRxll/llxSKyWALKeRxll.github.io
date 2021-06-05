var x = 'Hello there, this is my first print statement on JavaScript!';
console.log(x);
function a1 () {
	console.log("Inside function a1.\nChecking new line operator!");
	console.log(x);
	function a2() {
		console.log("Inside a2.");
		console.log(x);
	}
	x = "Lul";
	a2();
}
a1();
console.log(undefined / 5);
console.log(null / 10);
console.log('Hellow' + ' there!');
console.log('Value of x: '+x);

// for (i = 0; i < 5; i++) {
// 	console.log(i);
// }

// for (var i = 5; i < 10; i++) {
// 	console.log(i);
// }
// console.log(i);