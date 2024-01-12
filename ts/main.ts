//header
document.getElementById("opts-button-icon")!.addEventListener("click", () => {
  let sidebar: HTMLDivElement = document.getElementById(
    "sidebar"
  ) as HTMLDivElement;
  if (sidebar.style.display === "none") {
    sidebar.style.display = "flex";
  } else {
    sidebar.style.display = "none";
  }
});

const headers = document.getElementsByClassName("select");
const sections = document.getElementsByClassName("content") as any;

function showSection(num: number): void {
  for (let section of sections) {
    section.style.display = "none";
  }

  sections[num].style.display = "block";
}

function showHighlightTitleBar(num: number): void {
  for (let header of headers) {
    header.className = "select";
  }

  headers[num].className = "select selected-header";
}

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", () => {
    showSection(i);
    showHighlightTitleBar(i);
  });
}

//sort

enum sortSelection {
  dateD,
  dateA,
  AZ,
  ZA,
}

let sort: sortSelection = sortSelection.dateD;

const sortBtns = Array.from(document.getElementsByClassName("sort-select"));

function showHighlightSort(num: number): void {
  for (let btn of sortBtns) {
    btn.className = "sort-select";
  }

  sortBtns[num].className = "sort-select selected";
}

for (let i = 0; i < sortBtns.length; i++) {
  sortBtns[i].addEventListener("click", () => {
    showHighlightSort(i);
  });
}

sortBtns[0].addEventListener("click", () => {
  sort = sortSelection.dateD;
  sortEntries();
});

sortBtns[1].addEventListener("click", () => {
  sort = sortSelection.dateA;
  sortEntries();
});

sortBtns[2].addEventListener("click", () => {
  sort = sortSelection.AZ;
  sortEntries();
});

sortBtns[3].addEventListener("click", () => {
  sort = sortSelection.ZA;
  sortEntries();
});

enum showSelection {
  All,
  Unarchived,
  Archived,
}

let show: showSelection = showSelection.Unarchived;

const showBtns = Array.from(document.getElementsByClassName("show-select"));

function showHighlightShown(num: number): void {
  for (let btn of showBtns) {
    btn.className = "show-select";
  }

  showBtns[num].className = "show-select selected";
}

for (let i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener("click", () => {
    showHighlightShown(i);
  });
}

showBtns[0].addEventListener("click", () => {
  show = showSelection.All;
  showEntries();
});

showBtns[1].addEventListener("click", () => {
  show = showSelection.Unarchived;
  showEntries();
});

showBtns[2].addEventListener("click", () => {
  show = showSelection.Archived;
  showEntries();
});

enum sortSelectionf {
  D,
  A,
}

let sortf: sortSelectionf = sortSelectionf.A;

const sortfBtns = Array.from(document.getElementsByClassName("sort-selectf"));

function showHighlightSortf(num: number): void {
  for (let btn of sortfBtns) {
    btn.className = "sort-selectf";
  }

  sortfBtns[num].className = "sort-selectf selected";
}

for (let i = 0; i < sortfBtns.length; i++) {
  sortfBtns[i].addEventListener("click", () => {
    showHighlightSortf(i);
  });
}

sortfBtns[0].addEventListener("click", () => {
  sortf = sortSelectionf.D;
  sortPhotos();
});

sortfBtns[1].addEventListener("click", () => {
  sortf = sortSelectionf.A;
  sortPhotos();
});

enum showSelectionf {
  all,
  Jahs_Vision,
  _1,
}

let showf: showSelectionf = showSelectionf.all;

const showfBtns = Array.from(document.getElementsByClassName("show-selectf"));

function showHighlightShownf(num: number): void {
  for (let btn of showfBtns) {
    btn.className = "show-selectf";
  }

  showfBtns[num].className = "show-selectf selected";
}

for (let i = 0; i < showfBtns.length; i++) {
  showfBtns[i].addEventListener("click", () => {
    showHighlightShownf(i);
  });
}

showfBtns[0].addEventListener("click", () => {
  showf = showSelectionf.all;
  showPhotos();
});

