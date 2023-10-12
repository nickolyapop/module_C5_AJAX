/* Этап 1. Подготовка данных */
// JSON, который мы будем парсить
const jsonstring = `
{
"list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;
// console.log('jsonString', jsonString);

/* Этап 2. Получение данных */
const data = JSON.parse(jsonstring);
//console.log('data', data);
const list = data.list;
// console.log('list', list)

/* Этап 3. Запись данных в результирующий объект */
const result = {list:[]};

list.forEach((worker)=>{
  result.list.push({
    name: worker.name, age: Number(worker.age), prof: worker.prof
  });
  // console.log(worker);
})
console.log(result);
