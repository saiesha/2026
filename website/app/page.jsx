"use client";

import { useEffect, useRef, useState } from "react";

const posts = [
  { title: "What I'm learning in 2026", excerpt: "DSA, C++, AI, and getting better at the things I care about.", date: "September 2026", href: "/blog/what-im-learning-in-2026" },
  { title: "How I approach coding problems", excerpt: "The questions I ask before I start writing code.", date: "Coming soon", href: "/blog" }
];
const skills = ["C++", "Python", "C", "SQL", "DSA", "AI"];
const work = [
  { number: "01", title: "Engineering", detail: "Turning messy problems into software that is clear, reliable, and easier to improve.", tag: "C++" },
  { number: "02", title: "Problem solving", detail: "Breaking problems down, finding the pattern, and choosing the simplest solution that works.", tag: "DSA" },
  { number: "03", title: "Exploring", detail: "Following interesting questions through code, writing, music, and small experiments.", tag: "Now" }
];

export default function Home() {
  const cursor = useRef(null);
  const [activeWork, setActiveWork] = useState(0);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("saiesha-theme");
    setDark(saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("saiesha-theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    const move = (event) => { if (cursor.current) cursor.current.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`; };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <>
    <style>{`
      html[data-theme="dark"] .links a { color: #d9dce3; }
      html[data-theme="dark"] .links a:hover { color: #f8f7f2; }
      html[data-theme="dark"] .section-label span,
      html[data-theme="dark"] .work-item i,
      html[data-theme="dark"] .skill-row i,
      html[data-theme="dark"] .post-number { color: #c7b4ff; }
      html[data-theme="dark"] .work-heading h2 em,
      html[data-theme="dark"] .skills-intro h2 em { color: #d9dce3; }
      html[data-theme="dark"] .work-intro,
      html[data-theme="dark"] .skills-intro p,
      html[data-theme="dark"] .mini-kicker { color: #b8beca; }
      html[data-theme="dark"] .about-copy p,
      html[data-theme="dark"] .hero-copy,
      html[data-theme="dark"] .post p { color: #d9dce3; }
      html[data-theme="dark"] .about-meta,
      html[data-theme="dark"] .date,
      html[data-theme="dark"] footer,
      html[data-theme="dark"] .hero-note,
      html[data-theme="dark"] .scroll-note { color: #aeb5c2; }
      html[data-theme="dark"] .work-item.active { background: #242a36; }
      html[data-theme="dark"] .post { background: #1d222d; }
      html[data-theme="dark"] .post:nth-child(2) { background: #f5ffc6; color: #101827; }
      html[data-theme="dark"] .post:nth-child(2) h3,
      html[data-theme="dark"] .post:nth-child(2) p,
      html[data-theme="dark"] .post:nth-child(2) .read { color: #101827; }
      html[data-theme="dark"] .post:nth-child(2) .date,
      html[data-theme="dark"] .post:nth-child(2) .post-number { color: #344054 !important; }
      html[data-theme="dark"] .round-link { border-color: #101827; }
      html[data-theme="dark"] .theme-toggle:hover { color: #101827; }
      html[data-theme="dark"] .button.primary { color: #10131b; background: #f8f7f2; }
      html[data-theme="dark"] .button.primary:hover { box-shadow: 6px 6px 0 #ab87ff; }
      html[data-theme="dark"] .closing { background: #0b0e15; color: #f8f7f2; }
      html[data-theme="dark"] .closing .eyebrow { color: #f8f7f2; }
      html[data-theme="dark"] .closing-links a { color: #f8f7f2; border-color: rgba(248,247,242,.55); }
      html[data-theme="dark"] .closing h2 em { color: #b4e1ff; }
      html[data-theme="dark"] .closing-system { border-color: rgba(180,225,255,.18); background-color: rgba(23,28,40,.42); background-image: linear-gradient(rgba(180,225,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(180,225,255,.06) 1px, transparent 1px); }
      html[data-theme="dark"] .system-line { background: #ab87ff; }
      html[data-theme="dark"] .system-node { background: #10131b; border-color: #b4e1ff; color: #d9dce3; }
      html[data-theme="dark"] .system-node:nth-child(2) { border-color: #fface4; }
      html[data-theme="dark"] .system-node:nth-child(3) { border-color: #c1ff9b; }
      html[data-theme="dark"] .system-core { background: #b4e1ff; border-color: #10131b; box-shadow: 0 0 0 6px rgba(180,225,255,.1); }
      html[data-theme="dark"] .system-label { color: #aeb5c2; }
      .closing { background: #f5ffc6; color: #101827; }
      .closing::before, .closing::after { display:none; }
      .closing .eyebrow { color: #101827; }
      .closing .eyebrow span { border-color: #101827; }
      .closing-links a { color: #101827; border-color: rgba(16,24,39,.55); }
      .closing h2 em { color: #6841d1; }
      .closing-system { position:absolute; right:52px; top:52px; width:360px; height:250px; border:1px solid rgba(16,24,39,.16); background-color:rgba(255,255,255,.18); background-image:linear-gradient(rgba(16,24,39,.055) 1px, transparent 1px),linear-gradient(90deg,rgba(16,24,39,.055) 1px,transparent 1px); background-size:28px 28px; overflow:hidden; }
      .system-line { position:absolute; height:1px; background:#6841d1; transform-origin:left center; }
      .system-line.one { width:108px; left:67px; top:77px; transform:rotate(22deg); }
      .system-line.two { width:115px; left:175px; top:119px; transform:rotate(-34deg); }
      .system-line.three { width:96px; left:130px; top:165px; transform:rotate(18deg); }
      .system-line.four { width:82px; left:86px; top:182px; transform:rotate(-54deg); }
      .system-core { position:absolute; left:151px; top:105px; width:48px; height:48px; border-radius:50%; background:#6841d1; border:2px solid #f5ffc6; box-shadow:0 0 0 6px rgba(104,65,209,.1); }
      .system-node { position:absolute; display:flex; align-items:center; justify-content:center; min-width:68px; height:28px; padding:0 10px; background:#fffefa; border:1px solid #6841d1; color:#101827; font-size:8px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; }
      .system-node:nth-child(2) { left:23px; top:52px; border-color:#6841d1; }
      .system-node:nth-child(3) { right:20px; top:88px; border-color:#ff7fce; }
      .system-node:nth-child(4) { left:62px; bottom:22px; border-color:#79c75a; }
      .system-node:nth-child(5) { right:37px; bottom:42px; border-color:#6841d1; }
      .system-label { position:absolute; left:18px; bottom:14px; color:#667085; font-size:7px; letter-spacing:.14em; text-transform:uppercase; }
      .blog-section { position:relative; isolation:isolate; }
      .blog-section::before { content:""; position:absolute; z-index:-1; top:0; bottom:0; left:50%; width:100vw; transform:translateX(-50%); background:#f1f8ff; }
      html[data-theme="dark"] .blog-section::before { background:#171c28; }
      html[data-theme="dark"] h1 .hello { color:#c7b4ff; }
      h1 .hello { color:#6f48d9; }
      h1 .name { position:relative; display:inline-block; width:max-content; color:#24324a; }
      h1 .name::after { left:0; right:0; bottom:-7px; height:8px; transform:rotate(-1.5deg); }
      html[data-theme="dark"] h1 .name { color:#f8f7f2; }
      html[data-theme="dark"] h1 .name::after { background:#b4e1ff; }
      html[data-theme="dark"] .closing { background:#0b0e15; color:#f8f7f2; }
      html[data-theme="dark"] .closing .eyebrow { color:#f8f7f2; }
      html[data-theme="dark"] .closing .eyebrow span { border-color:#f8f7f2; }
      html[data-theme="dark"] .closing-links a { color:#f8f7f2; border-color:rgba(248,247,242,.55); }
      html[data-theme="dark"] .closing h2 em { color:#b4e1ff; }
      @media (max-width: 700px) {
        .closing { padding:42px 28px; min-height:430px; }
        .closing-system { right:20px; top:24px; width:230px; height:170px; opacity:.75; }
        .system-node { min-width:52px; height:23px; padding:0 7px; font-size:6px; }
        .system-node:nth-child(2) { left:12px; top:35px; }
        .system-node:nth-child(3) { right:10px; top:58px; }
        .system-node:nth-child(4) { left:28px; bottom:18px; }
        .system-node:nth-child(5) { right:20px; bottom:28px; }
        .system-core { left:96px; top:70px; width:38px; height:38px; }
        .system-line.one { width:76px; left:50px; top:51px; }
        .system-line.two { width:70px; left:130px; top:87px; }
        .system-line.three { width:62px; left:110px; top:118px; }
        .system-line.four { width:58px; left:55px; top:130px; }
        .system-label { left:12px; bottom:8px; font-size:6px; }
      }
    `}</style>
    <main>
      <div className="cursor-glow" ref={cursor} />
      <nav className="nav">
        <a className="nav-mark" href="#top" aria-label="Back to top">Saiesha<span>.</span></a>
        <div className="links">
          <a href="#about">About</a><a href="#work">Work</a><a href="/blog">Writing</a>
          <a href="https://github.com/saiesha" target="_blank" rel="noreferrer">GitHub ↗</a>
          <button className="theme-toggle" onClick={() => setDark((value) => !value)} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} title={dark ? "Light mode" : "Dark mode"}><span>{dark ? "☼" : "☾"}</span></button>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-content reveal">
          <p className="eyebrow"><span /> Software Engineer</p>
          <h1><span className="hello">Hi!</span><span className="name">I'm Saiesha</span></h1>
          <p className="hero-copy">I build software, solve problems, and stay curious about what I can learn next.</p>
          <div className="hero-actions"><a className="button primary" href="#work">See my work <span>↓</span></a><a className="text-link" href="/blog">Read my notes <span>↗</span></a></div>
        </div>
        <div className="hero-note reveal"><span className="note-line" /><p>Currently</p><strong>learning<br />building<br />exploring</strong></div>
        <div className="scroll-note">Scroll <span>↓</span></div>
      </section>

      <div className="ticker" aria-hidden="true"><span>MAKE →</span><span>LEARN →</span><span>EXPLORE →</span><span>REPEAT →</span><span>MAKE →</span><span>LEARN →</span><span>EXPLORE →</span><span>REPEAT →</span></div>

      <section className="section about-section" id="about">
        <div className="section-label reveal">01 <span>/</span> About</div>
        <div className="about-layout">
          <div className="about-heading reveal"><p className="mini-kicker">A little about me</p><h2>I like making<br /><em>things.</em></h2></div>
          <div className="about-copy reveal"><p>I'm a software engineer who enjoys solving problems, understanding how things work, and learning by making.</p><p>Most of my time goes into code. The rest tends to wander toward music, writing, ideas, and new things to learn.</p><div className="about-meta"><span>India</span><span>Software Engineer</span><span>Open to opportunities</span></div></div>
        </div>
      </section>

      <section className="work-section" id="work"><div className="work-inner">
        <div className="section-label reveal">02 <span>/</span> Work</div>
        <div className="work-heading reveal"><div><p className="mini-kicker">What I bring</p><h2>Good work<br /><em>starts with curiosity.</em></h2></div><p className="work-intro">A quick look at how I work. Hover or click.</p></div>
        <div className="work-showcase reveal"><div className="work-list">{work.map((item,index)=><button className={`work-item ${activeWork===index?"active":""}`} key={item.number} onMouseEnter={()=>setActiveWork(index)} onFocus={()=>setActiveWork(index)} onClick={()=>setActiveWork(index)}><span>{item.number}</span><strong>{item.title}</strong><i>↗</i></button>)}</div><div className={`work-preview preview-${activeWork+1}`}><span className="preview-tag">{work[activeWork].tag}</span><span className="preview-number">{work[activeWork].number}</span><p>{work[activeWork].detail}</p><div className="preview-shape" aria-hidden="true" /></div></div>
      </div></section>

      <section className="section skills-section" id="skills"><div className="section-label reveal">03 <span>/</span> Toolkit</div><div className="skills-intro reveal"><h2>Things I<br /><em>work with.</em></h2><p>Languages, tools, and concepts I keep coming back to.</p></div><div className="skill-list reveal">{skills.map((skill,index)=><div key={skill} className="skill-row"><span>0{index+1}</span><strong>{skill}</strong><i>↗</i></div>)}</div></section>

      <section className="section blog-section"><div className="section-label reveal">04 <span>/</span> Writing</div><div className="blog-heading reveal"><div><p className="mini-kicker">Notes & rabbit holes</p><h2>Things I<br /><em>find interesting.</em></h2></div><a className="round-link" href="/blog">All notes <span>↗</span></a></div><div className="posts">{posts.map((post,index)=><a className="post reveal" href={post.href} key={post.title}><span className="post-number">0{index+1}</span><div><p className="date">{post.date}</p><h3>{post.title}</h3><p>{post.excerpt}</p><span className="read">Read post <b>↗</b></span></div></a>)}</div></section>

      <section className="closing reveal"><div className="closing-now" aria-label="What I'm focused on right now"><div className="now-head"><span>Currently</span><span>2026 / 03</span></div><div className="now-list"><div className="now-item"><span>01</span><strong>Learning</strong><em>C++ / DSA</em></div><div className="now-item"><span>02</span><strong>Building</strong><em>Personal projects</em></div><div className="now-item"><span>03</span><strong>Writing</strong><em>Notes & ideas</em></div></div><div className="now-footer">A snapshot of what's next</div></div><div className="closing-copy"><p className="eyebrow"><span /> 2026</p><h2>That's me,<br /><em>for now.</em></h2><div className="closing-links"><a href="https://github.com/saiesha" target="_blank" rel="noreferrer">GitHub ↗</a><a href="/blog">Writing ↗</a></div></div></section>
      <footer><span>Saiesha Chevvakula</span><span>© 2026</span></footer>
    </main>
  </>;
}
