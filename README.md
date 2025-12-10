# 🎯 Card de Perfil - Frontend Fusion

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

> Um componente de perfil interativo, acessível e persistente, desenvolvido com as tecnologias mais modernas do ecossistema React.

---

## 🔗 Demonstração

🚀 **Acesse o projeto online:** [**[https://profilecard-frontendfusion.vercel.app/]**](https://profilecard-frontendfusion.vercel.app/

---

## ✨ Funcionalidades

Este projeto vai além de uma simples interface estática, implementando requisitos de engenharia de software avançados:

* **💾 Persistência de Estado (LocalStorage):** O estado do botão "Seguir" é salvo localmente. Ao recarregar a página, o componente lembra se você já segue o usuário, evitando inconsistências de *Hydration* no Next.js.
* **♿ Acessibilidade (a11y):** Foco total em leitores de tela e navegação por teclado:
    * Uso correto de atributos ARIA (`aria-pressed`, `aria-label`).
    * Estados de foco (`focus-visible`) customizados e claros.
    * Elementos decorativos ocultos para leitores de tela (`aria-hidden`).
* **🎨 UI Pixel-Perfect:** Implementação fiel ao design, com atenção aos detalhes de espaçamento, sombras e tipografia. [Acesse o design no Figma](https://www.figma.com/design/JO0vsAS75zlc0Vrx0tA5WZ/Untitled?node-id=0-1&t=8UDm9Y2PkOhwYS6a-1).
* **⚡ Interatividade Otimizada:** Feedbacks visuais instantâneos (hover, click) e contagem dinâmica de seguidores.
* **📱 Responsividade:** Layout fluido que se adapta perfeitamente a diferentes tamanhos de tela.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído sobre uma *stack* robusta e moderna:

* **Core:** [Next.js 16](https://nextjs.org/) (App Router) & [React 19](https://react.dev/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Tipagem estrita para segurança)
* **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) (Motor Oxide para alta performance)
* **Testes:** [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)
* **Qualidade de Código:** ESLint

---

## 📦 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos

* Node.js (versão 18 ou superior)
* npm (gerenciador de pacotes)

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/WillerLucoles/profilecard-Frontendfusion.git](https://github.com/WillerLucoles/profilecard-Frontendfusion.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd profilecard-Frontendfusion
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  **Acesse no navegador:**
    Abra `http://localhost:3000` para ver o resultado.

---

## 🧪 Rodando os Testes

A robustez da aplicação é garantida por uma suíte de testes unitários.

* **Para rodar todos os testes uma vez:**
    ```bash
    npm test
    ```

* **Para rodar em modo de observação (watch mode):**
    Ideal durante o desenvolvimento.
    ```bash
    npm run test:watch
    ```

**O que está sendo testado?**
* Renderização correta das informações (props).
* Lógica de interação dos botões (clique, mudança de texto e cor).
* Presença de atributos de acessibilidade.
* Integridade dos componentes `FollowButton` e `MessageButton`.

---

## 📂 Estrutura do Projeto

A organização segue as melhores práticas do **Next.js App Router**:

```text
profilecard/
├── tests/                # Testes unitários (Jest/RTL)
├── app/
│   ├── assets/           # Imagens e recursos estáticos
│   ├── components/       # Componentes reutilizáveis (ProfileCard, botões)
│   ├── data/             # Mock de dados (simulando API)
│   ├── hooks/            # Custom Hooks (ex.: useLocalStorage)
│   ├── styles/           # Estilos globais
│   ├── layout.tsx        # Layout raiz da aplicação
│   └── page.tsx          # Página principal
├── public/               # Arquivos públicos (favicon, imagens)
└── ...config files       # Configurações (Tailwind, Jest, Next, TS)
```

---

## 👨‍💻 Autor

Desenvolvido com carinho por **Willer Lucoles**.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/willerlucoles)