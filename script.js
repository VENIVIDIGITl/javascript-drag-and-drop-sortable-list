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


// Store list items
const listItems = [];

let dragStartIndex;

createList();


function scrambleArray(array) {
  return array
    .map(item => ({ value: item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(obj => obj.value);
}


function createListItem(text, index) {
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
  p.textContent = text;

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-grip-lines');

  div.appendChild(p);
  div.appendChild(icon);
  listItem.appendChild(span);
  listItem.appendChild(div);

  return listItem;
}


// Insert list items into DOM
function createList() {
  const languages = scrambleArray(programmingLanguages);
  languages
    .forEach((language, index) => {
      // Create List Item
      const listItem = createListItem(language, index);
      // Push into list items array
      listItems.push(listItem);
      // Insert into DOM
      draggableList.appendChild(listItem);
    });
}
