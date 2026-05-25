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
      "Màn chính dùng showcase ngang: mỗi Dị Bảo có tên, model lớn, 5 biểu tượng tôi luyện phía dưới và điểm đánh giá tổng ở trung tâm."
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
  {
    id: "1",
    name: "Gậy Như Ý Kim Cô",
    activeItem: "310003457",
    refineItem: "310003463",
    baseAttr: "101",
    awakeAttr: "107",
    creatures: "110002513 / 110002514 / 110002515"
  },
  {
    id: "2",
    name: "Kim Cương Trác",
    activeItem: "310003458",
    refineItem: "310003464",
    baseAttr: "201",
    awakeAttr: "207",
    creatures: "110002516 / 110002517 / 110002518"
  },
  {
    id: "3",
    name: "Thương Hỏa Tiêm",
    activeItem: "310003459",
    refineItem: "310003465",
    baseAttr: "301",
    awakeAttr: "307",
    creatures: "110002519 / 110002520 / 110002521"
  },
  {
    id: "4",
    name: "Phong Hỏa Luân",
    activeItem: "310003460",
    refineItem: "310003466",
    baseAttr: "401",
    awakeAttr: "407",
    creatures: "110002522 / 110002523 / 110002524"
  },
  {
    id: "5",
    name: "Đao Ba Mũi Hai Lưỡi",
    activeItem: "310003461",
    refineItem: "310003467",
    baseAttr: "501",
    awakeAttr: "507",
    creatures: "110002525 / 110002526 / 110002527"
  },
  {
    id: "6",
    name: "Rìu Khai Sơn",
    activeItem: "310003462",
    refineItem: "310003468",
    baseAttr: "601",
    awakeAttr: "607",
    creatures: "110002528 / 110002529 / 110002530"
  },
  {
    id: "7",
    name: "Quạt Âm Dương",
    activeItem: "310004397",
    refineItem: "310004474",
    baseAttr: "801",
    awakeAttr: "807",
    creatures: "110002689 / 110002690 / 110002691"
  }
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
      (item) => `
        <tr>
          <td>${item.id}</td>
          <td><strong>${item.name}</strong></td>
          <td><code>${item.activeItem}</code></td>
          <td><code>${item.refineItem}</code></td>
          <td><code>${item.baseAttr}</code></td>
          <td><code>${item.awakeAttr}</code></td>
          <td><code>${item.creatures}</code></td>
        </tr>
      `
    )
    .join("");
}
