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
function showHighlight(num) {
    for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
        var header = headers_1[_i];
        header.className = "select";
    }
    headers[num].className = "select selected";
}
var _loop_1 = function (i) {
    headers[i].addEventListener("click", function () {
        showSection(i);
        showHighlight(i);
    });
};
for (var i = 0; i < headers.length; i++) {
    _loop_1(i);
}
//entries
var projects = sections[2];
var games = sections[3];
function expand(e) {
    if (e.classList.contains("expanded")) {
        e.className = "expand-icon";
        e
            .closest(".entry")
            .getElementsByClassName("entry-content")[0].style.display = "none";
    }
    else {
        e.className += " expanded";
        e
            .closest(".entry")
            .getElementsByClassName("entry-content")[0].style.display = "block";
    }
}
var entriesP = projects.getElementsByClassName("expand-icon");
var _loop_2 = function (btn) {
    btn.addEventListener("click", function () {
        expand(btn);
    });
};
for (var _i = 0, entriesP_1 = entriesP; _i < entriesP_1.length; _i++) {
    var btn = entriesP_1[_i];
    _loop_2(btn);
}
var entriesG = games.getElementsByClassName("expand-icon");
var _loop_3 = function (btn) {
    btn.addEventListener("click", function () {
        expand(btn);
    });
};
for (var _a = 0, entriesG_1 = entriesG; _a < entriesG_1.length; _a++) {
    var btn = entriesG_1[_a];
    _loop_3(btn);
}
