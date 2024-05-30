// Danh sách first name
const firstNames = [
  'Michael', 'Christopher', 'Matthew', 'Joshua', 'Andrew',
  'Joseph', 'Daniel', 'William', 'John', 'David',
  'James', 'Robert', 'Emily', 'Sarah', 'Jessica',
  'Ashley', 'Amanda', 'Samantha', 'Elizabeth', 'Megan'
];

// Danh sách last name
const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Jones', 'Brown',
  'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor',
  'Anderson', 'Thomas', 'Jackson', 'White', 'Harris',
  'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson'
];

// Hàm tạo tên ngẫu nhiên
function generateRandomName() {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return { firstName, lastName };
}

// Xử lý yêu cầu JSONP
function handleJSONPRequest(callback) {
  const randomName = generateRandomName();
  const jsonpResponse = `${callback}(${JSON.stringify(randomName)})`;
  return jsonpResponse;
}

// Xuất hàm xử lý yêu cầu JSONP
window.handleJSONPRequest = handleJSONPRequest;
