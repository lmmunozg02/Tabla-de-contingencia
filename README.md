# Tabla-de-contingencia

Starter de Remotion para desarrollar una infografía vertical. El tema, el contenido y la dirección visual quedan por definir; no se han añadido decisiones creativas.

## Contexto existente

Se conserva la descripción que ya tenía el repositorio:

> La tabla de contingencia una herramienta utilizada en la rama de la estadística, la cual consiste en crear al menos dos filas y dos columnas para representar datos categóricos en términos de conteos de frecuencia, también tiene el objetivo de representar en un resumen, la relación entre diferentes variables categóricas.

Esta descripción no determina por sí sola el enfoque ni el contenido de la futura pieza.

## Requisitos

- Node.js LTS (versión indicada en `.nvmrc`).
- npm.

## Instalación

```bash
nvm use
npm install
```

## Comandos

```bash
npm run studio                         # Abrir Remotion Studio
npm run lint                           # Revisar el código
npm run render                         # Renderizar la composición a out/infografico.mp4
npx remotion compositions src/index.ts # Enumerar composiciones registradas
```

## Composición

La composición registrada se llama `Infografico` y usa un lienzo de **1080 × 1920 px**, **30 fps** y una duración técnica inicial de **300 fotogramas (10 s)**. La duración es provisional y se puede ajustar cuando se defina la pieza.

El lienzo se mantiene vacío hasta que se decidan el tema, el guion y la dirección visual. La propiedad `showSafeArea` controla una guía de referencia y está desactivada por defecto. Cuando se activa, muestra un rectángulo con márgenes provisionales del **10 % en cada lado** (108 px a izquierda y derecha; 192 px arriba y abajo). Es una referencia editable, no una zona segura certificada para una plataforma concreta.

## Estructura

```text
.
├── .github/
│   └── copilot-instructions.md
├── docs/
│   └── plantillas/          # Preguntas abiertas; todas pendientes
├── public/
│   ├── audio/
│   ├── fonts/
│   └── images/
├── src/
│   ├── components/
│   ├── Infografico.tsx      # Lienzo vacío y guía opcional
│   ├── Root.tsx             # Registro de composición
│   └── index.ts             # Entrada de Remotion
├── AGENTS.md
├── package.json
└── tsconfig.json
```

Los directorios de recursos están vacíos intencionalmente y se conservan mediante `.gitkeep`.

## Definición pendiente

Las plantillas de `docs/plantillas/` contienen preguntas, no respuestas ni propuestas creativas. Completar sus decisiones antes de añadir tema, datos, texto, estilo, recursos o estructura narrativa:

- `preguntas-iniciales.md`
- `guion.md`
- `direccion-visual.md`

## Validación

Antes de proponer cambios, ejecutar `npm run lint` y `npx remotion compositions src/index.ts`; esta última debe listar `Infografico` con las dimensiones y la tasa de fotogramas indicadas arriba.
