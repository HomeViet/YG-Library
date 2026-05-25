const shots = {
  entry: {
    src: "../Dị bảo/Kỳ bảo_Vị trí tính năng.png",
    alt: "Vị trí mở tính năng Dị Bảo trong HUD Kỳ Bảo",
    caption:
      "Entry point nằm trong cụm HUD bên phải, qua icon Kỳ Bảo. Đây là lối vào cấp hệ thống, sau đó người chơi chọn tab Dị Bảo trong panel."
  },
  main: {
    src: "../Dị bảo/Kỳ bảo_Dị bảo.png",
    alt: "Màn danh sách Dị Bảo",
    caption:
      "Màn chính dùng showcase ngang: mỗi Dị Bảo có tên, model/visual lớn, 5 biểu tượng tôi luyện phía dưới và điểm đánh giá tổng ở trung tâm."
  },
  awake: {
    src: "../Dị bảo/Kỳ bảo_Dị bảo_Thức tỉnh.png",
    alt: "Popup thuộc tính và thức tỉnh Dị Bảo",
    caption:
      "Popup chi tiết chia rõ thuộc tính bản thể, thuộc tính tôi luyện và thuộc tính thức tỉnh. Trạng thái đã kích hoạt/đã thức tỉnh được thể hiện ngay trên từng dòng."
  },
  resonance: {
    src: "../Dị bảo/Kỳ bảo-Dị bảo_Cộng minh.png",
    alt: "Popup cộng minh thức tỉnh Dị Bảo",
    caption:
      "Cộng minh biến mục tiêu sưu tầm thành sức mạnh toàn cục. UI card hóa từng mốc và highlight mốc đang có hiệu lực."
  }
};

const treasures = [
  ["1", "Gậy Như Ý Kim Cô", "310003457", "310003463", "Ảnh chi tiết đang dùng item này làm ví dụ thuộc tính."],
  ["2", "Kim Cương Trác", "310003458", "310003464", "Xuất hiện ở màn chính, model vòng lửa nổi bật."],
  ["3", "Thương Hỏa Tiêm", "310003459", "310003465", "Xuất hiện ở màn chính, model thương lửa."],
  ["4", "Phong Hỏa Luân", "310003460", "310003466", "Xuất hiện ở mép phải carousel trong ảnh màn chính."],
  ["5", "Đao Ba Mũi Hai Lưỡi", "310003461", "310003467", "Dùng chung logic 5 cấp tôi luyện và thức tỉnh."],
  ["6", "Rìu Khai Sơn", "310003462", "310003468", "Có thể phân giải theo item config hiện có."],
  ["7", "Quạt Âm Dương", "310004397", "310004474", "Nội dung mở rộng sau, có creature lock/show/awake riêng."]
];

const image = document.querySelector("#screenImage");
const caption = document.querySelector("#screenCaption");
const tabs = document.querySelectorAll(".shot-tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const shot = shots[tab.dataset.shot];
    if (!shot || !image || !caption) return;

    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    image.src = shot.src;
    image.alt = shot.alt;
    caption.textContent = shot.caption;
  });
});

const rows = document.querySelector("#treasureRows");
if (rows) {
  rows.innerHTML = treasures
    .map(
      ([id, name, item, refine, note]) => `
        <tr>
          <td>${id}</td>
          <td><strong>${name}</strong></td>
          <td><code>${item}</code></td>
          <td><code>${refine}</code></td>
          <td>${note}</td>
        </tr>
      `
    )
    .join("");
}
