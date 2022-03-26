import "../scss/index.scss";
import swiperSlider from "./slider";
import smoothscroll from "smoothscroll-polyfill";

// kick off the polyfill!
smoothscroll.polyfill();

document.addEventListener("DOMContentLoaded", function () {
  new WOW().init();

  swiperSlider.forEach((swiper) => {
    swiper.init();
  });

  const toggleTabs = () => {
    const tabs = document.querySelectorAll('[data-tab="button"]');
    const tabsContents = document.querySelectorAll('[data-tab="content"]');

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        if (tab.classList.contains("tab_active")) return;

        const activeTab = document.querySelector(".tab_active");
        activeTab.classList.remove("tab_active");
        tab.classList.add("tab_active");

        const activeContent = document.querySelector(
          ".tab-content__item_active"
        );
        activeContent.classList.remove("tab-content__item_active");

        setTimeout(() => {
          tabsContents[index].classList.add("tab-content__item_active");
        }, 600);
      });
    });
  };
  toggleTabs();

  const preloader = document.querySelector(".preloader");
  const preloaderContent = preloader.querySelector(".preloader__content");

  if (!localStorage.was) {
    localStorage.was = "true";
    setTimeout(() => {
      preloaderContent.classList.add("preloader__content_hidden");
    }, 2500);

    setTimeout(() => {
      preloader.classList.add("preloader_hidden");
    }, 3000);
  } else {
    preloader.classList.add("d-none");
  }

  if (!localStorage.nextDay) {
    localStorage.nextDay = Math.floor((Date.now() + 3600 * 1000 * 24) / 1000);
  } else {
    Math.floor(Date.now() / 1000) >= parseInt(localStorage.nextDay)
      ? localStorage.clear()
      : null;
  }

  const smoothScroll = () => {
    const links = document.querySelectorAll(".navigation__link");
    for (const link of links) {
      const linkData = link.getAttribute("data-section");
      const section = document.querySelector(`.${linkData}`);

      link.addEventListener("click", () => {
        window.scroll({
          behavior: "smooth",
          left: 0,
          top: section.offsetTop,
        });
      });
    }
  };
  smoothScroll();
});
