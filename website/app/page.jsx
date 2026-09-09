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

  return <main>
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
        <h1>Hi, I'm<br /><span>Saiesha.</span></h1>
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
      <div className="work-heading reveal"><div><p className="mini-kicker">What I bring</p><h2>Good work<br /><em>starts with curiosity.</em></h2></div><p className="work-intro">Three small windows into how I work.</p></div>
      <div className="work-showcase reveal"><div className="work-list">{work.map((item,index)=><button className={`work-item ${activeWork===index?"active":""}`} key={item.number} onMouseEnter={()=>setActiveWork(index)} onFocus={()=>setActiveWork(index)} onClick={()=>setActiveWork(index)}><span>{item.number}</span><strong>{item.title}</strong><i>↗</i></button>)}</div><div className={`work-preview preview-${activeWork+1}`}><span className="preview-tag">{work[activeWork].tag}</span><span className="preview-number">{work[activeWork].number}</span><p>{work[activeWork].detail}</p><div className="preview-shape" aria-hidden="true" /></div></div>
    </div></section>

    <section className="section skills-section" id="skills"><div className="section-label reveal">03 <span>/</span> Toolkit</div><div className="skills-intro reveal"><h2>Things I<br /><em>work with.</em></h2><p>Languages, tools, and concepts I keep coming back to.</p></div><div className="skill-list reveal">{skills.map((skill,index)=><div key={skill} className="skill-row"><span>0{index+1}</span><strong>{skill}</strong><i>↗</i></div>)}</div></section>

    <section className="section blog-section"><div className="section-label reveal">04 <span>/</span> Writing</div><div className="blog-heading reveal"><div><p className="mini-kicker">Notes & rabbit holes</p><h2>Things I<br /><em>find interesting.</em></h2></div><a className="round-link" href="/blog">All notes <span>↗</span></a></div><div className="posts">{posts.map((post,index)=><a className="post reveal" href={post.href} key={post.title}><span className="post-number">0{index+1}</span><div><p className="date">{post.date}</p><h3>{post.title}</h3><p>{post.excerpt}</p><span className="read">Read post <b>↗</b></span></div></a>)}</div></section>

    <section className="closing reveal"><div className="closing-doodle" aria-hidden="true"><span>✦</span><span>○</span><span>+</span></div><div className="closing-copy"><p className="eyebrow"><span /> 2026</p><h2>That's me,<br /><em>for now.</em></h2><div className="closing-links"><a href="https://github.com/saiesha" target="_blank" rel="noreferrer">GitHub ↗</a><a href="/blog">Writing ↗</a></div></div></section>
    <footer><span>Saiesha Chevvakula</span><span>© 2026</span></footer>
  </main>;
}
