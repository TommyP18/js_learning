const person = {
  first: 'Ion',
  last: 'Creanga',
  company: 'Amintiri din copilarie SRL'
}

const displayName = (object) => {
  const {first, last, company} = object
  
  return `Name: ${first} ${last}, Company: ${company}`
}

console.log(displayName(person))