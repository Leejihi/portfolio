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

// 슬라이드

$(window).on('scroll', () => {
  let slideHeight = $('.slide').offset().top - 300;

  if (scrollY > slideHeight) {
      $('.slide').addClass('start');
  } else {
      $('.slide').removeClass('start');
  }
});

// 커리어 호버시 이미지 보여지도록!!
