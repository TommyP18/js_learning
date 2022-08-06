const createChessBoard = () => {
  const mainBlock = document.querySelector('.main-block');

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const block = document.createElement("div");
      const resultingColor = (j + i) % 2 === 0 ? "black" : "white";

      block.className = `block ${resultingColor}`;
      mainBlock.appendChild(block);
    }
  }
}

createChessBoard()

// Переделать (убрать флаг,связь resultingColor c i или j)