// ===== DONNÉES =====
const reseaux = [
  { nom: "Facebook", url: "https://facebook.com" },
  { nom: "Instagram", url: "https://instagram.com" },
  { nom: "WhatsApp", url: "https://wa.me/22901000000" },
];

// ===== TROUVER le parent (une seule fois, avant la boucle) =====
const listeReseaux = document.querySelector(".reseaux");

// ===== POUR CHAQUE réseau du tableau =====
reseaux.forEach((reseau) => {
  // 1. CRÉER les deux éléments
  const li = document.createElement("li");
  const lien = document.createElement("a");

  // 2. REMPLIR le lien avec les données DE CE réseau
  lien.textContent = reseau.nom; // le texte affiché
  lien.setAttribute("href", reseau.url); // l'adresse

  // 3. PLACER : le lien dans le li, puis le li dans la liste
  li.append(lien);
  listeReseaux.append(li);
});

// ===== DONNÉES =====
const liensMenu = [
  { texte: "Plats", cible: "#plats" },
  { texte: "Atouts", cible: "#atouts" },
  { texte: "Commander", cible: "#commande" },
];
// ===== TROUVER le parent (une seule fois, avant la boucle) =====
const listeMenu = document.querySelector(".menu");

// ===== POUR CHAQUE réseau du tableau =====
liensMenu.forEach((lienMenu) => {
  // 1. CRÉER les deux éléments
  const li = document.createElement("li");
  const lien = document.createElement("a");
  // 2. REMPLIR le lien avec les données DE CE réseau
  lien.textContent = lienMenu.texte;
  lien.setAttribute("href", lienMenu.cible);
  // 3. PLACER : le lien dans le li, puis le li dans la liste
  li.append(lien);
  listeMenu.append(li);
});
