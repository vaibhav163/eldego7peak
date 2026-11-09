
(function () {
  "use strict";
  var cfg = window.SITE_CONFIG || {};
  function toast(msg) {
    var t = document.getElementById("toast"); if (!t) return;
    t.textContent = msg; t.hidden = false;
    setTimeout(function () { t.hidden = true; }, 4200);
  }
  // ---- enquiry forms -> EmailJS first, WhatsApp fallback ----
  function sendEmailJS(params) {
    var ej = cfg.emailjs || {};
    if (!ej.serviceId || !ej.templateId || !ej.publicKey) return Promise.reject(new Error("emailjs not configured"));
    var ctrl = ("AbortController" in window) ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 9000) : null;
    return fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ service_id: ej.serviceId, template_id: ej.templateId, user_id: ej.publicKey, template_params: params }),
      signal: ctrl ? ctrl.signal : undefined
    }).then(function (r) { if (timer) clearTimeout(timer); if (!r.ok) throw new Error("emailjs " + r.status); return r; });
  }
  document.querySelectorAll(".enquiry-form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var project = form.getAttribute("data-project") || "Eldeco Group Projects";
      var params = {
        from_name: d.get("name") || "", phone: d.get("phone") || "",
        email: d.get("email") || "", interest: d.get("interest") || "",
        project: project, message: d.get("message") || "",
        reply_to: d.get("email") || ""
      };
      window.trackConversion && trackConversion("generate_lead", { project: project });
      var btn = form.querySelector("[type=submit]");
      var oldLabel = btn ? btn.textContent : "";
      if (btn) { btn.disabled = true; btn.textContent = "Sending\u2026"; }
      function done() { if (btn) { btn.disabled = false; btn.textContent = oldLabel; } }
      function waFallback() {
        var lines = ["Hi, I am interested in " + project + ".",
          "Name: " + params.from_name, "Mobile: " + params.phone];
        if (params.email) lines.push("Email: " + params.email);
        if (params.interest) lines.push("Interested in: " + params.interest);
        if (params.message) lines.push("Message: " + params.message);
        toast("Opening WhatsApp\u2026");
        window.open("https://wa.me/" + (cfg.whatsapp || "918799756026") + "?text=" + encodeURIComponent(lines.join("\n")), "_blank");
      }
      sendEmailJS(params).then(function () {
        toast("Enquiry sent! We will call you back shortly.");
        form.reset(); done();
      }).catch(function () { done(); waFallback(); });
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
