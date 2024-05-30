async function generateName() {
    const response = await fetch('names.json');
    const names = await response.json();

    const firstNames = names.firstNames;
    const lastNames = names.lastNames;

    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    const result = {
        firstname: randomFirstName,
        lastname: randomLastName
    };

    document.getElementById('result').innerText = JSON.stringify(result);
}
