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

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

/* Этап 2. Получение данных */
// Преобразуем XML в DOM
const xml = parser.parseFromString(xmlString, "application/xml");
// Получение данных из DOM
const students = xml.querySelectorAll("student");
const result = { list: [] };

students.forEach((student) =>{
  const nameNode = student.querySelector('name');
  const firstname = nameNode.querySelector('first');
  const lastname = nameNode.querySelector('second');
  const age = student.querySelector('age');
  const prof = student.querySelector('prof')  ;
  // Получение данных из атрибутов
  const lang = nameNode.getAttribute('lang');
  const name =  `${firstname.textContent} ${lastname.textContent}`;
  //результатирующий JS объект
  result.list.push({
    name,
    age: Number(age.textContent),
    prof: prof.textContent,
    lang: lang,
  });
});

// Выводим результат в консоль
console.log(result);
