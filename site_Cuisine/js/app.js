// Logique interactive du site : chargement du menu, panier, formulaires et animations.

// Références vers les éléments HTML du site.
// Chaque constante récupère un élément du DOM pour pouvoir le modifier ensuite.
const menuGrid = document.getElementById('menuGrid');
const cartCount = document.getElementById('cartCount');
const cartDrawer = document.getElementById('cartDrawer');
const cartBackdrop = document.getElementById('cartBackdrop');
const cartDrawerBody = document.getElementById('cartDrawerBody');
const drawerTotal = document.getElementById('drawerTotal');
const panierListe = document.getElementById('panierListe');
const panierTotal = document.getElementById('panierTotal');
const reservationForm = document.getElementById('reservationForm');
const orderForm = document.getElementById('orderForm');
const burgerBtn = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');
const toast = document.getElementById('toast');

// État principal de l'application.
// cart contient les articles ajoutés au panier.
let cart = [];
// menuItems contient la liste des plats affichés dans le menu.
let menuItems = [
  {
    id: 1,
    name: 'Poulet au curry',
    description: 'Poulet cuit à la poêle avec du curry et des épices.',
    category: 'Plats Principaux',
    price: 12.99,
    image: 'images/p1.jpg'
  },
  {
    id: 2,
    name: 'Poulet et pommes de terre rôties',
    description: 'Poulet et pommes de terre rôties avec du sel et du poivre.',
    category: 'Plats Principaux',
    price: 9.99,
    image: 'images/p2.jpg'
  },
  {
    id: 3,
    name: 'Pizza Margherita',
    description: 'Pizza avec de la sauce tomate, du fromage mozzarella et des herbes fraîches.',
    category: 'Plats Principaux',
    price: 11.99,
    image: 'images/p3.jpg'
  },
  {
    id: 4,
    name: 'jus orange',
    description: 'Jus de fruits frais, servi froid.',
    category: 'Boissons',
    price: 2.99,
    image: 'images/p4.jpg'
  },
  {
    id: 5,
    name: 'spagghetti',
    description: 'Pâtes italiennes avec de la sauce tomate, du fromage mozzarella et des herbes fraîches.',
    category: 'Plats Principaux',
    price: 11.99,
    image: 'images/p5.jpg'
  },
  {
    id: 6,
    name: 'picapollo',
    description: 'viande fruite.',
    category: 'Desserts',
    price: 6.99,
    image: 'images/p6.jpg'
  },
  {
    id: 7,
    name: 'jus d\'orange',
    description: 'Jus d\'orange frais, servi froid.',
    category: 'Boissons',
    price: 2.99,
    image: 'images/b1.jpg'
  },
  {
    id: 8,
    name: 'coca cola',
    description: 'Boisson gazeuse sucrée, servie froid.',
    category: 'Boissons',
    price: 2.99,
    image: 'images/b2.jpg'
  },
  {
    id: 9,
    name: 'cornet de frites',
    description: 'Contient des frites cuites dans de l\'huile d\'olive et une sauce césar.',
    category: 'Entrées',
    price: 8.99,
    image: 'images/d1.jpg'
  },
  {
    id: 10,
    name: 'creme fraiche',
    description: 'Crème légère et onctueuse avec une croûte caramélisée.',
    category: 'Entrées',
    price: 9.99,
    image: 'images/d2.jpg'
  },
  {
    id: 11,
    name: 'gateau de fruits',
    description: 'Gâteau moelleux aux fruits frais et à la crème.',
    category: 'Entrées',
    price: 5.99,
    image: 'images/d3.jpg'
  },
  {
    id: 12,
    name: 'Tarte Tatin',
    description: 'Tarte aux pommes caramélisées et servie avec du sucre.',
    category: 'Desserts',
    price: 7.99,
    image: 'images/d4.jpg'
  },
  {
    id: 13,
    name: 'Mousse au Chocolat',
    description: 'Mousse rafraîchissante au chocolat noir avec une pointe d\'amande.',
    category: 'Desserts',
    price: 6.99,
    image: 'images/d5.jpg'
  },
  {
    id: 14,
    name: 'Crème Brûlée',
    description: 'Crème légère et onctueuse avec une croûte caramélisée.',
    category: 'Desserts',
    price: 5.99,
    image: 'images/d6.jpg'
  },
  {
    id: 15,
    name: 'Eau Minérale',
    description: 'Eau minérale naturelle ou gazeuse, servie à température ambiante.',
    category: 'Boissons',
    price: 1.99,
    image: 'images/b3.jpg'
  },
  {
    id: 16,
    name: 'Café',
    description: 'Café noir ou expresso, servi chaud.',
    category: 'Boissons',
    price: 2.99,
    image: 'images/b4.jpg'
  },
  {
    id: 17,
    name: 'Thé',
    description: 'Thé noir ou vert, servi chaud ou froid.',
    category: 'Boissons',
    price: 2.99,
    image: 'images/b5.jpg'
  },
  {
    id: 18,
    name: 'Smoothie aux Fruits',
    description: 'Mélange de fruits frais mélangés avec du lait ou du yogourt.',
    category: 'Boissons',
    price: 4.99,
    image: 'images/b6.jpg'
  },
  {
    id: 19,
    name: 'Salade César',
    description: 'Salade verte avec des feuilles de romaine, des croûtons, des noix et une sauce césar.',
    category: 'Entrées',
    price: 7.99,
    image: 'images/d3.jpg'
  },
  {
    id: 20,
    name: 'Salade Niçoise',
    description: 'Salade composée avec des tomates, des haricots noirs, des olives, du thon et une vinaigrette.',
    category: 'Entrées',
    price: 9.99,
    image: 'images/d4.jpg'
  },
  {
    id: 21,
    name: 'Tartare de Saumon',
    description: 'Terrine de saumon frais avec une sauce au citron et des croûtons.',
    category: 'Entrées',
    price: 12.99,
    image: 'images/d5.jpg'
  },
  {
    id: 22,
    name: 'Poulet Rôti',
    description: 'Poulet rôti avec des légumes grillés et une sauce au parmesan.',
    category: 'Plats Principaux',
    price: 14.99,
    image: 'images/p10.jpg'
  },
  {
    id: 23,
    name: 'Filet Mignon',
    description: 'Filet mignon avec des pommes de terre rôties et une sauce au vin rouge.',
    category: 'Plats Principaux',
    price: 19.99,
    image: 'images/p11.jpg'
  },
  {
    id: 24,
    name: 'Quiche Lorraine',
    description: 'Quiche à la crème et au jambon, servie chaude.',
    category: 'Plats Principaux',
    price: 12.99,
    image: 'images/p12.jpg'

  },
  {
    id: 25,
    name: 'Salade César',
    description: 'Salade verte avec des croûtons, du parmesan et une sauce césar.',
    category: 'Entrées',
    price: 9.99,
    image: 'images/d6.jpg'
  },
  {
    id: 26,
    name: 'Salade Niçoise',
    description: 'Salade composée avec des tomates, des haricots noirs, des olives, du thon et une vinaigrette.',
    category: 'Entrées',
    price: 9.99,
    image: 'images/d4.jpg'
  },
  {
    id: 27,
    name: 'Tartare de Saumon',
    description: 'Tartare de saumon frais avec des échalotes, de la mayonnaise et des croûtons.',
    category: 'Entrées',
    price: 13.99,
    image: 'images/d5.jpg'
  }
  
];

 
// Images de secours utilisées si un plat n'a pas d'image fournie.
// Cette variable sert de réserve en cas d'absence d'image valide.
const menuImagePool = [
  'images/default.svg',
  'images/default.svg'
];

