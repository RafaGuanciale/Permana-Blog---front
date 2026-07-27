import guias from "../images/backgrounds/categoria-guias.png";
import cultura from "../images/backgrounds/categoria-cultura.png";
import lancamentos from "../images/backgrounds/categoria-lancamentos.png";
import permana from "../images/backgrounds/categoria-permana.png";
import guiasSmall from "../images/backgrounds/categoria-guias-sm.png";
import culturaSmall from "../images/backgrounds/categoria-cultura-sm.png";
import lancamentosSmall from "../images/backgrounds/categoria-lancamentos-sm.png";
import permanaSmall from "../images/backgrounds/categoria-permana-sm.png";


export const CATEGORIES = [
  "guias",
  "lancamentos",
  "cultura",
  "permana",
] as const;

export const CategoriesBackgrounds = {
  guias: guias,
  permana: permana,
  lancamentos: lancamentos,
  cultura: cultura,
};
export const CategoriesBackgroundsSmall = {
  guias: guiasSmall,
  permana: permanaSmall,
  lancamentos: lancamentosSmall,
  cultura: culturaSmall,
};
