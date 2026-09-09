export default function Post() {
  return (
    <main>
      <nav className="nav">
        <a className="logo" href="/">Saiesha.</a>
        <div className="links">
          <a href="/blog">Blog</a>
          <a href="https://github.com/saiesha" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </nav>
      <article className="section" style={{ maxWidth: "760px", margin: "70px auto 0" }}>
        <p className="date">September 2026</p>
        <h1 style={{ fontSize: "clamp(44px, 8vw, 82px)", marginBottom: "30px" }}>What I'm learning in 2026</h1>
        <p className="intro">I'm spending this year strengthening the fundamentals that make me a better software engineer.</p>
        <div style={{ maxWidth: "680px" }}>
          <p className="intro">My current focus is Data Structures and Algorithms, C++, systems programming, SQL, and practical AI. The goal is not to collect technologies. It is to understand the fundamentals well enough to solve unfamiliar problems.</p>
          <p className="intro">I am also paying more attention to how I explain technical decisions. A solution is more useful when I can clearly describe the tradeoffs, complexity, and reasoning behind it.</p>
          <p className="intro">This blog will be a running record of that process: what I learn, what I get wrong, and what eventually clicks.</p>
        </div>
      </article>
      <footer><span>Saiesha.</span><a href="/blog">Back to blog</a></footer>
    </main>
  );
}