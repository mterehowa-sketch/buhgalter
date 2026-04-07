(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Hero animation: data → AI → result
  const aiScene = document.getElementById("aiScene");
  const aiToken = document.getElementById("aiToken");
  const aiCoreStatus = document.getElementById("aiCoreStatus");
  if (aiScene && aiToken && aiCoreStatus) {
    const incomingCards = aiScene.querySelectorAll(".aiCard--data");
    const resultCards = aiScene.querySelectorAll(".aiCard--result");

    const statuses = [
      "Анализ данных",
      "Проверка сроков",
      "Сопоставление операций",
      "Контроль отчетности",
    ];

    const steps = [
      { incomingIndex: 0, resultIndex: 0, start: { x: 190, y: 170 }, end: { x: 610, y: 185 }, status: statuses[0] },
      { incomingIndex: 1, resultIndex: 1, start: { x: 190, y: 255 }, end: { x: 610, y: 260 }, status: statuses[1] },
      { incomingIndex: 2, resultIndex: 2, start: { x: 190, y: 340 }, end: { x: 610, y: 335 }, status: statuses[2] },
      { incomingIndex: 3, resultIndex: 3, start: { x: 190, y: 425 }, end: { x: 610, y: 410 }, status: statuses[3] },
    ];

    function toPct(x, y) {
      // Map from the SVG viewBox (800x650) into scene percentages.
      return { left: `${(x / 800) * 100}%`, top: `${(y / 650) * 100}%` };
    }

    function setActive(i) {
      incomingCards.forEach((c) => c.classList.remove("active"));
      resultCards.forEach((c) => c.classList.remove("active"));
      incomingCards[i]?.classList.add("active");
      resultCards[i]?.classList.add("active");
    }

    let idx = 0;
    let rafId = null;
    let t0 = 0;
    const durationMs = 1050;
    const holdMs = 750;

    function easeInOut(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animate(now) {
      const step = steps[idx];
      if (!t0) {
        t0 = now;
        aiCoreStatus.textContent = step.status;
        setActive(step.incomingIndex);
        aiToken.classList.add("active");
        const p = toPct(step.start.x, step.start.y);
        aiToken.style.left = p.left;
        aiToken.style.top = p.top;
      }

      const elapsed = now - t0;
      const t = Math.min(1, elapsed / durationMs);
      const e = easeInOut(t);
      const x = step.start.x + (step.end.x - step.start.x) * e;
      const y = step.start.y + (step.end.y - step.start.y) * e;
      const p = toPct(x, y);
      aiToken.style.left = p.left;
      aiToken.style.top = p.top;

      if (t >= 1) {
        // Hold on end, then switch step.
        if (elapsed >= durationMs + holdMs) {
          idx = (idx + 1) % steps.length;
          t0 = 0;
        }
      }

      rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);

    // Pause animation when tab is hidden (no visual glitches, saves CPU).
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        t0 = 0;
      } else if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }
    });
  }

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