// Mappe les catégories aux préfixes d'images.
// Exemple : les plats principaux utilisent le préfixe 'p', les desserts 'd', les boissons 'b'.
const categoryImagePrefix = {
  'Plats Principaux': 'p',
  'Plat Principal': 'p',
  'Desserts': 'd',
  'Dessert': 'd',
  'Boissons': 'b',
  'Boisson': 'b'
};

// Compteurs d'images par catégorie.
// Permet de choisir une image différente à chaque fois selon la catégorie.
const imageCategoryCounters = {};

// Règles de correspondance entre descriptions et images.
// Si la description d'un plat contient certains mots-clés, on attribue une image spécifique.
const descriptionImageRules = [
  { keywords: ['curry', 'poulet'], image: 'images/p1.jpg' },
  { keywords: ['pommes de terre', 'rôties', 'poulet et'], image: 'images/p2.jpg' },
  { keywords: ['pizza', 'margherita'], image: 'images/p3.jpg' },
  { keywords: ['jus d\'orange', 'jus orange', 'orange'], image: 'images/p4.jpg' },
  { keywords: ['spaghetti', 'pâtes', 'italiennes'], image: 'images/p5.jpg' },
  { keywords: ['viande', 'picapollo'], image: 'images/p6.jpg' },
  { keywords: ['coca', 'cola'], image: 'images/b2.jpg' },
  { keywords: ['eau', 'minérale'], image: 'images/b3.jpg' },
  { keywords: ['café', 'cafe'], image: 'images/b4.jpg' },
  { keywords: ['thé', 'the', 'thé noir', 'thé vert'], image: 'images/b5.jpg' },
  { keywords: ['smoothie', 'fruits'], image: 'images/b6.jpg' },
  { keywords: ['salade', 'césar', 'niçoise'], image: 'images/d3.jpg' },
  { keywords: ['tartare', 'saumon'], image: 'images/d5.jpg' },
  { keywords: ['tarte', 'tatin', 'pommes'], image: 'images/d4.jpg' },
  { keywords: ['mousse', 'chocolat'], image: 'images/d5.jpg' },
  { keywords: ['crème brûlée', 'crème', 'caramélisée'], image: 'images/d6.jpg' },
  { keywords: ['frites', 'cornet'], image: 'images/d1.jpg' },
  { keywords: ['gâteau', 'gateau', 'fruit'], image: 'images/d3.jpg' }
];

