const switchInput = document.querySelector(".input__check");

// Lista com os preços mensais e anuais na ordem dos cards
const monthlyPrices = ["$0/M", "$14.99/M", "$29.99/M"];
const yearlyPrices = ["$0/Y", "$179.88/Y", "$359.88/Y"];

// Seleciona todos os elementos de preço
const priceElements = document.querySelectorAll(".prices h3");

// Adiciona a classe de transição a todos
priceElements.forEach((el) => el.classList.add("price-fade"));

switchInput.addEventListener("change", () => {
  priceElements.forEach((el, i) => {
    // Aplica fade-out
    el.classList.add("price-hidden");

    // Espera a animação terminar para trocar o texto
    setTimeout(() => {
      el.textContent = switchInput.checked ? yearlyPrices[i] : monthlyPrices[i];

      // Aplica fade-in
      el.classList.remove("price-hidden");
    }, 300); // mesmo tempo do CSS transition
  });
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});