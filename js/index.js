const menuBurger = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".list__body");
const body = document.body;
menuBurger.onclick = function () {
  menuBurger.classList.toggle("open");
  menuBody.classList.toggle("open");
  body.classList.toggle("open");
};

// hide content
const ourCoreBtn = document.querySelector(".our-core__btn-hidden > a");
const ourCoreBody = document.querySelector(".our-core__items");

window.addEventListener("load", function (e) {
  const ourCoreBodyHeight = ourCoreBody.offsetHeight;
  ourCoreBody.style.height = "400px";

  ourCoreBtn.onclick = function (e) {
    if (ourCoreBtn.textContent.trim().toLowerCase() == "show more") {
      ourCoreBody.style.height = ourCoreBodyHeight + "px";
      ourCoreBtn.textContent = "hide";
      ourCoreBody.classList.add("opened");
    } else if (ourCoreBtn.textContent.trim().toLowerCase() == "hide") {
      ourCoreBody.style.height = "400px";
      ourCoreBtn.textContent = "show more";
      ourCoreBody.classList.remove("opened");

      window.scrollTo({
        top: pageYOffset - ourCoreBodyHeight + 250,
        behavior: "smooth",
      });
      console.log();
    }
    e.preventDefault();
  };
});
