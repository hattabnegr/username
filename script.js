// Danh sách username mẫu
const usernames = [
  "user1",
  "user2",
  "user3",
  "user4",
  "user5",
  // Thêm các username khác vào đây
];

// Hàm lấy một username ngẫu nhiên từ danh sách
function getRandomUsername() {
  const randomIndex = Math.floor(Math.random() * usernames.length);
  return usernames[randomIndex];
}

// Ghi đè phương thức fetch() để trả về dữ liệu JSON
window.fetch = () => {
  const randomUsername = getRandomUsername();
  const jsonData = JSON.stringify({ username: randomUsername });
  return new Response(jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Khi tải trang, trả về dữ liệu JSON ngay lập tức
window.addEventListener("load", () => {
  window.fetch();
});
