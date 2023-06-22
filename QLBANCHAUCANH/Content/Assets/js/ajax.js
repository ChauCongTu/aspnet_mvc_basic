$(document).ready(function () {
    $("#button_test").click(function () {
        console.log($("#soLuongPhanLoai").val());
    });

    var soluong = $("#soLuongPhanLoai").val();
    for (var i = 1; i <= soluong; i++) {
        var maPhanLoai = $("#maPhanLoai_" + i).val();
        (function (maPhanLoai) {
            $("#luachon_" + maPhanLoai).click(function () {
                console.log(maPhanLoai);
                $.ajax({
                    url: '/SanPhams/LoadSanPham',
                    type: 'get',
                    data: {
                        maPhanLoai: maPhanLoai
                    },
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                        $("#item-list").empty();
                        data.forEach(function (product) {
                            $("#item-list").append(
                                '<div class="col-12 col-sm-6 col-md-12 col-xl-6">' +
                                '    <div class="single-product-wrapper">' +
                                '        <div class="product-img">' +
                                '            <img src="/img/product-img/' + product.AnhDaiDien + '" alt="">' +
                                '                <!-- Hover Thumb -->' +
                                '                <img class="hover-img" src="/img/product-img/' + product.AnhDaiDien + '" alt="">' +
                                '                </div>' +
                                '                <div class="product-description d-flex align-items-center justify-content-between">' +
                                '                    <div class="product-meta-data">' +
                                '                        <div class="line"></div>' +
                                '                        <p class="product-price">' + product.DonGiaBanNhoNhat + '</p>' +
                                '                        <a href="product-details.html">' +
                                '                            <h6>' + product.TenSanPham + '</h6>' +
                                '                        </a>' +
                                '                   </div>' +
                                '                    <!-- Ratings & Cart -->' +
                                '                  <div class="ratings-cart text-right">' +
                                '                   <div class="ratings">' +
                                '                       <i class="fa fa-star" aria-hidden="true"></i>' +
                                '                       <i class="fa fa-star" aria-hidden="true"></i>' +
                                '                       <i class="fa fa-star" aria-hidden="true"></i>' +
                                '                       <i class="fa fa-star" aria-hidden="true"></i>' +
                                '                       <i class="fa fa-star" aria-hidden="true"></i>' +
                                '                   </div>' +
                                '               <div class="cart">' +
                                '                   <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="/img/core-img/cart.png" alt=""></a>' +
                                '               </div>' +
                                '           </div>' +
                                '       </div>' +
                                '   </div>' +
                                '</div>'
                            )
                        });
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log('Error: ' + textStatus + ' - ' + errorThrown);
                    }
                });
            });
        })(maPhanLoai);
    }
});