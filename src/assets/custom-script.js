(() => {
  var t =
      "https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js",
    e = document.querySelector(`script[src="${t}"]`);
  e ||
    ((e = document.createElement("script")),
    (e.async = !0),
    (e.src = t),
    document.head.append(e));
})();

(() => {
  var t =
      "https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js",
    e = document.querySelector(`script[src="${t}"]`);
  e ||
    ((e = document.createElement("script")),
    (e.async = !0),
    (e.src = t),
    document.head.append(e));
})();

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".resources_slider_component")
    .forEach((component) => {
      const cmsWrap = component.querySelector(".swiper");
      if (!cmsWrap) return;

      const swiper = new Swiper(cmsWrap, {
        speed: 1000,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        slidesPerView: "auto",
        followFinger: true,
        freeMode: false,
        slideToClickedSlide: false,
        centeredSlides: false,
        autoHeight: false,
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active",
        mousewheel: {
          forceToAxis: true,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        navigation: {
          nextEl: component.querySelector(".slider-arrow.is-next"),
          prevEl: component.querySelector(".slider-arrow.is-prev"),
        },
      });
    });
});
