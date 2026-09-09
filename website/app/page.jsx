"use client";

import { useEffect, useRef, useState } from "react";

const posts = [
  { title: "What I'm learning in 2026", excerpt: "DSA, C++, systems, AI, and becoming a better engineer.", date: "September 2026", href: "/blog/what-im-learning-in-2026" },
  { title: "How I approach coding problems", excerpt: "The questions I ask before choosing an algorithm or writing code.", date: "Coming soon", href: "/blog" }
];

const skills = ["C++", "Python", "C", "SQL", "DSA", "Systems", "AI"];

function BotanicalCompanion({ progress, flying }) {
  const positions = [
    { y: 84, x: 61 },
    { y: 65, x: 28 },
    { y: 45, x: 64 },
    { y: 25, x: 30 },
    { y: 8, x: 57 }
  ];
  const slot = Math.min(positions.length - 1, Math.round(progress * (positions.length - 1)));
  const target = positions[slot];
  const previous = useRef(slot);
  const [landing, setLanding] = useState(false);

  useEffect(() => {
    if (previous.current !== slot) {
      setLanding(true);
      const timer = window.setTimeout(() => setLanding(false), 560);
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
        <path className="stem-line" d="M52 760 C67 692 48 640 57 575 C67 507 43 458 55 395 C68 326 45 278 53 218 C61 155 40 103 49 0" />
        <path className="branch branch-1" d="M55 575 C47 558 36 548 24 541" />
        <path className="branch branch-2" d="M54 395 C62 379 70 368 78 357" />
        <path className="branch branch-3" d="M53 218 C44 201 34 190 23 182" />
        <path className="branch branch-4" d="M49 70 C58 58 66 48 75 39" />
        <g className="leaf leaf-1"><path d="M25 541 C11 521 7 501 20 489 C37 494 42 514 25 541Z"/><path d="M25 537L18 498"/></g>
        <g className="leaf leaf-2"><path d="M78 357 C83 334 94 321 104 331 C107 349 97 362 78 357Z"/><path d="M80 354L98 333"/></g>
        <g className="leaf leaf-3"><path d="M23 182 C7 166 4 146 17 137 C33 145 36 163 23 182Z"/><path d="M23 178L15 145"/></g>
        <g className="leaf leaf-4"><path d="M75 39 C77 20 87 8 98 15 C101 30 91 42 75 39Z"/><path d="M77 37L93 19"/></g>
      </svg>

      <div className="ladybug" style={{ top: "var(--bug-y)", left: "var(--bug-x)" }}>
        <svg viewBox="0 0 60 60" className="ladybug-art">
          {/* One unified shell; the flight wings sit behind it and only appear while flying. */}
          <g className="flight-wings">
            <path className="flight-wing flight-wing-left" d="M28.5 19C20 15 12 17 10 24C8 30 14 35 23 36L29 30Z" />
            <path className="flight-wing flight-wing-right" d="M31.5 19C40 15 48 17 50 24C52 30 46 35 37 36L31 30Z" />
          </g>
          <path className="bug-shell" d="M30 15C20.5 15 13.5 22.1 13.5 32.1C13.5 42.1 20.2 49 30 49C39.8 49 46.5 42.1 46.5 32.1C46.5 22.1 39.5 15 30 15Z" />
          <circle cx="21" cy="27" r="2.1" className="bug-spot" />
          <circle cx="23.5" cy="39" r="1.7" className="bug-spot" />
          <circle cx="39" cy="27" r="2.1" className="bug-spot" />
          <circle cx="36.5" cy="39" r="1.7" className="bug-spot" />
          <path className="bug-seam" d="M30 17V47" />
          <ellipse className="bug-head" cx="30" cy="15" rx="6" ry="5" />
          <path className="bug-antenna" d="M26 12L21 7M34 12L39 7" />
          <path className="bug-antenna-side" d="M24 15L19 14M36 15L41 14" />
          <circle cx="28" cy="13.5" r=".9" className="bug-eye" />
          <circle cx="32" cy="13.5" r=".9" className="bug-eye" />
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
      <nav className="nav"><div /><div className="links"><a href="#about">About</a><a href="#skills">Skills</a><a href="/blog">Blog</a><a href="https://github.com/saiesha" target="_blank" rel="noreferrer">GitHub ↗</a></div></nav>
      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="hero-card card-yellow"><span>01</span><b>build</b></div><div className="hero-card card-blue"><span>02</span><b>learn</b></div><div className="hero-card card-white"><span>03</span><b>create</b></div>
        <div className="hero-content reveal"><p className="eyebrow">Software Engineer · C++ · Problem Solving</p><h1>Hi, I'm <em>Saiesha.</em></h1><p className="hero-copy">I build software, solve problems, and stay curious about how things work.</p><div className="actions"><a className="button primary" href="#about">Explore</a><a className="button" href="/blog">Read my blog ↗</a></div></div>
        <div className="scroll-note">scroll to explore ↓</div>
      </section>
      <div className="ticker" aria-hidden="true"><span>CURIOUS BY DEFAULT</span><span>·</span><span>BUILDING & LEARNING</span><span>·</span><span>C++ & SYSTEMS</span><span>·</span><span>CURIOUS BY DEFAULT</span><span>·</span><span>BUILDING & LEARNING</span><span>·</span><span>C++ & SYSTEMS</span></div>
      <section className="section about-section" id="about"><div className="section-label reveal">01 / About me</div><div className="about-layout"><h2 className="reveal">Engineer by profession.<br /><em>Curious by default.</em></h2><div className="about-copy reveal"><p>I'm a software engineer with a strong C++ foundation and an interest in systems, algorithms, and practical software.</p><p>I like understanding why something works, not just making it work. Outside engineering, I explore AI, music, writing, and ideas that make me curious.</p></div></div></section>
      <section className="skills-section" id="skills"><div className="section-label reveal">02 / Things I work with</div><div className="skill-cloud reveal">{skills.map((skill, index) => <span key={skill} className={`skill skill-${index}`}>{skill}</span>)}</div></section>
      <section className="section blog-section"><div className="section-label reveal">03 / From the blog</div><div className="blog-heading reveal"><h2>Notes from<br /><em>the journey.</em></h2><a className="round-link" href="/blog">See all ↗</a></div><div className="posts">{posts.map((post, index) => <a className="post reveal" href={post.href} key={post.title}><span className="post-number">0{index + 1}</span><div><p className="date">{post.date}</p><h3>{post.title}</h3><p>{post.excerpt}</p><span className="read">Read post ↗</span></div></a>)}</div></section>
      <section className="closing reveal"><div className="closing-shape">✦</div><p className="eyebrow">One more thing</p><h2>Let's make the internet<br /><em>a little more interesting.</em></h2><a className="button primary" href="https://github.com/saiesha" target="_blank" rel="noreferrer">Find me on GitHub ↗</a></section>
      <footer><span>Saiesha</span><span>Built with Next.js · Hosted on Vercel</span></footer>
    </main>
  );
}
