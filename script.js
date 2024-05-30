const names = {
    "firstNames": ["John", "Jane", "Michael", "Emily", "Chris", "Sarah"],
    "lastNames": ["Doe", "Smith", "Johnson", "Williams", "Brown", "Jones"]
};

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomName() {
    const firstName = getRandomElement(names.firstNames);
    const lastName = getRandomElement(names.lastNames);
    return { firstName, lastName };
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { getRandomName };
}
