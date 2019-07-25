
$(function(){

  // 상품 선택시 구매 페이지 링크
  $('.products li a')
    .attr('href', 'buy.html');

  // 상품 구매 > 수량 버튼
  // 객체 변수(속성) - 옵션
  var buy_quantity = {
        init_number: 1,  // 초기 수량 값
        number: 1,       // 변경되는 수량 값
        min_number: 1,   // 최소값
        max_number: 9    // 최대값
      }

  $('#btn-add').on('click', function(){
    if(buy_quantity.number == buy_quantity.max_number) return;
    buy_quantity.number++;
    $('#number').val(buy_quantity.number);
  });

  $('#btn-sub').on('click', function(){
    if(buy_quantity.number == buy_quantity.min_number) return;
    buy_quantity.number--;
    $('#number').val(buy_quantity.number);
  });


})
