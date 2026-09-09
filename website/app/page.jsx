"use client";

import { useEffect, useRef, useState } from "react";

const posts = [
  { title: "What I'm learning in 2026", excerpt: "DSA, C++, systems, AI, and becoming a better engineer.", date: "September 2026", href: "/blog/what-im-learning-in-2026" },
  { title: "How I approach coding problems", excerpt: "The questions I ask before choosing an algorithm or writing code.", date: "Coming soon", href: "/blog" }
];

const skills = ["C++", "Python", "C", "SQL", "DSA", "Systems", "AI"];

function BotanicalCompanion({ progress, flying }) {
  const positions = [
    { y: 9, x: 54 },
    { y: 24, x: 22 },
    { y: 39, x: 58 },
    { y: 55, x: 19 },
    { y: 71, x: 56 },
    { y: 87, x: 24 }
  ];
  const slot = Math.min(positions.length - 1, Math.round(progress * (positions.length - 1)));
  const target = positions[slot];
  const previous = useRef(slot);
  const [landing, setLanding] = useState(false);

  useEffect(() => {
    if (previous.current !== slot) {
      setLanding(true);
      const timer = window.setTimeout(() => setLanding(false), 500);
      previous.current = slot;
      return () => window.clearTimeout(timer);
    }
  }, [slot]);

  return (
    <div
      className={`botanical-companion ${flying ? "is-flying" : ""} ${landing ? "is-landing" : ""}`}
      style={{ "--bug-y": `${target.y}%`, "--bug-x": `${target.x}%` }}
      aria-hidden="true"
    >
      <svg className="botanical-stem" viewBox="0 0 90 760" preserveAspectRatio="none">
        <path className="stem-line" d="M48 760 C43 690 56 625 45 560 C35 495 55 430 45 365 C36 300 56 235 44 170 C39 105 50 58 45 0" />
        <g className="leaf leaf-1"><path d="M44 665 C25 643 8 650 5 671 C22 682 36 678 44 665Z"/><path d="M42 663L12 669"/></g>
        <g className="leaf leaf-2"><path d="M48 535 C66 512 83 518 86 540 C70 550 57 547 48 535Z"/><path d="M51 534L79 538"/></g>
        <g className="leaf leaf-3"><path d="M43 412 C24 390 9 396 6 416 C21 426 35 424 43 412Z"/><path d="M41 411L13 416"/></g>
        <g className="leaf leaf-4"><path d="M49 286 C67 263 82 269 85 291 C70 300 58 298 49 286Z"/><path d="M52 285L78 289"/></g>
        <g className="leaf leaf-5"><path d="M43 157 C25 135 11 140 7 160 C21 170 34 168 43 157Z"/><path d="M40 156L14 160"/></g>
        <g className="leaf leaf-6"><path d="M47 54 C64 32 79 38 82 58 C67 68 55 65 47 54Z"/><path d="M50 53L76 57"/></g>
      </svg>

      <div className="ladybug" style={{ top: "var(--bug-y)", left: "var(--bug-x)" }}>
        <svg viewBox="0 0 52 52" className="ladybug-art">
          <g className="bug-wing bug-wing-left">
            <path d="M25.5 14C18 13 12 18 12 27C12 35 17 40 25.5 41V14Z" fill="#8A203A" />
          </g>
          <g className="bug-wing bug-wing-right">
            <path d="M26.5 14C34 13 40 18 40 27C40 35 35 40 26.5 41V14Z" fill="#8A203A" />
          </g>
          <path d="M26 13V41" stroke="#4A2730" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="18" cy="23" r="2" fill="#F4D3DE" opacity=".72" />
          <circle cx="21" cy="33" r="1.6" fill="#F4D3DE" opacity=".68" />
          <circle cx="34" cy="23" r="2" fill="#F4D3DE" opacity=".72" />
          <circle cx="31" cy="33" r="1.6" fill="#F4D3DE" opacity=".68" />
          <ellipse cx="26" cy="12.5" rx="5" ry="4" fill="#3A292D" />
          <path d="M22 10L18 6M30 10L34 6" stroke="#3A292D" strokeWidth="1.1" strokeLinecap="round" />
          <path d="M20 13L16 12M32 13L36 12" stroke="#3A292D" strokeWidth="1" strokeLinecap="round" opacity=".75" />
          <circle cx="24" cy="11.5" r=".8" fill="#FFF8E8" />
          <circle cx="28" cy="11.5" r=".8" fill="#FFF8E8" />
        </svg>
        <span className="bug-shadow" />
      </div>
    </div>
  );
}

