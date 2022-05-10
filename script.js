const draggableList = document.getElementById('draggable-list');
const check = document.getElementById('check');

// Stack Overflow Survey 2021 - 10 Most commonly used programming languages
const programmingLanguages = [
  'JavaScript',
  'HTML/CSS',
  'Python',
  'SQL',
  'Java',
  'Node.js',
  'TypeScript',
  'C#',
  'Bash/Shell',
  'C++'
];


// Store listitems
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
  [...programmingLanguages].forEach((language, index) => {
    // Create List Item
    const listItem = document.createElement('li');
    listItem.setAttribute('data-index', index);

    const span = document.createElement('span');
    span.classList.add('number');
    span.textContent = index + 1;

    const div = document.createElement('div');
    div.setAttribute('draggable', 'true');
    div.classList.add('draggable');
    
    const p = document.createElement('p');
    p.classList.add('language-name');
    p.textContent = language;

    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-grip-lines');

    div.appendChild(p);
    div.appendChild(icon);
    listItem.appendChild(span);
    listItem.appendChild(div);

    // Push into array
    listItems.push(listItem);

    // Insert into DOM
    draggableList.appendChild(listItem);
  });
}
