import "../scss/index.scss";
import swiperSlider from "./slider";

document.addEventListener("DOMContentLoaded", function () {
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
});
