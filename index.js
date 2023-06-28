//header

// 상단 nav 레이어 팝업 열기
$(function () {
  $('.menu-btn').on('click', () => {
    $('.nav').toggle();
  });
});

// 상단 nav 컨텍 팝업 열기
$(function () {
  $('.sub-btn').on('click', () => {
    $('.sub-popup').show();
  });
  $('.close-btn').on('click', () => {
    $('.sub-popup').hide();
  });
});
