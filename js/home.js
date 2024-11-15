let currentIndex = 1;

// Hàm chuyển đổi hình ảnh
function changeImage() {
    // Lấy các hình ảnh
    let image1 = document.getElementById('anhgiua1');
    let image2 = document.getElementById('anhgiua2');

    // Ẩn hình ảnh hiện tại
    if (currentIndex === 1) {
        image1.style.display = 'none';
        image2.style.display = 'block';
        currentIndex = 2;
    } else {
        image1.style.display = 'block';
        image2.style.display = 'none';
        currentIndex = 1;
    }
}
setInterval(changeImage, 2000);