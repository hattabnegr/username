const firstNames = ["Emily", "Olivia", "Ava", "Isabella", "Sophia", "Mia"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia"];

function generateName() {
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return {
    firstName: randomFirstName,
    lastName: randomLastName
  };
}

const result = generateName();
const jsonResult = JSON.stringify(result);
document.write(jsonResult);
