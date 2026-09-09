const posts = [
  {
    title: "What I'm learning in 2026",
    excerpt: "A running note on DSA, C++, systems, AI, and becoming a better engineer.",
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

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="logo" href="#top">Saiesha.</a>
        <div className="links">
          <a href="#about">About</a>
          <a href="/blog">Blog</a>
          <a href="https://github.com/saiesha" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">Software Engineer - C++ - Problem Solving</p>
        <h1>Hi, I'm Saiesha.</h1>
        <p className="intro">
          I build software, solve problems, and keep learning how things work under the hood.
        </p>
        <div className="actions">
          <a className="button primary" href="/blog">Read my blog</a>
          <a className="button" href="https://github.com/saiesha" target="_blank" rel="noreferrer">View GitHub</a>
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-heading">
          <p className="eyebrow">A little about me</p>
          <h2>Engineer by profession, curious by default.</h2>
        </div>
        <div className="about-grid">
          <p>
            I'm a software engineer with a strong C++ foundation and an interest in systems,
            algorithms, and practical software. I like understanding why something works,
            not just making it work.
          </p>
          <p>
            Outside work, I'm exploring AI, learning music, and writing. This site is where I
            collect the things worth sharing.
          </p>
        </div>
      </section>

      <section className="section" id="blog">
        <div className="section-heading">
          <p className="eyebrow">From the blog</p>
          <h2>Things I'm thinking about.</h2>
        </div>
        <div className="posts">
          {posts.map((post) => (
            <article className="post" key={post.title}>
              <p className="date">{post.date}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a className="read" href={post.href}>
                {post.date === "Coming soon" ? "Coming soon" : "Read post ->"}
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>Saiesha.</span>
        <span>Built with Next.js - Hosted on Vercel</span>
      </footer>
    </main>
  );
}