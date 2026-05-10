Idiomas: 🇺🇸 [English](README.md) · 🇧🇷 [Português](README.pt-br.md) · 🇪🇸 [Español](README.es.md)

---

[![CI - Tests](https://github.com/WillianDDaniel/WillianDDaniel.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/WillianDDaniel/WillianDDaniel.github.io/actions/workflows/ci.yml)

# Portfólio Pessoal do Willian

Um portfólio pessoal moderno, responsivo e multilíngue construído com React, Vite e TypeScript. Este repositório contém a aplicação frontend, projetada para apresentar meus projetos, formação acadêmica e experiência profissional.

---

## Funcionalidades

**Internacionalização (i18n)**
Suporte nativo para inglês, português (pt-BR) e espanhol. Inclui detecção automática do idioma do navegador usando `i18next-browser-languagedetector`.

**Alternador de Tema**
Modos escuro e claro totalmente integrados com detecção automática da preferência do sistema.

**Formulário de Contato**
Seção de contato totalmente funcional para entrar em contato diretamente.

**Detalhes de UI/UX**
Fundos interativos usando `particles.js`, estilização moderna com Tailwind CSS v4 e scrollbars customizadas.

**Totalmente Testado**
Configurado com Vitest, React Testing Library e MSW para testes de UI e unitários confiáveis.

---

## Stack Tecnológica

| Camada | Tecnologias |
|---|---|
| Core | React 19, TypeScript, Vite |
| Estilização | Tailwind CSS v4, Tailwind Scrollbar |
| Traduções | `i18next`, `react-i18next` |
| Testes | Vitest, React Testing Library, jsdom |
| Backend | API REST com Hono + Drizzle ORM *(repositório separado)* |

---

## Estrutura do Projeto

A aplicação segue uma arquitetura de página única com as seguintes seções principais:

```
Header      → Navegação, alternador de tema e seletor de idioma
Hero        → Banner introdutório principal
About       → Resumo profissional e habilidades
Projects    → Vitrine de trabalhos recentes e itens do portfólio
Educations  → Formação acadêmica e certificações
Contact     → Formulário de contato e redes sociais
Footer      → Copyright e links do rodapé
```

---

## Como Começar

**Pré-requisitos**

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

**Instalação**

```bash
# Clone o repositório
git clone https://github.com/WillianDDaniel/WillianDDaniel.github.io.git

# Navegue até o diretório do projeto
cd your-repo-name

# Instale as dependências
npm install
```

**Executando a Aplicação**

```bash
npm run dev
```

---

## Scripts Disponíveis

```bash
npm run dev        # Inicia o servidor de desenvolvimento local
npm run build      # Compila o TypeScript e gera o build de produção
npm run lint       # Executa o ESLint para verificar a qualidade do código
npm run preview    # Visualiza o build de produção localmente
npm run test       # Executa a suíte de testes do Vitest
npm run test:ui    # Abre a UI do Vitest para depuração visual dos testes
```

---

> Desenvolvido com café e código.