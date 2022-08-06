const elem = document.getElementById("elem");

const getElementProps = () => {
	const startWidth = elem.offsetWidth;
	const startHeight = elem.offsetHeight; 
	
	elem.style.width = startWidth * 2 + 'px';
	elem.style.height = startHeight * 2 + 'px';
  
	alert(`${getComputedStyle(elem).height} ${getComputedStyle(elem).width}`);
}

elem.addEventListener("click", () => {
	getElementProps();
})


