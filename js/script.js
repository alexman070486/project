// ! Строгий режим
// "use strict"
//-------------------------------------------------------------------------------------
// ! Вывод
/*
console.log("Hello World");
console.log("Учим " + "JS!");
*/
// ! Переменные
/*
Не верное обьявление переменных
let 123info
let info-text

let num = 4;
console.log("В переменной num число: " + num);
let myAge = 35;
let myNewAge = 36;
myAge = myNewAge;
console.log("Мой новый возраст: " + myAge);
*/
/*
Объявление переменной через var в отличии от let будет видна за пределами условий и циклов,
переменную можно использовать до ее объявления
*/
//-------------------------------------------------------------------------------------
// ! Константы
//Жестко закодированные пишутся в верхнем регистре
/*
const COLOR_RED = "#F00";
const summSizes = 25 + 30;
console.log("Константы: " + summSizes + " и " + COLOR_RED);*/
//-------------------------------------------------------------------------------------
// ! Циклы
/*
for (let i = 0; i < 5; i++) {
   console.log("i = " + i);
}
*/
//-------------------------------------------------------------------------------------
// ! Функции
/*
function nameFunction() {  // Переменная str снаружи фукции не видна
   let str = "Текст";
   console.log("В переменной хранится: " + str);
}
nameFunction();
*/
//-------------------------------------------------------------------------------------
// ! Типы данных (в JS динамически типизированный)
/*
let userName; //undefined
console.log(typeof userName);
let userName2 = null; //null
console.log(typeof userName2);
console.log(userName2); //boolen
let userName3 = true
console.log(userName3);
let age = 58; //boolen
console.log(typeof age);
let age2 = 23123412412412412125121251512515151255846427278484238382348247223532626723462362372727472472472474878;
console.log(typeof age2);
let userAge = 36; //number
let userAgeInfo = `Возраст: ${userAge}`; //string и используются обратные кавычки иначе не работает
console.log(userAgeInfo);

let userInfo = {
   name: "Alex",
   age: 35
}
console.log(userInfo);  // object

let id = Symbol("id");
console.log(typeof id); // symbol

let funcVariable = function name(params) {    // код функции

}
console.log(typeof funcVariable); // функция
*/
//-------------------------------------------------------------------------------------
// ! Преобразование типов данных
/*
let userCount = 13;
console.log(typeof userCount);
userCount = String(userCount);
console.log(typeof userCount);
userCount = Number(userCount);
console.log(typeof userCount);
*/
// ! Преимущества this в методах обьекта
/*
let userInfo = { // ! this Привязка к конкретному обьекту а не к переменной
   name: "Alex",
   age: 36,
   address: {
      city: "Voronezh",
      country: "Russia",
   },
   showInfo() {
      console.log(`${this.name}, ${this.age} лет, г. ${this.address.city}, страна - ${this.address.country} `)
   }
}

userInfo.showInfo();
let user = userInfo;
userInfo = null;
user.showInfo();
*/
// ! Цикл For ... in
/*
for (let key in userInfo) {
   console.log(key + ": " + userInfo[key])
}
*/

// ! Функция конструктор
/*
function userInfo(name, age) {
   this.name = name;
   this.age = age
}
console.log(new userInfo("Вася", 35))
console.log(new userInfo("Юля", 36))
*/

// ! Массивы

// !-------------------------------------------------------------------------------------

// ! DOM
/*
const htmlElement = document.documentElement;
console.log(htmlElement);
const headElement = document.head;
console.log(headElement);
const bodyElement = document.body;
console.log(bodyElement);*/

// ! Получаем первый и последний элемент
/*
const bodyElement = document.body;
const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;
console.log(firstChildNode);
console.log(lastChildNode);
*/
// ! Коллекция childNodes - все узлы
/*
const bodyElement = document.body;
const сhildNodes = bodyElement.childNodes;
console.log(сhildNodes);
*/
// ! Быстро проверить существуют ли дочерние узлы
/*
console.log(bodyElement.hasChildNodes()); // true
*/
// ! Перебор коллекции (не работают методы для массивов, можео использовать for ...of)
/*
for (let node of сhildNodes) {
   console.log(node);
}*/
// * Коллекции всегда живые и их нельзя изменить простым присвоением есть специальные методы

