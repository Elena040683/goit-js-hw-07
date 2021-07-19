// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его
// содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInput);

// function onInput() {
//   if (inputRef.value.length === +inputRef.dataset.length) {
//     togleClass('valid', 'invalid');
//   } else {
//     togleClass('invalid', 'valid');
//   }
// }

function onInput({ target: { value, dataset } }) {
  value.length === +dataset.length
    ? togleClass('valid', 'invalid')
    : togleClass('invalid', 'valid');
}

const togleClass = (add, remove) => {
  inputRef.classList.add(add);
  inputRef.classList.remove(remove);
};
