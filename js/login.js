$(document).ready(function (){
    function checkTen() {
        let ten = $("#name").val().trim();
        let nameRegex = /^([A-Z][a-z]+\s){1,}[A-Z][a-z]+$/;
        if (ten === "") {
            $("#ckName").html("Tên đăng nhập không được rỗng");
            return false;
        } else if (nameRegex.test(ten)) {
            $("#ckName").html("*");
            return true;
        } else {
            $("#ckName").html("Tên đăng nhập phải từ 2 từ chữ trở lên và các chữ cái đầu tiên phải viết hoa");
            return false;
        }
    }

    function checkSDT() {
        let soDienThoai = $("#phone").val().trim();
        let phoneRegex = /^(08|03|07|09)\d{8}$/;
        if (soDienThoai === "") {
            $("#ckPhone").html("Số điện thoại không được rỗng");
            return false;
        } else if (phoneRegex.test(soDienThoai)) {
            $("#ckPhone").html("*");
            return true;
        } else {
            $("#ckPhone").html("Số điện thoại không đúng");
            return false;
        }
    }

    function checkMail() {
        let mail = $("#email").val().trim();
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (mail === "") {
            $("#ckEmail").html("Email không được rỗng");
            return false;
        } else if (emailRegex.test(mail)) {
            $("#ckEmail").html("*");
            return true;
        } else {
            $("#ckEmail").html("Email không đúng");
            return false;
        }
    }

    function checkPass() {
        let matKhau = $("#password").val().trim();
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (matKhau === "") {
            $("#ckPassWord").html("Mật khẩu không được rỗng");
            return false;
        } else if (passwordRegex.test(matKhau)) {
            $("#ckPassWord").html("*");
            return true;
        } else {
            $("#ckPassWord").html("Mật khẩu phải có ít nhất 1 chữ cái in hoa, 1 chữ cái thường và 1 chữ số, độ dài tối thiểu là 6 ký tự");
            return false;
        }
    }

    function checkPassAgain() {
        let xacNhanMatKhau = $("#confirm-password").val().trim();
        let matKhau = $("#password").val().trim();
        if (xacNhanMatKhau === "") {
            $("#ckConfirm").html("Xác nhận mật khẩu không được rỗng");
            return false;
        } else if (matKhau === xacNhanMatKhau) {
            $("#ckConfirm").html("*");
            return true;
        } else {
            $("#ckConfirm").html("Mật khẩu không trùng khớp");
            return false;
        }
    }

    $("#name").blur(function () {
        checkTen();
    });

    $("#phone").blur(function () {
        checkSDT();
    });

    $("#email").blur(function () {
        checkMail();
    });

    $("#password").blur(function () {
        checkPass();
    });

    $("#confirm-password").blur(function () {
        checkPassAgain();
    });

    function checkPassAgain() {
        let xacNhanMatKhau = $("#confirm-password").val().trim()
        let matKhau = $("#password").val().trim()
        if(xacNhanMatKhau === ""){
            $("#ckConfirm").html("Xác nhận mật khẩu không được rỗng")
            return false
        } else if (matKhau === xacNhanMatKhau) {
            $("#ckConfirm").html("*")
            return true
        } else {
            $("#ckConfirm").html("Mật khẩu không trùng khớp")
            return false
        }
    }

    $("#confirm-password").blur(function() {
        checkPassAgain();
    })

    document.getElementById("btnSign").addEventListener("click", function(event) {
        event.preventDefault();
        if(checkTen() && checkSDT() &&  checkMail() && checkPass() && checkPassAgain() ){
            let ten = $("#name").val().trim();
            let soDienThoai = $("#phone").val().trim();
            let mail = $("#email").val().trim();
            let matKhau = $("#password").val().trim()
            var user = {
                name: ten,
                phone: soDienThoai,
                email: mail,
                password: matKhau
            };
            var json = JSON.stringify(user);
            localStorage.setItem(ten, json);
            
            // Hiển thị alert thông báo đăng ký thành công
            alert("Đăng ký thành công");
    
           
            window.location.href = "../html/dangnhap.html"; 
        }
        else {
            alert("Vui lòng kiểm tra lại thông tin đăng kí!");
        }
    })

})

// Hàm đăng nhập
function login(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(name);
    if (user == null) {
        alert("Tài khoản sai");
    } else {
        var data = JSON.parse(user);
        if (name === data.name && password === data.password) {
            alert("Đăng nhập thành công");
            localStorage.setItem("loggedInUser", name); 
            document.getElementById("userLoginStatus").innerHTML = name + ' <span id="logoutButton" style="color-white"> <br>Đăng xuất</span>';
            // Thực hiện chuyển hướng sau khi đăng nhập thành công
            window.location.href = "../html/home.html";
        } else {
            alert("Tài khoản sai");
        }
    }
}

// Cập nhật trạng thái đăng nhập khi trang được tải
window.onload = function() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser != null) {
        document.getElementById("userLoginStatus").innerHTML = loggedInUser + ' <span id="logoutButton" style="color-white"><br>Đăng xuất</span>';
    } else {
        document.getElementById("userLoginStatus").innerHTML = "Tài khoản <br> Đăng nhập/Đăng kí";
    }
}

// Thêm sự kiện cho nút đăng xuất
document.addEventListener('DOMContentLoaded', function() {
    // Thêm sự kiện cho nút đăng xuất
    document.getElementById("userLoginStatus").addEventListener("click", function(e) {
        if (e.target && e.target.id == 'logoutButton') { 
            localStorage.removeItem("loggedInUser"); 
            this.innerHTML = 'Tài khoản <br> <p style="margin-left: 5%;">Đăng nhập/Đăng kí</p>';
        }
    });
});
