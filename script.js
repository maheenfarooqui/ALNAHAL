let cartCount = 0;

const buyButtons = document.querySelectorAll(".buy-now");
const cartIcon = document.querySelector(".cart-icon");
const cartBadge = document.querySelector(".cart-icon .badge");

buyButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    cartIcon.classList.add("show");

    cartCount++;
    cartBadge.textContent = cartCount;

    cartBadge.classList.add("bump");
    setTimeout(() => {
      cartBadge.classList.remove("bump");
    }, 300);
  });
});
