gsap.registerPlugin(ScrollTrigger, Flip);

// LOADER ANIMATION
let tlLoader = gsap.timeline({ ease: "power2.out" });
tlLoader
  .from(".nav_links-text", {
    duration: 1,
    delay: 0.2,
    yPercent: 50,
    opacity: 0,
    stagger: 0.2
  })
  .from(
    ".menu_shape",
    {
      duration: 0.4,
      opacity: 0
    },
    ">-1"
  )
  .from(
    ".button.is-nav",
    {
      duration: 2,
      opacity: 0
    },
    ">-0.4"
  );

// MENU LINKS
// page load add box to current link
$(function () {
  if ($(".nav_links").hasClass("w--current")) {
    //code to execute if condition is true
    $(".menu_shape").appendTo($(".nav_links.w--current"));
  } else {
    //code to execute if condition is false
    $(".menu_shape").css("opacity", "0");
  }
});
// mouse hover
$(".nav_links").on("mouseenter", function () {
  let state = Flip.getState(".menu_shape");
  $(".menu_shape").appendTo($(this));
  $(".menu_shape").css("opacity", "1");
  Flip.from(state, {
    duration: 0.4,
    ease: "power2.out"
  });
});
// mouse leave
$(".nav_menu-wrap").on("mouseleave", function () {
  if ($(".nav_links").hasClass("w--current")) {
    //code to execute if condition is true
    let state = Flip.getState(".menu_shape");
    $(".menu_shape").appendTo($(".nav_links.w--current"));
    Flip.from(state, {
      duration: 0.4,
      ease: "power2.out"
    });
  } else {
    //code to execute if condition is false
    $(".menu_shape").css("opacity", "0");
  }
});

// SPAN EFFECT
gsap.utils.toArray("p sub").forEach((el) => {
  gsap.fromTo(
    el,
    {
      backgroundPosition: "-0% 0"
    },
    {
      duration: 1,
      backgroundPosition: "-99.9% 0",
      ease: "sine.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  );
});
// HORIZONTAL SCROLL
// Horizontal scroll
let tlMain = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".horizontal-section",
      start: "top top",
      end: "99% bottom",
      scrub: 1,
      markers: false,
      ease: "none"
    }
  })
  .to(".track", {
    xPercent: -100
  })
  .to(
    ".indicator-line-fill",
    {
      width: "100%"
    },
    "<"
  );

//GRID MOVE IN
gsap.set(".grid_overview-card, .infowrapper.is-ressources", { opacity: 0 });
ScrollTrigger.batch(".grid_overview-card, .infowrapper.is-ressources", {
  start: "top bottom",
  end: "top center",
  once: true,
  onEnter: (batch) => gsap.to(batch, { opacity: 1, stagger: 0.15, duration: 1 })
});
