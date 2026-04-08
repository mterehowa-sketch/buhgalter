(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /** Pricing spotlight (MagicBento-like): site primary RGB, no React/GSAP */
  (function initPricingSpotlight() {
    const section = document.querySelector(".spotlight-section");
    if (!section) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    if (reduceMotion || mobile) return;

    const spotlightRadius = 180;
    const proximity = spotlightRadius * 0.5;
    const fadeDistance = spotlightRadius * 0.75;

    const spotlight = document.createElement("div");
    spotlight.className = "global-spotlight";
    spotlight.setAttribute("aria-hidden", "true");
    document.body.appendChild(spotlight);

    const cards = () => Array.from(section.querySelectorAll(".price"));

    function updateCardGlow(card, mouseX, mouseY, glow, radius) {
      const rect = card.getBoundingClientRect();
      const relativeX = ((mouseX - rect.left) / rect.width) * 100;
      const relativeY = ((mouseY - rect.top) / rect.height) * 100;
      card.style.setProperty("--glow-x", `${Math.max(0, Math.min(100, relativeX))}%`);
      card.style.setProperty("--glow-y", `${Math.max(0, Math.min(100, relativeY))}%`);
      card.style.setProperty("--glow-intensity", String(glow));
      card.style.setProperty("--glow-radius", `${radius}px`);
    }

    function onMove(e) {
      const rect = section.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!inside) {
        spotlight.style.opacity = "0";
        cards().forEach((c) => c.style.setProperty("--glow-intensity", "0"));
        return;
      }

      let minDistance = Infinity;
      cards().forEach((card) => {
        const cr = card.getBoundingClientRect();
        const cx = cr.left + cr.width / 2;
        const cy = cr.top + cr.height / 2;
        const dist =
          Math.hypot(e.clientX - cx, e.clientY - cy) - Math.max(cr.width, cr.height) / 2;
        const effective = Math.max(0, dist);
        minDistance = Math.min(minDistance, effective);

        let intensity = 0;
        if (effective <= proximity) intensity = 1;
        else if (effective <= fadeDistance)
          intensity = (fadeDistance - effective) / (fadeDistance - proximity);

        updateCardGlow(card, e.clientX, e.clientY, intensity, spotlightRadius);
      });

      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;

      let targetOp = 0;
      if (minDistance <= proximity) targetOp = 0.72;
      else if (minDistance <= fadeDistance)
        targetOp = ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.72;

      spotlight.style.opacity = String(targetOp);
    }

    function onLeaveDoc() {
      spotlight.style.opacity = "0";
      cards().forEach((c) => c.style.setProperty("--glow-intensity", "0"));
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeaveDoc);

    cards().forEach((card) => {
      card.addEventListener("click", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const d = Math.max(rect.width, rect.height) * 1.25;
        const ripple = document.createElement("span");
        ripple.className = "price-ripple";
        ripple.style.width = `${d}px`;
        ripple.style.height = `${d}px`;
        ripple.style.left = `${x - d / 2}px`;
        ripple.style.top = `${y - d / 2}px`;
        card.appendChild(ripple);
        requestAnimationFrame(() => ripple.classList.add("price-ripple--active"));
        ripple.addEventListener(
          "transitionend",
          () => {
            ripple.remove();
          },
          { once: true }
        );
      });
    });

  })();

  /** Animated lists (AnimatedList / Motion-style): in-view stagger + scroll gradients */
  (function initAnimatedLists() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const listRevealIo = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add("is-revealed");
            listRevealIo.unobserve(en.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    function observeReveal(root) {
      if (reduceMotion) {
        root.classList.add("is-revealed");
        return;
      }
      listRevealIo.observe(root);
    }

    function bindScrollGradients(viewport, topGrad, bottomGrad) {
      const sync = () => {
        const { scrollTop, scrollHeight, clientHeight } = viewport;
        topGrad.style.opacity = String(Math.min(scrollTop / 48, 1));
        const bottomDistance = scrollHeight - (scrollTop + clientHeight);
        const bottomOp =
          scrollHeight <= clientHeight + 1 ? 0 : Math.min(bottomDistance / 48, 1);
        bottomGrad.style.opacity = String(bottomOp);
      };
      viewport.addEventListener("scroll", sync, { passive: true });
      window.addEventListener("resize", sync, { passive: true });
      requestAnimationFrame(sync);
    }

    function wrapScrollableList(ul) {
      if (!ul || ul.dataset.animListInit) return;
      ul.dataset.animListInit = "1";

      const wrap = document.createElement("div");
      wrap.className = "anim-list";

      const viewport = document.createElement("div");
      viewport.className = "anim-list__viewport";

      const topGrad = document.createElement("div");
      topGrad.className = "anim-list__grad anim-list__grad--top";
      topGrad.setAttribute("aria-hidden", "true");
      const bottomGrad = document.createElement("div");
      bottomGrad.className = "anim-list__grad anim-list__grad--bottom";
      bottomGrad.setAttribute("aria-hidden", "true");

      ul.parentNode.insertBefore(wrap, ul);
      viewport.appendChild(ul);
      wrap.appendChild(viewport);
      wrap.appendChild(topGrad);
      wrap.appendChild(bottomGrad);

      ul.querySelectorAll(":scope > li").forEach((li, i) => {
        li.classList.add("anim-list__item");
        li.style.setProperty("--anim-i", String(i));
      });

      bindScrollGradients(viewport, topGrad, bottomGrad);
      observeReveal(wrap);
    }

    document.querySelectorAll("main ul").forEach(wrapScrollableList);

    const stepsRoot = document.querySelector(".steps");
    if (stepsRoot && !stepsRoot.dataset.animStepsInit) {
      stepsRoot.dataset.animStepsInit = "1";
      const wrap = document.createElement("div");
      wrap.className = "anim-list";
      const viewport = document.createElement("div");
      viewport.className = "anim-list__viewport anim-list__viewport--steps";
      const topGrad = document.createElement("div");
      topGrad.className = "anim-list__grad anim-list__grad--top";
      topGrad.setAttribute("aria-hidden", "true");
      const bottomGrad = document.createElement("div");
      bottomGrad.className = "anim-list__grad anim-list__grad--bottom";
      bottomGrad.setAttribute("aria-hidden", "true");

      stepsRoot.parentNode.insertBefore(wrap, stepsRoot);
      viewport.appendChild(stepsRoot);
      wrap.appendChild(viewport);
      wrap.appendChild(topGrad);
      wrap.appendChild(bottomGrad);

      stepsRoot.querySelectorAll(".step").forEach((el, i) => {
        el.classList.add("anim-list__item");
        el.style.setProperty("--anim-i", String(i));
      });

      bindScrollGradients(viewport, topGrad, bottomGrad);
      observeReveal(wrap);
    }

    function initStaticGroup(root, itemSelector) {
      if (!root || root.dataset.animListInit) return;
      root.dataset.animListInit = "1";
      root.classList.add("anim-list");
      root.querySelectorAll(itemSelector).forEach((el, i) => {
        el.classList.add("anim-list__item");
        el.style.setProperty("--anim-i", String(i));
      });
      observeReveal(root);
    }

    initStaticGroup(document.querySelector(".serviceList"), ".serviceRow");
    initStaticGroup(document.querySelector(".bullets"), ".bullet");
    initStaticGroup(document.querySelector(".proofGrid"), ".proof");
    initStaticGroup(document.querySelector(".metrics"), ".metric");
  })();

  const menuBtn = document.querySelector(".header__menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  function setMobileNav(open) {
    if (!menuBtn || !mobileNav) return;
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    mobileNav.hidden = !open;
  }
  if (menuBtn && mobileNav) {
    setMobileNav(false);
    menuBtn.addEventListener("click", () => {
      const open = menuBtn.getAttribute("aria-expanded") === "true";
      setMobileNav(!open);
    });
    for (const link of mobileNav.querySelectorAll("a")) {
      link.addEventListener("click", () => setMobileNav(false));
    }
  }

  const form = document.getElementById("leadForm");
  const planField = document.getElementById("planField");
  const success = form?.querySelector(".form__success");
  const errorEls = {
    name: form?.querySelector('[data-error-for="name"]'),
    phone: form?.querySelector('[data-error-for="phone"]'),
    email: form?.querySelector('[data-error-for="email"]'),
    taxMode: form?.querySelector('[data-error-for="taxMode"]'),
    goal: form?.querySelector('[data-error-for="goal"]'),
    message: form?.querySelector('[data-error-for="message"]'),
  };

  // Clicking a "Цены" button can prefill the hidden plan field.
  for (const a of document.querySelectorAll("a[data-plan]")) {
    a.addEventListener("click", () => {
      if (planField) planField.value = a.getAttribute("data-plan") || "";
    });
  }

  function setError(name, text) {
    const el = errorEls[name];
    if (!el) return;
    el.textContent = text || "";
  }

  function clearErrors() {
    Object.keys(errorEls).forEach((k) => setError(k, ""));
  }

  function isEmailLike(value) {
    // Simple check for demo.
    return /.+@.+\..+/.test(value);
  }

  function isPhoneLike(value) {
    // Very permissive phone check for demo.
    const digits = value.replace(/[^\d]/g, "");
    return digits.length >= 10;
  }

  function validate() {
    clearErrors();
    if (!form) return false;

    const name = form.elements["name"]?.value?.trim() || "";
    const phone = form.elements["phone"]?.value?.trim() || "";
    const email = form.elements["email"]?.value?.trim() || "";
    const taxMode = form.elements["taxMode"]?.value?.trim() || "";
    const goal = form.elements["goal"]?.value?.trim() || "";
    const message = form.elements["message"]?.value?.trim() || "";

    let ok = true;

    if (!name) {
      setError("name", "Введите имя.");
      ok = false;
    }

    if (!phone && !email) {
      setError("phone", "Укажите телефон или email.");
      setError("email", "Укажите телефон или email.");
      ok = false;
    } else {
      if (phone && !isPhoneLike(phone)) {
        setError("phone", "Похоже, формат телефона неверный.");
        ok = false;
      }
      if (email && !isEmailLike(email)) {
        setError("email", "Похоже, формат email неверный.");
        ok = false;
      }
    }

    if (!taxMode) {
      setError("taxMode", "Выберите режим налогообложения.");
      ok = false;
    }

    if (!goal) {
      setError("goal", "Выберите задачу.");
      ok = false;
    }

    // Message is optional for demo, but keep a gentle check.
    if (message.length > 2000) {
      setError("message", "Комментарий слишком длинный.");
      ok = false;
    }

    return ok;
  }

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const ok = validate();
    if (!ok) return;

    // Demo mode: show success message only.
    if (success) {
      success.hidden = false;
      success.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    // Optional: reset the form fields except the selected plan.
    const keepPlan = planField?.value || "";
    form.reset();
    if (planField) planField.value = keepPlan;
  });
})();

