function a1(x) {
	return x * 2;
}
a1.version = 'v-1.03';

function a2(x) {
	return x / 2;
}

function perform(x, operation) {
	return operation(x);
}

console.log(perform(10, a1));
console.log(perform(10, a2));
console.log(Math.PI);