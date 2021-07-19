// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//   подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна
// отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputValueRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

inputValueRef.addEventListener('input', onInput);

// function onInput(event) {
//   if (nameOutputRef.value === '') {
//     nameOutputRef.textContent = 'незнакомец';
//   } else nameOutputRef.textContent = event.target.value;
// }

function onInput({ target: { value } }) {
  nameOutputRef.textContent = value.trim() === '' ? 'незнакомец' : value;
}
