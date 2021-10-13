const colors = ["yellow", "blue", "red", "orange"];

let i = 0;

// while loop
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

//for loop
for (i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//forEach array method
colors.forEach((element) => console.log(element));

//1. while loop 4 regels, for loop 3 regels, ///2. foreach 1 regel
//3. voordelen foreach: korter, leesbaar, geen variabele, incrementer of conditie nodig. Leesbaar omdat het bijna op een logische zin lijkt.

const object = { a: 'kaas', b: 'jam', c: 'pindakaas', d: 'ham', e:'pasta'  };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

//geen iteratie

