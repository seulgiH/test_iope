$(function(){
    $('.products')
    .attr('href', 'buy.html');

    // 상품 구매 > 수량 버튼
    var buy_number = 1; // 기본 수량 값

    $('#btn-add').on('click', function(){
        buy_number++;
        $('#number').val(buy_number++);
    });


})