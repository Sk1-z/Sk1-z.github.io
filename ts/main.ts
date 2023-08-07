//header
document.getElementById("opts-button-icon")!.addEventListener("click", () => {
  let sidebar: HTMLDivElement = document.getElementById(
    "sidebar"
  ) as HTMLDivElement;
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
});

const headers = document.getElementsByClassName("select");
const sections = document.getElementsByClassName("content");

function showSection(num: number): void {
  for (let section of sections) {
    section.style.display = "none";
  }

  sections[num].style.display = "block";
}

function showHighlight(num: number): void {
  for (let header of headers) {
    header.className = "select";
  }

  headers[num].className = "select selected";
}

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", () => {
    showSection(i);
    showHighlight(i);
  });
}

//entries

const projects = sections[2];
const games = sections[3];

function expand(e: HTMLImageElement): void {
  if (e.classList.contains("expanded")) {
    e.className = "expand-icon";
    e
      .closest(".entry")!
      .getElementsByClassName("entry-content")[0].style.display = "none";
  } else {
    e.className += " expanded";
    e
      .closest(".entry")!
      .getElementsByClassName("entry-content")[0].style.display = "block";
  }
}

const entriesP = projects.getElementsByClassName("expand-icon");

for (let btn of entriesP) {
  btn.addEventListener("click", () => {
    expand(btn as HTMLImageElement);
  });
}

const entriesG = games.getElementsByClassName("expand-icon");

for (let btn of entriesG) {
  btn.addEventListener("click", () => {
    expand(btn as HTMLImageElement);
  });
}
