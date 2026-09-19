const release = {
  version: "2.00",
  installer: "SchoolLibrarySystem_Setup_v2.00.exe",
  downloadUrl: "https://github.com/micnu123-png/school-library-management-system/releases/download/v2.00/SchoolLibrarySystem_Setup_v2.00.exe",
  githubUrl: "https://github.com/micnu123-png/school-library-management-system"
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("[data-menu-button]")?.addEventListener("click", () => {
    document.querySelector("[data-menu]")?.classList.toggle("open");
  });
  document.querySelectorAll("[data-version]").forEach((node) => node.textContent = release.version);
  document.querySelectorAll("[data-download]").forEach((link) => link.addEventListener("click", (event) => {
    if (!release.downloadUrl) { event.preventDefault(); showStatus("The Version 2.00 download link is being prepared. Please check back soon."); }
    else link.href = release.downloadUrl;
  }));
  document.querySelectorAll("[data-github]").forEach((link) => link.addEventListener("click", (event) => {
    if (!release.githubUrl) { event.preventDefault(); showStatus("The official GitHub repository link has not been configured yet."); }
    else link.href = release.githubUrl;
  }));
  document.querySelectorAll(".shot-card").forEach((card) => {
    const image = card.querySelector("img");
    const link = card.querySelector("[data-shot-link]");
    if (!image) return;
    image.addEventListener("load", () => card.classList.add("has-image"));
    image.addEventListener("error", () => card.classList.remove("has-image"));
    link?.addEventListener("click", (event) => {
      if (!card.classList.contains("has-image")) {
        event.preventDefault();
        showStatus("That screenshot is coming soon.");
      }
    });
    if (image.complete && image.naturalWidth) card.classList.add("has-image");
  });
  document.querySelectorAll("[data-year]").forEach((node) => node.textContent = new Date().getFullYear());
});

function showStatus(message) { const status = document.querySelector("#site-status"); if (status) status.textContent = message; }
