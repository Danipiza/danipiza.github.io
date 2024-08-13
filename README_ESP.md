*[ENGLISH](https://github.com/Danipiza/danipiza.github.io/blob/main/README.md) ∙ [ESPAÑOL](README_ESP.md)* <img align="right" src="https://visitor-badge.laobi.icu/badge?page_id=danipiza.danipiza.github.io" />

<h1 align="center"> DANIPIZA's PORTFOLIO</h1>

Este repositorio contiene el proyecto Astro creado para mi portafolio. Usa _github action workflow_ para que la página web este actualizada todo el tiempo que hago un _commit_ despues de modificarlo localmente.
:-----

## QUÉ es un Portafolio

Un portafolio tecnológico es un tipo de portafolio especializado que se centra en mostrar habilidades, proyectos y logros en el campo tecnológico. Es particilarmente importante para los fp

Un portafolio tecnológico es un tipo especializado de portafolio que se enfoca en mostrar habilidades, proyectos y logros en el campo de la tecnología. Es particularmente importante para profesionales de la tecnología como desarrolladores de software, ingenieros, científicos de datos... . Esto es lo que suele incluir un portafolio tecnológico:
- Proyectos
- Habilidades Tecnológicas
- Esperiencia laboral
- Education y Certificados
- Elementos de Marca Personal (como un "Acerca de mí")

## CÓMO instalar y ejecutar
### Instalación
```
npm install -g npm 
npm install -g astro 
npx astro add tailwind 
npm install @fontsource/twinkle-star 
```

### Ejecución
```npm start``` y visita [host local](http://localhost:3000/)
![local_run](https://github.com/Danipiza/danipiza.github.io/blob/main/readme_images/local_run.gif)

### Actualizar y evitar errores
```npm install astro@latest```

## CÓMO desplegar un sitio web usando GitHub Pages y [Astro](https://astro.build/)
También puedes leer la documentación creada por Astro [aquí](https://docs.astro.build/en/guides/deploy/github/).

### Crear un nuevo Repositorio:
Primero de todo tenemos que crear un nuevo repositorio con el siguiente formato: ```<github_name>.github.io```

### Cambiar ajustes en GitHub:
En la pestaña de Settings, ve a "Pages". En la sección "Build and deployment" (Compilación y despliegue), tienes que cambiar la opción "Source" (Fuente) de "Deploy from a branch" (Desplegar desde una rama) a "GitHub Actions".
![settings](https://github.com/Danipiza/danipiza.github.io/blob/main/readme_images/settings.webp)

### En el Repositorio:
Crea un nuevo archivo en ty proyecto en ```.github/workflows/deploy.yml```. Y pega este [YAML](https://github.com/Danipiza/danipiza.github.io/blob/main/.github/workflows/deploy.yml).


Crea un nuevo archivo en ty proyecto en ```astro.config.mjs```. Aquí está mi [código](https://github.com/Danipiza/danipiza.github.io/blob/main/astro.config.mjs). Tienes que cambiar algunas cosas:
![astro_config](https://github.com/Danipiza/danipiza.github.io/blob/main/readme_images/astro_config_esp.webp)




### Crear un proyecto Astro
1. Crea una carpeta con el nombre del proyecto.
2. Ejecuta ```npm create astro@latest```
3. Sigue las intrucciones de la terminal

![project_creation](https://github.com/Danipiza/danipiza.github.io/blob/main/readme_images/project_creation.webp)