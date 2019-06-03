"use strict";

$(function () {
    var shop = cookie.get('shop');
    console.log(1);
    if (shop) {
        shop = JSON.parse(shop);
        // console.log(shop)
        var idList = shop.map(function (elm) {
            return elm.id;
        }).join();
        $.ajax({
            type: "get",
            url: "../php/shopcar.php",
            data: {
                "idList": idList
            },
            dataType: "json",
            success: function success(response) {
                console.log(response);
                var template = "";
                response.forEach(function (elm) {
                    console.log(elm);
                    var pic = JSON.parse(elm.pic);
                    var arr = shop.filter(function (val, i) {
                        return val.id === elm.id;
                    });
                    template = "\n                    <div class=\"pro-grid \">\n                    <div class=\"grid-check-box \">\n                        <input type=\"checkbox \" id=\"pro-" + elm.id + " \">\n                    </div>\n                    <div class=\"grid-pro-info \">\n                        <div class=\"grid-pro-info-top \">\n                            <div class=\"like-del \">\n                                <a href=\"javascript:; \" class=\"pro-like \"></a>\n                                <a href=\"javascript:; \" class=\"pro-del \"></a>\n                            </div>\n                        </div>\n                        <div class=\"grid-pro-info-bot \">\n                            <div class=\"pro-img \">\n                                <img src=\"" + pic[0].src + " \" width=\"60px \" height=\"60px \" alt=\"" + pic[0].title + "\">\n                            </div>\n                            <div class=\"pro-title \">\n                                <p>" + elm.title + "</p>\n                            </div>\n                            <div class=\"pro-price \">\n                                <p>\n                                    \u5355\u4EF7<span>" + elm.price + "</span>\u5143\n                                </p>\n                            </div>\n                            <div class=\"pro-num \">\n                                    <span>\u6570\u91CF</span>\n                                <input type=\"number \" value=\"" + arr[0].num + "\" min=\"1 \" max=\"" + elm.num + "\">\n                            </div>\n                            <div class=\"pro-buy \">\n                                <a href=\"javascript:; \">\u8D2D\u4E70</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>";

                    $('.pro-list').append(template);
                });
            }
        });
    }
});
