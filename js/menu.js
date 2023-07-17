function toggle() {
    const hamburger = document.querySelector(".hamburger");
    const anchorLink = document.querySelector(".js-anchor-link");
    const globalMenuSp = document.querySelector(".globalMenuSp");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");

        if (hamburger.classList.contains("active")) {
            globalMenuSp.classList.add("active");
        } else {
            globalMenuSp.classList.remove("active");
        }
    });

    anchorLink.addEventListener("click", function () {
        if (hamburger.classList.contains("active")) {
            globalMenuSp.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });
}
toggle();

// smooth js
// $('.js-anchor-link').click(function (e) {
//     e.preventDefault();
//     var target = $($(this).attr('href'));
//     if (target.length) {
//         var scrollTo = target.offset().top;
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

