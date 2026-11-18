import "./style.css";
import { catalogue } from "./catalogue.ts";
import type { Produit } from "./types.ts";
import { formatPrix } from "./outils.ts";

console.log(catalogue);

function trouver<T extends HTMLElement>(selecteur: string): T {
  const element = document.querySelector<T>(selecteur);
  if (!element) {
    throw new Error(`Élément ${selecteur} introuvable : vérifiez index.html`);
  }
  return element;
}

const zoneCatalogue = trouver<HTMLDivElement>("#catalogue");
const listePanier = trouver<HTMLUListElement>("#lignes-panier");
const zoneTotal = trouver<HTMLElement>("#total");
const compteur = trouver<HTMLSpanElement>("#compteur");
const champRecherche = trouver<HTMLInputElement>("#recherche");
const filtreCategorie = trouver<HTMLSelectElement>("#filtre-categorie");

console.log(
  zoneCatalogue,
  listePanier,
  zoneTotal,
  compteur,
  champRecherche,
  filtreCategorie,
);

export function creerCarte(produit: Produit): HTMLElement {
  const carte = document.createElement("article");
  carte.className = "carte";

  const titre = document.createElement("h3");
  titre.textContent = produit.nom;

  const para = document.createElement("p");
  para.className = "prix";
  para.textContent = formatPrix(produit.prix);

  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = "Ajouter au panier";

  if (produit.stock <= 0) {
    btn.textContent = "Épuisé";
    btn.disabled = true;
  }

  carte.appendChild(titre);
  carte.appendChild(para);
  carte.appendChild(btn);
  return carte;
}


function afficherCatalogue(): void {
  zoneCatalogue.replaceChildren(...catalogue.map(creerCarte));
}

afficherCatalogue()