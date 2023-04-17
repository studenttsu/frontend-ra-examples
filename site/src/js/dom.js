// Выбрать элемент
const firstDiv = document.querySelector('div');
const boxes = Array.from(document.querySelectorAll('div'));

const contactForm = document.getElementById('contact-form');


console.log({
    contactForm,
    firstDiv,
    boxes: Array.from(boxes)
});

// Навигация по dom-дереву
// contactForm.querySelectorAll('input');

// parentElement - ссылка на родителя
// children - дочерние элементы узла
// firstElementChild - первый дочерний элемент
// lastElementChild - последний дочений элемент
// nextElementSibling
// previousElementSibling
// closest()

// Перебирать dom-элементы и фильтровать
const containers = boxes.filter(el => el.classList.contains('container'));
console.log(containers.map(el => {
    return {
        node: el,
        children: el.children
    };
}));

// Создание элементов, удаление, методы вставки
const newElement = document.createElement('div');
newElement.textContent = '12313';

newElement.insertAdjacentHTML('afterbegin', `
    <h1>Заголовок</h1>
    <p>Подзаголовок</p>
`);

contactForm.prepend(newElement);
// contactForm.append(newElement);

// setTimeout(() => {
//     newElement.remove();
// }, 3000);

// Манипуляция dom-элементами
newElement.setAttribute('class', 'new-el');
console.log(newElement.getAttribute('class'));

newElement.dataset.id = 'el 1';

newElement.classList.add('new-el', 'active', 'newClass');
newElement.classList.remove('newClass');
newElement.classList.toggle('active');
newElement.classList.contains('active');

newElement.style.background = 'url("")';


// События
function handleSubmit(event) {
    event.preventDefault();

    const { name, phone } = this.elements;

    console.log({
        name: name.value,
        phone: phone.value
    });

    // ОТправка данных fetch на бэкенд
    
    this.reset();
}

contactForm.addEventListener('submit', handleSubmit);
contactForm.removeEventListener('submit', handleSubmit);



const list = document.getElementById('list');

list.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
        console.log(event.target);
    }
});