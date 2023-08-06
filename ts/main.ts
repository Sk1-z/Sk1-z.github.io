document.getElementById("opts-button-icon")?.addEventListener("click", () => {
  let sidebar: HTMLDivElement = document.getElementById(
    "sidebar"
  ) as HTMLDivElement;
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
});