showfBtns[1].addEventListener("click", () => {
  showf = showSelectionf._1;
  showPhotos();
});

showfBtns[2].addEventListener("click", () => {
  showf = showSelectionf.Jahs_Vision;
  showPhotos();
});

// filling content

sections[0].innerHTML = `
            <h2>
                "Who taught you to hate yourself from the top of your head to the soles of your feet? Who taught you to
                hate your own kind? Who taught you to hate the race that you belong to so much so that you don’t want to
                be around each other? No, before you come asking Mr. Muhammad does he teach hate, you should ask
                yourself who taught you to hate being what God gave you. I’m not standing here speaking to you as an
                American, or a patriot, or a flag-saluter, or a flag-waver—no, not I. I’m speaking as a victim of this
                American system. And I see America through the eyes of the victim. I don’t see any American dream; I see
                an American nightmare. We need to wake up, clean up, and stand up. We need to get up off of our knees
                and stop begging for an equal share in someone else's power structure. We need to build our own power,
                and let the world know that we are ready to stand tall, as men and women, and take charge of our own
                destiny. No longer will we allow ourselves to be disrespected, unprotected, and neglected."
            </h2>
`;

abstract class entry {
  archive: boolean;
  img: string;
  name: string;
  download: string;

  constructor(archive: boolean, img: string, name: string, download: string) {
    this.archive = archive;
    this.img = img;
    this.name = name;
    this.download = download;
  }

  abstract stringify(): string;
}

class doc extends entry {
  tags: string[];

  constructor(archive: boolean, icon: string, name: string, tags: string[], download: string) {
    super(archive, icon, name, download);
    this.tags = tags;
  }

  stringify(): string {
    let e = `
            <div class="entry">
                <img class="entry-icon" src="img/entries/${this.img}.ico">
                <div class="entry-info">
                    <h1 class="entry-label">${this.name}</h1>
    `;

    this.tags.forEach((tag) => {
      e += `<h3 class="entry-tag">${tag}</h3>`;
    });

    e += `
                </div>
                <a href="download/${this.download}" download>
                    <img class="download-icon" src="img/download.png">
                </a>
                <a href="download/${this.download}">
                    <img class="view-icon" src="img/view.png">
                </a>
                <div style="clear: both;"></div>
            </div>
    `;

    return e;
  }
}

const fioDocs: doc = new doc(
  false,
  "fio",
  "File In Out",
  ["Module", "Lua", "Files"],
  "FIO.pdf"
);

let docs: doc[] = [fioDocs];
let docEntries: doc[];

class proj extends entry {
  version: string;
  lang: string;
  bio: string;
  game: boolean;

  constructor(
    archive: boolean,
    icon: string,
    name: string,
    version: string,
    lang: string,
    download: string,
    bio: string,
    game: boolean = false
  ) {
    super(archive, icon, name, download);
    this.version = version;
    this.lang = lang;
    this.bio = bio;
    this.game = game;
  }

  stringify(): string {
    let e = `
            <div class="entry">
                <img class="entry-icon" src="img/entries/${this.img}.ico">
                <div class="entry-info">
                    <h1 class="entry-label">${this.name}<span class="version">${
      this.version
    }</span></h1>
                    <h2 class="entry-language">${
                      !this.game ? "Language[s]" : "Framework"
                    }: ${this.lang}</h2>
                </div>
                <a href="${this.download}">
                    <img class="download-icon" src="img/download.png">
                </a>
                <img class="expand-icon" src="img/expand.png">
                <div style="clear: both;"></div>
                <h3 class="entry-content" style="display:none;">
                    ${this.bio}
                </h3>
            </div>
    `;

    return e;
  }
}

const taskuu: proj = new proj(
  true,
  "taskbuddy",
  "Taskuu",
  "1.1.0",
  "Javascript",
  "download/Taskuu.Setup.exe",
  `Taskbuddy is a task-keeping app built using electronJS. It was my first "real" Javascript 
project and was my sign to stay away from Javascript and web development.`
);

