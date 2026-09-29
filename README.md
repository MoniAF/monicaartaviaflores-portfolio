# Mónica Artavia Flores — Portfolio

Portafolio en inglés, desarrollado con **Vue 3, Vite y SCSS**. Conserva la identidad floral y los colores del proyecto original, con una estructura adaptable a móvil, tablet y escritorio.

## Ejecutar localmente

Requiere Node.js `^20.19.0 || >=22.12.0`, según las dependencias del proyecto.

```bash
npm ci
npm run dev
```

```bash
npm run build
npm run preview
npm run lint
npm run format
```

`npm run lint` aplica correcciones automáticas, como en el proyecto original. Para revisar sin modificar: `npx eslint src` y `npx oxlint src`.

## Qué cambió

- Se eliminaron las alturas fijas y las secciones vacías usadas como separadores.
- Navegación adaptable, menú móvil con botón de cierre, Escape y enlaces por sección.
- Cinco fichas de trabajo: Bloom Recipes, Hotel Beach, Poppy Cat Sitter, Bre-T y TCU.
- Filtros por categoría y páginas individuales con datos centralizados.
- Galería de imágenes con ampliación, anterior/siguiente, Escape y retorno del foco.
- Secciones de experiencia, educación y contacto reestructuradas para móvil.
- Todos los estilos propios están en SCSS, con variables, mixins y módulos mediante `@use`.
- Se retiraron Bootstrap y Bootstrap Icons: la interfaz usa CSS Grid, Flexbox y componentes propios.
- Títulos de página, descripción, idioma del documento y favicon personalizados.
- Ruta 404 y manejo de nombres de proyectos inexistentes.
- Se corrigió la referencia al archivo `PoppyCatSitter.png`, cuya capitalización importa en Linux.

## Estructura

```text
src/
  components/           Componentes reutilizables, tarjetas, menú y galería
  data/
    projects.js         Textos, tecnologías, enlaces e imágenes de cada proyecto
    profile.js          Habilidades y experiencia
  views/
    HomeView.vue        Secciones de la portada
    ProjectView.vue     Página compartida por los proyectos
    NotFoundView.vue    Página no encontrada
  assets/scss/
    _tokens.scss        Colores, bordes y breakpoints
    _mixins.scss        Media queries y paneles reutilizables
    _base.scss          Tipografía, reset, foco y movimiento reducido
    _layout.scss        Contenedores y utilidades compartidas
    _components.scss   Navegación, botones, filtros y tarjetas
    _home.scss         Secciones de inicio
    _project.scss      Página de proyecto y galería
    main.scss          Punto de entrada
public/images/projects/ Capturas de los proyectos y trabajos del TCU
```

## Capturas integradas

Las capturas recibidas se integraron en `public/images/projects/` y se conectaron desde `src/data/projects.js`. Se incluyeron pantallas representativas de Bloom, Hotel Beach y Poppy, el diagrama de BreT y una selección de los cuatro emprendimientos del TCU. Los nombres de archivo se normalizaron para evitar problemas con tildes, espacios y mayúsculas al publicar.

Si más adelante querés agregar o reemplazar una captura:

1. Guardá la imagen en su carpeta, por ejemplo:
   `public/images/projects/bloomrecipes/home.webp`.
2. Abrí `src/data/projects.js`.
3. En el proyecto correspondiente, reemplazá `screenshots: []` por:

```js
screenshots: [
  {
    src: '/images/projects/bloomrecipes/home.webp',
    alt: 'Bloom Recipes home page showing recipe search and filters',
    caption: 'Recipe discovery and filters'
  },
  {
    src: '/images/projects/bloomrecipes/details.webp',
    alt: 'Recipe details with ingredients and preparation instructions',
    caption: 'Recipe details'
  }
]
```

Las rutas públicas comienzan con `/images`, **sin** escribir `/public`. La primera imagen pasa a ser la portada de la tarjeta; todas aparecen en la galería de la página individual. Usá nombres de archivo en minúsculas y sin espacios.

Para agregar otro proyecto, copiá un objeto en `projects.js` y asigná un `slug` único. La tarjeta, categoría, filtro y ruta se generan con esos datos. Las tecnologías y los enlaces se editan en el mismo archivo. Los enlaces vacíos se omiten: no hace falta inventar una URL.

## Material opcional para ampliar el contenido

- **Bloom:** una captura de la administración si querés mostrar también esa parte.
- **Hotel Beach:** las vistas de API o una captura adicional de los tres roles.
- **Poppy:** pantallas adicionales del juego si querés documentar más estados.
- **Bre-T:** capturas de auditoría, funciones o procedimientos si querés acompañar el diagrama con código.
- **TCU:** publicaciones adicionales o una breve explicación de las herramientas utilizadas.

El contenido profesional, las fechas, los enlaces de repositorios, las certificaciones y las galerías se actualizaron con los archivos compartidos el 28 de septiembre de 2026.

## Mejoras de contenido que recomiendo después

1. Botón para descargar la versión final del CV.
2. Dos o tres imágenes representativas por proyecto, con pies de foto que expliquen qué se ve.
3. Objetivo, aporte personal y aprendizaje de cada proyecto, distinguiendo trabajo individual y grupal.
4. Enlaces verificables a certificados y demostraciones disponibles.
5. Una imagen de vista previa social y la URL canónica, cuando confirmés el dominio final.

## Publicación en Vercel

El proyecto incluye `vercel.json` para resolver las rutas de Vue al refrescar una página individual. Compilación: `npm run build`; salida: `dist`. No se publicó ni se modificó tu sitio actual. La configuración de hosting debe comprobarse al desplegar.

Google Fonts necesita conexión; el sitio conserva fuentes de respaldo si no está disponible. Las URLs externas se conservaron del código original o de las que compartiste; no se verificó su disponibilidad en esta revisión.

## Entrega

No se incluyen `node_modules` ni `dist`: se reconstruyen con los comandos anteriores. Los recursos originales permanecen en `src/assets` por si querés reutilizarlos.

## Validación de la base responsive

- Compilación de producción y ESLint/Oxlint sin errores.
- Chromium: sin desbordamiento horizontal a 320, 390, 768 y 1440 px.
- Menú móvil, filtros, rutas individuales, regreso a proyectos y página 404 comprobados.
- Galería probada con las capturas reales: ampliar, anterior/siguiente, Escape y retorno del foco.
- No se verificó todavía el despliegue en Vercel ni la disponibilidad de los enlaces externos.

## Actualización con el CV — 28 de septiembre de 2026

- Título profesional: Software Developer; resumen alineado con el CV.
- Habilidades: Tableau, Responsive Design, Bootstrap y Organization; listado ajustado al CV.
- Experiencia: atención de 40+ consultas diarias, hasta aproximadamente 5,000 registros en Excel y empleo de temporada.
- Idiomas: English B2 — Upper-Intermediate y Spanish Native.
- Educación: intensidad de inglés de 15 horas por semana, distinción académica y programa Mujer Digital.
- Ocho certificaciones con sus enlaces de Credly extraídos del PDF.
- Fechas y aportes de los cuatro proyectos técnicos; repositorios actualizados de Hotel Beach y Poppy.

Esta entrega actualiza el contenido del portafolio; no incluye el PDF del CV como descarga pública. Para instalarla, copiá el contenido en la carpeta correcta del repositorio y conservá `.git`.

Después de actualizar el contenido con el CV se ejecutaron nuevamente la compilación de producción y ESLint/Oxlint, sin errores.
