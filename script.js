const firstNames = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Phan"]; // Thêm nhiều tên hơn
const lastNames = ["Văn A", "Thị B", "Văn C", "Thị D"]; // Thêm nhiều họ hơn

function generateName() {
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const result = {
    firstname: randomFirstName,
    lastname: randomLastName
  };

  document.getElementById("result").textContent = JSON.stringify(result, null, 2);
}
