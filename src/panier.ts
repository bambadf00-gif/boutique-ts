
import type { Produit, LignePanier } from "./types";

export function ajouterAuPanier(
  panier: LignePanier[],
  produit: Produit,
): LignePanier[] {
  const produitSearch = panier.some((p) => p.produit.id == produit.id);

  if (!produitSearch) {
    return [...panier, { produit, quantite: 1 }];
  } else {
    return panier.map((p) => {
      if (p.produit.id === produit.id) {
        return { ...p, quantite: p.quantite + 1 };
      }
      return p;
    });
  }
}

export function retirerDuPanier(
  panier: LignePanier[],
  produitId: number,
): LignePanier[] {
  return panier.filter((p) => p.produit.id !== produitId);
}

export function nombreArticles(panier: LignePanier[]): number {
  return panier.reduce((total, i) => total + i.quantite, 0);
}

export function totalPanier(panier: LignePanier[]): number {
  return panier.reduce((total, p) => total + (p.produit.prix * p.quantite), 0);
}


