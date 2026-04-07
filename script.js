(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

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

