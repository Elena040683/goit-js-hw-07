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

const ingredientsListRef = document.querySelector('#ingredients');

const element = ingredients.map(option => {
  const ingredientsListElement = document.createElement('li');
  ingredientsListElement.textContent = option;
  return ingredientsListElement;
});

ingredientsListRef.append(...element);