// Formate un prix en euros avec deux décimales.
// Exemple : 12.9 devient 12.90 €.
function formatPrice(value) {
  return `${Number(value).toFixed(2)} €`;
}

// Normalise un texte pour comparer plus facilement les chaînes.
// Supprime les accents et met tout en minuscules.
function normalizeText(value) {
  return (value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

// Recherche une image correspondant à la description du plat.
// Si la description contient un mot-clé connu, on retourne l'image associée.
function getImageFromDescription(description) {
  const normalizedDescription = normalizeText(description);

  return descriptionImageRules.find(rule => rule.keywords.some(keyword => normalizeText(keyword).includes(normalizedDescription) || normalizedDescription.includes(normalizeText(keyword))))?.image;
}

// Choisit une image de secours si aucune image n'a été explicitement définie.
// Cela permet d'utiliser une image par catégorie même sans règle spéciale.
function getFallbackImage(item) {
  const prefix = getImagePrefix(item?.category);

  if (!imageCategoryCounters[prefix]) {
    imageCategoryCounters[prefix] = 0;
  }

  imageCategoryCounters[prefix] += 1;
  const imageNumber = imageCategoryCounters[prefix];

  return `images/${prefix}${imageNumber}.jpg`;
}

// Affiche un message temporaire en bas de l'écran.
// Utilisé pour confirmer qu'un article a bien été ajouté au panier.
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove('show'), 2200);
}

// Retourne le préfixe d'image basé sur la catégorie.
// Par exemple, une catégorie 'Boissons' renvoie 'b' pour utiliser les fichiers b*.jpg.
function getImagePrefix(category) {
  if (!category) return 'p';
  
  // Cherche une correspondance exacte ou partielle
  for (const [catKey, prefix] of Object.entries(categoryImagePrefix)) {
    if (category.toLowerCase().includes(catKey.toLowerCase())) {
      return prefix;
    }
  }
  
  // Fallback basé sur le premier caractère
  const firstChar = category.toLowerCase().charAt(0);
  if (['p', 'd', 'b'].includes(firstChar)) return firstChar;
  
  return 'p'; // Défaut à plats principaux
}

// Choisit l'image d'un plat en fonction de sa description, de sa catégorie, ou de l'image explicitement fournie.
// Cette fonction sert de point central pour la sélection d'image.
function getMenuImage(item) {
  if (item?.image) {
    return item.image;
  }

  const descriptionImage = getImageFromDescription(item?.description);
  if (descriptionImage) {
    return descriptionImage;
  }

  return getFallbackImage(item);
}

