"use client";

import { useEffect, useRef } from "react";

const posts = [
  { title: "What I'm learning in 2026", excerpt: "DSA, C++, systems, AI, and becoming a better engineer.", date: "September 2026", href: "/blog/what-im-learning-in-2026" },
  { title: "How I approach coding problems", excerpt: "The questions I ask before choosing an algorithm or writing code.", date: "Coming soon", href: "/blog" }
];

const skills = ["C++", "Python", "C", "SQL", "DSA", "Systems", "AI"];

export default function Home() {
  const cursor = useRef(null);

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

  return (
    <main>
      <div className="cursor-glow" ref={cursor} />

      <nav className="nav">
        <a className="nav-mark" href="#top" aria-label="Back to top">SC / 26</a>
        <div className="links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="/blog">Writing</a>
          <a href="https://github.com/saiesha" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-accent hero-accent-yellow" aria-hidden="true" />
        <div className="hero-accent hero-accent-blue" aria-hidden="true" />
        <div className="hero-content reveal">
          <p className="eyebrow"><span /> Software Engineer · C++ · Systems</p>
          <h1>Building things<br /><span>that make sense.</span></h1>
          <p className="hero-copy">I'm Saiesha — a software engineer who likes understanding how things work, solving hard problems, and learning something new along the way.</p>
          <div className="actions">
            <a className="button primary" href="#about">About me <span>↓</span></a>
            <a className="text-link" href="/blog">Read my writing <span>↗</span></a>
          </div>
        </div>
        <div className="hero-side reveal">
          <div className="side-rule" />
          <p>Currently exploring</p>
          <strong>Algorithms<br />Systems<br />AI</strong>
          <span className="side-year">2026</span>
        </div>
        <div className="scroll-note">Scroll <span>↓</span></div>
      </section>

      <div className="ticker" aria-hidden="true">
        <span>CURIOSITY →</span><span>BUILD →</span><span>LEARN →</span><span>WRITE →</span><span>CURIOSITY →</span><span>BUILD →</span><span>LEARN →</span><span>WRITE →</span>
      </div>

      <section className="section about-section" id="about">
        <div className="section-label reveal">01 <span>/</span> About</div>
        <div className="about-layout">
          <div className="about-heading reveal">
            <p className="mini-kicker">A little context</p>
            <h2>Engineer by profession.<br /><em>Curious by default.</em></h2>
          </div>
          <div className="about-copy reveal">
            <p>I'm a software engineer with a strong C++ foundation and an interest in systems, algorithms, and practical software.</p>
            <p>I care about the reasoning behind a solution — not just getting it to work. Outside engineering, I explore AI, music, writing, and ideas that make me curious.</p>
            <div className="about-meta"><span>Based in India</span><span>Open to opportunities</span></div>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="skills-inner">
          <div className="section-label reveal">02 <span>/</span> Toolkit</div>
          <div className="skills-intro reveal">
            <h2>Tools I use<br /><em>to think & build.</em></h2>
            <p>Languages, concepts, and systems I keep coming back to.</p>
          </div>
          <div className="skill-list reveal">
            {skills.map((skill, index) => (
              <div key={skill} className="skill-row">
                <span>0{index + 1}</span>
                <strong>{skill}</strong>
                <i>↗</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section blog-section">
        <div className="section-label reveal">03 <span>/</span> Writing</div>
        <div className="blog-heading reveal">
          <div><p className="mini-kicker">Notes, lessons & rabbit holes</p><h2>Thinking<br /><em>out loud.</em></h2></div>
          <a className="round-link" href="/blog">All notes <span>↗</span></a>
        </div>
        <div className="posts">
          {posts.map((post, index) => (
            <a className="post reveal" href={post.href} key={post.title}>
              <span className="post-number">0{index + 1}</span>
              <div>
                <p className="date">{post.date}</p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="read">Read post <b>↗</b></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="closing reveal">
        <div className="closing-grid" aria-hidden="true" />
        <div className="closing-copy">
          <p className="eyebrow"><span /> Elsewhere</p>
          <h2>Still curious?</h2>
          <p>You'll probably find me building something, learning something, or writing about it.</p>
          <a className="button dark" href="https://github.com/saiesha" target="_blank" rel="noreferrer">Visit GitHub <span>↗</span></a>
        </div>
        <div className="closing-mark" aria-hidden="true">SC</div>
      </section>

      <footer>
        <span>Saiesha Chevvakula</span>
        <span>© 2026 · Built with Next.js</span>
      </footer>
    </main>
  );
}
