const titleElement = document.getElementById('title');
const buttonElement = document.getElementById('change-title');
const listItems = document.querySelectorAll('#item-list li');

console.log('Title Element:', titleElement);
console.log('Button Element:', buttonElement);
console.log('List Items:', listItems);

// Modifying DOM Elements
buttonElement.addEventListener('click', () => {
    titleElement.textContent = 'Hello JavaScript!';
    titleElement.style.color = 'blue';
    titleElement.style.fontSize = '2em';
});

// Adding New Elements to the DOM
const newItem = document.createElement('li');
newItem.textContent = 'Item 4';
document.getElementById('item-list').appendChild(newItem);

// Removing Elements from the DOM
if (listItems.length > 3) {
    listItems[0].parentNode.removeChild(listItems[0]);
}