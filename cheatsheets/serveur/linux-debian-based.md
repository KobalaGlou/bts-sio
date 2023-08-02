---
description: "Aide mémoire pour configurer un Linux à base Debian."
---

# Machine à base de Debian

Dans cette aide-mémoire vous trouverez l'ensemble des éléments de base pour configurer un serveur Debian.

::: details Table des matières
[[toc]]
:::

::: tip Documents connexes :

- [Serveur Web avec Debian](./debian-web.md)
- [Configurer le réseau](./debian-reseau.md)

:::

## Accéder à la machine

Pour accéder à la machine, il faut utiliser la commande `ssh` :

```bash
ssh <utilisateur>@<ip>
```

::: tip Échanger les clés SSH

Je vous conseille vivement d'échanger votre clé SSH avec la machine. Pour cela, il faut que vous ayez une clé SSH sur votre machine. Si ce n'est pas le cas, vous pouvez en générer une avec la commande suivante :

```bash
ssh-keygen
```

Ensuite, il faut copier votre clé SSH sur la machine avec la commande suivante :

```bash
ssh-copy-id <utilisateur>@<ip>
```

Par la suite vous pourrez vous connecter à la machine sans avoir à rentrer votre mot de passe.

:::

## Emplacement important

### Emplacement des fichiers de configuration

- `/etc/` : Fichiers de configuration
- `/var/www/` : Fichiers du site web
- `/var/log/` : Fichiers de logs

### Emplacement des fichiers de configuration Apache

- `/etc/apache2/` : Fichiers de configuration Apache
- `/etc/apache2/sites-available/` : Fichiers de configuration des sites
- `/etc/apache2/sites-enabled/` : Fichiers de configuration des sites activés

### Emplacement des fichiers de configuration PHP

- `/etc/php/` : Fichiers de configuration PHP

## Les logs

### Vérifier les logs

```bash
tail -f /var/log/apache2/error.log
```

Cette commande permet de suivre en temps réel les logs d'erreur d'Apache. `tail` permet de lire les dernières lignes d'un fichier. L'option `-f` permet de suivre en temps réel le fichier.

## Les commandes de base

- `ls` : Liste les fichiers et dossiers
- `cd` : Change de dossier
- `mkdir` : Crée un dossier
- `touch` : Crée un fichier
- `rm` : Supprime un fichier
- `rm -r` : Supprime un dossier
- `mv` : Déplace un fichier
- `cp` : Copie un fichier
- `cat` : Affiche le contenu d'un fichier
- `nano` : Éditeur de texte (personnellement je préfère `vim`).

Il existe de nombreuses autres commandes, mais celles-ci sont les plus utilisées. **Il est important de savoir les utiliser.**

::: tip Un doute sur une commande ?
Si vous avez un doute sur une commande, vous pouvez taper `man <nom-de-la-commande>` pour afficher le manuel de la commande. 

Exemple : `man ls`.
:::

### Quelques astuces

La ligne de commande est très puissante. Voici quelques astuces pour vous faciliter la vie :

- La touche `tab` : permet de compléter une commande ou un chemin de fichier.
- `!!` : permet de répéter la dernière commande.
- `ctlr + r` : permet de rechercher une commande dans l'historique.
- `échap puis :wq` : permet de sauvegarder et quitter un fichier ouvert avec `vim`.
- `échap puis :q!` : permet de quitter un fichier ouvert avec `vim` sans sauvegarder.

::: tip Vous en connaissez d'autres ?
N'hésitez pas à partager vos astuces entre vous. :wink:
:::

## Les utilisateurs

### Créer un utilisateur

```bash
adduser <nom-de-l'utilisateur>
```

### Ajouter l'utilisateur dans un groupe

```bash
usermod -a -G <nom-du-groupe> <nom-de-l'utilisateur>
```

## Le réseau

### Vérifier l'adresse IP

```bash
ip a
```

### Vérifier la connexion

```bash
ping www.google.com
```

::: tip Avec le ping
Avec un simple ping vous allez vérifier :

- La connexion réseau.
- La résolution DNS.
- L'accès à Internet.

:::

### Obtenir le nom de l'interface réseau

```bash
find /sys/class/net -type l -execdir basename '{}' ';' | grep -v "^lo$"
```

### Configurer le réseau

[Consulter Configuration réseau](/cheatsheets/serveur/debian-reseau.md)

## Gérer les paquets

Seul l'utilisateur `root` peut gérer les paquets. Pour passer en `root` il faut utiliser la commande `su` :

```bash
su -
```

::: danger `su -` ?
L'option `-` permet de passer en `root` et de conserver les variables d'environnement. 
:::

### Mettre à jour les paquets

```bash
apt update
```

### Installer un paquet

```bash
apt install <nom-du-paquet>
```

### Supprimer un paquet

```bash
apt remove <nom-du-paquet>
```

### Mettre à jour les paquets

```bash
apt upgrade
```