// Affiche les plats dans la grille du menu.
// Crée le HTML du menu à partir du tableau menuItems.
function renderMenu(items = menuItems) {
  if (!menuGrid) return;
  if (!items.length) {
    menuGrid.innerHTML = '<div class="menu-loading">Aucun plat disponible pour cette catégorie.</div>';
    return;
  }

  // Réinitialiser les compteurs d'images
  Object.keys(imageCategoryCounters).forEach(key => {
    imageCategoryCounters[key] = 0;
  });

  menuGrid.innerHTML = items.map(item => `
    <article class="plat-card" data-animate="fade-up">
      <div class="plat-image">
        <img src="${getMenuImage(item)}" alt="${item.name}" />
        <span class="plat-badge">${item.category}</span>
      </div>
      <div class="plat-body">
        <div class="plat-top">
          <h3 class="plat-nom">${item.name}</h3>
          <span class="plat-prix">${formatPrice(item.price)}</span>
        </div>
        <p class="plat-desc">${item.description}</p>
        <button class="btn-ajouter" data-id="${item.id}" type="button">
          <i class="fa-solid fa-plus"></i> Ajouter au panier
        </button>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.btn-ajouter').forEach(button => {
    button.addEventListener('click', () => addToCart(Number(button.dataset.id)));
  });
}

// Charge le menu depuis le backend PHP ou depuis le fichier de test.
// Essaie d'abord le backend PHP, puis un fichier JSON de secours.
async function loadMenu() {
  try {
    // Essayer d'abord le backend PHP
    const response = await fetch('backend/get_menu.php');
    if (!response.ok) throw new Error('PHP backend not available');
    const data = await response.json();
    menuItems = data.items || [];
    renderMenu();
  } catch (error) {





    
    try {
      // Fallback sur le fichier de test JSON
      console.log('Chargement depuis menu_test.json...');
      const response = await fetch('menu_test.json');
      const data = await response.json();
      menuItems = data.items || [];
      renderMenu();
    } catch (fallbackError) {
      console.error(fallbackError);
      menuGrid.innerHTML = '<div class="menu-loading">Impossible de charger le menu pour le moment.</div>';
    }
  }
}

// Ajoute un plat au panier.
// Si l'article existe déjà, on augmente simplement sa quantité.
function addToCart(id) {
  const item = menuItems.find(entry => entry.id === id);
  if (!item) return;

  const existing = cart.find(entry => entry.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  renderCart();
  showToast(`${item.name} ajouté au panier`);
}

// Modifie la quantité d'un article déjà présent dans le panier.
function updateQuantity(id, amount) {
  cart = cart.map(entry => entry.id === id ? { ...entry, quantity: Math.max(1, entry.quantity + amount) } : entry).filter(entry => entry.quantity > 0);
  renderCart();
}

// Supprime un article du panier.
function removeFromCart(id) {
  cart = cart.filter(entry => entry.id !== id);
  renderCart();
}

// Met à jour l'affichage du panier et du total.
function renderCart() {
  const total = cart.reduce((sum, entry) => sum + entry.price * entry.quantity, 0);
  cartCount.textContent = cart.reduce((sum, entry) => sum + entry.quantity, 0);
  drawerTotal.textContent = formatPrice(total);
  panierTotal.textContent = formatPrice(total);

  if (!cart.length) {
    panierListe.innerHTML = `
      <div class="panier-vide">
        <i class="fa-solid fa-bag-shopping"></i>
        <p>Votre panier est vide.</p>
        <p>Ajoutez un plat pour commencer.</p>
      </div>
    `;
    cartDrawerBody.innerHTML = '<div class="panier-vide-mini">Votre panier est vide.</div>';
    return;
  }

  panierListe.innerHTML = cart.map(item => `
    <div class="panier-item">
      <div class="panier-item-info">
        <span class="panier-item-nom">${item.name}</span>
        <span class="panier-item-prix">${formatPrice(item.price)} x ${item.quantity}</span>
      </div>
      <div class="qte-control">
        <button type="button" data-action="decrease" data-id="${item.id}">−</button>
        <span>${item.quantity}</span>
        <button type="button" data-action="increase" data-id="${item.id}">+</button>
        <button type="button" class="retirer-item" data-action="remove" data-id="${item.id}">Retirer</button>
      </div>
    </div>
  `).join('');

  cartDrawerBody.innerHTML = cart.map(item => `
    <div class="panier-item">
      <div class="panier-item-info">
        <span class="panier-item-nom">${item.name}</span>
        <span class="panier-item-prix">${formatPrice(item.price)} x ${item.quantity}</span>
      </div>
      <div class="qte-control">
        <button type="button" data-action="decrease" data-id="${item.id}">−</button>
        <span>${item.quantity}</span>
        <button type="button" data-action="increase" data-id="${item.id}">+</button>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('[data-action="increase"]').forEach(button => {
    button.addEventListener('click', () => updateQuantity(Number(button.dataset.id), 1));
  });
  document.querySelectorAll('[data-action="decrease"]').forEach(button => {
    button.addEventListener('click', () => updateQuantity(Number(button.dataset.id), -1));
  });
  document.querySelectorAll('[data-action="remove"]').forEach(button => {
    button.addEventListener('click', () => removeFromCart(Number(button.dataset.id)));
  });
}

// Ouvre le panneau latéral du panier.
function openCart() {
  cartDrawer.classList.add('open');
  cartBackdrop.classList.add('visible');
}

// Ferme le panneau latéral du panier.
function closeCart() {
  cartDrawer.classList.remove('open');
  cartBackdrop.classList.remove('visible');
}

// Vérifie la validité d'un champ de formulaire.
function validateField(input) {
  const errorBox = document.querySelector(`[data-error-for="${input.name}"]`);
  let valid = true;
  let message = '';

  if (!input.value.trim()) {
    valid = false;
    message = 'Ce champ est obligatoire.';
  } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    valid = false;
    message = 'Veuillez saisir un email valide.';
  } else if (input.name === 'phone' && !/^\+?[0-9\s-]{7,15}$/.test(input.value)) {
    valid = false;
    message = 'Veuillez saisir un numéro valide.';
  } else if (input.name === 'guests' && Number(input.value) < 1) {
    valid = false;
    message = 'Le nombre de personnes doit être supérieur à 0.';
  }

  input.classList.toggle('invalide', !valid);
  if (errorBox) errorBox.textContent = message;
  return valid;
}