const fileInOut: proj = new proj(
  false,
  "fio",
  "File In Out",
  "1.0.0",
  "Lua",
  "https://luarocks.org/modules/Sk1-z/fio",
  `File in and out is a very simple and easy to use module for lua that can be installed with luarocks.
Fio provides multiple functions for file system operations and includes some basic JSON operations.
It was my first module I ever made.`
);

const schizle: proj = new proj(
  false,
  "SchizleLogo",
  "Schizle",
  "a-0.5.0",
  "C",
  "https://github.com/Sk1-z/Schizle/releases/tag/v0.5.0-alpha",
  "Schizle is a very simple scripting language I made with C and premake."
);

// const wiced: proj = new proj(
//   true,
//   "wic",
//   "Wiced",
//   "1.0.0",
//   "Python",
//   "download/wic",
//   "What is my computer even doing is a light curses-based linux performance monitor."
// );

const preprepake: proj = new proj(
  false,
  "2pake",
  "2pake",
  "1.0.0",
  "Lua",
  "download/2pake",
  `2pake, 2p make, or prepremake is a premake5 script generator which generates make files. Although premake5 
makes makefiles alot easier, it can be cumbersome to learn how to use, espicially for newer programmers 
unfamilier with build systems like make. So, prepremake makes this easy and does everything through cli prompts.`
);

const CompleteC: proj = new proj(
  false,
  "CompleteC",
  "CompleteC",
  "1.0.0",
  "C",
  "download/include.zip",
  `I made complete C to make C feel more complete and batteries include while still remaining true to the style 
of the language. It is not meant to make C into a scripting language, just remove the need to make the same 
types of structs and functions everytime a new project is started in a modular style.`
);

let projs: proj[] = [CompleteC, preprepake,  schizle, fileInOut, taskuu];
let projEntries: proj[];

const alienImmigration: proj = new proj(
  true,
  "alienimmigration",
  "Alien Imm...",
  "1.4.0",
  "XNA",
  "download/alienimmigration.zip",
  `Alien Immigration is a satire story-arcade mix created using Microsoft's XNA framework.
Alien Immigration was my introduction to C#.`,
  true
);

let games: proj[] = [alienImmigration];
let gameEntries: proj[];

class foto extends entry {
  constructor(img: string, name: string) {
    let download: string = img.slice(-4);
    super(false, img, name, download);
  }

  stringify(): string {
    let e = `
            <div class="photo-entry">
                <img class="photo" src="img/photography/100_${this.img}.JPG">
                <h1 class="photo-info">
                    <span class="photo-date">${this.name}</span>
                </h1>
                <a href="img/photography/100_${this.img}.JPG" download="${this.download}.JPG">
                    <img class="download-icon photo-icon" src="img/download.png">
                </a>
            </div>`;

    return e;
  }
}

//render sorts
// (sortBtns[0] as any).click();
(showBtns[1] as any).click();

function sortEntries(): void {
  showEntries(); 

  sections[1].innerHTML = "";
  sections[2].innerHTML = "";
  sections[3].innerHTML = "";

  switch (sort) {
    case sortSelection.dateD:
      break;

    case sortSelection.dateA:
      docEntries.reverse();
      projEntries.reverse();
      gameEntries.reverse();
      break;

    case sortSelection.AZ:
      docEntries.sort((a, b) => a.name.localeCompare(b.name));
      projEntries.sort((a, b) => a.name.localeCompare(b.name));
      gameEntries.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case sortSelection.ZA:
      docEntries.sort((b, a) => a.name.localeCompare(b.name));
      projEntries.sort((b, a) => a.name.localeCompare(b.name));
      gameEntries.sort((b, a) => a.name.localeCompare(b.name));
      break;
  }

  renderEntries();

  let expandBtns = Array.from(document.getElementsByClassName("expand-icon"));

  for (let btn of expandBtns) {
    btn.addEventListener("click", () => {
      expand(btn);
    });
  }
}

