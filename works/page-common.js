// 상단 nav 레이어 팝업 열기
$(function () {
  $('.flex_wrap').on('click', () => {
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

// svg 스크롤 이벤트

let scrolled = () => {
  let centerPath = document.querySelector('.line-center path');
  let path = centerPath.getTotalLength();

  centerPath.style.strokeDasharray = path;
  centerPath.style.strokeDashoffset = path;

  let windScrollTop = document.documentElement.scrollTop;
  let scrollHt = document.documentElement.scrollHeight;
  let clientHt = document.documentElement.clientHeight;

  let total = (windScrollTop / (scrollHt - clientHt)) * 6;

  let action = path * total;

  centerPath.style.strokeDashoffset = path - action;
};

addEventListener('scroll', scrolled);

// 솔루션 영역 도착시, 밑줄 발생
$(window).on('scroll', () => {
  let underHt = $('.ox-box').offset().top - 500;

  if (scrollY > underHt) {
    $('.line-pro').addClass('start');
  } else {
    $('.line-pro').removeClass('start');
  }
});

$(window).on('scroll', () => {
  let underHt = $('.ox-box').offset().top - 500;

  if (scrollY > underHt) {
    $('.line-sol').addClass('start');
  } else {
    $('.line-sol').removeClass('start');
  }
});
