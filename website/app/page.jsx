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
          --cream:#fff8df; --butter:#f5d77a; --butter-light:#fff0b5;
          --sky:#b9def0; --sky-light:#e9f6fb; --pink:#f5cbd8; --green:#c9e5c8;
          --cherry:#7d1938; --cherry-dark:#5c1028; --ink:#30252a; --muted:#71656a;
          --line:#e5d7d5; --white:#fffdf8;
        }
        body { background:var(--cream); color:var(--ink); }
        .cursor-glow { background:radial-gradient(circle,rgba(185,222,240,.30),transparent 68%); }
        .logo span,.dot,h1 em,h2 em,.read,.section-label { color:var(--cherry); }
        .eyebrow { background:var(--butter-light); color:var(--cherry); }
        .button { border-color:var(--cherry); }
        .button.primary { background:var(--cherry); color:#fffdf8; }
        .links a:hover { background:var(--sky); color:var(--cherry); }
        .hero-orbit { border-color:rgba(125,25,56,.16); }
        .card-yellow { background:var(--butter); }
        .card-blue { background:var(--sky); }
        .card-white { background:var(--pink); }
        .ticker { background:var(--cherry); color:#fff8df; }
        .skills-section { background:var(--sky-light); }
        .skill { border-color:var(--line); background:var(--white); }
        .skill:nth-child(odd) { background:var(--butter); }
        .skill:nth-child(3n) { background:var(--green); }
        .skill:nth-child(4n) { background:var(--pink); }
        .round-link { background:var(--green); color:var(--cherry); }
        .post { border-color:var(--line); background:var(--white); }
        .post:nth-child(2) { background:var(--butter-light); }
        .post-number { color:var(--cherry); }
        .closing { background:var(--butter); }
        .closing-shape { color:var(--cherry); }

        /* A real CSS-drawn puppy — no emoji/icon. It hops, wags and changes position with scroll. */
        .scroll-pup {
          position:fixed; right:28px; top:16px; z-index:40; width:68px; height:58px;
          background:transparent; border:0; box-shadow:none; border-radius:0;
          transition:top .72s cubic-bezier(.68,-.35,.27,1.35), transform .25s ease;
          pointer-events:none; filter:drop-shadow(0 8px 7px rgba(93,16,40,.13));
        }
        .scroll-pup.down { top:calc(100vh - 82px); }
        .scroll-pup.hop { animation:pup-hop .58s cubic-bezier(.2,.8,.3,1); }
        .pup-head { position:absolute; left:19px; top:8px; width:37px; height:31px; background:#f2cfa5; border:2px solid var(--cherry); border-radius:48% 48% 45% 45%; z-index:3; }
        .pup-ear { position:absolute; top:5px; width:15px; height:25px; background:#c88c68; border:2px solid var(--cherry); z-index:2; transform-origin:top center; }
        .pup-ear-left { left:12px; border-radius:70% 25% 60% 35%; transform:rotate(-18deg); }
        .pup-ear-right { right:5px; border-radius:25% 70% 35% 60%; transform:rotate(18deg); }
        .pup-eye { position:absolute; top:11px; width:4px; height:5px; background:var(--ink); border-radius:50%; }
        .pup-eye-left { left:9px; } .pup-eye-right { right:9px; }
        .pup-muzzle { position:absolute; left:11px; top:17px; width:13px; height:9px; background:#fff1dc; border-radius:50%; }
        .pup-muzzle span { position:absolute; left:5px; top:2px; width:4px; height:3px; background:var(--cherry); border-radius:50%; }
        .pup-body { position:absolute; left:13px; top:32px; width:43px; height:23px; background:var(--pink); border:2px solid var(--cherry); border-radius:55% 45% 35% 35%; z-index:2; }
        .pup-leg { position:absolute; top:47px; width:9px; height:14px; background:#f2cfa5; border:2px solid var(--cherry); border-radius:0 0 7px 7px; z-index:1; transform-origin:top center; }
        .pup-leg-left { left:18px; animation:walk-left .8s ease-in-out infinite alternate; }
        .pup-leg-right { left:43px; animation:walk-right .8s ease-in-out infinite alternate; }
        .pup-tail { position:absolute; right:0; top:33px; width:22px; height:24px; border:5px solid var(--green); border-left:0; border-bottom:0; border-radius:0 90% 0 0; transform:rotate(15deg); transform-origin:left bottom; animation:wag .55s ease-in-out infinite alternate; }
        @keyframes pup-hop { 0%{translate:0 0;scale:1} 35%{translate:0 -17px;scale:1.08 .92} 65%{translate:0 -3px;scale:.96 1.04} 100%{translate:0 0;scale:1} }
        @keyframes wag { to{rotate:-22deg} }
        @keyframes walk-left { to{rotate:14deg} }
        @keyframes walk-right { to{rotate:-14deg} }
        @media(max-width:600px){ .scroll-pup{right:12px;scale:.82;transform-origin:top right}.scroll-pup.down{top:calc(100vh - 70px)} }
        @media(prefers-reduced-motion:reduce){ .scroll-pup,.pup-leg-left,.pup-leg-right,.pup-tail{animation:none!important;transition:none!important} }
      `}</style>

      <div className="cursor-glow" ref={cursor} />

      <div className={`scroll-pup ${scrollingDown ? "down" : ""} ${hopping ? "hop" : ""}`} aria-hidden="true">
        <div className="pup-ear pup-ear-left" /><div className="pup-ear pup-ear-right" />
        <div className="pup-head"><div className="pup-eye pup-eye-left" /><div className="pup-eye pup-eye-right" /><div className="pup-muzzle"><span /></div></div>
        <div className="pup-body" /><div className="pup-leg pup-leg-left" /><div className="pup-leg pup-leg-right" /><div className="pup-tail" />
      </div>

      <nav className="nav">
        <a className="logo" href="#top">Saiesha<span>.</span></a>
        <div className="links"><a href="#about">About</a><a href="#skills">Skills</a><a href="/blog">Blog</a><a href="https://github.com/saiesha" target="_blank" rel="noreferrer">GitHub</a></div>
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
      <footer><span>Saiesha<span className="dot">.</span></span><span>Built with Next.js · Hosted on Vercel</span></footer>
    </main>
  );
}
