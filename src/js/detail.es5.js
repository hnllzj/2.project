"use strict";

$(function () {
    var id = location.search.split('=')[1];
    $.ajax({
        type: "get",
        url: "../php/detail.php",
        data: {
            id: id
        },
        dataType: "json",
        success: function success(response) {
            var pic = JSON.parse(response.pic);
            var tv_change = $('#tv-change');
            var template = '';
            // console.log(pic)
            template = "\n                <div class=\"pro-detail-con-inner\">\n                    <div class=\"display-box\">\n                        <div class=\"pro-pic\">\n                            <div class=\"small-pic\">\n                                <img src=\"" + pic[0].src + "\" class=\"smallpic\" width=\"510\" height=\"510\" style=\"display: block\">\n                                <div class=\"movebox\"></div>\n                            </div>\n                            <div class=\"big-pic\">\n                                <img src=\"" + pic[0].src + "\" class=\"bigpic\" width=\"1275\" height=\"1275\" style=\"display: block\">\n                            </div>\n                        </div>\n                        <div class=\"pro-pic-items\">\n                            <a href=\"javascript:;\" class=\"pro-pre\"></a>\n                            <div class=\"pro-items-pic\">\n                                <ul>\n                                    <li>\n                                        <a href=\"\">\n                                            <img src=\"../images/W020190429582049528321.jpg\" alt=\"\"></a>\n                                    </li>\n                                    <li>\n                                        <a href=\"\"><img src=\"../images/W020170909305830178876.jpg\" alt=\"\"></a>\n                                    </li>\n                                    <li>\n                                        <a href=\"\"><img src=\"../images/W020170405557200893333 .jpg\" alt=\"\"></a>\n                                    </li>\n                                    <li>\n                                        <a href=\"\"><img src=\"../images/W020170405557201016239.jpg\" alt=\"\"></a>\n                                    </li>\n                                    <li>\n                                        <a href=\"\"><img src=\"../images/W020170405557201113287.jpg\" alt=\"\"></a>\n                                    </li>\n                                </ul>\n                            </div>\n                            <a href=\"javascript:;\" class=\"pro-next\"></a>\n\n                        </div>\n                    </div>\n                    <div class=\"pro-data\">\n                        <div class=\"pro-name\">\n                            <h2>\n                            " + response.title + "\n                                <p>" + response.details + "</p>\n                            </h2>\n                            <a href=\"javascript:;\">\u52A0\u5165\u5BF9\u6BD4</a>\n                        </div>\n                        <div class=\"pro-price\">\n                            <strong>\n                                    <span id=\"goodsPrice\">\uFFE5" + response.price + "</span>\n                            </strong>\n                        </div>\n                        <div class=\"pro-type\">\n                            <span>\u9009\u62E9\u89C4\u683C\uFF1A</span>\n                            <ul>\n                                <li><a href=\"javascript:;\" style=\"    border: 1px solid #f12020;\n                                    color: #f12020;\">75\u540B</a></li>\n                                <li><a href=\"javascript:;\">65\u540B</a></li>\n                                <li><a href=\"javascript:;\">50\u540B</a></li>\n                                <li><a href=\"javascript:;\">55\u540B</a></li>\n                                <li><a href=\"javascript:;\">50\u540B</a></li>\n                                <li><a href=\"javascript:;\">65\u540B</a></li>\n                                <li><a href=\"javascript:;\">55\u540B</a></li>\n                                <li><a href=\"javascript:;\">50\u540B</a></li>\n                                <li><a href=\"javascript:;\" style=\"    border: 1px solid #f12020;\n                                    color: #f12020;\">75\u540B</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"pro-where\">\n                            <div class=\"pro-address\">\n                                <span>\u914D\u9001\u5730\u5740\uFF1A</span>\n                                <select name=\"address\" id=\"pro-address\">\n                                    <option value=\"\u5317\u4EAC\u5E02\">\u5317\u4EAC\u5E02</option>\n                                    <option value=\"\u6E56\u5357\u7701\">\u6E56\u5357\u7701</option>\n                                    <option value=\"\u6D59\u6C5F\u7701\">\u6D59\u6C5F\u7701</option>\n                                    <option value=\"\u6D59\u6C5F\u7701\">\u4E0A\u6D77\u5E02</option>\n                                    <option value=\"\u6D59\u6C5F\u7701\">\u5E7F\u5DDE\u5E02</option>\n                                </select>\n                            </div>\n                            <p>\u670D\u52A1\u4FE1\u606F\uFF1A\n                                <span>\u7531\u957F\u8679\u5B98\u65B9\u53D1\u8D27\uFF0C\u5E76\u63D0\u4F9B\u552E\u540E\u670D\u52A1\u3002</span>\n                            </p>\n                        </div>\n                        <div class=\"pro-num\">\n                            <div class=\"choose-num\">\n                                <span>\u5546\u54C1\u6570\u91CF\uFF1A</span>\n                                <input type=\"number\" value=\"1\" min=\"1\" max=\"50\" id=\"num\">\n                            </div>\n                            <div class=\"pro-btns\">\n                                <a href=\"javascript:;\" class=\"buy-now\">\u7ACB\u5373\u8D2D\u4E70</a>\n                                <a href=\"javascript:;\" class=\"toShopCar\" id=\"add\">\u52A0\u5165\u8D2D\u7269\u8F66</a>\n                            </div>\n                            <p class=\"pro-handle\">\n                                <a href=\"javascript:;\" class=\"pro-kf\">\u5728\u7EBF\u5BA2\u670D</a>\n                                <a href=\"javascript:;\" class=\"pro-sc\">\u6536\u85CF</a>\n                                <a href=\"javascript:;\" class=\"pro-fx\">\u5206\u4EAB</a>\n                                <span class=\"pro-fx-type\">\n                                <a href=\"javascript:;\" class=\"pro-fx-wb\">\n                                    <img src=\"../images/share-sinaminiblog.gif\" alt=\"#\">\n                                </a>\n                                <a href=\"javascript:;\" class=\"pro-fx-wx\">\n                                        <img src=\"../images/share-weixin.png\" alt=\"#\">\n                                </a>\n                                <a href=\"javascript:;\" class=\"pro-fx-qq\">\n                                        <img src=\"../images/share-qzone.gif\" alt=\"#\">\n                                </a>\n                                <a href=\"javascript:;\" class=\"pro-fx-db\">\n                                        <img src=\"../images/share-douban.png\" alt=\"#\">\n                                </a>\n                            </span>\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            ";
            // console.log(template)
            // console.log(response.id)

            // 将模板字符串放入页面 同时将商品资料存入cookie

            tv_change.append(template).find('#add').on('click', function (ev) {
                ev = ev || event;
                ev.preventDefault();
                ev.returnValue = false;
                addShopCar(response.id, response.price, $('#num').val());
            });

            function addShopCar(id, price, num) {
                var shop = cookie.get('shop');
                var product = {
                    "id": id,
                    "price": price,
                    "num": num
                };

                if (shop) {
                    shop = JSON.parse(shop);
                    if (shop.some(function (elm) {
                        return elm.id == id;
                    })) {
                        shop.forEach(function (elm, i) {
                            elm.id == id ? elm.num = num : null;
                        });
                    } else {
                        // shop = [];
                        shop.push(product);
                    }
                    cookie.set('shop', JSON.stringify(shop), 1);
                } else {
                    shop = [];
                    shop.push(product);
                    cookie.set('shop', JSON.stringify(shop), 1);
                }
            }

            // 放大镜效果


            var scale = $('.pro-pic'),
                small = $('.small-pic'),
                movebox = $('.movebox'),
                big = $('.big-pic'),
                bigpic = $('.bigpic');
            small.on('mouseover', function () {
                movebox.show();
                big.show();
                // console.log(1)
                small.on('mousemove', function (ev) {
                    ev = ev || event;
                    var left = ev.pageX - scale.offset().left - movebox.width() / 2;
                    var top = ev.pageY - scale.offset().top - movebox.height() / 2;
                    var propX = bigpic.width() / small.width();
                    var propY = bigpic.height() / small.height();
                    if (left < 0) {
                        left = 0;
                    } else if (left > small.width() - movebox.width()) {
                        left = small.width() - movebox.width() - 2;
                    }
                    if (top < 0) {
                        top = 0;
                    } else if (top > small.height() - movebox.height()) {
                        top = small.height() - movebox.height() - 2;
                    }
                    movebox.css({
                        'left': left + 'px',
                        'top': top + 'px'
                    });

                    bigpic.css({
                        'left': -left * propX + "px",
                        'top': -top * propY + "px"
                    });
                });
                small.on('mouseout', function () {
                    movebox.hide();
                    big.hide();
                });
            });
        }
    });
    $(window).on('scroll', function () {
        var st = $(window).scrollTop();
        if (st >= 500) {
            $('#back-top').show();
        } else {
            $('#back-top').hide();
        }
    });
    $('#back-top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        });
    });
});
