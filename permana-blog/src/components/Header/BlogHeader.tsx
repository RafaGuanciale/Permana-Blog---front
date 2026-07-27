import Coin from "../../images/brand/logo-coin/permana-coin-default-176.png";

function BlogHeader() {
  return (
    <header className="blog__header">
      <div className="blog__header__logo">
        <img src={Coin} alt="" className="blog__header__logo-coin" />
        ERMANA
        <span className="blog__header__logo-tag">BLOG</span>
      </div>

      <form className="blog__header__search">
        <span className="blog__header__search-icon">⌕</span>
        <input
          className="blog__header__search-input"
          type="search"
          placeholder="Buscar notas, famílias, marcas…"
        />
      </form>

      <button className="blog__header__btn-green" type="button">
        Abrir o app →
      </button>
    </header>
  );
}

export default BlogHeader;
