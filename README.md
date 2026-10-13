# TechFlow — Dashboard

Checkpoint 5 – FrontEnd Design.
Interface responsiva de acompanhamento de projetos, equipes e indicadores da empresa fictícia **TechFlow**.

## Integrantes

- Enzo Cassiano — RM569630

## Link do GitHub

https://github.com/enzocm786-bot/CP5-Front-end-Enzo-Cassiano-

## Tecnologias utilizadas

- **HTML5** semântico (`header`, `aside`, `nav`, `main`, `section`, `article`, `footer`)
- **Tailwind CSS 3.4** (via CDN, com `darkMode: 'class'`)
- **CSS** complementar (`css/styles.css`) para estados de validação e animações controladas por JavaScript
- **JavaScript puro** (`js/app.js`), sem frameworks ou bibliotecas

## Como executar

Basta abrir o `index.html` no navegador (é necessário estar online para carregar o Tailwind e a fonte pelo CDN).

## Estrutura

```
techflow-dashboard/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── README.md
```

## Principais recursos implementados

**Layout e responsividade (Mobile-First)**
- Navbar fixa com campo de pesquisa e informações do usuário
- Sidebar fixa no desktop (`lg:`) e em formato de menu deslizante com overlay no celular
- Breakpoints `sm:`, `md:`, `lg:`, `xl:` e `2xl:` aplicados no layout, nos espaçamentos e nos textos
- 4 cards de indicadores (Projetos ativos, Projetos concluídos, Tarefas pendentes e Equipes) em `grid-cols-2` no celular e `lg:grid-cols-4` no desktop
- 7 cards de projetos em CSS Grid com tamanhos diferentes (`col-span-*` e `row-span-*`): 1 card em destaque (2 colunas × 2 linhas), 2 cards largos e 4 cards simples

**Flexbox e Grid**
- Flexbox: `flex`, `flex-col`, `items-center`, `justify-between`, `flex-wrap`, `gap-*`
- Grid: `grid`, `grid-cols-*`, `col-span-*`, `row-span-*`, `gap-*`

**Interações e estados**
- Dropdown do usuario (abre/fecha com clique, clique fora e `Esc`)
- Menu mobile da Sidebar (botão, overlay, `Esc` e fechamento ao clicar em um link)
- `hover:`, `focus:`/`focus-visible:`, `active:` e `disabled:` em botões, links e campos
- `group-hover:` nos cards de projeto (o titulo muda de cor ao passar o mouse)
- `peer-checked:` no seletor de tema e nas opções de prioridade do formulário
- Transições com `transition`, `transition-all`, `duration-*` e `ease-*`

**Tema Light | Dark | System**
- Variante `dark:` do Tailwind em todos os componentes
- Alternância feita com JavaScript (classe `dark` na tag `<html>`)
- No modo **System**, respeita `prefers-color-scheme` e acompanha mudanças do sistema em tempo real
- Preferência salva no `localStorage` e aplicada antes da renderização (sem "piscar" ao recarregar)

**Formulário de Novo Projeto (modal)**
- Campos: Nome, Responsável, Categoria, Prioridade, Prazo e Descrição
- Validação visual com JavaScript: estado de **erro** (vermelho + mensagem) e **sucesso** (verde)
- Validação ao sair do campo, ao digitar e ao enviar; o foco vai para o primeiro campo inválido
- Prazo não aceita datas passadas; descrição exige no mínimo 20 caracteres (com contador)
- Botão de envio fica `disabled` durante o "salvamento" e o novo card aparece no grid (sem banco de dados)
- Fecha com `Esc`, clique no fundo ou botão Cancelar

**Extras**
- Pesquisa que filtra os cards de projetos em tempo real
- Mensagem de "nenhum projeto encontrado"
- Toast de confirmação ao criar um projeto
- Respeito a `prefers-reduced-motion`

## Dificuldades encontradas

> Ajuste este trecho com a experiência real do grupo antes de entregar.

- Configurar o `dark:` do Tailwind via CDN: foi preciso definir `darkMode: 'class'` e alternar a classe `dark` manualmente com JavaScript.
- Evitar o "flash" de tema claro ao recarregar a página: resolvido aplicando o tema salvo em um pequeno script no `<head>`, antes da renderização.
- Fazer os estados de erro/sucesso do formulário sobrescreverem as bordas do Tailwind (inclusive no dark mode): resolvido com seletores de maior especificidade em `css/styles.css`.
- Montar o grid com cards de tamanhos diferentes sem deixar espaços vazios: foi necessário planejar a soma de `col-span-*` e `row-span-*` em cada breakpoint.
- Manter o menu mobile acessível: controle de `aria-expanded`, fechamento com `Esc` e bloqueio da rolagem da página ao abrir a Sidebar.
