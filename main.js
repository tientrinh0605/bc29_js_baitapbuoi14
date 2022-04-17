//* Bài 1: Sắp Xếp Lại 3 Số Lớn Dần.
document.getElementById("sapXepSo").onclick = function () {
    var soThu1 = document.getElementById("soThu1").value;
    var soThu2 = document.getElementById("soThu2").value;
    var soThu3 = document.getElementById("soThu3").value;
    var so1 = 0;
    var so2 = 0;
    var so3 = 0;

    if (soThu1 > soThu2) {
        if (soThu2 > soThu3) {
            so1 = soThu3;
            so2 = soThu2;
            so3 = soThu1;
        } else {
            if (soThu1 > soThu3) {
                so1 = soThu2;
                so2 = soThu3;
                so3 = soThu1
            } else {
                so1 = soThu2;
                so2 = soThu1;
                so3 = soThu3
            }

        }
    } else {
        if (soThu1 > soThu3) {
            so1 = soThu3;
            so2 = soThu1;
            so3 = soThu2;
        } else {
            if (soThu2 > soThu3) {
                so1 = soThu1;
                so2 = soThu3;
                so3 = soThu2;
            } else {
                so1 = soThu1;
                so2 = soThu2;
                so3 = soThu3;
            }
        }
    }
    console.log(so1, so2, so3);
    kQ = " Thứ Tự Số Lớn Dần Là: " + so1 + ";" + so2 + ";" + so3;
    document.getElementById("ketQuaSX").innerHTML = kQ;
}
//* Hết Bài 1: Sắp Xếp Lại 3 Số Lớn Dần.
// Bài 2 chào Thành Viên
document.getElementById("chuyenNguoiDung").style.display = 'none';
document.getElementById("thongBao").style.display = 'none';
document.getElementById("dangNhap").onclick = function () {
    var nguoiDung = document.getElementById("nguoiDung").value;
    var loiChao = " Chào mừng " + nguoiDung + " quay trở lại!";
    document.getElementById("dangNhap").style.display = 'none';
    document.getElementById("thongBao").style.display = 'block';
    document.getElementById("thongBao").innerHTML = loiChao;
    document.getElementById("chuyenNguoiDung").style.display = 'block';
}
document.getElementById("chuyenNguoiDung").onclick = function () {
    location.reload();
}
// Hết Bài 2 chào Thành Viên
// Bài 3 Cho ba số nguyên và xuất có bao nhiêu số lẻ và bao nhiêu số chẳn
document.getElementById("kqSoChanSoLe").onclick = function () {
    var soNguyenThu1 = document.getElementById("soNguyen1").value * 1;
    var soNguyenThu2 = document.getElementById("soNguyen2").value * 1;
    var soNguyenThu3 = document.getElementById("soNguyen3").value * 1;
    var soSoChan = 0;
    var soSoLe = 0;
    if (soNguyenThu1 % 2 == 0) {
        soSoChan = 1;
    } else {
        soSoLe = 1;
    }
    if (soNguyenThu2 % 2 == 0) {
        soSoChan = soSoChan + 1;
    } else {
        soSoLe = soSoLe + 1;
    }
    if (soNguyenThu3 % 2 == 0) {
        soSoChan = soSoChan + 1;
    } else {
        soSoLe = soSoLe + 1;
    }
    kqChanLe = " Số Số Chẳn Là: " + soSoChan + "<br/>" + " Số Số Lẻ Là: " + soSoLe;
    document.getElementById("ketQuaChanLe").innerHTML = kqChanLe;

}
// Hết Bài 3 Cho ba số nguyên và xuất có bao nhiêu số lẻ và bao nhiêu số chẳn
// Bài 4 Phân Biệt Hình Tam Giác Từ Thông Số Các Cạnh
document.getElementById("kqTamGiac").onclick = function () {
    var canh1 = document.getElementById("canh1").value * 1;
    var canh2 = document.getElementById("canh2").value * 1;
    var canh3 = document.getElementById("canh3").value * 1;
    var canhLonNhat = 0;
    var canhNho1 = 0;
    var canhNho2 = 0;
    if (canh1 == 0 || canh2 == 0 || canh3 == 0) {
        kQTamGiac = "Vui lòng nhập lại. Thông Số Này Không Phải Các Cạnh Tam Giác";
    } else {
        if (canh1 == canh2 && canh2 == cạnh3 && canh3 == canh1) {
            kQTamGia = "Tam giác này là tam giác đều";
        }
        if (canh1 == canh2 || canh2 == canh3 || canh1 == canh3) {
            kQTamGiac = "Tam giác này là tam giác cân";
        }else {
            if(canh1 > canh2 && canh1 > canh3){
                canhLonNhat = canh1;
                canhNho1 = canh2;
                canhNho2 = canh3;
            }
            if( canh2 > canh1 && canh2 > canh3){
                canhLonNhat = canh2;
                canhNho1 = canh1;
                canhNho2 = canh3;
            }
            if( canh3 > canh1 && canh3 > canh2){
                canhLonNhat = canh3;
                canhNho1 = canh1;
                canhNho2 = canh2;
            }
            var soLonNhat1 = Math.sqrt((canhNho1*canhNho1)+ (canhNho2*canhNho2));
            if( soLonNhat1 == canhLonNhat){
                kQTamGiac = "Tam giác này là tam giác Vuông";
            }else{
                kQTamGiac = "Tam giác này là tam giác thường";
            }
        }
    }
    document.getElementById("ketQuaTamGiac").innerHTML = kQTamGiac;
}
// Hết Bài 4: Phân Biệt Tam Giác Từ 3 Thông Số Của Ba Cạnh