// Vérifie tous les champs requis d'un formulaire.
function validateForm(form) {
  let valid = true;
  const fields = form.querySelectorAll('input[required]');
  fields.forEach(field => {
    if (!validateField(field)) valid = false;
  });
  return valid;
}

// Envoie la réservation au backend.
async function submitReservation(event) {
  event.preventDefault();
  const feedback = document.getElementById('reservationFeedback');
  if (!validateForm(reservationForm)) {
    feedback.textContent = 'Veuillez corriger les erreurs du formulaire.';
    feedback.className = 'form-feedback erreur';
    return;
  }

  const formData = new FormData(reservationForm);
  try {
    const response = await fetch('backend/submit_reservation.php', {
      method: 'POST',
      body: formData
    });
    const result = await response.json();
    feedback.textContent = result.message;
    feedback.className = `form-feedback ${result.success ? 'succes' : 'erreur'}`;
    if (result.success) reservationForm.reset();
  } catch (error) {
    feedback.textContent = 'Une erreur est survenue.';
    feedback.className = 'form-feedback erreur';
  }
}

// Envoie la commande avec le contenu du panier.
async function submitOrder(event) {
  event.preventDefault();
  const feedback = document.getElementById('orderFeedback');
  if (!cart.length) {
    feedback.textContent = 'Votre panier est vide.';
    feedback.className = 'form-feedback erreur';
    return;
  }
  if (!validateForm(orderForm)) {
    feedback.textContent = 'Veuillez corriger les erreurs du formulaire.';
    feedback.className = 'form-feedback erreur';
    return;
  }

  const formData = new FormData(orderForm);
  formData.append('cart', JSON.stringify(cart));
  try {
    const response = await fetch('backend/submit_order.php', {
      method: 'POST',
      body: formData
    });
    const result = await response.json();
    feedback.textContent = result.message;
    feedback.className = `form-feedback ${result.success ? 'succes' : 'erreur'}`;
    if (result.success) {
      cart = [];
      renderCart();
      orderForm.reset();
    }
  } catch (error) {
    feedback.textContent = 'Une erreur est survenue.';
    feedback.className = 'form-feedback erreur';
  }
}

// Initialise les animations au défilement.
function initAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-animate]').forEach(element => observer.observe(element));
}

// Gère les onglets de catégories du menu.
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const category = button.dataset.category;
      const filtered = category === 'Tous' ? menuItems : menuItems.filter(item => item.category === category);
      renderMenu(filtered);
    });
  });
}

// Initialise la navigation mobile et le changement d'apparence du header.
function initNavigation() {
  const handleScroll = () => {
    const header = document.querySelector('.nav-header');
    header.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  burgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    burgerBtn.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Initialise les interactions du panier.
function initCartUI() {
  document.getElementById('cartToggle').addEventListener('click', openCart);
  document.getElementById('closeCartBtn').addEventListener('click', closeCart);
  cartBackdrop.addEventListener('click', closeCart);
  document.getElementById('goToCheckout').addEventListener('click', closeCart);
}

// Attache les événements de soumission et de validation aux formulaires.
function initForms() {
  reservationForm.addEventListener('submit', submitReservation);
  orderForm.addEventListener('submit', submitOrder);
  reservationForm.querySelectorAll('input').forEach(input => input.addEventListener('blur', () => validateField(input)));
  orderForm.querySelectorAll('input').forEach(input => input.addEventListener('blur', () => validateField(input)));
}

// Démarre l'application quand la page est entièrement chargée.
window.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initTabs();
  initNavigation();
  initCartUI();
  initForms();
  renderCart();
  loadMenu();
});
