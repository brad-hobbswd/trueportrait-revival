(() => {
  const pages = [
    ["index.html", "Home"],
    ["about.html", "About"],
    ["gallery.html", "Gallery"],
    ["family-memories.html", "Family Memories"],
    ["childhood-memories.html", "Childhood Memories"],
    ["classic-restoration.html", "Classic Restoration"],
    ["heritage-restoration.html", "Heritage Restoration"],
    ["legacy-portrait-creation.html", "Legacy Portraits"],
    ["custom-portraits.html", "Custom Portraits"],
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
    '<div class="sitewide-footer-links"><h2>Explore</h2>' +
    '<a href="about.html">About</a><a href="gallery.html">Gallery</a><a href="custom-portraits.html">Custom Portraits</a><a href="pricing.html">Pricing</a><a href="contact.html">Contact</a></div>' +
    '<div class="sitewide-footer-links"><h2>Information</h2><a href="ethics.html">Restoration Ethics</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="copyright.html">Copyright</a></div>' +
    '</div><div class="sitewide-footer-bottom"><p>© ' + new Date().getFullYear() + ' TruePortrait Revival. All rights reserved.</p></div>';

  const install = () => {
    document.querySelectorAll("body > header, body > footer, body > .site-footer").forEach(el => el.remove());
    document.body.insertBefore(header, document.body.firstChild);
    document.body.appendChild(footer);
    const toggle = header.querySelector(".sitewide-menu-toggle");
    const nav = header.querySelector(".sitewide-nav");
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !open);
      toggle.classList.toggle("is-open", !open);
    });
    nav.addEventListener("click", event => {
      if (event.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation");
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", install, { once: true });
  } else {
    install();
  }
})();