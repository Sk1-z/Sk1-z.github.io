var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//header
document.getElementById("opts-button-icon").addEventListener("click", function () {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.display === "none") {
        sidebar.style.display = "flex";
    }
    else {
        sidebar.style.display = "none";
    }
});
var headers = document.getElementsByClassName("select");
var sections = document.getElementsByClassName("content");
function showSection(num) {
    for (var _i = 0, sections_1 = sections; _i < sections_1.length; _i++) {
        var section = sections_1[_i];
        section.style.display = "none";
    }
    sections[num].style.display = "block";
}
function showHighlightTitleBar(num) {
    for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
        var header = headers_1[_i];
        header.className = "select";
    }
    headers[num].className = "select selected-header";
}
var _loop_1 = function (i) {
    headers[i].addEventListener("click", function () {
        showSection(i);
        showHighlightTitleBar(i);
    });
};
for (var i = 0; i < headers.length; i++) {
    _loop_1(i);
}
//sort
var sortSelection;
(function (sortSelection) {
    sortSelection[sortSelection["dateD"] = 0] = "dateD";
    sortSelection[sortSelection["dateA"] = 1] = "dateA";
    sortSelection[sortSelection["AZ"] = 2] = "AZ";
    sortSelection[sortSelection["ZA"] = 3] = "ZA";
})(sortSelection || (sortSelection = {}));
var sort = sortSelection.dateD;
var sortBtns = Array.from(document.getElementsByClassName("sort-select"));
function showHighlightSort(num) {
    for (var _i = 0, sortBtns_1 = sortBtns; _i < sortBtns_1.length; _i++) {
        var btn = sortBtns_1[_i];
        btn.className = "sort-select";
    }
    sortBtns[num].className = "sort-select selected";
}
var _loop_2 = function (i) {
    sortBtns[i].addEventListener("click", function () {
        showHighlightSort(i);
    });
};
for (var i = 0; i < sortBtns.length; i++) {
    _loop_2(i);
}
sortBtns[0].addEventListener("click", function () {
    sort = sortSelection.dateD;
    sortEntries();
});
sortBtns[1].addEventListener("click", function () {
    sort = sortSelection.dateA;
    sortEntries();
});
sortBtns[2].addEventListener("click", function () {
    sort = sortSelection.AZ;
    sortEntries();
});
sortBtns[3].addEventListener("click", function () {
    sort = sortSelection.ZA;
    sortEntries();
});
var showSelection;
(function (showSelection) {
    showSelection[showSelection["All"] = 0] = "All";
    showSelection[showSelection["Unarchived"] = 1] = "Unarchived";
    showSelection[showSelection["Archived"] = 2] = "Archived";
})(showSelection || (showSelection = {}));
var show = showSelection.Unarchived;
var showBtns = Array.from(document.getElementsByClassName("show-select"));
function showHighlightShown(num) {
    for (var _i = 0, showBtns_1 = showBtns; _i < showBtns_1.length; _i++) {
        var btn = showBtns_1[_i];
        btn.className = "show-select";
    }
    showBtns[num].className = "show-select selected";
}
var _loop_3 = function (i) {
    showBtns[i].addEventListener("click", function () {
        showHighlightShown(i);
    });
};
for (var i = 0; i < showBtns.length; i++) {
    _loop_3(i);
}
showBtns[0].addEventListener("click", function () {
    show = showSelection.All;
    showEntries();
});
showBtns[1].addEventListener("click", function () {
    show = showSelection.Unarchived;
    showEntries();
});
showBtns[2].addEventListener("click", function () {
    show = showSelection.Archived;
    showEntries();
});
var sortSelectionf;
(function (sortSelectionf) {
    sortSelectionf[sortSelectionf["D"] = 0] = "D";
    sortSelectionf[sortSelectionf["A"] = 1] = "A";
})(sortSelectionf || (sortSelectionf = {}));
var sortf = sortSelectionf.A;
var sortfBtns = Array.from(document.getElementsByClassName("sort-selectf"));
function showHighlightSortf(num) {
    for (var _i = 0, sortfBtns_1 = sortfBtns; _i < sortfBtns_1.length; _i++) {
        var btn = sortfBtns_1[_i];
        btn.className = "sort-selectf";
    }
    sortfBtns[num].className = "sort-selectf selected";
}
var _loop_4 = function (i) {
    sortfBtns[i].addEventListener("click", function () {
        showHighlightSortf(i);
    });
};
for (var i = 0; i < sortfBtns.length; i++) {
    _loop_4(i);
}
sortfBtns[0].addEventListener("click", function () {
    sortf = sortSelectionf.D;
    sortPhotos();
});
sortfBtns[1].addEventListener("click", function () {
    sortf = sortSelectionf.A;
    sortPhotos();
});
var showSelectionf;
(function (showSelectionf) {
    showSelectionf[showSelectionf["all"] = 0] = "all";
    showSelectionf[showSelectionf["Jahs_Vision"] = 1] = "Jahs_Vision";
    showSelectionf[showSelectionf["_1"] = 2] = "_1";
})(showSelectionf || (showSelectionf = {}));
var showf = showSelectionf.all;
var showfBtns = Array.from(document.getElementsByClassName("show-selectf"));
function showHighlightShownf(num) {
    for (var _i = 0, showfBtns_1 = showfBtns; _i < showfBtns_1.length; _i++) {
        var btn = showfBtns_1[_i];
        btn.className = "show-selectf";
    }
    showfBtns[num].className = "show-selectf selected";
}
var _loop_5 = function (i) {
    showfBtns[i].addEventListener("click", function () {
        showHighlightShownf(i);
    });
};
for (var i = 0; i < showfBtns.length; i++) {
    _loop_5(i);
}
showfBtns[0].addEventListener("click", function () {
    showf = showSelectionf.all;
    showPhotos();
});
showfBtns[1].addEventListener("click", function () {
    showf = showSelectionf._1;
    showPhotos();
});
showfBtns[2].addEventListener("click", function () {
    showf = showSelectionf.Jahs_Vision;
    showPhotos();
});
// filling content
sections[0].innerHTML = "\n            <h2>\n                \"Who taught you to hate yourself from the top of your head to the soles of your feet? Who taught you to\n                hate your own kind? Who taught you to hate the race that you belong to so much so that you don\u2019t want to\n                be around each other? No, before you come asking Mr. Muhammad does he teach hate, you should ask\n                yourself who taught you to hate being what God gave you. I\u2019m not standing here speaking to you as an\n                American, or a patriot, or a flag-saluter, or a flag-waver\u2014no, not I. I\u2019m speaking as a victim of this\n                American system. And I see America through the eyes of the victim. I don\u2019t see any American dream; I see\n                an American nightmare. We need to wake up, clean up, and stand up. We need to get up off of our knees\n                and stop begging for an equal share in someone else's power structure. We need to build our own power,\n                and let the world know that we are ready to stand tall, as men and women, and take charge of our own\n                destiny. No longer will we allow ourselves to be disrespected, unprotected, and neglected.\"\n            </h2>\n";
var entry = /** @class */ (function () {
    function entry(archive, img, name, download) {
        this.archive = archive;
        this.img = img;
        this.name = name;
        this.download = download;
    }
    return entry;
}());
var doc = /** @class */ (function (_super) {
    __extends(doc, _super);
    function doc(archive, icon, name, tags, download) {
        var _this = _super.call(this, archive, icon, name, download) || this;
        _this.tags = tags;
        return _this;
    }
    doc.prototype.stringify = function () {
        var e = "\n            <div class=\"entry\">\n                <img class=\"entry-icon\" src=\"img/entries/".concat(this.img, ".ico\">\n                <div class=\"entry-info\">\n                    <h1 class=\"entry-label\">").concat(this.name, "</h1>\n    ");
        this.tags.forEach(function (tag) {
            e += "<h3 class=\"entry-tag\">".concat(tag, "</h3>");
        });
        e += "\n                </div>\n                <a href=\"download/".concat(this.download, "\" download>\n                    <img class=\"download-icon\" src=\"img/download.png\">\n                </a>\n                <a href=\"download/").concat(this.download, "\">\n                    <img class=\"view-icon\" src=\"img/view.png\">\n                </a>\n                <div style=\"clear: both;\"></div>\n            </div>\n    ");
        return e;
    };
    return doc;
}(entry));
var fioDocs = new doc(true, "fio", "File In Out", ["Module", "Lua", "Files"], "FIO.pdf");
var docs = [fioDocs];
var docEntries;
var proj = /** @class */ (function (_super) {
    __extends(proj, _super);
    function proj(archive, icon, name, version, lang, download, bio, game) {
        if (game === void 0) { game = false; }
        var _this = _super.call(this, archive, icon, name, download) || this;
        _this.version = version;
        _this.lang = lang;
        _this.bio = bio;
        _this.game = game;
        return _this;
    }
    proj.prototype.stringify = function () {
        var e = "\n            <div class=\"entry\">\n                <img class=\"entry-icon\" src=\"img/entries/".concat(this.img, ".ico\">\n                <div class=\"entry-info\">\n                    <h1 class=\"entry-label\">").concat(this.name, "<span class=\"version\">").concat(this.version, "</span></h1>\n                    <h2 class=\"entry-language\">").concat(!this.game ? "Language[s]" : "Framework", ": ").concat(this.lang, "</h2>\n                </div>\n                <a href=\"").concat(this.download, "\">\n                    <img class=\"download-icon\" src=\"img/download.png\">\n                </a>\n                <img class=\"expand-icon\" src=\"img/expand.png\">\n                <div style=\"clear: both;\"></div>\n                <h3 class=\"entry-content\" style=\"display:none;\">\n                    ").concat(this.bio, "\n                </h3>\n            </div>\n    ");
        return e;
    };
    return proj;
}(entry));
var taskuu = new proj(true, "taskbuddy", "Taskuu", "1.1.0", "Javascript", "download/Taskuu.Setup.exe", "Taskbuddy is a task-keeping app built using electronJS. It was my first \"real\" Javascript \nproject and was my sign to stay away from Javascript and web development.");
var fileInOut = new proj(true, "fio", "File In Out", "1.0.0", "Lua", "download/Fio.lua", "File in and out is a very simple and easy to use module for lua that can be installed with luarocks.\nFio provides multiple functions for file system operations and includes some basic JSON operations.\nIt was my first module I ever made.");
var schizle = new proj(true, "SchizleLogo", "Schizle", "a-0.5.0", "C", "download/Schizle", "Schizle is a very simple scripting language I made with C and premake.");
var preprepake = new proj(false, "2pake", "2pake", "1.0.0", "Lua", "download/2pake.lua", "2pake, 2p make, or prepremake is a premake5 script generator which generates make files. Although premake5 \nmakes makefiles alot easier, it can be cumbersome to learn how to use, espicially for newer programmers \nunfamilier with build systems like make. So, prepremake makes this easy and does everything through cli prompts.");
var CompleteC = new proj(false, "CompleteC", "CompleteC", "1.0.0", "C", "download/include.zip", "I made complete C to make C feel more complete and batteries include while still remaining true to the style \nof the language. It is not meant to make C into a scripting language, just remove the need to make the same \ntypes of structs and functions everytime a new project is started in a modular style.");
var ratt = new proj(false, "Ratt", "Ratt", "1.0.0", "Rust", "https://github.com/Sk1-z/Ratt/releases/tag/v1.0.0", "Ratt, a terminal based network chat app. Ratt was my first real experience with multi-threading. It was originally\nbuilt in zig however, due to issues with the language's newness and lack of multithreading support it was ported to rust.");
var Contra = new proj(false, "Contra", "Contra", "1.1.0", "C#", "https://github.com/Sk1-z/Contra/releases/tag/v1.0.0", "Contra is a secure desktop password manager I made using Gtk#. I tried both avalonia and eto.forms, but due to my use of neovim instead of visual studio, ran into issues and eventually decided to use Gtk# as it was both the most neovim friendly C# gui framework I could find and very easy to use due to glade and the large amount of documentation available.");
var projs = [Contra, ratt, CompleteC, preprepake, schizle, fileInOut, taskuu];
var projEntries;
var alienImmigration = new proj(true, "alienimmigration", "Alien Imm...", "1.4.0", "XNA", "download/alienimmigration.zip", "Alien Immigration is a satire story-arcade mix created using Microsoft's XNA framework.\nAlien Immigration was my introduction to C#.", true);
var games = [alienImmigration];
var gameEntries;
var foto = /** @class */ (function (_super) {
    __extends(foto, _super);
    function foto(img, name) {
        var download = img.slice(-4);
        return _super.call(this, false, img, name, download) || this;
    }
    foto.prototype.stringify = function () {
        var e = "\n            <div class=\"photo-entry\">\n                <img class=\"photo\" src=\"img/photography/100_".concat(this.img, ".JPG\">\n                <h1 class=\"photo-info\">\n                    <span class=\"photo-date\">").concat(this.name, "</span>\n                </h1>\n                <a href=\"img/photography/100_").concat(this.img, ".JPG\" download=\"").concat(this.download, ".JPG\">\n                    <img class=\"download-icon photo-icon\" src=\"img/download.png\">\n                </a>\n            </div>");
        return e;
    };
    return foto;
}(entry));
//render sorts
// (sortBtns[0] as any).click();
showBtns[1].click();
function sortEntries() {
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
            docEntries.sort(function (a, b) { return a.name.localeCompare(b.name); });
            projEntries.sort(function (a, b) { return a.name.localeCompare(b.name); });
            gameEntries.sort(function (a, b) { return a.name.localeCompare(b.name); });
            break;
        case sortSelection.ZA:
            docEntries.sort(function (b, a) { return a.name.localeCompare(b.name); });
            projEntries.sort(function (b, a) { return a.name.localeCompare(b.name); });
            gameEntries.sort(function (b, a) { return a.name.localeCompare(b.name); });
            break;
    }
    renderEntries();
}
function showEntries() {
    sections[1].innerHTML = "";
    sections[2].innerHTML = "";
    sections[3].innerHTML = "";
    switch (show) {
        case showSelection.Unarchived:
            docEntries = [];
            for (var _i = 0, docs_1 = docs; _i < docs_1.length; _i++) {
                var doc_1 = docs_1[_i];
                if (!(doc_1.archive)) {
                    docEntries.push(doc_1);
                }
            }
            projEntries = [];
            for (var _a = 0, projs_1 = projs; _a < projs_1.length; _a++) {
                var proj_1 = projs_1[_a];
                if (!(proj_1.archive)) {
                    projEntries.push(proj_1);
                }
            }
            gameEntries = [];
            for (var _b = 0, games_1 = games; _b < games_1.length; _b++) {
                var game = games_1[_b];
                if (!(game.archive)) {
                    gameEntries.push(game);
                }
            }
            break;
        case showSelection.Archived:
            docEntries = [];
            for (var _c = 0, docs_2 = docs; _c < docs_2.length; _c++) {
                var doc_2 = docs_2[_c];
                if (doc_2.archive) {
                    docEntries.push(doc_2);
                }
            }
            projEntries = [];
            for (var _d = 0, projs_2 = projs; _d < projs_2.length; _d++) {
                var proj_2 = projs_2[_d];
                if (proj_2.archive) {
                    projEntries.push(proj_2);
                }
            }
            gameEntries = [];
            for (var _e = 0, games_2 = games; _e < games_2.length; _e++) {
                var game = games_2[_e];
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
function renderEntries() {
    docEntries.forEach(function (entryArg) {
        sections[1].innerHTML += entryArg.stringify();
    });
    projEntries.forEach(function (entryArg) {
        sections[2].innerHTML += entryArg.stringify();
    });
    gameEntries.forEach(function (entryArg) {
        sections[3].innerHTML += entryArg.stringify();
    });
    var expandBtns = Array.from(document.getElementsByClassName("expand-icon"));
    var _loop_6 = function (btn) {
        btn.addEventListener("click", function () {
            expand(btn);
        });
    };
    for (var _i = 0, expandBtns_1 = expandBtns; _i < expandBtns_1.length; _i++) {
        var btn = expandBtns_1[_i];
        _loop_6(btn);
    }
}
//foto shenanigans
//u1
var f1016 = new foto("1016", "19.7.23");
var f1011 = new foto("1011", "19.7.23");
var untitled1 = [f1016, f1011];
//jvc
var f1008 = new foto("1008", "11.4.23");
var f0992 = new foto("0992", "11.4.23");
var f0989 = new foto("0989", "11.4.23");
var f0988 = new foto("0988", "11.4.23");
var f0985 = new foto("0985", "11.4.23");
var f0984 = new foto("0984", "11.4.23");
var f0919 = new foto("0919", "9.4.23");
var jahsVision = [f1008, f0992, f0989, f0988, f0985, f0984, f0919];
var collectionNames = ["Untitled #1", "Jah's Vision"];
var collections = [untitled1, jahsVision];
var cReversed = false;
function sortPhotos() {
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
function showPhotos() {
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
function renderCollections(names, collections) {
    var i = 0;
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        sections[4].innerHTML += "<h1>-".concat(name_1, "-</h1>");
        for (var _a = 0, _b = collections[i]; _a < _b.length; _a++) {
            var foto_1 = _b[_a];
            sections[4].innerHTML += foto_1.stringify();
        }
        sections[4].innerHTML += "<h1>-End Of Collection-</h1>";
        i++;
    }
}
sortfBtns[0].click();
showfBtns[0].click();
//expansion
function expand(e) {
    if (e.classList.contains("expanded")) {
        e.className = "expand-icon";
        e.nextElementSibling.nextElementSibling.style.display = "none";
    }
    else {
        e.className += " expanded";
        e.nextElementSibling.nextElementSibling.style.display = "block";
    }
}