export default function Home() {
  const cursor = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [flying, setFlying] = useState(false);

  useEffect(() => {
    const move = (event) => {
      if (cursor.current) cursor.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }), { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let raf = 0;
    let last = window.scrollY;
    let timeout;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const current = window.scrollY;
        setScrollProgress(max > 0 ? Math.min(1, Math.max(0, current / max)) : 0);
        setFlying(Math.abs(current - last) > 1);
        last = current;
        window.clearTimeout(timeout);
        timeout = window.setTimeout(() => setFlying(false), 180);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <main>
      <div className="cursor-glow" ref={cursor} />
      <BotanicalCompanion progress={scrollProgress} flying={flying} />

      <nav className="nav">
        <div />
        <div className="links"><a href="#about">About</a><a href="#skills">Skills</a><a href="/blog">Blog</a><a href="https://github.com/saiesha" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="hero-card card-yellow"><span>01</span><b>build</b></div>
        <div className="hero-card card-blue"><span>02</span><b>learn</b></div>
        <div className="hero-card card-white"><span>03</span><b>create</b></div>
        <div className="hero-content reveal">
          <p className="eyebrow">Software Engineer · C++ · Problem Solving</p>
          <h1>Hi, I'm <em>Saiesha.</em></h1>
          <p className="hero-copy">I build software, solve problems, and stay curious about how things work.</p>
          <div className="actions"><a className="button primary" href="#about">Explore</a><a className="button" href="/blog">Read my blog ↗</a></div>
        </div>
        <div className="scroll-note">scroll to explore ↓</div>
      </section>

      <div className="ticker" aria-hidden="true"><span>CURIOUS BY DEFAULT</span><span>·</span><span>BUILDING & LEARNING</span><span>·</span><span>C++ & SYSTEMS</span><span>·</span><span>CURIOUS BY DEFAULT</span><span>·</span><span>BUILDING & LEARNING</span><span>·</span><span>C++ & SYSTEMS</span></div>

      <section className="section about-section" id="about">
        <div className="section-label reveal">01 / About me</div>
        <div className="about-layout"><h2 className="reveal">Engineer by profession.<br /><em>Curious by default.</em></h2><div className="about-copy reveal"><p>I'm a software engineer with a strong C++ foundation and an interest in systems, algorithms, and practical software.</p><p>I like understanding why something works, not just making it work. Outside engineering, I explore AI, music, writing, and ideas that make me curious.</p></div></div>
      </section>

      <section className="skills-section" id="skills"><div className="section-label reveal">02 / Things I work with</div><div className="skill-cloud reveal">{skills.map((skill, index) => <span key={skill} className={`skill skill-${index}`}>{skill}</span>)}</div></section>

      <section className="section blog-section"><div className="section-label reveal">03 / From the blog</div><div className="blog-heading reveal"><h2>Notes from<br /><em>the journey.</em></h2><a className="round-link" href="/blog">See all ↗</a></div><div className="posts">{posts.map((post, index) => <a className="post reveal" href={post.href} key={post.title}><span className="post-number">0{index + 1}</span><div><p className="date">{post.date}</p><h3>{post.title}</h3><p>{post.excerpt}</p><span className="read">Read post ↗</span></div></a>)}</div></section>

      <section className="closing reveal"><div className="closing-shape">✦</div><p className="eyebrow">One more thing</p><h2>Let's make the internet<br /><em>a little more interesting.</em></h2><a className="button primary" href="https://github.com/saiesha" target="_blank" rel="noreferrer">Find me on GitHub ↗</a></section>
      <footer><span>Saiesha</span><span>Built with Next.js · Hosted on Vercel</span></footer>
    </main>
  );
}
