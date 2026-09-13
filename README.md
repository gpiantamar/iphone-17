<div align="center">

# 📱 iPhone 17 Pro — Concept Landing Page

Uma landing page conceitual, moderna e responsiva inspirada no design minimalista e sofisticado da Apple, desenvolvida para apresentar o novo **iPhone 17 Pro**.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-success?style=for-the-badge)

</div>

---

## 📖 Sobre o Projeto

Este projeto é uma **landing page promocional** construída com **React** e estilizada com **Tailwind CSS v4**. O objetivo é recriar a atmosfera visual e a experiência de usuário premium características dos lançamentos da Apple, trazendo animações suaves, efeitos em vidro (*glassmorphism*), tipografia refinada e design escuro (*dark mode*).

---

## ✨ Funcionalidades

- 🧭 **Navegação Fixa com Glassmorphism**: Barra de navegação com desfoque de fundo (`backdrop-blur`) e links de rolagem suave até cada seção.
- 🎬 **Hero Section Imersiva**: Banner principal impactante em tela cheia com gradientes e indicador de rolagem animado.
- ⚡ **Especificações Rápidas (Quick Specs)**: Destaques visuais do Display Super Retina XDR, Chip A18 Pro, Câmeras Pro e autonomia de bateria.
- 🛡️ **Destaques de Design e Performance**:
  - Estrutura em Titânio de grau aeroespacial.
  - Recursos e inteligência com iOS integrado.
  - Especificações de poder do chip A18 Pro (CPU, GPU, Ray tracing e Neural Engine).
  - Grid com detalhes do sistema triplo de câmeras (Principal 40MP, Ultra Wide 12MP e Telefoto 5x).
- 🎨 **Seção de Cores e Modelos**: Apresentação das tonalidades (Titânio Azul, Titânio Natural e Titânio Laranja) e dimensões das versões Pro e Pro Max.
- 📱 **Totalmente Responsivo**: Layout fluido que se adapta perfeitamente a smartphones, tablets e desktops.

---

## 🛠️ Tecnologias Utilizadas

- **[React 19](https://react.dev/)**: Biblioteca JavaScript para interfaces declarativas e reativas baseadas em componentes.
- **[Vite 8](https://vite.dev/)**: Ferramenta de build rápida e servidor de desenvolvimento leve com HMR.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework de estilização utility-first de alta performance.
- **[Oxlint](https://oxc.rs/)**: Linter ultrarrápido para garantia de boas práticas no código.
- **[Google Fonts (Inter)](https://fonts.google.com/specimen/Inter)**: Tipografia moderna e limpa para uma leitura confortável.

---

## 📂 Estrutura de Pastas

```plaintext
iphone-17/
├── public/
│   └── img/                 # Imagens do produto, chip e especificações
├── src/
│   ├── components/
│   │   ├── Colors.jsx       # Seletor e exibição de cores/modelos
│   │   ├── Hero.jsx         # Seção principal com banner e animações
│   │   ├── Highlights.jsx   # Destaques de engenharia, câmera e chip
│   │   ├── Intro.jsx        # Título, botões de ação e resumo de specs
│   │   └── NavBar.jsx       # Menu de navegação superior fixo
│   ├── assets/              # Recursos estáticos adicionais
│   ├── App.jsx              # Composição principal das seções
│   ├── index.css            # Configurações do Tailwind e classes utilitárias
│   └── main.jsx             # Ponto de entrada da aplicação React
├── index.html               # Estrutura HTML e importação de fontes
├── package.json             # Dependências e scripts do projeto
└── vite.config.js           # Configurações do Vite
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- Gerenciador de pacotes `npm` ou `yarn` / `pnpm`

### Passo a passo

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/gpiantamar/iphone-18.git
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd iphone-17
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   Abra a URL indicada no terminal (geralmente [http://localhost:5173](http://localhost:5173)).

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento local com Hot Reload. |
| `npm run build` | Gera o bundle otimizado para produção na pasta `dist/`. |
| `npm run preview` | Permite visualizar a versão de produção localmente. |
| `npm run lint` | Executa o linter (Oxlint) para verificar erros de código. |

---

## 👨‍💻 Autor

Desenvolvido por **Guilherme Silva**.

- GitHub: [@gpiantamar](https://github.com/gpiantamar)

---

<div align="center">
Feito com ☕ e código. Se curtiu este projeto, não esqueça de deixar uma ⭐️!
</div>
