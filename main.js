(() => {
  const D = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Contenido ---------- */
  document.title = `${D.nombre} — Portafolio`;
  $("#logo").textContent = D.iniciales || "✦";
  // Letras agrupadas por palabra para que una palabra nunca se parta en dos líneas
  let n = 0;
  $("#heroName").innerHTML = D.nombre
    .split(" ")
    .map((w) => `<span class="word">${[...w].map((c) => `<span class="ch" style="animation-delay:${0.2 + n++ * 0.04}s">${esc(c)}</span>`).join("")}</span>`)
    .join(" ");
  const paintName = () => {
    const name = $("#heroName"), w = name.scrollWidth;
    name.querySelectorAll(".ch").forEach((c) => {
      c.style.setProperty("--w", `${w}px`);
      c.style.setProperty("--x", `${-c.offsetLeft + name.offsetLeft}px`);
    });
  };
  paintName();
  addEventListener("resize", paintName);
  document.fonts?.ready.then(paintName);
  $("#heroLoc").textContent = D.ubicacion ? `📍 ${D.ubicacion}` : "";
  if (!D.disponible) $("#status").remove();
  if (D.cv) $("#cvBtn").href = D.cv;
  else $("#cvBtn").remove();

  $("#avatar").innerHTML = D.foto ? `<img src="${esc(D.foto)}" alt="${esc(D.nombre)}">` : `<span class="grad">${esc(D.iniciales)}</span>`;
  $("#bio").textContent = D.bio;

  const allSkills = D.habilidades.flatMap((g) => g.items);
  $("#marquee").innerHTML = [...allSkills, ...allSkills].map((s) => `<span>${esc(s)}</span>`).join("");
  $("#skills").innerHTML = D.habilidades
    .map((g) => `<div class="skill-group"><h4>${esc(g.grupo)}</h4><div class="chips">${g.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div></div>`)
    .join("");

  $("#stats").innerHTML = D.stats
    .map((s, i) => `<div class="stat reveal" style="transition-delay:${i * 0.1}s"><b class="grad" data-to="${s.valor}" data-suf="${esc(s.sufijo)}">0</b><span>${esc(s.texto)}</span></div>`)
    .join("");

  // Proyectos con portada generada si no hay imagen
  const palettes = [
    ["#8b5cf6", "#22d3ee"], ["#f43f5e", "#f59e0b"], ["#10b981", "#3b82f6"],
    ["#ec4899", "#8b5cf6"], ["#06b6d4", "#a3e635"], ["#f97316", "#db2777"],
  ];
  const initials = (t) => t.split(/\s+/).filter((w) => w.length > 2 || /^[A-Z0-9]/.test(w)).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
  $("#projects").innerHTML = D.proyectos
    .map((p, i) => {
      const [c1, c2] = palettes[i % palettes.length];
      const cover = p.imagen
        ? `<img src="${esc(p.imagen)}" alt="${esc(p.titulo)}" loading="lazy">`
        : `<div class="cover-art" style="background:linear-gradient(135deg,${c1},${c2})">${esc(initials(p.titulo))}</div>`;
      const links = [p.demo && `<a href="${esc(p.demo)}" target="_blank" rel="noopener">Ver demo ↗</a>`, p.codigo && `<a href="${esc(p.codigo)}" target="_blank" rel="noopener">Código ↗</a>`]
        .filter(Boolean).join("");
      return `<article class="project reveal${p.destacado ? " featured" : ""}" data-cat="${esc(p.categoria)}">
        <div class="cover"><span class="badge">${esc(p.categoria)}</span>${cover}</div>
        <div class="project-body">
          <h3>${esc(p.titulo)}</h3><p>${esc(p.desc)}</p>
          <div class="chips">${p.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
          ${links ? `<div class="project-links">${links}</div>` : ""}
        </div></article>`;
    })
    .join("");

  const cats = ["Todos", ...new Set(D.proyectos.map((p) => p.categoria))];
  $("#filters").innerHTML = cats.map((c, i) => `<button class="filter${i ? "" : " active"}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest(".filter");
    if (!b) return;
    document.querySelectorAll(".filter").forEach((f) => f.classList.toggle("active", f === b));
    document.querySelectorAll(".project").forEach((p) => p.classList.toggle("hide", b.dataset.cat !== "Todos" && p.dataset.cat !== b.dataset.cat));
  });

  $("#jobs").innerHTML = D.experiencia
    .map((j) => `<li class="reveal"><time>${esc(j.fecha)}</time><h4>${esc(j.cargo)}</h4><div class="place">${esc(j.empresa)}</div><ul>${j.puntos.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></li>`)
    .join("");
  $("#timeline").innerHTML = D.educacion
    .map((e) => `<li class="reveal">${e.fecha ? `<time>${esc(e.fecha)}</time>` : ""}<h4>${esc(e.titulo)}</h4><div class="place">${esc(e.lugar)}</div>${e.desc ? `<p>${esc(e.desc)}</p>` : ""}</li>`)
    .join("");
  $("#achievements").innerHTML = D.logros
    .map((l, i) => `<div class="achievement reveal" style="transition-delay:${i * 0.1}s"><div class="ic">${esc(l.icono)}</div><div><h4>${esc(l.titulo)}</h4><p>${esc(l.desc)}</p><small>${esc(l.fecha)}</small></div></div>`)
    .join("");
  $("#certs").innerHTML = D.certificaciones
    .map((c, i) => `<div class="cert reveal" style="transition-delay:${(i % 3) * 0.1}s"><div class="seal">${esc(c.emisor[0])}</div><h4>${esc(c.nombre)}</h4><p>${esc(c.emisor)} · ${esc(c.fecha)}${c.horas ? ` · ${esc(c.horas)} h` : ""}</p>${c.url ? `<a href="${esc(c.url)}" target="_blank" rel="noopener">Ver credencial ↗</a>` : ""}</div>`)
    .join("");

  $("#mailLink").textContent = D.email;
  $("#mailLink").href = `mailto:${D.email}`;
  const socialNames = { github: "GitHub", linkedin: "LinkedIn", instagram: "Instagram", whatsapp: "WhatsApp" };
  $("#socials").innerHTML = Object.entries(D.redes)
    .filter(([, url]) => url)
    .map(([k, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${socialNames[k] || k} ↗</a>`)
    .join("");
  $("#footer").textContent = `© ${new Date().getFullYear()} ${D.nombre}. Hecho con código y café.`;

  /* ---------- Texto que se escribe solo ---------- */
  const typed = $("#typed");
  let r = 0, ch = 0, del = false;
  (function type() {
    const word = D.roles[r];
    typed.textContent = word.slice(0, ch);
    if (!del && ch === word.length) { del = true; return setTimeout(type, 1800); }
    if (del && ch === 0) { del = false; r = (r + 1) % D.roles.length; }
    ch += del ? -1 : 1;
    setTimeout(type, del ? 35 : 70);
  })();

  /* ---------- Aparecer al hacer scroll + contadores ---------- */
  const countUp = (el) => {
    const to = +el.dataset.to, suf = el.dataset.suf, t0 = performance.now(), dur = 1600;
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur), v = Math.round(to * (1 - Math.pow(1 - k, 3)));
      el.textContent = v.toLocaleString("es") + suf;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      const num = e.target.querySelector("[data-to]");
      if (num) countUp(num);
      io.unobserve(e.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ---------- Nav activa, barra de progreso y menú ---------- */
  const links = [...document.querySelectorAll(".nav-links a")];
  const progress = $(".progress");
  addEventListener("scroll", () => {
    const h = document.documentElement;
    progress.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight)})`;
    let current = "";
    document.querySelectorAll("main section[id]").forEach((s) => { if (s.getBoundingClientRect().top < innerHeight * 0.4) current = s.id; });
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
  }, { passive: true });
  $("#menuBtn").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
  links.forEach((a) => a.addEventListener("click", () => $("#navLinks").classList.remove("open")));

  /* ---------- Tema claro / oscuro ---------- */
  const root = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch {}
  $("#themeBtn").addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    try { localStorage.setItem("theme", root.dataset.theme); } catch {}
  });

  if (reduced) return;

  /* ---------- Brillo que sigue al cursor ---------- */
  const glow = $(".cursor-glow");
  addEventListener("pointermove", (e) => { glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; });

  /* ---------- Botones magnéticos ---------- */
  document.querySelectorAll(".magnetic").forEach((b) => {
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    b.addEventListener("pointerleave", () => (b.style.transform = ""));
  });

  /* ---------- Tarjetas con inclinación 3D ---------- */
  document.querySelectorAll(".project").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
    });
    card.addEventListener("pointerleave", () => (card.style.transform = ""));
  });

  /* ---------- Red de partículas interactiva ---------- */
  const cv = $("#particles"), ctx = cv.getContext("2d");
  let W, H, pts, mouse = { x: -999, y: -999 };
  const resize = () => {
    const dpr = Math.min(devicePixelRatio, 2);
    W = cv.offsetWidth; H = cv.offsetHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(110, Math.floor((W * H) / 12000));
    pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 }));
  };
  resize();
  addEventListener("resize", resize);
  cv.parentElement.addEventListener("pointermove", (e) => { const r = cv.getBoundingClientRect(); mouse = { x: e.clientX - r.left, y: e.clientY - r.top }; });
  cv.parentElement.addEventListener("pointerleave", () => (mouse = { x: -999, y: -999 }));
  const css = (v) => getComputedStyle(root).getPropertyValue(v).trim();
  (function draw() {
    const a1 = css("--a1"), a2 = css("--a2");
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
      if (d < 140) { p.x += dx / d * 1.6; p.y += dy / d * 1.6; }
      ctx.fillStyle = a2; ctx.globalAlpha = 0.8;
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, 7); ctx.fill();
    }
    ctx.strokeStyle = a1;
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
      const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
      if (d < 130) { ctx.globalAlpha = (1 - d / 130) * 0.45; ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke(); }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  })();
})();
