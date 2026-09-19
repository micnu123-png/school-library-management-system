document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("cdd-theme");
  if (savedTheme) root.dataset.theme = savedTheme;
  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("cdd-theme", next);
  });
  const menu = document.querySelector("[data-menu]");
  document.querySelector("[data-menu-toggle]")?.addEventListener("click", () => menu.classList.toggle("open"));
  document.querySelectorAll("[data-release-version]").forEach(el => el.textContent = RELEASE.version);
  document.querySelectorAll("[data-release-platform]").forEach(el => el.textContent = `${RELEASE.platform} • ${RELEASE.architecture}`);
  document.querySelectorAll("[data-download]").forEach(button => button.addEventListener("click", event => {
    if (!RELEASE.downloadUrl) {
      event.preventDefault();
      document.querySelector("#download-message").textContent = "The download is being prepared. Please check back soon.";
    } else { button.href = RELEASE.downloadUrl; }
  }));
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
});
