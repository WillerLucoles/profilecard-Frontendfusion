# 🎯 Card de Perfil - Next.js, Tailwind & Jest

Este projeto é um componente de card de perfil de usuário construído com Next.js, TypeScript e Tailwind CSS.

O foco principal foi a criação de uma UI precisa, a componentização para escalabilidade (separando a lógica dos botões) e a garantia de robustez através de uma cobertura completa de testes unitários com Jest e React Testing Library.

---

## Funcionalidades

* **UI Precisa:** O card replica com exatidão um design pré-definido.
* **Interatividade:** O botão "Seguir" alterna para "Seguindo" e muda de cor.
* **Atualização de Estado:** A contagem de seguidores é atualizada dinamicamente no clique, sem recarregar a página.
* **Componentização:** A aplicação é dividida em componentes reutilizáveis (`ProfileCard`, `FollowButton`, `MessageButton`), seguindo o princípio da Responsabilidade Única.
* **Totalmente Testado:** Cobertura de testes unitários e de integração para garantir que todos os componentes e interações funcionem como esperado.

---

## Tecnologias Utilizadas

* **Next.js:** Framework React para produção.
* **React:** Biblioteca para construção de UIs.
* **TypeScript:** Para tipagem estática e um código mais robusto.
* **Tailwind CSS:** Framework CSS utility-first para estilização rápida.
* **next/font:** Otimização de fontes (Inter) via Google Fonts.
* **Jest:** Framework de testes JavaScript.
* **React Testing Library:** Para testar componentes React de forma centrada no usuário.
* **User Event:** Para simular interações reais do usuário nos testes.

---