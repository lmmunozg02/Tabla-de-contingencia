# Tabla-de-contingencia

## Índice

1. [Descripción del proyecto](#descripcion-del-proyecto)
2. [Formato de salida](#formato-de-salida)
3. [Estado actual y próxima iteración](#estado-actual-y-proxima-iteracion)
4. [Requisitos](#requisitos)
5. [Instalación y comandos](#instalacion-y-comandos)
6. [Estructura del repositorio](#estructura-del-repositorio)
7. [Flujo de producción](#flujo-de-produccion)
8. [Documentación de preproducción](#documentacion-de-preproduccion)
9. [Renders y entregables](#renders-y-entregables)
10. [Créditos, fuentes y licencias](#creditos-fuentes-y-licencias)

<a id="descripcion-del-proyecto"></a>
## 1. Descripción del proyecto

Estructura base para producir un infográfico animado con Remotion. **Tema por definir.** La composición contiene únicamente el marcador «Infográfico: pendiente»; no se han definido guion, locución ni dirección visual.

Se conserva el contexto que ya tenía el repositorio:

> La tabla de contingencia una herramienta utilizada en la rama de la estadística, la cual consiste en crear al menos dos filas y dos columnas para representar datos categóricos en términos de conteos de frecuencia, también tiene el objetivo de representar en un resumen, la relación entre diferentes variables categóricas.

Este texto preexistente no determina el tema ni el contenido de la futura pieza.

<a id="formato-de-salida"></a>
## 2. Formato de salida

- Resolución: **1080 × 1920 px** (vertical, **9:16**).
- Frecuencia: **30 fps**.
- Plataformas de destino: por definir.
- Duración técnica inicial: 10 segundos; la duración final está pendiente.
- La guía de zonas seguras se controla con la propiedad `showSafeArea` y está desactivada por defecto. Los márgenes provisionales son 192 px arriba (encabezado), 384 px abajo (descripción e interfaz inferior), 180 px a la derecha (botones laterales) y 72 px a la izquierda. Se definen en `src/styles/zonas-seguras.ts`, no son una especificación oficial y deben validarse para las plataformas elegidas.

<a id="estado-actual-y-proxima-iteracion"></a>
## 3. Estado actual y próxima iteración

La estructura de Remotion, las plantillas de preproducción y la guía de zonas seguras están preparadas. No se han inventado tema, datos, guion, voz ni estilo.

La próxima iteración definirá el tema y público, las plataformas y duración, el idioma y voz, los subtítulos, las referencias de estilo y las fuentes de datos. Consulta las preguntas de cada plantilla en [Documentación de preproducción](#documentacion-de-preproduccion).

<a id="requisitos"></a>
## 4. Requisitos

- Node.js **24 LTS**, fijado en `.nvmrc` y en `engines` de `package.json`.
- npm, incluido con Node.js.

<a id="instalacion-y-comandos"></a>
## 5. Instalación y comandos

```bash
nvm use
npm install
npm run dev
npm run render
npm run lint
```

- `npm run dev`: inicia Remotion Studio.
- `npm run render`: renderiza `Infografico` en `out/infografico.mp4`.
- `npm run lint`: ejecuta ESLint y la comprobación de TypeScript.

<a id="estructura-del-repositorio"></a>
## 6. Estructura del repositorio

```text
.
├── docs/                 # Plantillas de preproducción y fuentes
├── public/
│   ├── audio/            # Locución y música
│   ├── fonts/
│   └── images/
├── src/
│   ├── components/       # Elementos reutilizables
│   ├── data/             # Datos separados de la vista
│   ├── scenes/           # Un componente por escena
│   ├── styles/           # Formato, zonas seguras y tokens
│   ├── Infografico.tsx
│   ├── Root.tsx
│   └── index.ts
├── AGENTS.md
└── README.md
```

Los directorios vacíos se conservan con `.gitkeep`.

<a id="flujo-de-produccion"></a>
## 7. Flujo de producción

**Tema → guion → locución → estilo → storyboard → animación → render**

No se anima una escena hasta que estén definidos su guion, locución y estilo en `docs/`.

<a id="documentacion-de-preproduccion"></a>
## 8. Documentación de preproducción

- [Tema](./docs/01-tema.md)
- [Guion](./docs/02-guion.md)
- [Locución](./docs/03-locucion.md)
- [Estilo](./docs/04-estilo.md)
- [Storyboard](./docs/05-storyboard.md)
- [Fuentes](./docs/fuentes.md)

Todas las plantillas permanecen en estado pendiente hasta recibir las decisiones editoriales.

<a id="renders-y-entregables"></a>
## 9. Renders y entregables

El render de salida es un archivo **MP4 H.264 con audio AAC** en `out/`. La carpeta `out/` está excluida de Git; los renders no se suben al repositorio.

<a id="creditos-fuentes-y-licencias"></a>
## 10. Créditos, fuentes y licencias

Registra las fuentes de datos y la procedencia y licencia de cada recurso en [docs/fuentes.md](./docs/fuentes.md). Guarda los recursos autorizados en `public/`. No se deben incorporar recursos sin licencia clara.
