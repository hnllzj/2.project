$(function() {
    var shop = cookie.get('shop');
    console.log(1)
    if (shop) {
        shop = JSON.parse(shop);
        // console.log(shop)
        var idList = shop.map(elm => elm.id).join();
        $.ajax({
            type: "get",
            url: "../php/shopcar.php",
            data: {
                "idList": idList
            },
            dataType: "json",
            success: function(response) {
                console.log(response)
                var template = "";
                response.forEach(function(elm) {
                    console.log(elm);
                    var pic = JSON.parse(elm.pic);
                    var arr = shop.filter((val, i) => {
                        return val.id === elm.id;
                    });
                    template = `
                    <div class="pro-grid ">
                    <div class="grid-check-box ">
                        <input type="checkbox " id="pro-${elm.id} ">
                    </div>
                    <div class="grid-pro-info ">
                        <div class="grid-pro-info-top ">
                            <div class="like-del ">
                                <a href="javascript:; " class="pro-like "></a>
                                <a href="javascript:; " class="pro-del "></a>
                            </div>
                        </div>
                        <div class="grid-pro-info-bot ">
                            <div class="pro-img ">
                                <img src="${pic[0].src} " width="60px " height="60px " alt="${pic[0].title}">
                            </div>
                            <div class="pro-title ">
                                <p>${elm.title}</p>
                            </div>
                            <div class="pro-price ">
                                <p>
                                    单价<span>${elm.price}</span>元
                                </p>
                            </div>
                            <div class="pro-num ">
                                    <span>数量</span>
                                <input type="number " value="${arr[0].num}" min="1 " max="${elm.num}">
                            </div>
                            <div class="pro-buy ">
                                <a href="javascript:; ">购买</a>
                            </div>
                        </div>
                    </div>
                </div>`;

                    $('.pro-list').append(template);
                });
            }
        });
    }
});