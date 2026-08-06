function ArticleHeader({
  category = "Guias",
  readingTime = "12 min de leitura",
  title = "Famílias olfativas: um mapa para se orientar",
  dek = "Âmbar, chipre, fougère — os nomes intimidam, mas o território é simples. Aprenda a ler qualquer perfume pela família.",
  author = "Equipe Permana",
  date = "14 jul 2026",
} = {}) {
  return (
    <header className="article__header">
      <nav className="article__crumbs">
        <a href="#">Blog</a>
        <span className="article__crumbs-sep">›</span>
        <a href="#">{category}</a>
      </nav>
      <p className="article__eyebrow">
        {category} · {readingTime}
      </p>
      <h1 className="article__title">{title}</h1>
      <p className="article__dek">{dek}</p>
      <div className="article__byline">
        <span className="article__avatar">P</span>
        <span className="article__byline-txt">
          <span className="article__byline-name">Por {author}</span>
          <br />
          <span className="article__byline-sub">{date}</span>
        </span>
      </div>
      <div className="article__rule" />
    </header>
  );
}

export default ArticleHeader;
