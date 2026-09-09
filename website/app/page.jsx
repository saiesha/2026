"use client";

import { useEffect, useRef, useState } from "react";

const posts = [
  { title: "What I'm learning in 2026", excerpt: "DSA, C++, systems, AI, and becoming a better engineer.", date: "September 2026", href: "/blog/what-im-learning-in-2026" },
  { title: "How I approach coding problems", excerpt: "The questions I ask before choosing an algorithm or writing code.", date: "Coming soon", href: "/blog" }
];

const skills = ["C++", "Python", "C", "SQL", "DSA", "Systems", "AI"];

export default function Home() {
  const cursor = useRef(null);
  const lastScroll = useRef(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [hopping, setHopping] = useState(false);

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
    const onScroll = () => {
      const current = window.scrollY;
      const down = current > lastScroll.current && current > 30;
      setScrollingDown(down);
      setHopping(true);
      window.clearTimeout(onScroll.timer);
      onScroll.timer = window.setTimeout(() => setHopping(false), 520);
      lastScroll.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(onScroll.timer);
    };
  }, []);

  return (
    <main>
      <style jsx global>{`
        :root {
          --cream:#fff9e8; --butter:#f6d77a; --butter-light:#fff2bd;
          --sky:#c7e5f2; --sky-light:#eaf6fb; --pink:#f4d3de;
          --cherry:#7a1838; --cherry-dark:#5c1028; --ink:#30282b;
          --muted:#746b6d; --line:#e7d9d8; --white:#fffdf8;
        }
        body { background:var(--cream); color:var(--ink); }
        .cursor-glow { background:radial-gradient(circle,rgba(199,229,242,.38),transparent 68%); }
        .logo,.logo span,.dot,h1 em,h2 em,.read,.section-label { color:var(--cherry); }
        .eyebrow { background:var(--butter-light); color:var(--cherry); }
        .button { border-color:var(--cherry); }
        .button.primary { background:var(--cherry); color:#fffdf8; }
        .links a:hover { background:var(--sky); color:var(--cherry); }
        .hero-orbit { border-color:rgba(122,24,56,.13); }
        .card-yellow { background:var(--butter); }
        .card-blue { background:var(--sky); }
        .card-white { background:var(--pink); }
        .ticker { background:var(--cherry); color:#fff9e8; }
        .skills-section { background:var(--sky-light); }
        .skill { border-color:var(--line); background:var(--white); }
        .skill:nth-child(odd) { background:var(--butter); }
        .skill:nth-child(3n) { background:var(--sky); transform:rotate(-3deg); }
        .skill:nth-child(4n) { background:var(--pink); }
        .round-link { background:var(--butter); color:var(--cherry); }
        .post { border-color:var(--line); background:var(--white); }
        .post:nth-child(2) { background:var(--butter-light); }
        .post-number { color:var(--cherry); }
        .closing { background:var(--butter); }
        .closing-shape { color:var(--cherry); }

        /* Cute illustrated puppy companion */
        .scroll-pup {
          position:fixed; right:30px; top:18px; z-index:40; width:78px; height:78px;
          pointer-events:none; transition:top .72s cubic-bezier(.68,-.35,.27,1.35);
          filter:drop-shadow(0 8px 7px rgba(92,16,40,.14));
        }
        .scroll-pup.down { top:calc(100vh - 96px); }
        .pup-art { width:78px; height:78px; overflow:visible; }
        .pup-body { animation:pup-bob 1.4s ease-in-out infinite; transform-origin:39px 50px; }
        .pup-tail { transform-box:fill-box; transform-origin:left center; animation:pup-tail .55s ease-in-out infinite alternate; }
        .pup-ear-left { transform-box:fill-box; transform-origin:bottom right; animation:pup-ear-left .9s ease-in-out infinite alternate; }
        .pup-ear-right { transform-box:fill-box; transform-origin:bottom left; animation:pup-ear-right 1.1s ease-in-out infinite alternate; }
        .pup-eye { animation:pup-blink 4s infinite; transform-box:fill-box; transform-origin:center; }
        .scroll-pup.hop .pup-art { animation:pup-hop .58s cubic-bezier(.2,.8,.3,1); }
        @keyframes pup-bob { 0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)} }
        @keyframes pup-tail { to{transform:rotate(16deg)} }
        @keyframes pup-ear-left { to{transform:rotate(-4deg)} }
        @keyframes pup-ear-right { to{transform:rotate(5deg)} }
        @keyframes pup-blink { 0%,43%,47%,100%{transform:scaleY(1)}45%{transform:scaleY(.12)} }
        @keyframes pup-hop { 0%{transform:translateY(0) rotate(0)}35%{transform:translateY(-18px) rotate(-4deg)}65%{transform:translateY(-3px) rotate(2deg)}100%{transform:translateY(0) rotate(0)} }
        @media(max-width:600px){ .scroll-pup{right:10px;scale:.78;transform-origin:top right}.scroll-pup.down{top:calc(100vh - 78px)} }
        @media(prefers-reduced-motion:reduce){ .scroll-pup *,.scroll-pup{animation:none!important;transition:none!important} }
      `}</style>

      <div className="cursor-glow" ref={cursor} />

      <div className={`scroll-pup ${scrollingDown ? "down" : ""} ${hopping ? "hop" : ""}`} aria-hidden="true">
        <svg className="pup-art" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="pup-body">
            <ellipse cx="39" cy="48" rx="21" ry="17" fill="#E9BC8F" />
            <ellipse cx="39" cy="52" rx="13" ry="10" fill="#F9E7D0" />
            <path d="M23 53C20 58 20 64 23 67" stroke="#8B4D4A" strokeWidth="4" strokeLinecap="round" />
            <path d="M55 53C58 58 58 64 55 67" stroke="#8B4D4A" strokeWidth="4" strokeLinecap="round" />
            <circle cx="27" cy="66" r="3" fill="#7A1838" />
            <circle cx="51" cy="66" r="3" fill="#7A1838" />
          </g>
          <g className="pup-tail">
            <path d="M57 49C70 48 72 37 65 34" stroke="#E9BC8F" strokeWidth="7" strokeLinecap="round" />
            <path d="M57 49C70 48 72 37 65 34" stroke="#7A1838" strokeOpacity=".22" strokeWidth="1.5" strokeLinecap="round" />
          </g>
          <path className="pup-ear-left" d="M20 27C13 23 12 12 17 9C23 7 28 14 28 22Z" fill="#C98D68" stroke="#7A1838" strokeWidth="1.8" />
          <path className="pup-ear-right" d="M58 27C65 23 66 12 61 9C55 7 50 14 50 22Z" fill="#C98D68" stroke="#7A1838" strokeWidth="1.8" />
          <ellipse cx="39" cy="31" rx="21" ry="19" fill="#E9BC8F" stroke="#7A1838" strokeWidth="1.8" />
          <path d="M26 25C29 20 34 18 39 19C44 18 49 20 52 25" stroke="#F7D9B5" strokeWidth="5" strokeLinecap="round" opacity=".8" />
          <ellipse className="pup-eye" cx="32" cy="31" rx="2.5" ry="3.2" fill="#30282B" />
          <ellipse className="pup-eye" cx="46" cy="31" rx="2.5" ry="3.2" fill="#30282B" />
          <ellipse cx="39" cy="39" rx="8" ry="6" fill="#F9E7D0" />
          <ellipse cx="39" cy="37" rx="3" ry="2.2" fill="#7A1838" />
          <path d="M39 39C37 43 34 43 32 41M39 39C41 43 44 43 46 41" stroke="#7A1838" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M32 25L29 23M46 25L49 23" stroke="#7A1838" strokeWidth="1.3" strokeLinecap="round" opacity=".6" />
          <path d="M29 48C34 53 44 53 49 48" stroke="#7A1838" strokeWidth="3" strokeLinecap="round" opacity=".8" />
          <circle cx="24" cy="38" r="3" fill="#F4D3DE" opacity=".9" />
          <circle cx="54" cy="38" r="3" fill="#F4D3DE" opacity=".9" />
        </svg>
      </div>

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