// ! Навигация по документу
/*
const bodyElement = document.body;

const previos = bodyElement.previousElementSibling;
const next = bodyElement.nextElementSibling;
const parentNode = bodyElement.parentElement;

console.log(previos);
console.log(next);
console.log(parentNode);
*/
// ! Получаем коллекцию дочерних элементов без лишних переводов строки? только дочерние теги
/*
const bodyChildren = bodyElement.children;
console.log(bodyChildren);*/

// ! Методы поиска элемента в DOM

// ! elem.querySelectorAll(CSS) - Самый универсальный метод, можно использовать любой css селектор, возвращает коллекцию но не живая а статичная
/*
const elemOne = document.querySelectorAll(".lesson__item"); // селектор класса
console.log(elemOne);
const elemTwo = document.querySelectorAll("li"); // селектор тега
console.log(elemTwo);
const elemThree = document.querySelectorAll("li.lesson__item"); // смешанный
console.log(elemThree);
const elemFour = document.querySelectorAll(".lesson-subitems > li"); // по тегу первого уровня вложенности
console.log(elemFour);
const elemFive = document.querySelectorAll(".lesson__item, .lesson__text"); // поиск по нескольким классам
console.log(elemFive);
const elemSix = document.querySelectorAll("#main"); // поиск по ID
console.log(elemSix);
const elemSeven = document.querySelectorAll(`[data-item="new"]`); // поиск по атрибуту
console.log(elemSeven);
*/
// * Можно перебрать циклом for of
/*
const elems = document.querySelectorAll("li");
console.log(elems[2]); // получаем конкретный объект
*/
// *Можно перебрать
/*
for (const item of elems) {
   console.log(item);
}
*/
// * Или
/*
elems.forEach(item => {
   console.log(item);
})
*/
// ! Можно искать не только в документе но и в конкретном родителе например:
/*
const subList = document.querySelectorAll(".lesson-subitems");
const liSubList = subList[0].querySelectorAll("li");
console.log(liSubList);
*/
// ! elem.querySelector(CSS) - возвращает один элемент первый попавшийся
/*
const list = document.querySelector(".lesson-subitem");
console.log(list);*/

// ! elem.getElementByID и  elem.getElementBy - поиск только внутри документа
/*
const elem = document.getElementById("main");
console.log(elem);

const elems = document.getElementsByTagName("li"); // !живая коллекция
console.log(elems);

const elemsclass = document.getElementsByClassName("bluelink"); //! живая коллекция
console.log(elemsclass);
*/
// ! Метод closest - ищет ближайшей родительский элемент поднимаясь вверх
/*
const elem = document.querySelector(".lesson__sublink");
const parent = elem.closest(".lesson-subitems");
console.log(parent);*/

// ! Проверка matches проверяет удовлетворяет ли элемент css селектору
/*
const elems = document.querySelectorAll(".lesson__link");
for (let elem of elems) {
   if (elem.matches(`[class$="bluelink"]`)) { console.log('Синий'); }
   else if (elem.matches(`[class$="redlink"]`)) { console.log('Красный'); }
   else console.log('Нет цвета');
}
*/

// ! Можно использовать навигацию чтобы найти определенный элемент
/*
const text = document.querySelector(".lesson__text");
const nextElem = text.nextElementSibling;
console.log(nextElem);*/


// ! Содержимое внутри элемента innterHTML
/*
const textElem = document.querySelector(".bluelink");
const textElemContent = textElem.innerHTML;
console.log(textElemContent);
*/
// ! Презаписываем содержимое обьекта
/*
textElem.innerHTML = `${textElemContent} <span>Дополнительная</span>`;
console.log(textElem);
*/
// ! Содержимое элемента целиком outerHTML
/*
const textElem2 = document.querySelector(".bluelink");
const textElemContent2 = textElem2.outerHTML;
console.log(textElemContent2);
*/
// ! Текст элемента textContent - убирает все теги
/*
const textElem3 = document.querySelector(".bluelink");
const textElemContent3 = textElem3.textContent;
console.log(textElemContent3);
*/
// ! При присвоении вставляет все как обычный текст даже теги

