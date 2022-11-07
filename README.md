# Algo-Validate-Subsequence

L'algorithme de sous-séquence : 

A partir de deux tableaux non-vide, il faut déterminer si le deuxième tableau est une sous-séquence du premier. 

Comment j'ai résolu cet algo ? 🤘 (C'est comme une recette de cuisine)

Etape 0:

- J'ai créer une function qui prend deux paramètres : 1 array, 1 sous-séquence;

Etape 1:

- Création d'une variable let qui contient un tableau vide; (cela servira de tableau de comparaison)
- Création d'une variable let qui contient l'int 0; (cela servira de compteur)

Etape 2:

- Création d'une 1ere boucle for qui parcours l'array;
- Ajout d'une deuxième boucle for (dans la première boucle) qui parcours la sous-séquence;

Etape 3:

- Ajouter une condition dans la deuxième boucle for qui vérifie si un des éléments dans l'array est strictement égal à l'un des éléments dans la sous-séquence
- Et si la variable qui sert de compteur est inférieur à la taille de la séquence;

Etape 4:

- Si la condition est vraie, alors :
          - Pousser le chiffre de la sous-séquence qui correspond à l'un des chiffres de l'array dans la variable tableau vide;
          - Réduire la taille de l'array en supprimant les integers qui se situe avant la correspondance entre l'élément de l'array et l'élément de la sous-séquence
          - Ajouter +1 au compteur;
        
 🔥 Si cette étape à bien été codée alors les boucles vont permettre de trouver la séquence d'integer correspondant à l'array 🔥
 
 Etape 5:
 
 - Vérifier par une dernière condition si les éléments pousser dans le tableau correspondent à la sous-séquence

Bon Codage ! 🍡🍪



