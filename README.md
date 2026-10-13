# TechFlow - Dashboard

Checkpoint 5 – FrontEnd Design
Dashboard responsivo para acompanhar projetos, equipes e indicadores da empresa fictícia TechFlow.

## Integrantes

- Enzo Cassiano - RM 569630

## Link do GitHub

https://github.com/enzocm786-bot/CP5-Front-end-Enzo-Cassiano-

## Tecnologias utilizadas

- HTML5
- Tailwind CSS (via CDN)
- CSS (arquivo `css/styles.css`)
- JavaScript puro (arquivo `js/app.js`)

## Principais recursos implementados

- Navbar com campo de pesquisa e informações do usuário
- Sidebar fixa no desktop e menu que abre e fecha no celular
- 4 cards de indicadores (projetos ativos, concluídos, tarefas pendentes e equipes)
- 6 cards de projetos em CSS Grid com tamanhos diferentes (`col-span` e `row-span`)
- Layout Mobile-First usando os breakpoints `sm:`, `md:`, `lg:`, `xl:` e `2xl:`
- Dropdown do usuário
- Estados `hover`, `focus`, `active` e `disabled`, além de `group-hover` e `peer-checked`
- Transições com `transition`, `duration` e `ease`
- Tema Light | Dark | System com a variante `dark:`, salvo no `localStorage`
- Modal "Novo projeto" com validação visual (erro em vermelho e sucesso em verde)
- Pesquisa que filtra os projetos

## Dificuldades encontradas

- Fazer o modo escuro funcionar com o Tailwind pelo CDN (foi preciso configurar `darkMode: 'class'`).
- Montar o grid com cards de tamanhos diferentes sem deixar espaços vazios.
- Validar o formulário com JavaScript e mostrar os estados de erro e sucesso.
