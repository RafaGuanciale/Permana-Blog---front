function BlogFooter() {
  return (
    <footer className="blog__footer">
      <div className="blog__footer__logo">
        <span className="blog__footer__logo-coin">P</span>
        ERMANA
        <span className="blog__footer__logo-tag">BLOG</span>
      </div>

      <nav className="blog__footer__links">
        {/* map dos links aqui, se quiser */}
        <a className="blog__footer__link" href="#">Sobre</a>
        <a className="blog__footer__link" href="#">Contato</a>
        <a className="blog__footer__link" href="#">Abrir o app</a>
        <span className="blog__footer__copy">© 2026</span>
      </nav>
    </footer>
  );
}

export default BlogFooter;
