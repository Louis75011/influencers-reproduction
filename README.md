# Notes de défense du code

## Orientations : peu de commentaires dans le code estimant le nom des fonctions suffisement représentative de ce qu'elles font.
Documentation gratuite Firebase pas si évidente et changeante par rapport à la version payante Firestore.

### Architecture et logique : 

- Dossier composant de React pour le frontend (mises en page, pages à proprement parler et container pour alléger le code ou bien réutiliser le composant comme SearchForm, gestion de connexion dans la barre de navigation pour distinguer utilisateur connecté de non connecté, avantage de rapidité du framework).

- Dossier style pour mettre en forme la page (CSS pur pour pouvoir mieux copier le site qu'avec une librairie toute faite, style Bootstrap, hésitation pour le placement seulement).

- Dossier services pour le backend de Firebase (configuration basique pour la BDD + authentification avec Provider sur toute l'appli et pour la création utilisateur INDEX.jsx, idem pour la gestion des messages d'erreur à la connexion pour tout type, séparation de la logique 'brand' - un champ en plus - et 'creator' - ajout de chemin de profile par le nom et chercher si compte déjà existant dans la BDD -, ou encore connexion/inscription par Google et connexion/inscription par l'email, bouton de déconnexion singOut, protection et limitations des champs ce qui est une sécurité absente du site originel par la suppression HTML du 'required') + design incomplet pour me centrer sur l'interaction frontend/backend primordiale dans ce test. Firebase beaucoup apprécié car donnant un backend rapide, compréhensible et efficace.