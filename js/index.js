$(document).ready(function() {
    var i = 1;
    $("#btn2").click(function() {
        $("#myModal").modal();
    });

    function kiemTraTen() {
        var i = 1;
        let maKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("#tbName").html("Không để trống");
            return false;
        }
        if (!maKT.test($("#Name").val())) {
            $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số ");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);

    function kiemTraSCMND() {
        var mauKt = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SCMND").val() == "") {
            $("#tbSCMND").html("KHông để trống");
            return false;
        }
        if (!mauKt.test($("#SCMND").val())) {
            $("#tbSCMND").html("Theo dạng xxx-xxx-xxx trong đó x là số");
            return true;
        }
        $("#tbSCMND").html("*");
        return true;
    }

    $("#SCMND").blur(kiemTraSCMND);

    function KiemTraDiaChi() {
        var maKT = /^[A-Z][A-Za-z0-9]+$/;
        if ($("#QQ").val() == "") {
            $("#tbQQ").html("Không để trống");
            return false;
        }
        if (!maKT.test($("#!!").val())) {
            $("#tbQQ").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbQQ").html("*");
        return true;
    }
    $("#QQ").blur(KiemTraDiaChi);



    function kiemTraSDT() {
        var mauKt = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("KHông để trống");
            return false;
        }
        if (!mauKt.test($("#SDT").val())) {
            $("#tbSDT").html("Theo dạng 09x-xxx-xxx trong đó x là số");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemTraSDT);

    $("#Save").click(function() {
        if (kiemTraTen() == true && kiemTraSCMND() == true && KiemTraDiaChi() == true) {
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#SCMND").val() + "</th>";
            row += "<th>" + $("#QQ").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#ADD").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })

})