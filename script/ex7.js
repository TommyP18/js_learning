const links = document.querySelectorAll('a');

for (const link of links) {
if (link.innerHTML.match(/https?:\/\//g)) {
  link.style.color = 'red';
}
}

// Only http/https protocols