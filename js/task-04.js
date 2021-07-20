// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение
// счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const [decrementBtn, num, incrementBtn] =
  document.querySelector('#counter').children;

// const refs = {
//   decrementBtn: document.querySelector('[data-action="decrement"]'),
//   num: document.querySelector('#value'),
//   incrementBtn: document.querySelector('[data-action="increment"]'),
// };

const counterValue = num.textContent;

const onIncrementClick = () => {
  num.textContent = +num.textContent + 1;
};
const onDecrementClick = () => {
  num.textContent -= 1;
};

incrementBtn.addEventListener('click', onIncrementClick);
decrementBtn.addEventListener('click', onDecrementClick);
