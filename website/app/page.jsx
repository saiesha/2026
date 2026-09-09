"use client";

import { useEffect, useRef } from "react";

const posts = [
  {
    title: "What I'm learning in 2026",
    excerpt: "DSA, C++, systems, AI, and becoming a better engineer.",
    date: "September 2026",
    href: "/blog/what-im-learning-in-2026"
  },
  {
    title: "How I approach coding problems",
    excerpt: "The questions I ask before choosing an algorithm or writing code.",
    date: "Coming soon",
    href: "/blog"
  }
];

const skills = ["C++", "Python", "C", "SQL", "DSA", "Systems", "AI"];

export default function Home() {
  const cursor = useRef(null);

  useEffect(() => {
    const move = (event) => {
      if (cursor.current) {
        cursor.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.12 }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="cursor-glow" ref={cursor} />

      <nav className="nav">
        <a className="logo" href="#top">Saiesha<span>.</span></a>
        <div className="links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="/blog">Blog</a>
          <a href="https://github.com/saiesha" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-card card-yellow"><span>01</span><b>build</b></div>
        <div className="hero-card card-blue"><span>02</span><b>learn</b></div>
        <div className="hero-card card-white"><span>03</span><b>create</b></div>

        <div className="hero-content reveal">
          <p className="eyebrow">Software Engineer · C++ · Problem Solving</p>
          <h1>Hi, I'm <em>Saiesha.</em></h1>
          <p className="hero-copy">
            I build software, solve problems, and stay curious about how things work.
          </p>
          <div className="actions">
            <a className="button primary" href="#about">Explore</a>
            <a className="button" href="/blog">Read my blog ↗</a>
          </div>
        </div>

        <div className="scroll-note">scroll to explore ↓</div>
      </section>

      <div className="ticker" aria-hidden="true">
        <span>CURIOUS BY DEFAULT</span><span>·</span><span>BUILDING & LEARNING</span><span>·</span><span>C++ & SYSTEMS</span><span>·</span>
        <span>CURIOUS BY DEFAULT</span><span>·</span><span>BUILDING & LEARNING</span><span>·</span><span>C++ & SYSTEMS</span>
      </div>

      <section className="section about-section" id="about">
        <div className="section-label reveal">01 / About me</div>
        <div className="about-layout">
          <h2 className="reveal">Engineer by profession.<br /><em>Curious by default.</em></h2>
          <div className="about-copy reveal">
            <p>
              I'm a software engineer with a strong C++ foundation and an interest in systems,
              algorithms, and practical software.
            </p>
            <p>
              I like understanding why something works, not just making it work. Outside engineering,
              I explore AI, music, writing, and ideas that make me curious.
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-label reveal">02 / Things I work with</div>
        <div className="skill-cloud reveal">
          {skills.map((skill, index) => <span key={skill} className={`skill skill-${index}`}>{skill}</span>)}
        </div>
      </section>

      <section className="section blog-section">
        <div className="section-label reveal">03 / From the blog</div>
        <div className="blog-heading reveal">
          <h2>Notes from<br /><em>the journey.</em></h2>
          <a className="round-link" href="/blog">See all ↗</a>
        </div>
        <div className="posts">
          {posts.map((post, index) => (
            <a className="post reveal" href={post.href} key={post.title}>
              <span className="post-number">0{index + 1}</span>
              <div>
                <p className="date">{post.date}</p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="read">Read post ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="closing reveal">
        <div className="closing-shape">✦</div>
        <p className="eyebrow">One more thing</p>
        <h2>Let's make the internet<br /><em>a little more interesting.</em></h2>
        <a className="button primary" href="https://github.com/saiesha" target="_blank" rel="noreferrer">Find me on GitHub ↗</a>
      </section>

      <footer>
        <span>Saiesha<span className="dot">.</span></span>
        <span>Built with Next.js · Hosted on Vercel</span>
      </footer>
    </main>
  );
}
