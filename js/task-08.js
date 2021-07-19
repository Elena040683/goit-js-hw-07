// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество
// элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии
// на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy]');
const divBox = document.querySelector('#controls');
const input = document.querySelector('input');

const min = +input.getAttribute('min');
const max = +input.getAttribute('max');
const step = +input.getAttribute('step');

btnRender.addEventListener('click', render);
// btnDestroy.addEventListener('click', destroy);

let size = 30;
function render() {
  let arrDiv = [];

  if (+input.value > min && +input.value <= max) {
    for (let i = 0; i < +input.value; i += step) {
      const divEl = document.querySelector('div');
      divEl.style.background = createRandom();
      divEl.style.width = size + 'px';
      divEl.style.height = size + 'px';
      size += 10;

      arrDiv.push(divEl);
    }
    divBox.append(...arrDiv);
  } else {
    alert(`Не корректный ввод.`);
  }
}

function createRandom() {
  return `rgb(${(Math.random() * 255) << 0},${(Math.random() * 255) << 0}, ${
    (Math.random() * 255) << 0
  })`;
}
