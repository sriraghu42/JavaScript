const paragraphs = document.querySelectorAll('.text');
const highlightButton = document.getElementById('highlight-text');
const toggleButton = document.getElementById('toggle-paragraphs');

// Event Handling
highlightButton.addEventListener('click', () => {
    paragraphs.forEach(paragraph => {
        paragraph.classList.toggle('highlight');
    });
});

toggleButton.addEventListener('click', () => {
    paragraphs.forEach(paragraph => {
        paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
    });
});

// Manipulating Attributes
const contentDiv = document.getElementById('content');
contentDiv.setAttribute('data-info', 'This is the content div');
console.log('Content Div Data Attribute:', contentDiv.getAttribute('data-info'));

// Creating and Inserting Elements
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a dynamically added paragraph.';
contentDiv.appendChild(newParagraph);

// Removing an element
const firstParagraph = document.querySelector('.text');
firstParagraph.parentNode.removeChild(firstParagraph);
