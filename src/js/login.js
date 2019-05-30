($(function() {
    $('.contentDiv-tab .tab1').on('click', function() {
        $('.userLogin').show();
        $('.phoneLogin').hide();
        $('.contentDiv-tab div').removeClass('active');
        $(this).addClass('active')
    });
    $('.contentDiv-tab .tab2').on('click', function() {
        $('.userLogin').hide();
        $('.phoneLogin').show();
        $('.contentDiv-tab div').removeClass('active');
        $(this).addClass('active')
    })
    console.log($('#loginBtn'))
    $('#loginBtn').on('click', function() {
        $.ajax({
            type: "get",
            url: "../php/login.php",
            data: {
                "uname": $('#unameInput').val(),
                "pwd": $('#pwdInput').val()
            },
            dataType: "json",
            success: function(response) {
                if (response.msg === true) {
                    alert('登录成功，跳转首页')
                    location.href = 'ch_index.html'
                } else {
                    alert('账号密码错误，请重新输入');
                    location.reload()
                }
            }
        });
    })
    $(document).on('keyup', function(ev) {
        if (ev.keyCode == 13) {
            $.ajax({
                type: "get",
                url: "../php/login.php",
                data: {
                    "uname": $('#unameInput').val(),
                    "pwd": $('#pwdInput').val()
                },
                dataType: "json",
                success: function(response) {
                    if (response.msg === true) {
                        alert('登录成功，跳转首页')
                        location.href = 'ch_index.html'
                    } else {
                        alert('账号密码错误，请重新输入');
                        location.reload()
                    }
                }
            });
        }
    })
}))