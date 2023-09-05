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
        sidebar.style.display = "block";
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
    headers[num].className = "select selected";
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
var _loop_3 = function (i) {
    sortfBtns[i].addEventListener("click", function () {
        showHighlightSortf(i);
    });
};
for (var i = 0; i < sortfBtns.length; i++) {
    _loop_3(i);
}
sortfBtns[0].addEventListener("click", function () {
    sortf = sortSelectionf.D;
    sortPhotos();
});
sortfBtns[1].addEventListener("click", function () {
    sortf = sortSelectionf.A;
    sortPhotos();
});
var showSelection;
(function (showSelection) {
    showSelection[showSelection["all"] = 0] = "all";
    showSelection[showSelection["Jahs_Vision"] = 1] = "Jahs_Vision";
    showSelection[showSelection["_1"] = 2] = "_1";
})(showSelection || (showSelection = {}));
var show = showSelection.all;
var showBtns = Array.from(document.getElementsByClassName("show-select"));
function showHighlightShown(num) {
    for (var _i = 0, showBtns_1 = showBtns; _i < showBtns_1.length; _i++) {
        var btn = showBtns_1[_i];
        btn.className = "sort-select";
    }
    showBtns[num].className = "show-select selected";
}
var _loop_4 = function (i) {
    showBtns[i].addEventListener("click", function () {
        showHighlightShown(i);
    });
};
for (var i = 0; i < showBtns.length; i++) {
    _loop_4(i);
}
showBtns[0].addEventListener("click", function () {
    show = showSelection.all;
    showPhotos();
});
showBtns[1].addEventListener("click", function () {
    show = showSelection._1;
    showPhotos();
});
showBtns[2].addEventListener("click", function () {
    show = showSelection.Jahs_Vision;
    showPhotos();
});
// filling content
sections[0].innerHTML = "\n            <h2>\n                \"Who taught you to hate yourself from the top of your head to the soles of your feet? Who taught you to\n                hate your own kind? Who taught you to hate the race that you belong to so much so that you don\u2019t want to\n                be around each other? No, before you come asking Mr. Muhammad does he teach hate, you should ask\n                yourself who taught you to hate being what God gave you. I\u2019m not standing here speaking to you as an\n                American, or a patriot, or a flag-saluter, or a flag-waver\u2014no, not I. I\u2019m speaking as a victim of this\n                American system. And I see America through the eyes of the victim. I don\u2019t see any American dream; I see\n                an American nightmare. We need to wake up, clean up, and stand up. We need to get up off of our knees\n                and stop begging for an equal share in someone else's power structure. We need to build our own power,\n                and let the world know that we are ready to stand tall, as men and women, and take charge of our own\n                destiny. No longer will we allow ourselves to be disrespected, unprotected, and neglected.\"\n            </h2>\n";
var entry = /** @class */ (function () {
    function entry(img, name, download) {
        this.img = img;
        this.name = name;
        this.download = download;
    }
    return entry;
}());
var doc = /** @class */ (function (_super) {
    __extends(doc, _super);
    function doc(icon, name, tags, download) {
        var _this = _super.call(this, icon, name, download) || this;
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
var fioDocs = new doc("fio", "File In Out", ["Module", "Lua", "Files"], "FIO.pdf");
var docEntries;
var proj = /** @class */ (function (_super) {
    __extends(proj, _super);
    function proj(icon, name, version, lang, download, bio, game) {
        if (game === void 0) { game = false; }
        var _this = _super.call(this, icon, name, download) || this;
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
var taskuu = new proj("taskbuddy", "Taskuu", "1.1.0", "Javascript", "download/Taskuu.Setup.exe", "Taskbuddy is a task-keeping app built using electronJS. It was my first \"real\" Javascript \nproject and was my sign to stay away from Javascript and web development.");
var fileInOut = new proj("fio", "File In Out", "1.0.0", "Lua", "https://luarocks.org/modules/Sk1-z/fio", "File in and out is a very simple and easy to use module for lua that can be installed with luarocks.\nFio provides multiple functions for file system operations and includes some basic JSON operations.\nIt was my first module I ever made.");
var schizle = new proj("SchizleLogo", "Schizle", "a-0.1.0", "C", "download/schizle.exe", "Schizle is a very simple scripting language I made with C and premake.");
var projEntries;
var alienImmigration = new proj("alienimmigration", "Alien Imm...", "1.4.0", "XNA", "alienimmigration.zip", "Alien Immigration is a satire story-arcade mix created using Microsoft's XNA framework.\nAlien Immigration was my introduction to C#.", true);
var gameEntries;
var foto = /** @class */ (function (_super) {
    __extends(foto, _super);
    function foto(img, name) {
        var download = img.slice(-4);
        return _super.call(this, img, name, download) || this;
    }
    foto.prototype.stringify = function () {
        var e = "\n            <div class=\"photo-entry\">\n                <img class=\"photo\" src=\"img/photography/100_".concat(this.img, ".JPG\">\n                <h1 class=\"photo-info\">\n                    <span class=\"photo-date\">").concat(this.name, "</span>\n                </h1>\n                <a href=\"img/photography/100_").concat(this.img, ".JPG\" download=\"").concat(this.download, ".JPG\">\n                    <img class=\"download-icon photo-icon\" src=\"img/download.png\">\n                </a>\n            </div>");
        return e;
    };
    return foto;
}(entry));
// sections[4].innerHTML += "<h1>-Untitled #1-</h1>";
// for (let i = 0; i < 2; i++) {
//   sections[4].innerHTML += fotoEntries[i].stringify();
// }
// sections[4].innerHTML += "<h1>-EOC-</h1>";
// sections[4].innerHTML += "<h1>-Jah's vision-</h1>";
// for (let i = 2; i < 9; i++) {
//   sections[4].innerHTML += fotoEntries[i].stringify();
// }
// sections[4].innerHTML += "<h1>-EOC-</h1>";
//render sorts
sortBtns[0].click();
function sortEntries() {
    docEntries = [fioDocs];
    projEntries = [schizle, fileInOut, taskuu];
    gameEntries = [alienImmigration];
    sections[1].innerHTML = "";
    sections[2].innerHTML = "";
    sections[3].innerHTML = "";
    switch (sort) {
        case sortSelection.dateD:
            renderEntries();
            break;
        case sortSelection.dateA:
            docEntries.reverse();
            projEntries.reverse();
            gameEntries.reverse();
            renderEntries();
            break;
        case sortSelection.AZ:
            docEntries.sort(function (a, b) { return a.name.localeCompare(b.name); });
            projEntries.sort(function (a, b) { return a.name.localeCompare(b.name); });
            gameEntries.sort(function (a, b) { return a.name.localeCompare(b.name); });
            renderEntries();
            break;
        case sortSelection.ZA:
            docEntries.sort(function (b, a) { return a.name.localeCompare(b.name); });
            projEntries.sort(function (b, a) { return a.name.localeCompare(b.name); });
            gameEntries.sort(function (b, a) { return a.name.localeCompare(b.name); });
            renderEntries();
            break;
    }
    var expandBtns = Array.from(document.getElementsByClassName("expand-icon"));
    var _loop_5 = function (btn) {
        btn.addEventListener("click", function () {
            expand(btn);
        });
    };
    for (var _i = 0, expandBtns_1 = expandBtns; _i < expandBtns_1.length; _i++) {
        var btn = expandBtns_1[_i];
        _loop_5(btn);
    }
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
    switch (show) {
        case showSelection.all:
            renderCollections(collectionNames, collections);
            break;
        case showSelection.Jahs_Vision:
            renderCollections(["Jah's Vision"], [jahsVision]);
            break;
        case showSelection._1:
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
showBtns[0].click();
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
