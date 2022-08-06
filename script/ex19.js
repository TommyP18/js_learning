// REFACTOR!!!!!!!!!!
// No function !

const child = document.querySelector('.child');
const parents = document.querySelectorAll('.parent');

child.addEventListener('dragstart', dragStart);
child.addEventListener('dragend', dragEnd);

for (const parent of parents) {
  parent.addEventListener('dragover', dragOver);
  parent.addEventListener('dragenter', dragEnter);
  parent.addEventListener('dragleave', dragLeave);
  parent.addEventListener('drop', dragDrop);
}

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'child';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'parent';
}

function dragDrop() {
  this.className = 'parent';
  this.append(child);
}
