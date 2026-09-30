
/**
 * NEBULA loader — fetches script from Render and executes.
 * Usage (console): paste whole file, or:
 *   fetch('https://nebula-bot-g8ey.onrender.com/n-loader.js').then(r=>r.text()).then(eval)
 * Bookmarklet: use loader.js
 */
(function () {
  var SRC = "https://raw.githubusercontent.com/barmonajoy002-design/AINCRAD/refs/heads/main/ajoynew.js";
  var toast = document.createElement("div");
  toast.style.cssText =
    "position:fixed;top:16px;right:16px;z-index:2147483647;" +
    "background:rgba(10,14,24,.92);color:#e8eefc;padding:12px 16px;" +
    "border-radius:12px;border:1px solid rgba(0,242,255,.45);" +
    "font:13px system-ui,sans-serif;box-shadow:0 12px 28px rgba(0,0,0,.45)";
  toast.textContent = "Loading NEBULA…";
  (document.body || document.documentElement).appendChild(toast);

  fetch(SRC + "?t=" + Date.now(), { cache: "no-store" })
    .then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.text();
    })
    .then(function (code) {
      toast.textContent = "Running…";
      (0, eval)(code);
      toast.textContent = "NEBULA ready";
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 1200);
    })
    .catch(function (e) {
      toast.style.borderColor = "rgba(255,80,80,.7)";
      toast.textContent = "Load failed: " + (e && e.message ? e.message : e);
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 4000);
    });
})();
