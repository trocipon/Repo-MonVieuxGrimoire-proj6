# Mon Vieux Grimoire - API Backend

## À propos du projet

Mon Vieux Grimoire est une application web permettant de consulter et noter des livres. Cette API backend fournit tous les services nécessaires pour gérer les livres et les utilisateurs.

## Fonctionnalités principales

- **Gestion des livres** : Créer, lire, modifier et supprimer des livres
- **Notation et évaluation** : Système de notation des livres (1-5 étoiles)
- **Classement des meilleurs livres** : Affichage des 3 livres mieux notés
- **Authentification sécurisée** : Inscription et connexion avec JWT
- **Téléchargement d'images** : Gestion des couvertures de livres avec optimisation
- **Sécurité** : Hashage des mots de passe, validation des données

## Stack technique

- **Runtime** : Node.js
- **Framework** : Express.js 5.2.1
- **Base de données** : MongoDB avec Mongoose 9.1.3
- **Authentification** : JWT (jsonwebtoken 9.0.3)
- **Sécurité** :
  - bcrypt 6.0.0 (hashage des mots de passe)
  - password-validator 5.3.0 (validation des mots de passe)
  - email-validator 2.0.4 (validation des e-mails)
- **Traitement d'images** : Sharp 0.34.5
- **Upload de fichiers** : Multer 2.0.2
- **Environnement** : dotenv 17.2.3

## Prérequis

- Node.js (v14 ou supérieur)
- npm ou yarn
- MongoDB Atlas (base de données cloud) ou MongoDB local
- Un fichier `.env` avec les variables d'environnement

## Installation

1. **Clonez le projet** (ou accédez au dossier backend)

   ```bash
   cd backend
   ```

2. **Installez les dépendances**

   ```bash
   npm install
   ```

3. **Configurez les variables d'environnement**

   Créez un fichier `.env` à la racine du dossier `backend` :

   ```
   MONGO_DB_USER=votre_utilisateur
   MONGO_DB_PASSWORD=votre_mot_de_passe
   MONGO_DB_CLUSTER=votre_cluster
   MONGO_DB_NAME=nom_de_votre_base
   JWT_SECRET=votre_cle_secrete_jwt
   PORT=4000
   ```

4. **Démarrez le serveur**
   ```bash
   npm start
   ```
   ou avec nodemon :
   ```bash
   nodemon server
   ```

## Structure du projet

```
backend/
├── controllers/          # Logique métier
│   ├── book.js           # Contrôleurs des livres
│   └── user.js           # Contrôleurs des utilisateurs
├── middleware/           # Middlewares Express
│   ├── auth.js           # Authentification JWT
│   ├── multer-config.js  # Configuration du upload d'images
│   └── validateSignup.js # Validation des données d'inscription
├── models/               # Modèles Mongoose
│   ├── Book.js           # Schéma des livres
│   ├── User.js           # Schéma des utilisateurs
│   └── Password.js       # Validation des mots de passe
├── routes/               # Routes API
│   ├── book.js           # Routes des livres
│   └── user.js           # Routes d'authentification
├── images/               # Stockage des images uploadées
├── app.js                # Configuration Express
├── server.js             # Point d'entrée
└── package.json          # Dépendances du projet
```

## Points d'accès API

- `POST /api/auth/signup` - Créer un nouveau compte
- `POST /api/auth/login` - Se connecter
- `GET /api/books` - Récupérer tous les livres
- `GET /api/books/bestrated` - Récupérer les meilleurs livres
- `GET /api/books/:id` - Récupérer un livre par ID
- `POST /api/books` - Créer un nouveau livre
- `PUT /api/books/:id` - Modifier un livre
- `DELETE /api/books/:id` - Supprimer un livre
- `POST /api/books/:id/rating` - Noter un livre

## Sécurité

- Les mots de passe sont hashés avec bcrypt
- Les tokens JWT assurent l'authentification des requêtes
- Les images sont optimisées avec Sharp pour réduire la taille
- CORS configuré pour autoriser les requêtes du frontend
- Validation des e-mails et des mots de passe

## Variables d'environnement

Variable | Description

`MONGO_DB_USER` | Utilisateur MongoDB
`MONGO_DB_PASSWORD` | Mot de passe MongoDB
`MONGO_DB_CLUSTER` | Adresse du cluster MongoDB
`MONGO_DB_NAME` | Nom de la base de données
`JWT_SECRET` | Clé secrète pour signer les JWT
`PORT` | Port du serveur (défaut : 4000)

## Démarrage du serveur

```bash
# Mode développement avec auto-reload
nodemon server

# Mode production
node server
```

Le serveur démarre sur `http://localhost:4000` par défaut.

## Dépendances principales

- **express** : Framework web minimaliste
- **mongoose** : ODM pour MongoDB
- **jsonwebtoken** : Gestion des tokens JWT
- **bcrypt** : Hashage sécurisé des mots de passe
- **multer** : Gestion du upload de fichiers
- **sharp** : Optimisation des images
