(function () {
  "use strict";

  if (typeof window.AJOY_BOOKMARK_LOAD === "undefined") {
    console.log("%cAccess Denied - Bookmark Required", "color:#ff0000;font-size:15px;font-weight:bold");
    return;
  }

  // CONFIG
  const _0x5e548e = {
    k: "AJOY",
    r: "https://aincradmods.com/getkey?token=cbe82fe9d753428dbe064cfc049640ca",
    t: "https://t.me/Ajoybarmon96",
    s: "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#02040a;color:#fff;padding:25px;border-radius:12px;z-index:2147483647;font-family:sans-serif;text-align:center;box-shadow:0 10px 30px rgba(0,0,0,0.8);border:2px solid #00ffcc;width:280px;box-sizing:border-box;"
  };

  (async function () {

    // REMOVE OLD BOX
    const oldBox = document.getElementById("ajoy-auth-box");
    if (oldBox) oldBox.remove();

    // CREATE UI
    const authBox = document.createElement("div");
    authBox.id = "ajoy-auth-box";
    authBox.style.cssText = _0x5e548e.s;

    authBox.innerHTML = `
      <h3 style="margin:0 0 10px 0;color:#00ffcc;font-size:18px;font-weight:bold;">
        AJOY BORMON
      </h3>

      <p style="margin:0 0 15px 0;color:#64748b;font-size:11px;">
        AINCRAD KEY BYPASS
      </p>

      <input
        type="text"
        id="ajoy-key-input"
        placeholder="ENTER LICENSE KEY"
        style="
          width:100%;
          padding:10px;
          margin-bottom:15px;
          border:1px solid #00ffcc;
          border-radius:6px;
          background:#070b19;
          color:#fff;
          text-align:center;
          box-sizing:border-box;
          font-size:13px;
          outline:none;
        "
      >

      <button
        id="ajoy-login-btn"
        style="
          width:100%;
          background:#00ffcc;
          color:#000;
          border:none;
          padding:12px;
          border-radius:6px;
          font-weight:bold;
          cursor:pointer;
          font-size:13px;
          margin-bottom:10px;
        "
      >
        VERIFY
      </button>

      <button
        id="ajoy-telegram-btn"
        style="
          width:100%;
          background:#FFFF00;
          color:#fff;
          border:none;
          padding:12px;
          border-radius:6px;
          font-weight:bold;
          cursor:pointer;
          font-size:13px;
        "
      >
       CONTACT TELEGRAM
      </button>

      <div
        id="ajoy-status"
        style="
          margin-top:12px;
          font-size:12px;
          font-weight:bold;
          color:#64748b;
        "
      >
        READY
      </div>
    `;

    document.body.appendChild(authBox);

    // MOBILE RESPONSIVE
    setTimeout(() => {
      authBox.style.zIndex = "2147483647";

      if (window.innerWidth < 600) {
        authBox.style.width = "90%";
        authBox.style.maxWidth = "280px";
      }
    }, 10);

    const loginBtn = document.getElementById("ajoy-login-btn");
    const telegramBtn = document.getElementById("ajoy-telegram-btn");
    const keyInput = document.getElementById("ajoy-key-input");
    const statusBox = document.getElementById("ajoy-status");

    // TELEGRAM BUTTON
    telegramBtn.addEventListener("click", () => {
      window.open(_0x5e548e.t, "_blank");
    });

    // LOGIN BUTTON
    loginBtn.addEventListener("click", async () => {

      const enteredKey = keyInput.value.trim();

      if (!enteredKey) {
        statusBox.innerHTML =
          "<span style='color:#ff4444;'>PLEASE INPUT KEY!</span>";
        return;
      }

      statusBox.innerHTML =
        "<span style='color:#00ffcc;'>VERIFYING KEY...</span>";

      loginBtn.disabled = true;
      telegramBtn.disabled = true;

      try {

        // KEY CHECK
        const VALID_KEY = _0x5e548e.k;

        if (enteredKey === VALID_KEY) {

          statusBox.innerHTML =
            "<span style='color:#00ffcc;'>KEY VALIDATED! ✓</span>";

          setTimeout(async () => {

            authBox.remove();

            // LOADING SCREEN
            const loading = document.createElement("div");

            loading.style.cssText = `
              position:fixed;
              top:0;
              left:0;
              width:100%;
              height:100%;
              background:rgba(2,4,10,0.85);
              z-index:2147483647;
              display:flex;
              align-items:center;
              justify-content:center;
              font-family:sans-serif;
            `;

            loading.innerHTML = `
              <div
                style="
                  text-align:center;
                  background:#02040a;
                  padding:30px;
                  border-radius:12px;
                  border:2px solid #00ffcc;
                  box-shadow:0 10px 30px rgba(0,0,0,0.8);
                  width:280px;
                "
              >
                <div
                  style="
                    width:50px;
                    height:50px;
                    border:5px solid #1a2338;
                    border-top:5px solid #00ffcc;
                    border-radius:50%;
                    margin:0 auto 20px auto;
                    animation:ajoy-spin 1s linear infinite;
                  "
                ></div>

                <p
                  id="ajoy-check-text"
                  style="
                    color:#00ffcc;
                    font-size:16px;
                    font-weight:bold;
                    margin:0;
                  "
                >
                  CHECKING SERVER STATUS...
                </p>
              </div>

              <style>
                @keyframes ajoy-spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              </style>
            `;

            document.body.appendChild(loading);

            await new Promise(r => setTimeout(r, 3500));

            document.getElementById("ajoy-check-text").innerHTML =
              "<span style='color:#00ffcc;'>Link Updated Successfully! ✓</span>";

            await new Promise(r => setTimeout(r, 1500));

            loading.remove();

            // REDIRECT URL
            const REDIRECT_URL = _0x5e548e.r;

            // COUNTDOWN UI
            const countdownBox = document.createElement("div");

            countdownBox.style.cssText = `
              position:fixed;
              top:0;
              left:0;
              width:100%;
              height:100%;
              background:rgba(2,4,10,0.15);
              z-index:2147483647;
              display:flex;
              align-items:center;
              justify-content:center;
            `;

            const total = 80;

            countdownBox.innerHTML = `
              <div style="text-align:center;">

                <div
                  style="
                    position:relative;
                    width:220px;
                    height:220px;
                    margin:0 auto;
                  "
                >
                  <svg
                    width="220"
                    height="220"
                    style="transform:rotate(-90deg);"
                  >
                    <circle
                      cx="110"
                      cy="110"
                      r="98"
                      fill="none"
                      stroke="#1a2338"
                      stroke-width="18"
                    ></circle>

                    <circle
                      id="progress"
                      cx="110"
                      cy="110"
                      r="98"
                      fill="none"
                      stroke="#00ffcc"
                      stroke-width="18"
                      stroke-dasharray="615"
                      stroke-dashoffset="615"
                      stroke-linecap="round"
                    ></circle>
                  </svg>

                  <div
                    id="countdown-text"
                    style="
                      position:absolute;
                      top:50%;
                      left:50%;
                      transform:translate(-50%,-50%);
                      font-size:46px;
                      font-weight:bold;
                      color:#00ffcc;
                    "
                  >
                    ${total}
                  </div>
                </div>

                <p
                  style="
                    margin-top:25px;
                    color:#00ffcc;
                    font-size:18px;
                    font-weight:bold;
                  "
                >
                  REDIRECTING...
                </p>

              </div>
            `;

            document.body.appendChild(countdownBox);

            let current = total;

            const progress = countdownBox.querySelector("#progress");
            const text = countdownBox.querySelector("#countdown-text");

            const full = 615;

            const timer = setInterval(() => {

              current--;

              text.textContent = current;

              const offset = full * (current / total);

              progress.style.strokeDashoffset = offset;

              if (current <= 0) {

                clearInterval(timer);

                countdownBox.remove();

                window.location.replace(REDIRECT_URL);
              }

            }, 1000);

          }, 800);

        } else {

          statusBox.innerHTML =
            "<span style='color:#ff4444;'>INVALID LICENSE KEY!</span>";

          loginBtn.disabled = false;
          telegramBtn.disabled = false;
        }

      } catch (e) {

        statusBox.innerHTML =
          "<span style='color:#ff4444;'>SERVER ERROR!</span>";

        loginBtn.disabled = false;
        telegramBtn.disabled = false;
      }

    });

  })();

})();

