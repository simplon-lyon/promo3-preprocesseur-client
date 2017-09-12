# promo3-preprocesseur-client

A web project using typescript and SASS as preprocessor and Webpack for compiling and packaging all files.

TP Todo Typescript :
En utilisant votre projet node typescript comme serveur, faire un client pour la todo List en utilisant jQuery et typescript

1) Installer jquery et le typage de jquery avec npm (@types/jquery)
2) Faire un nouveau fichier todo.html et un fichier todo.ts
3) Faire un fichier todo-ajax.ts 
4) importer jQuery dans le todo.ts (import * as $ from 'jquery') et dans le todo-ajax.ts
5) dans le todo-ajax.ts, faire une classe TodoAjax qui, avec l'aide de jQuery ($.ajax()), ira faire les requêtes vers l'API todo faite avec node+express dans le projet promo3-typescript
6) dans le todo.ts, utiliser le todo-ajax.ts pour aller chercher les informations, et faire la manipulation du DOM en conséquence avec jQuery
fonctionnalités classiques :
a. Lister les todos
b. Ajouter un todo
c. Supprimer un todo