const links = document.querySelectorAll('a');

for (let link of links) {
  const href = link.getAttribute('href');
  if (!href) continue; 

  if (!href.includes('://')) continue; 

  link.style.color = 'red';
}