function showEntries(): void {
  sections[1].innerHTML = "";
  sections[2].innerHTML = "";
  sections[3].innerHTML = "";

  switch (show) {
    case showSelection.Unarchived:
      docEntries = [];
      for (let doc of docs) {
        if (!(doc.archive)) {
          docEntries.push(doc);
        }
      }

      projEntries = [];
      for (let proj of projs) {
        if (!(proj.archive)) {
          projEntries.push(proj);
        }
      }

      gameEntries = [];
      for (let game of games) {
        if (!(game.archive)) {
          gameEntries.push(game);
        }
      }
      break;

    case showSelection.Archived:
      docEntries = [];
      for (let doc of docs) {
        if (doc.archive) {
          docEntries.push(doc);
        }
      }

      projEntries = [];
      for (let proj of projs) {
        if (proj.archive) {
          projEntries.push(proj);
        }
      }

      gameEntries = [];
      for (let game of games) {
        if (game.archive) {
          gameEntries.push(game);
        }
      }
      break;

    case showSelection.All:
      docEntries = docs;
      projEntries = projs;
      gameEntries = games;
      break;
  }

  renderEntries();
}

function renderEntries(): void {
  docEntries.forEach((entryArg) => {
    sections[1].innerHTML += entryArg.stringify();
  });
  projEntries.forEach((entryArg) => {
    sections[2].innerHTML += entryArg.stringify();
  });
  gameEntries.forEach((entryArg) => {
    sections[3].innerHTML += entryArg.stringify();
  });
}

//foto shenanigans

//u1
const f1016 = new foto("1016", "19.7.23");
const f1011 = new foto("1011", "19.7.23");
const untitled1: foto[] = [f1016, f1011];
//jvc
const f1008 = new foto("1008", "11.4.23");
const f0992 = new foto("0992", "11.4.23");
const f0989 = new foto("0989", "11.4.23");
const f0988 = new foto("0988", "11.4.23");
const f0985 = new foto("0985", "11.4.23");
const f0984 = new foto("0984", "11.4.23");
const f0919 = new foto("0919", "9.4.23");

const jahsVision: foto[] = [f1008, f0992, f0989, f0988, f0985, f0984, f0919];

const collectionNames: string[] = ["Untitled #1", "Jah's Vision"];
const collections: foto[][] = [untitled1, jahsVision];
let cReversed: boolean = false;

function sortPhotos(): void {
  switch (sortf) {
    case sortSelectionf.D:
      if (cReversed) {
        collectionNames.reverse();
        collections.reverse();
        cReversed = false;
      }
      showPhotos();
      break;
    case sortSelectionf.A:
      if (!cReversed) {
        collectionNames.reverse();
        collections.reverse();
        cReversed = true;
      }
      showPhotos();
  }
}

function showPhotos(): void {
  sections[4].innerHTML = "";

  switch (showf) {
    case showSelectionf.all:
      renderCollections(collectionNames, collections);
      break;

    case showSelectionf.Jahs_Vision:
      renderCollections(["Jah's Vision"], [jahsVision]);
      break;

    case showSelectionf._1:
      renderCollections(["Untitled #1"], [untitled1]);
      break;
  }
}

function renderCollections(names: string[], collections: foto[][]): void {
  let i = 0;
  for (let name of names) {
    sections[4].innerHTML += `<h1>-${name}-</h1>`;
    for (let foto of collections[i]) {
      sections[4].innerHTML += foto.stringify();
    }
    sections[4].innerHTML += `<h1>-End Of Collection-</h1>`;
    i++;
  }
}

(sortfBtns[0] as any).click();
(showfBtns[0] as any).click();
//expansion

function expand(e: any): void {
  if (e.classList.contains("expanded")) {
    e.className = "expand-icon";
    e.nextElementSibling!.nextElementSibling!.style.display = "none";
  } else {
    e.className += " expanded";
    e.nextElementSibling!.nextElementSibling!.style.display = "block";
  }
}

let expandBtns = Array.from(document.getElementsByClassName("expand-icon"));

  for (let btn of expandBtns) {
    btn.addEventListener("click", () => {
      expand(btn);
    });
  }
