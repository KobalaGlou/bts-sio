---
description: Dans ce TP nous allons découvrir Flask (l’installation et un premier test).
---

# Découvrir Flask

Dans ce TP nous allons découvrir Flask (l’installation et un premier test).

## Introduction

Flask est un framework open-source de développement web en Python. Son but principal est d'être léger, afin de garder la souplesse de la programmation Python, associée à un système de templates.

## Installation de python

L’installation de Python sous Windows se fait via [l’installer officiel](https://www.python.org/downloads/), nous allons prendre la version 3.

Sous Linux (et macOS) Python est normalement **inclus**.

## Installation de PIP (Python 2)

Pip est « le gestionnaire de paquets » de Python. PIP (Pip Installs Packages) va nous permettre d’installer les différentes librairies dont nous allons avoir besoin (virtualenv, flask, …).

### Python 3

Bonne nouvelle ! Depuis python 3.4 pip est maintenant intégrés à l’installation de python. Rien à installer de plus.

### Python 2

Normalement vous avez installé python3 donc vous n’avez pas à faire ceci, cependant dans votre vie vous rencontrerez peut-être des environnements Python 2. La procédure d’installation est donc la suivante :

- Télécharger sur votre machine le [script suivant](https://bootstrap.pypa.io/get-pip.py)
- Lancer dans une console administrateur : `python get-pip.py`

Et voilà ! pip est installé sur votre machine !

Question :

- Avez-vous ouvert le fichier avant de l’utiliser ?

## Création du virtualenv

VirtualEnv ? Kézako ! C’est l’un des petits trucs géniaux avec Python! VirtualEnv vous permet d’avoir des environnements cloisonnés pour chacun de vos projets. Ça va pour permettre par exemple d’installer une version différente de Flask pour des projets différents, ou avoir des librairies « A » uniquement dans votre projet « A ». Bref ça permet de faire les choses proprement.

Vu que c’est la première fois que vous configurez votre environnement nous allons installer virtualenv, dans **une console administrateur** lancez la commande suivante :

```sh
python -m pip install virtualenv
```

Maintenant que pip est installé vous allez pouvoir créer votre virtualenv :

```sh
$ virtualenv -p python3 flask
Running virtualenv with interpreter /usr/local/bin/python3
Using base prefix '/usr/local/Cellar/python3/3.6.4_1/Frameworks/Python.framework/Versions/3.6'
New python executable in /private/tmp/flask/bin/python3.6
Also creating executable in /private/tmp/flask/bin/python
Installing setuptools, pip, wheel...done.
```

Voilà notre environnement cloisonné est prêt, mais pour l’instant il n’est pas actif, il faut lancer une commande pour « entrer » dedans :

Sous Windows :

```sh
$ flask\Scripts\activate
(flask) C:\Users\user\Documents>
```

Sous Unix :

```sh
$ source flask\Scripts\activate
(flask) /tmp
```

Le `(flask)` entre parenthèses vous indique que vous êtes actuellement dans un environnement cloisonné, à partir de maintenant si vous installez des paquets via pip ils s’installeront non pas dans votre système, mais dans votre environnement « cloisoné ».

## Le fameux Hello World

Testons notre installation en réalisant un simple Hello World. Créez un fichier `test.py` avec le contenu suivant :

```python
print ("Hello World")
```

Lancez-le via la commande :

```sh
python test.py
```

Question :

- Modifier le script pour afficher 4x le hello world. (Plusieurs solutions…)
- Modifier le texte affiché.

## Le Hello Word++

Maintenant que l’on sait que notre environnement d’exécution est correctement installé, nous allons tester la partie Flask. Avec la commande `pip` installer flask **,mais** avant pensez à activer votre environnement cloisonné précédemment créé

```sh
flask\Scripts\activate # sous Windows
source flask\Scripts\activate # Sous Unix
```

Installation de Flask :

```sh
python -m pip install flask
```

Cette commande va installer Flask ainsi que les dépendances nécessaires à son fonctionnement.

### Le code

Maintenant que Flask est installé nous allons pouvoir l’utiliser, notre exemple sera tout simple tout sera contenu dans **un seul fichier**, lancer un éditeur de texte (pyCharn, Visual Studio Code, etc), et commencer par créer le fichier suivant `main.py`

Le fichier `main.py` va être le fichier principal de notre application, l’ensemble du code sera dedans. C’est bien pour une démo, bien évidement dans une vraie application on évitera.

### But de notre code

Dans ce second exemple appelé `Hello World++` nous allons créer deux fonctions Python :

- La première `hello_world()` qui affichera `Bonjour Monde`.
- Et la seconde `hello(name)` qui affichera `Bonjour <nom>`.

### Fonctionnement

Rappel sur le fonctionnement de Flask, comme vu pendant le cours Flask permet de « mapper » (faire correspondre) des URL et des fonctions Python. Nous devons donc définir des URL d’accès à `hello_world` et `hello` je vous propose :

- `/` ==> `hello_world()`.
- `/hello/<name>` ==> `hello(name)`.

### Associer un lien et une fonction

En python, on utilise beaucoup de « décorateur », un décorateur est un « morceau de code » qui sera appelé avant, après, ou à l’initialisation de votre code.

Flask apporte un décorateur `@app.route` celui-ci nous permet de déclarer des nouveaux chemins (routes) pour accéder à nos API. Exemple :

```python
[…]
@app.route("/")
def hello_world():
    pass
[…]
```

Ce morceau de code déclare donc une url `/` et appellera la fonction `hello_world()` à chaque fois qu’une personne y accèdera.

### L’application

Maintenant que nous avons défini dans notre tête la structure de notre application, écrivons le code :

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Bonjour Monde!"

@app.route("/hello/<name>")
def hello(name):
    return "Bonjour {}".format(name)

# Lancement de l'application
if __name__ == '__main__':
    app.debug == True
    app.run()
```

### Le test

Tester votre application en lançant votre application. Pour ça vous devez activer le virtualEnv puis lancer :

```sh
(flask)  tp1 ツ python main.py
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

Normalement votre code est maintenant accessible, testez le fonctionnement :

- [L’index](http://127.0.0.1:5000/)
- [Hello Yolo](http://127.0.0.1:5000/hello/Yolo)

Question :

- Changer le paramètre observer le résultat.

### Évolution

Maintenant que vous avez tout compris, je vous propose de mettre en place une nouvelle fonctionnalité :

> Ajouter une fonction à votre application qui va effectuer une addition par rapport à deux chiffres passés en paramètre.

Étapes :

- Définir l’URL.
- Définir le nom de la fonction.
- Écrire le code.
- Tester.

C’est à vous !

<Reveal text="Voir l’une des solutions possibles">

```python
@app.route("/calcul/<int:a>/<int:b>")
def calcul(a, b):
    return "{}".format(a + b)
```

Psss : Maintenant que tu as vu la solution. Modifier la consigne pour effectuer une division plutôt…

</Reveal>
