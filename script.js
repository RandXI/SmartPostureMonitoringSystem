const languageButtons = document.querySelectorAll(".lang-button");

function setLanguage(language) {
  document.documentElement.lang = language === "my" ? "my" : "en";
  document.querySelectorAll("[data-en][data-my]").forEach((element) => {
    element.textContent = element.dataset[language];
  });
  languageButtons.forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
