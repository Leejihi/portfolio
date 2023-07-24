// 솔루션 영역 도착시, 밑줄 발생
$(window).on('scroll', () => {
  let underHt = $('.vision').offset().top - 500;

  if (scrollY > underHt) {
    $('.vertical-line').addClass('start');
  } else {
    $('.vertical-line').removeClass('start');
  }
});

// svg 스크롤 이벤트 베드와 굿사이

let scroll = () => {
  let centerPath = document.querySelector('.line-center path');
  let path = centerPath.getTotalLength();

  centerPath.style.strokeDasharray = path;
  centerPath.style.strokeDashoffset = path;

  let windScrollTop = document.documentElement.scrollTop;
  let scrollHt = document.documentElement.scrollHeight;
  let clientHt = document.documentElement.clientHeight;

  let total = (windScrollTop / (scrollHt - clientHt)) * 30;

  let action = path * total;

  centerPath.style.strokeDashoffset = path - action;
};

addEventListener('scroll', scroll);
