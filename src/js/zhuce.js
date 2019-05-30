$(function() {
    var phoneReg = /^[1][1-8]\d{9}$/;
    var pwdReg = /^[A-z]\w{5,29}$/;
    $('#phoneInput').on('keyup', function() {
        if (phoneReg.test($('#phoneInput').val())) {
            $('#phoneCheck').hide()
        } else {
            $('#phoneCheck').show()
        }
    });
    $('#pwdInput').on('keyup', function() {
            if (pwdReg.test($('#pwdInput').val())) {
                $('#pwdCheck').hide()
            } else {
                $('#pwdCheck').show()
            }
        })
        // while (phoneReg.test($('#phoneInput').val()) && pwdReg.test($('#pwdInput').val())) {
    $('#zhuceBtn').on('click', function() {
        if (phoneReg.test($('#phoneInput').val()) && pwdReg.test($('#pwdInput').val())) {
            $.ajax({
                type: "get",
                url: "../php/zhuce.php",
                data: {
                    "uname": $('#phoneInput').val(),
                    "pwd": $('#pwdInput').val()
                },
                dataType: "json",
                success: function(response) {
                    if (response.hasname === true) {
                        // $('#phoneCheck').show().html(response.msg);
                        alert(response.msg + ",点击重新输入");
                        location.reload()
                    } else if (response.hasname === false) {
                        alert('注册成功, 点击跳转登录页面')
                        location.href = 'login.html'
                    }
                }
            });
        }
    });
    $(document).on('keyup', function(ev) {
        if (phoneReg.test($('#phoneInput').val()) && pwdReg.test($('#pwdInput').val()) && ev.keyCode == 13) {
            $.ajax({
                type: "get",
                url: "../php/zhuce.php",
                data: {
                    "uname": $('#phoneInput').val(),
                    "pwd": $('#pwdInput').val()
                },
                dataType: "json",
                success: function(response) {
                    if (response.hasname === true) {
                        $('#phoneCheck').show().html(response.msg)
                    } else if (response.hasname === false) {
                        alert('注册成功, 点击跳转登录页面')
                        location.href = 'login.html'
                    }
                }
            });
        }
    })
})