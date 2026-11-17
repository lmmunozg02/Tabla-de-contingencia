# Guía del repositorio

- **Alcance:** estructura para un infográfico animado con Remotion. El README es la fuente de verdad del estado del proyecto.
- **Formato:** vertical 1080 × 1920 a 30 fps. Mantén textos, datos y subtítulos dentro de las zonas seguras de `src/styles/`.
- **Orden de trabajo:** no animes una escena hasta que su guion, locución y estilo estén definidos en `docs/`. Si falta información, pregunta o deja una nota en el pull request; no la inventes.
- **Código:** una escena por archivo en `src/scenes/`, datos en `src/data/`; coloca colores, medidas y tiempos en `src/styles/`. Calcula duraciones en frames a partir de segundos × fps.
- **Recursos:** guárdalos en `public/` y registra fuente y licencia en `docs/fuentes.md`. No uses recursos sin licencia clara ni generadores de imágenes.
- **Validación:** ejecuta `npm run lint` antes de dar un cambio por terminado.
- **Renders:** van en `out/` y no se suben a Git.
- **Sincronía:** mantén `docs/`, el código y el README sincronizados cuando algo cambie.
