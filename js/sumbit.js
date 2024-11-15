function submit() {
  if (document.getElementById("1").value == "" || document.getElementById("2").value == "" || document.getElementById("3").value == "") {
    alert("Vui lòng nhập đầy đủ thông tin!");
  } else {
    alert("Cảm ơn bạn đã gửi ý kiến cho chúng tôi!");
    // Làm mới trang web sau khi ấn OK trên alert
    location.reload();
  }
}