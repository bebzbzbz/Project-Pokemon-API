# Pokemon API Team-Projekt

Das "Pokémon API Project" wurde im Rahmen eines Teamprojekts entwickelt und bietet eine interaktive Anwendung, die es ermöglicht, Pokémon-Daten aus einer öffentlichen API abzurufen. Die Hauptfunktionen umfassen das Anzeigen von Pokémon auf der Startseite, die Möglichkeit, nach einem bestimmten Pokémon zu suchen, und eine detaillierte Ansicht jedes Pokémon, die zusätzliche Informationen wie Typen und "Movements" umfasst.

Die Anwendung wurde mit React und React Router DOM entwickelt und implementiert eine benutzerfreundliche Navigation, die es den Nutzern ermöglicht, zwischen verschiedenen Ansichten und Pokémon-Detailseiten zu wechseln. Der Header enthält einen Dark/Light-Modus-Button, um die Benutzeroberfläche nach den Vorlieben des Nutzers anzupassen.

## Table of Contents 

- [Über das Projekt](#über-das-projekt)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Voraussetzungen](#voraussetzungen)
  - [Installation](#installation)
- [Design](#design)
- [Deployment](#deployment)

## Über das Projekt


### Funktionen

Home-Seite:
- Anzeige aller Pokémon, die aus der API abgerufen wurden, inklusive GIFs, Name und ID
- Möglichkeit, über ein Eingabefeld nach einem bestimmten Pokémon zu suchen
- Möglichkeit, direkt auf eines der Pokémon zu klicken, um auf die Detailansicht zu gelangen

Detailansicht eines Pokémon:
- Zeigt den Typ des Pokémon
- Listet alle "Movements" (Angriffe und Fähigkeiten) des Pokémon auf
- Ein "Zurück-Pfeil" ermöglicht die Navigation zur vorherigen Seite

Dark/Light Toggle Modus:
- Ermöglicht es den Nutzern, zwischen einem dunklen und einem hellen Modus zu wechseln

Navigation:
- Das große Pokémon-Logo im Header der Seite leitet den Nutzer von jeder Seite zurück zur Startseite
- Ein Burger-Menü auf der Startseite leitet zu einer Übersicht aller Pokémon-Typen
- Durch Klicken auf einen Typ gelangt der Nutzer zu einer Übersicht aller Pokémon dieses Typs
- Von der Typenübersicht aus kann der Nutzer wieder zur Detailansicht eines Pokémon wechseln

### Teamarbeit
Dieses Projekt wurde als Teamarbeit durchgeführt. Wir haben regelmäßig über Discord kommuniziert, um Aufgaben zu verteilen, Fortschritte zu besprechen und den Entwicklungsfortschritt zu koordinieren. Mit Git als Versionierungstool haben wir sicherstellt, dass alle Änderungen zusammengeführt (mergiert), gepusht und gepullt werden, um einen reibungslosen Ablauf zu gewährleisten.

## Tech Stack

**Markup:**  
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)  

**Styling:**<br/>
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)  

**Überschrift:**<br/>
![React](https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white)

**Überschrift**<br/>
![React Router DOM](https://img.shields.io/badge/React_Router_DOM-%23CA4245.svg?style=for-the-badge&logo=react-router&logoColor=white)

**IDE:**  
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)  

**TS:**<br/>
![Javascript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)

**Version Control:**  
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  


## Getting Startet

Hier ist eine Anleitung, wie du das "Pokemon API"-Projekt auf deinem lokalen Rechner einrichtest und ausführst:

### Voraussetzungen

Folgende Programme solltest du installiert haben:

- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/download)
- [Vite](https://v5.vite.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
- [React-Router-Dom](https://reactrouter.com/start/library/installation)
- [Axios] (https://axios-http.com/docs/intro)

### Installation

1. **Clone das "Repository":**
   ```bash
   git clone https://github.com/bebzbzbz/Project-Pokemon-API
   ```

### Ausführen des Projekts

2. **Öffne das Projekt und installiere Vite,Tailwind Css, React-Router-Dom und Axios, indem du den Instruktionen auf den oben verlinkten Webseiten folgst :**
 
**Alles ist eingerichtet! Nun kannst du das "Pokemon-API"-Projekt erkunden und nach deinen Lieblings Pokemon suchen.

## Design

Das Design des Projekts basiert auf einer Figma-Vorlage, die als Grundlage für das Layout und die Farbpalette dient, um eine konsistente und ansprechende Benutzeroberfläche zu gewährleisten. Das Design wurde mit dem „Mobile-First“-Ansatz entwickelt und mit TailwindCSS umgesetzt, um sicherzustellen, dass die Anwendung auf mobilen Geräten optimal funktioniert. Gleichzeitig wurde das Projekt vollständig responsiv gestaltet, sodass es sich an verschiedene Bildschirmgrößen anpasst und auf allen Geräten eine benutzerfreundliche Oberfläche bietet.

## Deployment

Hier gelangst du direkt zur Webseite
- [Hangman Game](https://hangman-game-seven-xi.vercel.app/)
