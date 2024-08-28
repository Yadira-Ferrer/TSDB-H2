import './style.css';
import { date } from './date.ts';

const input = document.querySelector<HTMLInputElement>('#item-input')!;
const list = document.querySelector<HTMLDivElement>('#item-list')!;

document.querySelector<HTMLDivElement>('#date')!.innerText = date();
document
  .querySelector<HTMLSpanElement>('#close-1')!
  .addEventListener('click', deleteItem);
document
  .querySelector<HTMLSpanElement>('#close-2')!
  .addEventListener('click', deleteItem);
document
  .querySelector<HTMLSpanElement>('#close-3')!
  .addEventListener('click', deleteItem);

document
  .querySelector<HTMLDivElement>('#add')!
  .addEventListener('click', addItemToList);

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addItemToList();
  }
});

function addItemToList() {
  const value = input.value.trim();

  if (value !== '') {
    const checkBox = document.createElement('input');
    checkBox.classList.add('checkbox-round');
    checkBox.type = 'checkbox';

    const description = document.createElement('p');
    description.innerText = value;

    const itemContent = document.createElement('div');
    itemContent.classList.add('item-content');
    itemContent.append(checkBox);
    itemContent.append(description);

    const close = document.createElement('span');
    close.classList.add('close');
    close.innerHTML = '&times;';
    close.addEventListener('click', deleteItem);

    const item = document.createElement('div');
    item.classList.add('item');
    item.appendChild(itemContent);
    item.appendChild(close);

    list.appendChild(item);

    input.value = '';
  }
}

function deleteItem(event: any) {
  const item = event.target.parentElement;
  list.removeChild(item);
}

/*
  Build a Todo List using Vite with vanilla-ts. The application must support adding new items, deleting existing items, and marking items as completed. Use your creativity to create a UI with HTML and CSS to implement it.

  All the work must be done in a single pull request. You must upload a link to the pull request of the public Github repository. The pull request must include screenshots or videos of your application. You are responsible that the screenshots or videos showcase correctly your work.
*/
