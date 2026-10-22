(() => {
  const pages = [
    ["index.html", "Home"],
    ["about.html", "About"],
    ["gallery.html", "Gallery"],
    ["pricing.html", "Pricing"],
    ["contact.html", "Contact"]
  ];

  const path = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = pages.map(([href, label]) =>
    '<a href="' + href + '"' + (href === path ? ' aria-current="page"' : "") + '>' + label + '</a>'
  ).join("");

  const header = document.createElement("header");
  header.className = "sitewide-header";
  header.innerHTML = '<div class="sitewide-header-inner">' +
    '<a class="sitewide-logo" href="index.html" aria-label="TruePortrait Revival home">TruePortrait Revival</a>' +
    '<button class="sitewide-menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span><span></span></button>' +
    '<nav class="sitewide-nav" aria-label="Main navigation">' + navLinks + '</nav>' +
    '</div>';

  const footer = document.createElement("footer");
  footer.className = "sitewide-footer";
  footer.innerHTML = '<div class="sitewide-footer-inner">' +
    '<div class="sitewide-footer-brand"><a href="index.html">TruePortrait Revival</a><p>Restoring the Image. Preserving the Person.</p><p class="sitewide-footer-note">Preserving treasured photographs and the stories they hold for generations to come.</p></div>' +
    '<div class="sitewide-footer-links"><h2>Quick Links</h2>' +
    '<a href="gallery.html">Gallery</a><a href="pricing.html">Pricing</a><a href="contact.html">Contact</a></div>' +
    '<div class="sitewide-footer-links"><h2>Policies</h2><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a></div>' +
    '</div><div class="sitewide-footer-bottom"><p>© ' + new Date().getFullYear() + ' TruePortrait Revival. All rights reserved.</p></div>';

  const install = () => {
    document.querySelectorAll("body > header, body > footer, body > .site-footer").forEach(el => el.remove());
    document.body.insertBefore(header, document.body.firstChild);
    document.body.appendChild(footer);
    // Delegate menu interactions so legacy page scripts cannot leave the replacement header with a detached event handler.
    if (!document.documentElement.dataset.sitewideMenuBound) {
      document.documentElement.dataset.sitewideMenuBound = "true";
      document.addEventListener("click", event => {
        const toggle = event.target.closest(".sitewide-menu-toggle");
        if (toggle) {
          event.preventDefault();
          event.stopPropagation();
          const activeHeader = toggle.closest(".sitewide-header");
          const nav = activeHeader && activeHeader.querySelector(".sitewide-nav");
          if (!nav) return;
          const open = toggle.getAttribute("aria-expanded") !== "true";
          toggle.setAttribute("aria-expanded", String(open));
          toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
          nav.classList.toggle("is-open", open);
          toggle.classList.toggle("is-open", open);
          return;
        }
        if (event.target.closest(".sitewide-nav a")) {
          const activeHeader = event.target.closest(".sitewide-header");
          if (!activeHeader) return;
          const nav = activeHeader.querySelector(".sitewide-nav");
          const menuButton = activeHeader.querySelector(".sitewide-menu-toggle");
          if (nav) nav.classList.remove("is-open");
          if (menuButton) {
            menuButton.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation");
          }
        }
      }, true);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", install, { once: true });
  } else {
    install();
  }
})();