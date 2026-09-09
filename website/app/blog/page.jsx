const posts = [
  {
    date: "September 2026",
    title: "What I'm learning in 2026",
    excerpt: "A small log of the technical things I'm learning and building.",
    href: "/blog/what-im-learning-in-2026"
  },
  {
    date: "Coming soon",
    title: "How I approach coding problems",
    excerpt: "The questions I ask before choosing an algorithm or writing code."
  }
];

export default function Blog() {
  return (
    <main>
      <nav className="nav">
        <a className="logo" href="/">Saiesha.</a>
        <div className="links">
          <a href="/">Home</a>
          <a href="https://github.com/saiesha" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">Blog</p>
        <h1>Notes from the journey.</h1>
        <p className="intro">Things I learn, build, break, and figure out along the way.</p>
      </section>

      <section className="section">
        <div className="posts">
          {posts.map((post) => (
            <article className="post" key={post.title}>
              <p className="date">{post.date}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              {post.href ? (
                <a className="read" href={post.href}>Read post -></a>
              ) : (
                <span className="read">Coming soon</span>
              )}
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>Saiesha.</span>
        <a href="/">Back home</a>
      </footer>
    </main>
  );
}