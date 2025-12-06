document.addEventListener("DOMContentLoaded", () => {
  
  //DARK MODE
  const html = document.documentElement;

  const desktopToggle = document.getElementById("darkToggleDesktop");
  const mobileToggle = document.getElementById("darkToggleMobile");

  const sunDesktop = document.getElementById("sunDesktop");
  const moonDesktop = document.getElementById("moonDesktop");
  const sunMobile = document.getElementById("sunMobile");
  const moonMobile = document.getElementById("moonMobile");

  function applyTheme(isDark) {
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    sunDesktop?.classList.toggle("hidden", isDark);
    moonDesktop?.classList.toggle("hidden", !isDark);
    sunMobile?.classList.toggle("hidden", isDark);
    moonMobile?.classList.toggle("hidden", !isDark);
  }

  applyTheme(localStorage.getItem("theme") === "dark");

  desktopToggle?.addEventListener("click", () =>
    applyTheme(!html.classList.contains("dark"))
  );
  mobileToggle?.addEventListener("click", () =>
    applyTheme(!html.classList.contains("dark"))
  );

 //MOBILE MENU
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");
  const overlay = document.getElementById("menuOverlay");

  function openMenu() {
    mobileMenu.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
    requestAnimationFrame(() => overlay.classList.remove("opacity-0"));
  }

  function hideMenu() {
    mobileMenu.classList.add("translate-x-full");
    overlay.classList.add("opacity-0");
    setTimeout(() => overlay.classList.add("hidden"), 300);
  }

  menuBtn?.addEventListener("click", openMenu);
  closeMenu?.addEventListener("click", hideMenu);
  overlay?.addEventListener("click", hideMenu);

  document.querySelectorAll(".mobile-nav").forEach((link) => {
    link.addEventListener("click", hideMenu);
  });

    //GLOBAL TYPING FUNCTION
  function typeWriter(element, text, speed, callback = null) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        if (callback) callback();
      }
    }
    type();
  }

    //TYPING HERO
  const typingHero = document.getElementById("typingHero");
  if (typingHero) {
    setTimeout(() => {
      typeWriter(
        typingHero,
        "Frontend Developer Pemula yang sedang belajar HTML, CSS, dan Javascipt.",
        35
      );
    }, 500);
  }

    //TYPING ABOUT (SCROLL)
  const typingAbout = document.getElementById("typingAbout");
  if (typingAbout) {
    const aboutText =
      "Saya developer web pemula yang fokus membuat tampilan rapi, website ringan, dan komunikasi yang jelas.";

    const obs1 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          typeWriter(typingAbout, aboutText, 25);
          obs1.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    obs1.observe(typingAbout);
  }

    // TYPING ABOUT 2 (SCROLL)
  const typingAbout2 = document.getElementById("typingAbout2");
  const whyTitle = document.getElementById("whyTitle");

  if (typingAbout2 && whyTitle) {
    const text2 =
      "Saya bukan developer senior. Tapi saya punya kelebihan yang jarang dimiliki pemula: respon cepat, mau revisi tanpa ribet, fokus pada detail tampilan, dan pengerjaan micro-job yang rapi & tepat waktu.";

    let hasTyped = false;

    const obs2 = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.intersectionRatio >= 0.55 && !hasTyped) {
          hasTyped = true;

          // langsung typing, tidak mengganggu AOS logo tech
          typeWriter(typingAbout2, text2, 12);

          obs2.disconnect();
        }
      },
      { threshold: 0.55 }
    );

    obs2.observe(whyTitle);
  }
});

