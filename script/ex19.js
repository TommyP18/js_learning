// REFACTOR!!!!!!!!!!
// No function !
// PA RA SHA

const child = document.querySelector('.child');
const parents = document.querySelectorAll('.parent');


const dragStart = (event) => {
  event.className += ' hold';

  setTimeout(() => {
    event.className = 'invisible'
  }, 0);
}

const dragEnd = (event) => {
  event.className = 'child';
}

const dragOver = (event) => {
  event.preventDefault();
}

const dragEnter = (event) => {
  event.preventDefault();
  event.target.className = 'parent hovered';
}

const dragLeave = (event) => {
  event.className = 'parent';
}

const dragDrop = (event) => {
  event.className = 'parent';
  event.target.append(child);
  console.log(event.target);
}

child.addEventListener('dragstart', (e) => {
  dragStart(e);
});
child.addEventListener('dragend', (e) => {
  dragEnd(e);
});

for (const parent of parents) {
  parent.addEventListener('dragover', (e) => {
    dragOver(e);
  });
  parent.addEventListener('dragenter', (e) => {
    dragEnter(e);
  });
  parent.addEventListener('dragleave', (e) => {
    dragLeave(e)
  });
  parent.addEventListener('drop', (e) => {
    dragDrop(e);
  });
}
