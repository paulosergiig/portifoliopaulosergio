# Portfólio · Paulo Sérgio

Site em português voltado a clientes, com HTML, CSS e JavaScript. A identidade usa a logo original de Paulo Sérgio, preto, azul, ciano e roxo. Os botões de projetos abrem apresentações com galerias, funções e benefícios. Gabriel é o contato principal para vendas e orçamentos: (21) 9 9604-9034.

## Abrir e editar

Execute npm start e acesse http://127.0.0.1:4173. Não é necessário instalar dependências.

- dist/index.html: apresentação, soluções, sobre e contatos.
- dist/projects.js: descrições comerciais, funções e telas dos 13 projetos.
- dist/styles.css: identidade visual, galerias e adaptação a celulares.
- dist/app.js: filtros, menu, apresentações e ampliação de imagens.
- dist/assets/: logo original e capturas das interfaces.

## Origem das prévias

Nove projetos têm apresentações visuais. O conteúdo de oito foi consultado nos repositórios públicos em 07/10/2026. Papel Marchê foi consultado em uma cópia local cujo remoto corresponde ao repositório informado. Suas telas foram renderizadas a partir dos templates e estilos dos projetos, sem executar operações nos sistemas. Registros e indicadores são fictícios; séries de gráficos são ilustrativas. As imagens de Desafio Freedom e Site Helder são telas dos próprios projetos. Site Helder é apresentado como em desenvolvimento, conforme seu README.

Não foram utilizados bancos de dados, credenciais ou cadastros reais. As capturas são apresentações estáticas, não aplicações de produção. Para atualizar uma galeria, adicione as imagens em dist/assets/previews/ e descreva cada tela no campo screens de dist/projects.js.

New Painel Elétrico, Messenger Freedom, SST Freedom e Sinóptico de vulcanização continuam com apresentação em preparação: os repositórios informados retornaram 404, inclusive pelo conector do GitHub. Não há telas confirmadas desses quatro projetos. As categorias são provisórias, inferidas pelos nomes.

O e-mail e os WhatsApps foram fornecidos pelo usuário. Os contatos diretos de Paulo Sérgio permanecem disponíveis. Os links de contato não armazenam dados de visitantes.

## Hospedagem e verificação

A pasta dist/ contém os arquivos publicáveis. Para hospedar no Cloudflare Pages a partir do GitHub, siga [o guia passo a passo](PUBLICAR-CLOUDFLARE.md). Use main como branch, None como framework, exit 0 como comando de build e dist como pasta de saída.

A publicação anterior no Sites é identificada em .openai/hosting.json e tem acesso privado. O Cloudflare Pages cria uma publicação independente, com seu próprio endereço .pages.dev.

Execute npm run check para verificar projetos, imagens, contatos, âncoras e sintaxe.
