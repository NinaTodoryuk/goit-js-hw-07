const categoriesList = document.querySelectorAll('ul#categories > li.item');

// Виводимо кількість категорій
console.log(`Всього категорій: ${categoriesList.length}`);

categoriesList.forEach(category => {
  // Отримуємо текст заголовка категорії
  const categoryName = category.querySelector('h2').textContent;
  // Отримуємо кількість елементів у категорії
  const categoryItemsCount = category.querySelectorAll('ul > li').length;

  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів: ${categoryItemsCount}`);
});