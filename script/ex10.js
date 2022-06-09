const person1 = {
	name: "Demas",
	age: 123,
	salary: 1542,
	contacts: {
			phone: 1123,
			email: 'email2@domain.com'
	},
address: "Balti"
}

const person2 = {
	name: "Person",
	age: 123,
	salary: 1542.33,
	contacts: {
			phone: 1123,
			email: 'email2@domain.com'
	},
address: "Moldova"
}

const intersection = (object1, object2) => {
	const resultingObject = {};

	for (const item of Object.entries(object1)) {
			const [key, value] = item;

			if (typeof value === "object") {
				const object = intersection(object1[key], object2[key])
				resultingObject[key] = object

			} else if (object1[key] === object2[key]) {
				resultingObject[key] = object1[key]
			}

			if (value === object2[key]) {
					resultingObject[key] = value;
			}
	}
	return resultingObject
}

console.log(intersection(person1,person2))