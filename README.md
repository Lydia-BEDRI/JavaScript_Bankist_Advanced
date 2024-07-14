# Bankist
Bankist est une application bancaire minimaliste qui offre une expérience bancaire moderne et simplifiée. Conçue pour répondre aux besoins des utilisateurs à la recherche de simplicité et d'efficacité, Bankist propose une gamme complète de fonctionnalités numériques pour gérer vos finances sans tracas.

# Documentation des Fonctionnalités

## 1. Modal Window

- **Fonctionnalité**: Affichage et gestion d'une fenêtre modale.
- **Fonctions Implémentées**:
  - `openModal(e)`: Ouvre la fenêtre modale lorsqu'un bouton est cliqué.
  - `closeModal()`: Ferme la fenêtre modale lorsque le bouton de fermeture est cliqué ou en appuyant sur la touche Escape.
  - Événements: Gestion des événements pour ouvrir et fermer la fenêtre modale.

## 2. Cookie Message

- **Fonctionnalité**: Affichage d'un message de cookie.
- **Fonctions Implémentées**:
  - Affichage d'un message avec un bouton pour fermer le message.
  - `message.remove()`: Suppression du message de cookie lorsqu'on clique sur le bouton de fermeture.

## 3. Button Scrolling

- **Fonctionnalité**: Défilement vers une section spécifique du site en cliquant sur un bouton.
- **Fonctions Implémentées**:
  - `btnScrollTo.addEventListener('click', ...)`: Défilement fluide vers la section ciblée lorsqu'on clique sur le bouton.

## 4. Page Navigation with Event Delegation

- **Fonctionnalité**: Navigation dans la page en utilisant la délégation d'événement pour les liens de navigation.
- **Fonctions Implémentées**:
  - Utilisation de `event delegation` pour gérer les clics sur les liens de navigation et naviguer vers les sections correspondantes.

## 5. Tabbed Component

- **Fonctionnalité**: Affichage d'un composant à onglets pour basculer entre différentes sections de contenu.
- **Fonctions Implémentées**:
  - `tabsContainer.addEventListener('click', ...)`: Gestion du clic sur les onglets pour afficher le contenu correspondant.

## 6. Menu Fade Animation

- **Fonctionnalité**: Animation de fondu pour les liens du menu de navigation.
- **Fonctions Implémentées**:
  - `nav.addEventListener('mouseover', ...)`: Animation de fondu lorsqu'on survole les liens du menu de navigation.

## 7. Sticky Navigation

- **Fonctionnalité**: Barre de navigation qui reste fixe en haut de la page lorsque l'utilisateur fait défiler la page.
- **Fonctions Implémentées**:
  - Utilisation de l'Intersection Observer API pour détecter quand la barre de navigation doit devenir fixe.

## 8. Reveal Sections on Scroll

- **Fonctionnalité**: Affichage progressif des sections lorsque l'utilisateur fait défiler la page.
- **Fonctions Implémentées**:
  - Utilisation de l'Intersection Observer API pour révéler les sections lorsque celles-ci deviennent visibles à l'écran.

## 9. Lazy Loading Images

- **Fonctionnalité**: Chargement paresseux des images pour améliorer les performances de chargement de la page.
- **Fonctions Implémentées**:
  - Utilisation de l'Intersection Observer API pour charger les images lorsque celles-ci deviennent visibles à l'écran.

## 10. Slider Component

- **Fonctionnalité**: Implémentation d'un composant de carrousel pour naviguer entre différentes diapositives.
- **Fonctions Implémentées**:
  - `nextSlide()`, `prevSlide()`: Fonctions pour naviguer vers la diapositive suivante/précédente.
  - Utilisation de boutons et de flèches du clavier pour naviguer.
