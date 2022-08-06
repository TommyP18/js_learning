const child = document.querySelector('.child');
const parents = document.querySelectorAll('.parent');

// "child"
const dragStart = (child) => {
  child.className += ' hold';

  setTimeout(() => (child.className = 'invisible'), 0);
}

const dragEnd = (event) => {
  event.target.classList = "child";
}

child.addEventListener('dragstart', (e) => {
  dragStart(e);
});
child.addEventListener('dragend', (e) => {
  dragEnd(e);
});

const dragEnter = (parent) => {
  parent.className = 'parent hovered';
}

const dropDrop = (parent) => {
  parent.className = 'parent';
  parent.append(child);
}

const dragLeave = (parent) => {
  parent.className = "parent";
}

const dragOver = (e, parent) => {
  e.preventDefault();
  parent.className = "parent hovered";
}

for (const parent of parents) {
  parent.addEventListener('dragover', (e) => {
    dragOver(e, parent)
  });
  parent.addEventListener('dragenter', () => {
    dragEnter(parent);
  });
  parent.addEventListener('dragleave', () => {
    dragLeave(parent);
  });
  parent.addEventListener('drop', (e) => {
    dropDrop(parent);
  });
}