// ! Содержимое текстового узла / комментария
/*
const textElement = document.querySelector("#main");
const getComment = textElement.nextSibling;
console.log(getComment);
console.log(getComment.data);

getComment.data = "Привет";
console.log(getComment.data);
*/

// ! Создание элементов и узлов (они находятся в константах и пока не являются частью документа)
/*
const newElement = document.createElement("div")
console.log(newElement);

const newText = document.createTextNode("Привет")
console.log(newText);
*/
// ! Наполняем новый элемент содержимым
/*
newElement.innerHTML = `<a class="lesson__link" href="#">Ccылка 4</a>`;
console.log(newElement);
*/

// ! Методы вставки (изменение документа)
/*
const textElement = document.querySelector("#main");
const newElement = document.createElement("div")
newElement.innerHTML = `<a class="lesson__link" href="#">Ccылка 4</a>`;
*/
// ! Вставляем новый элемент

//textElement.before(newElement);
//textElement.after(newElement, "Новый элемент после"); // вставлен и обьект и текст
//textElement.prepend(newElement);
//textElement.append(newElement);

// ! Вставляем новый HTML  (afterend, afterbegin, beforebegin, beforeend)
/*
const textElement = document.querySelector("#main");
textElement.insertAdjacentHTML("beforeend", `<span class="newhtml">Я появился</span>`)
*/

// ! Перенос элемента (h1 ушел внутрь блока)
/*
const blockElem = document.querySelector(".block");
const title = document.querySelector("h1")
blockElem.prepend(title);
*/
// ! Сделать копию объекта cloneNode
/*
const textElem = document.querySelector(".block");
const cloneTextElem = textElem.cloneNode(true); // true - это точная копия со всем содержимым
const lessonBlock = document.querySelector(".lesson__text");
lessonBlock.prepend(cloneTextElem);
*/
// ! Удаление обьекта метод remove
/*
const textElem = document.querySelector(".block");
textElem.remove();
*/

// ! Управление классами (наиболее часто) className и classList
/*
const element = document.querySelector(".bluelink");
const elemClassName = element.className;
console.log(elemClassName);
element.className = "red"; // Перезаписываем все классы
*/
/*
const element = document.querySelector(".bluelink");
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
element.classList.contains("active"); // проверка существует ли класс у элемента

if (element.classList.contains("active")) { // условие проверки наличия класса
   console.log("Класс active есть!");
}

for (let className of element.classList) {  // Перебор классов
   console.log(className);
}
*/

// ! Стили и классы (задаем стили с помощью style)
/*
const elem = document.querySelector(".redlink");
elem.style.color = "red";
elem.style.paddingLeft = "20px";

const elem2 = document.querySelector(".bluelink");
elem2.style.cssText = `
   color: blue;
   padding: 10px;
   display: block;
`*/
// ! Вычисленные стили (только для чтения)
/*
const elem3 = document.querySelector(".redlink");
const elemStyle = getComputedStyle(elem3);
console.log(elemStyle.paddingLeft);
const paddingLeft = parseInt(elemStyle.paddingLeft)  // делаем число
console.log(paddingLeft);*/

// ! Атрибуты и свойства
/*
const link = document.querySelector(".bluelink");
console.log(link.href);
console.dir(link);
console.log(link.hasAttribute("name")); // Проверяем наличие атрибута
if (!link.hasAttribute("name")) {
   link.setAttribute(`name`, `value`) // Устанавливаем атрибут
}
console.log(link.getAttribute("name")); // Получить значение атрибута

link.removeAttribute("name");  // удаляем атрибут
*/

// Вывести значение атрибута из коллекции элементов
/*
const dataItem = document.querySelectorAll(".lesson-subitem");
console.log(dataItem);
for (let num of dataItem) {
   console.log(num)
   if (num.hasAttribute("data-item")) {
      console.log(num.getAttribute("data-item"));

   }
}
*/
/*
const dataItem = document.querySelector("[data-item]");
const nameAttr = dataItem.getAttribute("data-item");
console.log(nameAttr)
*/


//if (num.hasAttribute("data-item")) {
//console.log(num.getAttribute("data-item"));

/*
const likeClasses = document.querySelectorAll(".like");
console.log(likeClasses)
*/

