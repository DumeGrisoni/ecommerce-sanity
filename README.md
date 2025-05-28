## 🛒 Overview

---

Ce projet est une base solide pour une application e-commerce moderne. Il combine plusieurs technologies puissantes pour offrir une solution complète, évolutive et performante :

- **Next.js** — Framework React pour le rendu côté serveur, le routing et l'optimisation des performances.
- **Sanity** — CMS headless utilisé comme backend pour la gestion des produits, catégories et contenus dynamiques.
- **Clerk** — Solution d'authentification simple et sécurisée pour gérer les utilisateurs, les connexions et les autorisations.
- **Stripe** — Intégré pour le traitement des paiements, offrant une gestion fluide et sécurisée des transactions.

Ce template est conçu pour accélérer le développement d'une boutique en ligne tout en restant flexible pour s'adapter à vos besoins spécifiques.

---

## 🛠️ Installation

---

1. **Créer un projet Sanity**  
   Rendez-vous sur [sanity.io](https://www.sanity.io/) et créez un nouveau projet. Suivez les instructions fournies pour initialiser votre studio.

2. **Récupérer les identifiants du projet**  
   Une fois le projet créé, copiez les informations suivantes :

   - `projectId`
   - `dataset`

3. **Configurer le fichier `.env`**  
   Remplacez les valeurs correspondantes dans le fichier `.env` à la racine du projet :

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=your_dataset
   ```

4. **Créer un compte et un projet Clerk**  
   Rendez-vous sur [https://clerk.dev](https://clerk.dev) et créez un compte. Une fois connecté, créez un nouveau projet.
5. **Récupérer vos clés Clerk**  
   Depuis le tableau de bord de votre projet, récupérez les clés suivantes :

   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`

6. **Créer un compte et un projet Clerk**  
   Rendez-vous sur [https://clerk.dev](https://clerk.dev) et créez un compte. Une fois connecté, créez un nouveau projet.

7. **Récupérer vos clés Clerk**  
   Depuis le tableau de bord de votre projet, récupérez les clés suivantes :

   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`

8. **Configurer le fichier `.env`**  
   Ajoutez ces variables dans votre fichier `.env` :

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   ```

9. **Configurer le fichier `.env`**  
   Remplacez ces variables dans votre fichier `.env` :

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```
