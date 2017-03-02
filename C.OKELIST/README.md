# C.OKELIST


Tache:

- Créer un project angular-CLI en commun  
- Dupliquer le projet NativeScript en angular-cli et Electron

Tache a faire sur 4 heures: 

* Présenter le projet avec un menu (i.e Modules)  
* Présenter la liste des pokémons  
* la liste sera sélectionnable et présentera le pokémon (le plus d'info possible)  


Format:

* utiliser le proxy pour accéder au 'backend' Pokemon  
  le rajouter a une tache package.json  
  $ npm run start:withProxy

* Electron cf google scotch music player  
   https://scotch.io/tutorials/build-a-music-player-with-angular-2-electron-i-setup-basics-concepts

* Éditer le fichier README.md pour donner des instructions claires 
  et lisibles pour ajout de librairies (en Francais)  

La note sera répartie en deux!

# Distribution des taches et étapes


## Gary 

* création du projet "pokelist" avec la commande 
```
ng new pokelist
```

* Addition de "dotenv", suivre l'étape 4 du site http://bit.ly/2mQhEpX 

* Addition du bootstrap. 
```
npm install ng2-bootstrap bootstrap --save
```
Dans le fichier `angular-cli.json` ajouter les lignes suivantes 
```
"styles": [
         "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css",
      ],
```

* Faire le "FrontEnd"
- Ajouter le navbar

## Julien 

* Addition de "Electron", suivre les étapes 2 et 3 du site http://bit.ly/2mQhEpX 

* Faire le routeurs et les services 
