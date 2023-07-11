//header

// 상단 nav 레이어 팝업 열기
$(function () {
  $(".flex_wrap").on("click", () => {
    $(".nav").toggle();
  });
});

// 상단 nav 컨텍 팝업 열기
$(function () {
  $(".sub-btn").on("click", () => {
    $(".sub-popup").show();
  });
  $(".close-btn").on("click", () => {
    $(".sub-popup").hide();
  });
});

// 메뉴 버튼 이벤트

$("#toggle_btn").on("click", function () {
  // function 함수 사용시 this 키워드가 지칭하는 대상은 클릭한 바로 그 #toggle_btn
  $(this).toggleClass("closeMenu");
});

//웹작업 배너 위치 도착시 header 변경
$(window).on("scroll", () => {
  const myWeb = $(".myWeb").offset().top;

  if (scrollY > myWeb) {
    $("header").addClass(".blend-none");
  } else {
    $("header").addClass(".blend-none");
  }
});

// main

// 어바웃 미 버튼
document
  .querySelectorAll(".button")
  .forEach(
    (button) =>
      (button.innerHTML =
        "<div><span>" +
        button.textContent.trim().split("").join("</span><span>") +
        "</span></div>")
  );

// 슬라이드

$(window).on("scroll", () => {
  let slideHeight = $(".slide").offset().top - 500;

  if (scrollY > slideHeight) {
    $(".slide").addClass("start");
  } else {
    $(".slide").removeClass("start");
  }
});

// 커리어 영역 이벤트

let objPath = document.querySelectorAll(".obj path");
$(window).on("scroll", () => {
  objPath.forEach(function (a, idx) {
    let length = a.getTotalLength();
    // console.log(length);

    if (scrollY > 3700) {
      a.style.strokeDasharray = length;
      a.style.strokeDashoffset = 0;
    } else {
      a.style.strokeDashoffset = length;
    }
  });
});

// 호버시 이미지 보여지도록!!
