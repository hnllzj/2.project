$(function() {
    var lc = $('#main .floor');
    var loutili = $('#float-lBox li');
    $(window).on('scroll', function() {
        // console.log($('#float-lBox'));
        var st = $(window).scrollTop();
        if (st >= 500 && st < 3900) {
            $('#float-lBox').show();
            $('#back-top').show();
        } else if (st <= 500) {
            $('#float-lBox').hide();
            $('#back-top').hide();
        } else if (st >= 3933) {
            $('#float-lBox').hide();
        }
        lc.each(function(index, element) { //index:元素的索引，element:当前的元素   
            var top1 = lc.eq(index).offset().top + 300;
            if (top1 > st) { //如果盒子的top值大于滚动条的top值，添加active.
                loutili.removeClass('active');
                loutili.eq(index).addClass('active');
                return false;
            }
        });

    });
    loutili.on('click', function() {
        var top2 = lc.eq($(this).index()).offset().top; //当前楼梯li项对应的楼层的top值。
        $('html,body').animate({
            scrollTop: top2
        })
    });
    $('#back-top').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        })
    });
    $.ajax({
        type: "get",
        url: "../php/getproduct.php",
        dataType: "json",
        success: function(response) {

            var tv_change = $('#tv-change');
            var template = '';
            response.forEach(function(elm, i) {
                var pic = JSON.parse(elm.pic);
                // console.log(pic)
                template = `
                <div class="main-common-goods">
                <div class="main-common-goods-img">
                    <a href="detail.html?id=${elm.id}" target="_blank">
                        <img class="lazy" alt="" src="${pic[0].src}">
                    </a>
                </div>
                <div class="main-common-goods-text">
                    <h2><a href="javascript:;" target="_blank" title="65英寸OLED电视">${elm.title}</a></h2>
                    <p>${elm.details}</p>
                    <h3>￥${elm.price}</h3>
                </div>
            </div>`;
                // console.log(template)
                tv_change.append(template);
                // console.log(tv_change)
            });
        }
    });
    // $("img.lazy").lazyload({
    //     effect: "fadeIn",
    //     placeholder: "../images/timg.gif"
    // });
});