// function toggle() {
//   const hamburger = document.querySelector(".hamburger");
//   const anchorLink = document.querySelector(".js-anchor-link");
//   const globalMenuSp = document.querySelector(".globalMenuSp");

//   if(hamburger) {
//     hamburger.addEventListener("click", function () {
//       hamburger.classList.toggle("active");

//       if (hamburger.classList.contains("active")) {
//         globalMenuSp.classList.add("active");
//       } else {
//         globalMenuSp.classList.remove("active");
//       }
//     });
//   }

//   if(anchorLink) {
//     anchorLink.addEventListener("click", function () {
//       if (hamburger.classList.contains("active")) {
//         hamburger.classList.remove("active");
//         globalMenuSp.classList.remove("active");
//       }
//     });
//   }
// }
// toggle();

// toggle menu
function toggle() {
  const globalMenuSp = document.querySelector(".globalMenuSp");
  const hamburger = document.querySelector(".hamburger");
  const anchorLinks = document.querySelectorAll(".js-anchor-link");

  function toggleMenu() {
    hamburger.classList.toggle("active");
    globalMenuSp.classList.toggle("active");
  }

  function removeMenu() {
    hamburger.classList.remove("active");
    globalMenuSp.classList.remove("active");
  }

  if(hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }

  if(anchorLinks) {
    for(let anchorLink of anchorLinks) {
      anchorLink.addEventListener("click", removeMenu);
    }
  }
}
toggle();

// smooth js
// $('.js-anchor-link').click(function (e) {
//     e.preventDefault();
//     var target = $($(this).attr('href'));
//     if (target.length) {
//         var scrollTo = tar္get.offset().top;
//         $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
//     }
// });
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
};
smoothScroll();

// experiences slide
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1230,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1,
        dots: false
      }
    }
  ]
});

// wow animation
new WOW().init();

