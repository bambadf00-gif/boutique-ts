const format = new Intl.NumberFormat("fr-SN", {
  style: "currency",
  currency: "XOF",
});

export function formatPrix(prix: number): string {
    return format.format(prix)
}
