const inputBox = document.getElementById("inputValue");
const stepInput = document.getElementById("stepValue");
const examples = document.querySelectorAll("#examples a");
const modeSelect = document.getElementById("mode");
const encoded = document.getElementById("encoded");
const decoded = document.getElementById("decoded");
const encodedContainer = document.querySelector(".encoded");
const decodedContainer = document.querySelector(".decoded");

examples.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		inputBox.value = e.target.textContent;
		writeDown(e.target.textContent, stepInput.value);
	});
});
modeSelect.addEventListener("click", () => {
	writeDown(inputBox.value, stepInput.value);
});
inputBox.addEventListener("input", () => {
	writeDown(inputBox.value, stepInput.value);
});
stepInput.addEventListener("change", () => {
	writeDown(inputBox.value, stepInput.value);
});

function writeDown(input, step) {
	outputValue.value = SzyfrCezara(input, step);
}
function SzyfrCezara(inputText, number) {
	const value = modeSelect.value;
	if(value === "1") {
		number = -number;
	}
	let smallLetters = inputText.toLowerCase();
	let alphabet = "aąbcćdeęfghijklłmnńoóprsśtuwyzźż".split("");
	number = number % alphabet.length;
	let outputText = "";
	for (let i = 0; i < smallLetters.length; i++) {
		let currentChar = smallLetters[i];
		if (currentChar.trim() === "") {
			outputText += currentChar;
			continue;
		}
		let currentIndex = alphabet.indexOf(currentChar);
		let newIndex = currentIndex + number;
		if (newIndex > alphabet.length - 1) {
			newIndex = newIndex - alphabet.length - 1;
		}
		if (newIndex < 0) {
			newIndex = newIndex + alphabet.length - 1;
		}
		if (+inputText[i]) {
			outputText += `${inputText[i]}`;
		} else {
			if (inputText[i] === inputText[i].toUpperCase()) {
				outputText += alphabet[newIndex].toUpperCase();
			} else outputText += alphabet[newIndex];
		}
	}
	return outputText;
}
