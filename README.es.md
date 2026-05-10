Idiomas: 🇺🇸 [English](README.md) · 🇧🇷 [Português](README.pt-BR.md) · 🇪🇸 [Español](README.es.md)

---

[![CI - Tests](https://github.com/WillianDDaniel/WillianDDaniel.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/WillianDDaniel/WillianDDaniel.github.io/actions/workflows/ci.yml)

# Portafolio Personal de Willian

Un portafolio personal moderno, responsivo y multilingüe construido con React, Vite y TypeScript. Este repositorio contiene la aplicación frontend, diseñada para mostrar mis proyectos, formación académica y experiencia profesional.

---

## Funcionalidades

**Internacionalización (i18n)**
Soporte nativo para inglés, portugués (pt-BR) y español. Incluye detección automática del idioma del navegador usando `i18next-browser-languagedetector`.

**Selector de Tema**
Modos oscuro y claro totalmente integrados con detección automática de la preferencia del sistema.

**Formulario de Contacto**
Sección de contacto totalmente funcional para comunicarse directamente.

**Detalles de UI/UX**
Fondos interactivos usando `particles.js`, estilización moderna con Tailwind CSS v4 y scrollbars personalizadas.

**Totalmente Probado**
Configurado con Vitest, React Testing Library y MSW para pruebas de UI y unitarias confiables.

---

## Stack Tecnológico

| Capa | Tecnologías |
|---|---|
| Core | React 19, TypeScript, Vite |
| Estilos | Tailwind CSS v4, Tailwind Scrollbar |
| Traducciones | `i18next`, `react-i18next` |
| Pruebas | Vitest, React Testing Library, jsdom |
| Backend | API REST con Hono + Drizzle ORM *(repositorio separado)* |

---

## Estructura del Proyecto

La aplicación sigue una arquitectura de página única con las siguientes secciones principales:

```
Header      → Navegación, selector de tema y selector de idioma
Hero        → Banner introductorio principal
About       → Resumen profesional y habilidades
Projects    → Muestra de trabajos recientes y elementos del portafolio
Educations  → Formación académica y certificaciones
Contact     → Formulario de contacto y redes sociales
Footer      → Copyright y enlaces del pie de página
```

---

## Primeros Pasos

**Requisitos Previos**

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina.

**Instalación**

```bash
# Clona el repositorio
git clone https://github.com/WillianDDaniel/WillianDDaniel.github.io.git

# Navega al directorio del proyecto
cd your-repo-name

# Instala las dependencias
npm install
```

**Ejecutando la Aplicación**

```bash
npm run dev
```

---

## Scripts Disponibles

```bash
npm run dev        # Inicia el servidor de desarrollo local
npm run build      # Compila TypeScript y genera el build de producción
npm run lint       # Ejecuta ESLint para verificar la calidad del código
npm run preview    # Previsualiza el build de producción localmente
npm run test       # Ejecuta la suite de pruebas de Vitest
npm run test:ui    # Abre la UI de Vitest para depuración visual de pruebas
```

---

> Desarrollado con café y código.