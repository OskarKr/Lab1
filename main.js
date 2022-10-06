liczba1 = document.querySelector('#liczba1');
liczba2 = document.querySelector('#liczba2');
liczba3 = document.querySelector('#liczba3');
liczba4 = document.querySelector('#liczba4');

const przeliczBtn = document.querySelector('#przelicz');

przeliczBtn.addEventListener('click', () => {
	suma = +liczba1.value + +liczba2.value + +liczba3.value + +liczba4.value;
	avg = suma / 4;
	numbMin = Math.min(+liczba1.value, +liczba2.value, +liczba3.value, +liczba4.value);
	numbMax = Math.max(+liczba1.value, +liczba2.value, +liczba3.value, +liczba4.value);
	console.log(`Suma: ${suma}, średnia: ${avg}, najmniejsza: ${numbMin}, najwieksza: ${numbMax}`);
});
