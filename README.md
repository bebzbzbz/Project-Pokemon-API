# Pokémon API Team-Projekt 🌀⚡

[iPhone-13-PRO-localhost-s_i2brhje_ukck.webm](https://github.com/user-attachments/assets/33c52109-1f67-465f-845f-1ac223cd7344)

The Pokémon API Project was developed as a team and offers an interactive application that makes it possible to retrieve Pokémon data from a public API. The main features include displaying an overview of all Pokémon per generation on the home page, the ability to search for a specific Pokémon, and a detailed view of each Pokémon that includes additional information such as types and attacks.

The application was developed using React.js and implements a user-friendly navigation that allows users to switch between different views and Pokémon detail pages. The header includes a dark/light mode button to customise the user interface according to the user's preferences.

## Table of Contents 

- [About the Project](#about-the-project)
  - [Features](#features)
  - [Teamwork](#teamwork)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Design](#design)
- [Deployment](#deployment)

## About the Project

### Features

Home page:
- Displays Pokémon per generation retrieved from the API, including GIFs, name and ID
- Possibility to search for a specific Pokémon via an input field
- Possibility to click directly on one of the Pokémon to access the detailed view

Detailed view of a Pokémon:
- Shows the type of Pokémon
- Lists all "Movements" (attacks and abilities) of the Pokémon
- A "Back Arrow" allows navigation to the previous page

Dark/Light Toggle Mode:
- Allows users to switch between a dark and light mode

Navigation:
- The large Pokémon logo in the header of the page directs the user from each page back to the homepage
- A burger menu on the homepage directs to an overview of all Pokémon types
- Possibility to switch between Pokémon generations
- Clicking on a type takes the user to an overview of all Pokémon of that type
- From the type overview, the user can switch back to the detailed view of a Pokémon
- A back-to-top button bring the user back up to the header of the home page

### Teamwork
This project was carried out as a team effort. We communicated regularly via Discord to distribute tasks, discuss progress and coordinate development progress. In addition, we used FigJam to visualise our tasks and distribute them. Using Git as a version control tool, we made sure that all changes were merged, pushed and pulled to ensure a smooth process.

## Tech Stack

**Markup:**  
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)  

**Styling:**  
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)  

**JS Library:**  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  

**Programming Language:**  
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)  

**Routing**  
![React Router DOM](https://img.shields.io/badge/React_Router_DOM-%23CA4245.svg?style=for-the-badge&logo=react-router&logoColor=white)

**IDE:**  
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)  

**Version Control:**  
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  


## Getting Started

Here is a guide on how to set up and run the Pokémon API project on your local computer:

### Prerequisites

You should have the following programmes installed:

- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/download)
- [Vite](https://v5.vite.dev/guide/)

### Installation

1. **Clone das "Repository":**
   ```bash
   git clone https://github.com/bebzbzbz/Project-Pokemon-API
   ```

2. **Install dependencies & run the development server:**
   ```bash
   npm install
   npm run dev
   ```

3. **Open your local host and have fun browsing your favourite Pokémon! 🐸** 

## Design

The design of the project is based on a Figma template, which serves as the basis for the layout and colour palette to ensure a consistent and appealing user interface. The design was developed with a mobile-first approach and implemented using TailwindCSS to ensure that the application works optimally on mobile devices. At the same time, the project was designed to be fully responsive so that it adapts to different screen sizes and provides a user-friendly interface on all devices.

## Deployment

Click here to go directly to the website
- [Pokemon API Team-Projekt](https://pokemon-api-duo-project.vercel.app/)