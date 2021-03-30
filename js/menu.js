(() => {
    const menuBtnRef = document.querySelector("[data-menu-open]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileBtnClose = document.querySelector("[data-menu-close]");


    menuBtnRef.addEventListener("click", () => {

    menuBtnRef.classList.toggle("is-open");
    mobileMenuRef.classList.toggle("is-open");
    });

    mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    });
})();