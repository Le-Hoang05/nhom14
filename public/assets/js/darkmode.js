const themeToggle = document.getElementById("theme__switcher");
const bodyEl = document.body;

// Hàm thiết lập theme
function setTheme(theme) {
    // Nếu theme là "dark", thêm class "dark" và xóa class "light"
    bodyEl.classList.toggle("dark", theme === "dark");
    bodyEl.classList.toggle("light", theme !== "dark");

    // Điều chỉnh bộ lọc cho nút chuyển đổi
    themeToggle.style.filter = theme === "dark" ? "invert(75%)" : "none";
}

// Hàm chuyển đổi theme giữa sáng và tối
function toggleTheme() {
    const currentTheme = bodyEl.classList.contains("dark") ? "light" : "dark";
    setTheme(currentTheme);

    // Lưu trạng thái theme vào LocalStorage
    localStorage.setItem("theme", currentTheme);
}

// Gắn sự kiện click vào nút chuyển đổi
themeToggle.addEventListener("click", toggleTheme);

// Kiểm tra theme đã lưu trong LocalStorage và thiết lập ban đầu
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);