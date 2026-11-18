type Categorie = "vetements" | "chaussures" | "accessoires" | "maison";

type Produit = {
  readonly id: number;
  nom: string;
  prix: number;
  categorie: Categorie;
  stock: number;
};

type LignePanier = {
  produit: Produit;
  quantite: number;     
};