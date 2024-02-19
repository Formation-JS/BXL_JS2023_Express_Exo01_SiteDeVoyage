# Exo - Express WebServer 
Réaliser une site web pour présenter une destination de voyage (Pays / Ville / ...)

## Fonctionnalité
- Une page d'accueil avec un texte et une image de présentation
- Une page de contact avec un formulaire
  - Le message de l'utilisateur est afficher dans le terminal
  - L'utilisateur est redirigé vers une page de confirmation 
- Une page qui liste les différentes destination à visité
  - La liste affiche : Nom, breve description et une minature.
  - L'utilisateur peux cliquer un element pour acceder à la page detail
- Une page detail

## Format des données
### Destination à visité 
- Nom
- Lieu (Adresse par exemple)
- Description
- Image
_Pour les données, stocker sous la forme de json (ou objet js)._

### Formulaire de contact
- Email
- Pseudo (Optionnel)
- Categorie [Info / Devis / Reclamation / Autres]
- Message [Textarea]

## Contraintes
- Faire une projet NodeJS avec Express
- L'architecture du projet doit respecté le pattern MVC
- Utiliser un moteur de vue (ejs, mustache, ...)
- L'interface doit être friendly user (nav-bar, un minimum de CSS)
- Le code doit être propre et commenté si necessaire

## Bonus
- Ajouter du JS dans la page d'accueil pour afficher une horloge