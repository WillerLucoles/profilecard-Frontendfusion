# 🚀 Case Study — Profile Card

Um resumo das decisões técnicas, desafios e soluções aplicadas para transformar um MVP visual em um componente robusto, acessível e testável.

---

## 📌 Sumário
- [Contexto & Motivação](#contexto--motivação)  
- [Principais Desafios](#principais-desafios)  
- [Soluções Implementadas](#soluções-implementadas)  
- [Resultados & Lições Aprendidas](#resultados--lições-aprendidas)  
- [Referências Técnicas](#referências-técnicas)

---

## 💡 Contexto & Motivação
O projeto nasceu como um desafio de UI para o *Frontend Fusion*. A ambição evoluiu: além de reproduzir o design, o objetivo passou a incluir escalabilidade, acessibilidade e persistência de estado.

> Objetivo: manter alta fidelidade visual sem comprometer boas práticas de engenharia (testabilidade, manutenibilidade e inclusão).

---

## 🔍 Principais Desafios
1. Atualização para Tailwind CSS v4 e integração com CSS Variables.  
2. Persistência de estado (localStorage) sem quebrar a hidratação do Next.js App Router.  
3. Acessibilidade robusta (leitores de tela, foco por teclado).  
4. Estratégia de testes para evitar seletores frágeis.

---

## 🛠️ Soluções Implementadas

### 1 — Tipografia e tema (Tailwind v4)
- Migração para Design Tokens via `:root` e `globals.css` (ex.: `--color-primary`).
- Mapear `fontFamily.sans` para `var(--font-inter)` (next/font + Tailwind).

Resumo:
- Manutenção centralizada de cores e tipografia.
- Menos repetição e mais consistência visual.

### 2 — Persistência de estado (useLocalStorage hook)
- Criado um hook customizado para encapsular:
  - leitura segura do localStorage (apenas no client),
  - flag `isStorageLoaded` para evitar flashes/hydration mismatch,
  - API: `[value, setValue, isLoaded]`.

Exemplo de uso:
```typescript
// Encapsula hidratação + persistência
const [isFollowing, setIsFollowing, isStorageLoaded] = useLocalStorage(
  `followState_${name}`, 
  false
);
```

Benefício: componentização limpa — UI não precisa conhecer detalhes de armazenamento.

### 3 — Acessibilidade (a11y)
Melhorias aplicadas:
- Botão com `aria-label` dinâmico: "Seguir Ana Silva" / "Deixar de seguir Ana Silva".
- `aria-pressed` para indicar estado binário.
- `focus-visible` rings customizados (preservando contraste).
- Ícones marcados como decorativos (aria-hidden).

Recomendação:
- Testar com NVDA/VoiceOver e ferramentas automáticas (axe, Lighthouse).

### 4 — Testes e seletores robustos
Problema: textos repetidos (ex.: "Seguindo") causando falsos positivos em queries.

Solução:
- Preferir queries por role + name:
```ts
const btn = await screen.findByRole('button', {
  name: /Deixar de seguir Ana Silva/i
});
```
- Usar `data-testid` ou `data-*` somente quando necessário (evitar poluição do DOM).

---

## ✅ Resultados & Lições Aprendidas
- UX consistente: estado "Seguir" persiste entre reloads sem quebrar SSR/CSR.
- Acessibilidade melhorada e testável.
- Código mais previsível: hooks isolam efeitos colaterais, componentes focam na renderização.
- Design tokens facilitam variações temáticas e manutenção.

---

## 🧪 Testes sugeridos (rápido)
- Unit: FollowButton reage a cliques e atualiza `aria-pressed`.
- Integration: ProfileCard reflete o estado persistido (usar mocking do localStorage).
- A11y: axe-core para verificar contraste e foco.

---

## 📚 Referências técnicas
- Next.js App Router — SSR/CSR considerations  
- Tailwind CSS v4 — CSS Variables & Oxide  
- axe-core / Testing Library — a11y / selectors

---

## 🏁 Conclusão
O projeto transcendeu o objetivo inicial de UI: tornou-se um exercício de engenharia com foco em manutenção, acessibilidade e confiabilidade. As decisões tomadas facilitam expansão futura (mais cards, integração com API real, temas).

Autor: Willer Lucoles