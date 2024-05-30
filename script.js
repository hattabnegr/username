const firstNames = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Phan"];
const lastNames = ["Văn A", "Thị B", "Văn C", "Thị D"];

function generateName() {
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return {
    firstname: randomFirstName,
    lastname: randomLastName
  };
}

// Xử lý yêu cầu GET và POST
const requestMethod = (typeof event !== 'undefined' && event.request) ? event.request.method : 'GET';
if (requestMethod === 'GET' || requestMethod === 'POST') {
  const result = generateName();
  const jsonResult = JSON.stringify(result);
  if (typeof event !== 'undefined' && event) {
    event.respondWith(new Response(jsonResult, {
      headers: { 'Content-Type': 'application/json' }
    }));
  } else {
    document.write(jsonResult);
  }
}
