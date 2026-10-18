(() => {
  const css = `
    html, body {
      overflow-y: auto !important;
      scrollbar-width: auto !important;
      scrollbar-color: #9ca3af #e5e7eb !important;
    }
    *::-webkit-scrollbar {
      width: 12px !important;
      height: 12px !important;
    }
    *::-webkit-scrollbar-track {
      background: #e5e7eb !important;
    }
    *::-webkit-scrollbar-thumb {
      background: #9ca3af !important;
      border: 2px solid #e5e7eb !important;
      border-radius: 8px !important;
    }
  `;
  function apply() {
    if (!document.head) return;
    let style = document.getElementById("mada-visible-scrollbar");
    if (!style) {
      style = document.createElement("style");
      style.id = "mada-visible-scrollbar";
      document.head.appendChild(style);
    }
    style.textContent = css;
  }
  apply();
  new MutationObserver(apply).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
