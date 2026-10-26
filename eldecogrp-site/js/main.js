
(function () {
  "use strict";
  var cfg = window.SITE_CONFIG || {};
  function toast(msg) {
    var t = document.getElementById("toast"); if (!t) return;
    t.textContent = msg; t.hidden = false;
    setTimeout(function () { t.hidden = true; }, 4200);
  }
  // ---- enquiry forms -> WhatsApp ----
  document.querySelectorAll(".enquiry-form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var project = form.getAttribute("data-project") || "Eldeco Group Projects";
      var lines = ["Hi, I am interested in " + project + ".",
        "Name: " + (d.get("name") || ""), "Mobile: " + (d.get("phone") || "")];
      if (d.get("email")) lines.push("Email: " + d.get("email"));
      if (d.get("interest")) lines.push("Interested in: " + d.get("interest"));
      if (d.get("message")) lines.push("Message: " + d.get("message"));
      window.trackConversion && trackConversion("generate_lead", { project: project });
      toast("Opening WhatsApp…");
      window.open("https://wa.me/" + (cfg.whatsapp || "918799756026") + "?text=" + encodeURIComponent(lines.join("\n")), "_blank");
    });
  });
  // ---- homepage search + filters ----
  var grid = document.getElementById("project-grid");
  if (grid) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll(".card"));
    var search = document.getElementById("q"), area = document.getElementById("f-area"),
        status = document.getElementById("f-status"), empty = document.getElementById("empty-state"),
        skel = document.getElementById("skeletons");
    function apply() {
      var q = (search.value || "").toLowerCase(), a = area.value, s = status.value, shown = 0;
      cards.forEach(function (c) {
        var ok = (!q || c.getAttribute("data-search").indexOf(q) > -1) &&
                 (!a || c.getAttribute("data-area") === a) &&
                 (!s || c.getAttribute("data-status") === s);
        c.style.display = ok ? "" : "none"; if (ok) shown++;
      });
      if (empty) empty.hidden = shown > 0;
    }
    [search, area, status].forEach(function (el) { if (el) { el.addEventListener("input", apply); el.addEventListener("change", apply); } });
    var qp = new URLSearchParams(location.search).get("q"); if (qp && search) search.value = qp;
    setTimeout(function () { if (skel) skel.remove(); grid.hidden = false; apply(); }, 350);
  }
  // ---- cookie consent ----
  var banner = document.getElementById("cookie-banner");
  if (banner && !localStorage.getItem("cookie-consent")) banner.hidden = false;
  function setConsent(v) { localStorage.setItem("cookie-consent", JSON.stringify(v)); if (banner) banner.hidden = true; toast("Cookie preferences saved."); }
  var acc = document.getElementById("cookie-accept"), rej = document.getElementById("cookie-reject"),
      pb = document.getElementById("cookie-prefs-btn"), prefs = document.getElementById("cookie-prefs"),
      save = document.getElementById("cookie-save");
  if (acc) acc.addEventListener("click", function () { setConsent({ essential: true, analytics: true, marketing: true }); });
  if (rej) rej.addEventListener("click", function () { setConsent({ essential: true, analytics: false, marketing: false }); });
  if (pb) pb.addEventListener("click", function () { prefs.hidden = !prefs.hidden; });
  if (save) save.addEventListener("click", function () {
    setConsent({ essential: true, analytics: document.getElementById("ck-analytics").checked, marketing: document.getElementById("ck-marketing").checked });
  });
})();
