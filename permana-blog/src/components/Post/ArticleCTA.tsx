function ArticleCTA({
  eyebrow = 'Sua identidade olfativa',
  title = 'Descubra qual família domina a sua coleção.',
  label = 'Analisar minha coleção',
  href = '#',
} = {}) {
  return (
    <div className="article__cta">
      <div className="article__cta-inner">
        <span className="article__cta-ghost" />
        <p className="article__cta-eyebrow">{eyebrow}</p>
        <h2 className="article__cta-title">{title}</h2>
        <a className="article__cta-btn" href={href}>{label}</a>
      </div>
    </div>
  );
}

export default ArticleCTA;
