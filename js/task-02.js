// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после
// чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов
// используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const ingredientsListRef = document.querySelector('#ingredients');

// const element = ingredients.map(option => {
//   const ingredientsListElement = document.createElement('li');
//   ingredientsListElement.textContent = option;
//   return ingredientsListElement;
// });

// ingredientsListRef.append(...element);

const ingredientsListRef = document.querySelector('#ingredients');

const markup = ingredients.map(el => {
  console.log(el);

  const li = document.createElement('li');
  console.log(li);

  li.innerHTML = `<p>${el}</p>`;

  return li;
});

ingredientsListRef.append(...markup);
