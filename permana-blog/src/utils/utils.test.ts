import { describe, it, expect } from "vitest";
import { formatData } from "./utils";
import { getPostListFiltered } from "./utils";
import { postsFakes } from "./utils";

describe("formatData", () => {
  it("formata uma data ISO válida", () => {
    expect(formatData("2026-07-15T12:00:00.000Z")).toBe("15 de jul. de 2026");
  });
  it("retorna 'Invalid Date' para string inválida", () => {
    expect(formatData("banana")).toBe("Data indisponível");
  });
  it("retorna 'Data indisponível' para string vazia", () => {
    expect(formatData("")).toBe("Data indisponível");
  });
});

describe("getPostListFiltered", () => {
  it("retorna todos os posts quando o filtro for 'tudo'", () => {
    expect(getPostListFiltered(postsFakes, "tudo")).toHaveLength(3);
  });
  it("retorna apenas os posts quando o filtro for 'guias'", () => {
    const resultado = getPostListFiltered(postsFakes, "guias");
    expect(resultado).toHaveLength(1);
    expect(resultado[0].category).toBe("guias");
  });
  it("retorna apenas os posts quando o filtro for 'cultura'", () => {
    const resultado = getPostListFiltered(postsFakes, "cultura");
    expect(resultado).toHaveLength(1);
    expect(resultado[0].category).toBe("cultura");
  });
  it("retorna apenas os posts quando o filtro for 'permana'", () => {
    const resultado = getPostListFiltered(postsFakes, "permana");
    expect(resultado).toHaveLength(1);
    expect(resultado[0].category).toBe("permana");
  });
  it("retorna apenas os posts quando o filtro for 'lançamentos'", () => {
    expect(getPostListFiltered(postsFakes, "lancamentos")).toHaveLength(0);
  });
});
