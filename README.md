*[ENGLISH](README.md) ∙ [ESPAÑOL](https://github.com/Danipiza/danipiza.github.io/blob/main/README_ESP.md)* <img align="right" src="https://visitor-badge.laobi.icu/badge?page_id=danipiza.danipiza.github.io" />

<h1 align="center"> DANIPIZA's PORTFOLIO</h1>

This repository contains the Astro project created for my portfolio. Uses a _github action workflow_ so the website is updated everytime I commit a change after modifying locally.
:-----

## WHAT is a Portfolio

A tech portfolio is a specialized type of portfolio that focuses on showcasing skills, projects, and achievements in the technology field. It's particularly important for tech professionals like software developers, engineers, data scientists... . Here's what a tech portfolio typically includes:
- Projects
- Technical Skills
- Work Experience
- Education and Certifications
- Personal Branding Elements (such as an "About me")

## HOW to install and run
### Installation
```
npm install -g npm 
npm install -g astro 
npx astro add tailwind 
npm install @fontsource/twinkle-star 
```

### Running
```npm start``` and visit [local host](http://localhost:3000/)
![local_run](https://github.com/Danipiza/danipiza.github.io/blob/main/readme_images/local_run.gif)

### Updating and avoiding errors
```npm install astro@latest```

## HOW to deploy a website using GitHub Pages and [Astro](https://astro.build/)
You can also read the documentation created by Astro [here](https://docs.astro.build/en/guides/deploy/github/).

### Create a new Repository:
First of all we need to create a new repository within the following format: ```<github_name>.github.io```

### Change settings in GitHub:
In the Settings tab go to "Pages". In "Build and deployment" section you have to change the "Source" option from "Deploy from a branch" to "GitHub Actions".
![settings](https://github.com/Danipiza/danipiza.github.io/blob/main/readme_images/settings.webp)

### In the Repository:
Create a new file in your project at ```.github/workflows/deploy.yml```. And paste this [YAML](https://github.com/Danipiza/danipiza.github.io/blob/main/.github/workflows/deploy.yml).


Create a new file in your project at ```astro.config.mjs```. Here is my [code](https://github.com/Danipiza/danipiza.github.io/blob/main/astro.config.mjs). You have to change something:
![astro_config](https://github.com/Danipiza/danipiza.github.io/blob/main/readme_images/astro_config_eng.webp)




### Create an Astro project
1. Create a folder with the name of the project.
2. run ```npm create astro@latest```
3. Follow the instructions in the terminal

![project_creation](https://github.com/Danipiza/danipiza.github.io/blob/main/readme_images/project_creation.webp)