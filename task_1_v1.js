/* Этап 1. Подготовка данных */
// XML, который мы будем парсить
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list> 
`;
// console.log('xmlString', xmlString);

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
// console.log('parser', parser);

/* Этап 2. Получение данных */

// Преобразуем XML в DOM
const xmlDoc = parser.parseFromString(xmlString, "application/xml");

// Получение данных из DOM
const students = Array.from(xmlDoc.querySelectorAll('student')).map(student =>{
  const name = student.querySelector('name');
  const firstname = name.querySelector('first').textContent;
  const lastname = name.querySelector('second').textContent;
  const age = parseInt(student.querySelector('age').textContent);
  const prof = student.querySelector('prof').textContent;
  // Получение данных из атрибутов
  const lang = name.getAttribute('lang');
  
  return {name: `${firstname} ${lastname}`, age, prof, lang };
});

//результатирующий JS объект
const result = {list: students };

// Выводим результат в консоль
console.log(result);
