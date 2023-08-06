var _a;
(_a = document.getElementById("opts-button-icon")) === null || _a === void 0
  ? void 0
  : _a.addEventListener("click", function () {
      var sidebar = document.getElementById("sidebar");
      if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
      } else {
        sidebar.style.display = "none";
      }
    });
