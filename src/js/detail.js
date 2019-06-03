$(function() {
    var id = location.search.split('=')[1];
    $.ajax({
        type: "get",
        url: "../php/detail.php",
        data: {
            id: id
        },
        dataType: "json",
        success: function(response) {
            var pic = JSON.parse(response.pic);
            var tv_change = $('#tv-change');
            var template = '';
            // console.log(pic)
            template = `
                <div class="pro-detail-con-inner">
                    <div class="display-box">
                        <div class="pro-pic">
                            <div class="small-pic">
                                <img src="${pic[0].src}" class="smallpic" width="510" height="510" style="display: block">
                                <div class="movebox"></div>
                            </div>
                            <div class="big-pic">
                                <img src="${pic[0].src}" class="bigpic" width="1275" height="1275" style="display: block">
                            </div>
                        </div>
                        <div class="pro-pic-items">
                            <a href="javascript:;" class="pro-pre"></a>
                            <div class="pro-items-pic">
                                <ul>
                                    <li>
                                        <a href="">
                                            <img src="../images/W020190429582049528321.jpg" alt=""></a>
                                    </li>
                                    <li>
                                        <a href=""><img src="../images/W020170909305830178876.jpg" alt=""></a>
                                    </li>
                                    <li>
                                        <a href=""><img src="../images/W020170405557200893333 .jpg" alt=""></a>
                                    </li>
                                    <li>
                                        <a href=""><img src="../images/W020170405557201016239.jpg" alt=""></a>
                                    </li>
                                    <li>
                                        <a href=""><img src="../images/W020170405557201113287.jpg" alt=""></a>
                                    </li>
                                </ul>
                            </div>
                            <a href="javascript:;" class="pro-next"></a>

                        </div>
                    </div>
                    <div class="pro-data">
                        <div class="pro-name">
                            <h2>
                            ${response.title}
                                <p>${response.details}</p>
                            </h2>
                            <a href="javascript:;">加入对比</a>
                        </div>
                        <div class="pro-price">
                            <strong>
                                    <span id="goodsPrice">￥${response.price}</span>
                            </strong>
                        </div>
                        <div class="pro-type">
                            <span>选择规格：</span>
                            <ul>
                                <li><a href="javascript:;" style="    border: 1px solid #f12020;
                                    color: #f12020;">75吋</a></li>
                                <li><a href="javascript:;">65吋</a></li>
                                <li><a href="javascript:;">50吋</a></li>
                                <li><a href="javascript:;">55吋</a></li>
                                <li><a href="javascript:;">50吋</a></li>
                                <li><a href="javascript:;">65吋</a></li>
                                <li><a href="javascript:;">55吋</a></li>
                                <li><a href="javascript:;">50吋</a></li>
                                <li><a href="javascript:;" style="    border: 1px solid #f12020;
                                    color: #f12020;">75吋</a></li>
                            </ul>
                        </div>
                        <div class="pro-where">
                            <div class="pro-address">
                                <span>配送地址：</span>
                                <select name="address" id="pro-address">
                                    <option value="北京市">北京市</option>
                                    <option value="湖南省">湖南省</option>
                                    <option value="浙江省">浙江省</option>
                                    <option value="浙江省">上海市</option>
                                    <option value="浙江省">广州市</option>
                                </select>
                            </div>
                            <p>服务信息：
                                <span>由长虹官方发货，并提供售后服务。</span>
                            </p>
                        </div>
                        <div class="pro-num">
                            <div class="choose-num">
                                <span>商品数量：</span>
                                <input type="number" value="1" min="1" max="50" id="num">
                            </div>
                            <div class="pro-btns">
                                <a href="javascript:;" class="buy-now">立即购买</a>
                                <a href="javascript:;" class="toShopCar" id="add">加入购物车</a>
                            </div>
                            <p class="pro-handle">
                                <a href="javascript:;" class="pro-kf">在线客服</a>
                                <a href="javascript:;" class="pro-sc">收藏</a>
                                <a href="javascript:;" class="pro-fx">分享</a>
                                <span class="pro-fx-type">
                                <a href="javascript:;" class="pro-fx-wb">
                                    <img src="../images/share-sinaminiblog.gif" alt="#">
                                </a>
                                <a href="javascript:;" class="pro-fx-wx">
                                        <img src="../images/share-weixin.png" alt="#">
                                </a>
                                <a href="javascript:;" class="pro-fx-qq">
                                        <img src="../images/share-qzone.gif" alt="#">
                                </a>
                                <a href="javascript:;" class="pro-fx-db">
                                        <img src="../images/share-douban.png" alt="#">
                                </a>
                            </span>
                            </p>
                        </div>
                    </div>
                </div>
            `;
            // console.log(template)
            // console.log(response.id)

            // 将模板字符串放入页面 同时将商品资料存入cookie

            tv_change.append(template).find('#add').on('click', function(ev) {
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
                    if (shop.some(elm => elm.id == id)) {
                        shop.forEach(function(elm, i) {
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
            small.on('mouseover', function() {
                movebox.show();
                big.show();
                // console.log(1)
                small.on('mousemove', function(ev) {
                    ev = ev || event;
                    var left = ev.pageX - scale.offset().left - (movebox.width() / 2);
                    var top = ev.pageY - scale.offset().top - (movebox.height() / 2);
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
                    })

                    bigpic.css({
                        'left': -left * propX + "px",
                        'top': -top * propY + "px"
                    })
                });
                small.on('mouseout', function() {
                    movebox.hide();
                    big.hide();
                });
            });
        }
    });
    $(window).on('scroll', function() {
        var st = $(window).scrollTop();
        if (st >= 500) {
            $('#back-top').show();
        } else {
            $('#back-top').hide();
        }
    });
    $('#back-top').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        })
    });
});