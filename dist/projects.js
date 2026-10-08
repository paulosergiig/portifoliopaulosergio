window.portfolioProjects = [
  {
    "id": "painel",
    "title": "Painel de manutenção",
    "category": "industrial",
    "label": "MONITORAMENTO INDUSTRIAL",
    "repo": "programasindustriais13/painel_manutencao",
    "description": "Acompanhe a produção e organize a manutenção da fábrica em um só lugar.",
    "tech": [
      "Python",
      "Django",
      "MySQL",
      "Scada-LTS"
    ],
    "features": [
      "Visualização do estado das prensas e suas cavidades",
      "Acompanhamento da produção e das metas de turno",
      "Quadro de ordens de serviço e responsáveis pela manutenção"
    ],
    "visual": "monitor",
    "featured": true,
    "audience": "Indústrias que precisam acompanhar equipamentos, produção e chamados de manutenção.",
    "benefit": "Reúne o estado das máquinas e as demandas de manutenção para facilitar a visão da operação.",
    "screens": [
      {
        "src": "assets/previews/painel-maquinas.jpg",
        "title": "Máquinas e produção",
        "caption": "Veja quais prensas estão produzindo, quais estão paradas e o andamento de cada cavidade."
      },
      {
        "src": "assets/previews/painel-producao.jpg",
        "title": "Visão geral da operação",
        "caption": "Indicadores e planejamento do turno ajudam a acompanhar a produção."
      },
      {
        "src": "assets/previews/painel-ordens.jpg",
        "title": "Ordens de manutenção",
        "caption": "Chamados organizados por situação para acompanhar as demandas da equipe."
      }
    ],
    "previewNote": "Telas originais renderizadas com dados fictícios. Gráficos usam séries ilustrativas."
  },
  {
    "id": "game",
    "title": "Desafio Freedom",
    "category": "web",
    "label": "EXPERIÊNCIA INTERATIVA",
    "repo": "paulosergiig/gameFreedom",
    "description": "Uma experiência de marca com dois jogos de moto, feita para participar direto pelo celular.",
    "tech": [
      "JavaScript",
      "Node.js",
      "SQLite"
    ],
    "features": [
      "Dois modos de jogo: desafio de reflexos e Freestyle",
      "Controles adaptados a celulares e computadores",
      "Rankings separados para acompanhar as pontuações"
    ],
    "visual": "game",
    "featured": true,
    "audience": "Marcas e eventos que querem oferecer uma experiência interativa aos visitantes.",
    "benefit": "Transforma a interação com a marca em uma atividade que pode ser acessada no navegador, sem instalar um aplicativo.",
    "screens": [
      {
        "src": "assets/previews/game-escolha.jpg",
        "title": "Escolha sua experiência",
        "caption": "O visitante escolhe entre desviar de obstáculos ou saltar e fazer manobras."
      },
      {
        "src": "assets/previews/game-instrucoes.jpg",
        "title": "Instruções do Freestyle",
        "caption": "A tela explica os comandos antes de começar, com orientações para celular e computador."
      }
    ],
    "original": true,
    "previewNote": "Telas do projeto."
  },
  {
    "id": "eletro",
    "title": "EletroSilva OS",
    "category": "management",
    "label": "GESTÃO DE SERVIÇOS",
    "repo": "paulosergiig/EletroSilva",
    "description": "Clientes, equipamentos, atendimentos e recebimentos organizados para a assistência técnica.",
    "tech": [
      "Python",
      "Django",
      "PWA"
    ],
    "features": [
      "Cadastro de clientes e equipamentos",
      "Acompanhamento de ordens de serviço e status dos atendimentos",
      "Agenda, recebimentos e visão financeira"
    ],
    "visual": "service",
    "featured": true,
    "audience": "Assistências técnicas e prestadores de serviços que precisam organizar seus atendimentos.",
    "benefit": "Concentra as informações dos serviços e oferece uma visão dos atendimentos em andamento e dos recebimentos.",
    "screens": [
      {
        "src": "assets/previews/eletro-painel.jpg",
        "title": "Painel operacional",
        "caption": "Uma visão de clientes, equipamentos, ordens ativas e recebimentos previstos."
      },
      {
        "src": "assets/previews/eletro-ordens.jpg",
        "title": "Ordens de serviço",
        "caption": "Localize serviços e acompanhe o cliente, o equipamento e o status de cada atendimento."
      }
    ],
    "previewNote": "Telas originais renderizadas com dados fictícios. Gráficos usam séries ilustrativas."
  },
  {
    "id": "helder",
    "title": "Painel Elétrico · Site Helder",
    "category": "web",
    "label": "SITE INSTITUCIONAL",
    "repo": "paulosergiig/site_helder",
    "description": "Um site para apresentar a empresa, suas categorias de produtos e seus canais de atendimento.",
    "tech": [
      "HTML",
      "CSS",
      "JavaScript",
      "Vite"
    ],
    "features": [
      "Página inicial com apresentação da empresa",
      "Categorias de produtos organizadas para consulta",
      "Páginas sobre a empresa e formas de contato"
    ],
    "visual": "website",
    "featured": true,
    "status": "Em desenvolvimento",
    "audience": "Empresas que precisam apresentar seus produtos e facilitar o contato com novos clientes.",
    "benefit": "Organiza a apresentação institucional e as categorias de produtos em uma experiência acessível em diferentes telas.",
    "screens": [
      {
        "src": "assets/site-helder.png",
        "title": "Página inicial",
        "caption": "Apresentação da empresa e acesso às principais categorias de produtos."
      },
      {
        "src": "assets/previews/helder-categorias.png",
        "title": "Categorias de produtos",
        "caption": "O cliente pode explorar os tipos de produtos apresentados pela empresa."
      }
    ],
    "original": true,
    "previewNote": "Telas do projeto."
  },
  {
    "id": "espessura",
    "title": "Medidor de espessura",
    "category": "industrial",
    "label": "CONTROLE & VISUALIZAÇÃO",
    "repo": "programasindustriais13/medidor_espessura",
    "description": "Visualize o perfil do material e compare as medições com os valores e tolerâncias definidos.",
    "tech": [
      "Python",
      "Django",
      "Scada-LTS"
    ],
    "features": [
      "Gráfico do perfil transversal do material",
      "Definição dos valores nominais e da tolerância",
      "Consulta de ciclos e exportação de histórico em CSV"
    ],
    "icon": "chart",
    "audience": "Operações industriais que precisam visualizar medições de espessura do material.",
    "benefit": "Torna o perfil de espessura visível em um gráfico e permite consultar as referências usadas no acompanhamento.",
    "screens": [
      {
        "src": "assets/previews/espessura-perfil.jpg",
        "title": "Perfil de espessura",
        "caption": "O gráfico apresenta medições e linhas de referência; os controles permitem definir os valores nominais."
      }
    ],
    "previewNote": "Telas originais renderizadas com dados fictícios. Gráficos usam séries ilustrativas."
  },
  {
    "id": "checklist",
    "title": "Checklist de vulcanização",
    "category": "industrial",
    "label": "INSPEÇÃO & MANUTENÇÃO",
    "repo": "programasindustriais13/cheklist_vulcanizacao",
    "description": "Inspeções digitais para registrar verificações, acompanhar pendências e revisar resultados.",
    "tech": [
      "Python",
      "Django"
    ],
    "features": [
      "Checklists de inspeção por máquina",
      "Acompanhamento do histórico e do fluxo de revisão",
      "Indicadores e exportação de informações"
    ],
    "icon": "check",
    "audience": "Equipes de manutenção, inspeção e gestão de equipamentos industriais.",
    "benefit": "Organiza os registros de inspeção e facilita o acompanhamento das verificações, aprovações e problemas encontrados.",
    "screens": [
      {
        "src": "assets/previews/checklist-historico.jpg",
        "title": "Histórico de inspeções",
        "caption": "Filtre os registros por período, máquina, inspetor, líder e situação."
      },
      {
        "src": "assets/previews/checklist-indicadores.jpg",
        "title": "Indicadores de inspeção",
        "caption": "Gráficos permitem visualizar a evolução das inspeções e a distribuição dos problemas."
      }
    ],
    "previewNote": "Telas originais renderizadas com dados fictícios. Gráficos usam séries ilustrativas."
  },
  {
    "id": "dp",
    "title": "DP Freedom",
    "category": "management",
    "label": "DEPARTAMENTO PESSOAL",
    "repo": "programasindustriais13/dpfreedom",
    "description": "Transforme planilhas do departamento pessoal em indicadores e gráficos para consulta.",
    "tech": [
      "Python",
      "Django",
      "Excel"
    ],
    "features": [
      "Importação de planilhas Excel de atestados",
      "Indicadores de registros, colaboradores e períodos de afastamento",
      "Filtros e visões de colaboradores ativos e situações especiais"
    ],
    "icon": "data",
    "audience": "Equipes de departamento pessoal que precisam analisar registros de afastamentos.",
    "benefit": "Organiza os dados importados de uma planilha em uma visão com indicadores, filtros e gráficos.",
    "screens": [
      {
        "src": "assets/previews/dp-indicadores.jpg",
        "title": "Painel do departamento pessoal",
        "caption": "Indicadores e filtros ajudam a consultar os registros da planilha em uma visão organizada."
      },
      {
        "src": "assets/previews/dp-graficos.jpg",
        "title": "Análises e gráficos",
        "caption": "Visualize a evolução dos afastamentos e compare informações por colaborador, função e categoria."
      }
    ],
    "previewNote": "Telas originais renderizadas com dados fictícios. Gráficos usam séries ilustrativas."
  },
  {
    "id": "3d",
    "title": "Calculadora de impressão 3D",
    "category": "tools",
    "label": "CÁLCULO & PRECIFICAÇÃO",
    "repo": "programasindustriais13/calculadora3Dpy",
    "description": "Entenda o custo de cada impressão e componha o preço considerando materiais, máquina e trabalho.",
    "tech": [
      "Python",
      "Django"
    ],
    "features": [
      "Cadastro de materiais, impressoras e etapas de trabalho",
      "Cálculo de material, tempo de máquina e mão de obra",
      "Detalhamento dos custos e aplicação da margem definida"
    ],
    "icon": "cube",
    "audience": "Profissionais e empresas que produzem peças e protótipos por impressão 3D.",
    "benefit": "Ajuda a organizar os componentes do custo e a visualizar a formação do preço de uma impressão.",
    "screens": [
      {
        "src": "assets/previews/3d-painel.jpg",
        "title": "Visão geral dos cálculos",
        "caption": "Consulte os cálculos recentes e os cadastros de materiais, impressoras e etapas."
      },
      {
        "src": "assets/previews/3d-custos.jpg",
        "title": "Composição do preço",
        "caption": "Veja a separação dos custos de material, máquina, mão de obra e o preço final calculado."
      }
    ],
    "previewNote": "Telas originais renderizadas com dados fictícios. Gráficos usam séries ilustrativas."
  },
  {
    "id": "papel",
    "title": "Papel Marchê · Gestão de clínica",
    "category": "management",
    "label": "GESTÃO DE CLÍNICA",
    "repo": "paulosergiig/papel-marche-sistema",
    "description": "Uma plataforma para organizar pacientes, atendimentos e rotinas de gestão da clínica.",
    "tech": [
      "Python",
      "Django"
    ],
    "pending": false,
    "icon": "code",
    "audience": "Clínicas que precisam organizar pacientes e rotinas de atendimento.",
    "benefit": "Reúne informações de pacientes e indicadores da rotina clínica em uma interface com áreas de gestão.",
    "features": [
      "Cadastro e consulta de pacientes",
      "Indicadores da rotina de atendimentos",
      "Organização de agendamentos, relatórios e planejamento"
    ],
    "screens": [
      {
        "src": "assets/previews/papel-painel.jpg",
        "title": "Painel de atendimentos",
        "caption": "Indicadores da rotina ajudam a visualizar o que está previsto para o dia."
      },
      {
        "src": "assets/previews/papel-pacientes.jpg",
        "title": "Gestão de pacientes",
        "caption": "Buscas, filtros e uma lista organizada facilitam a consulta aos cadastros."
      }
    ],
    "sourceNote": "Prévia baseada na cópia local do projeto, com dados fictícios.",
    "previewNote": "Telas originais renderizadas com dados fictícios. Gráficos usam séries ilustrativas."
  },
  {
    "id": "newpainel",
    "title": "New Painel Elétrico",
    "category": "web",
    "label": "APRESENTAÇÃO EM PREPARAÇÃO",
    "repo": "paulosergiig/NewPainelEletrico",
    "description": "A apresentação visual deste projeto está em preparação. Fale com nossa equipe para conhecer os detalhes.",
    "tech": [],
    "pending": true,
    "icon": "code",
    "screens": [],
    "features": [],
    "benefit": "A galeria e as informações deste projeto serão disponibilizadas após a verificação de suas telas.",
    "audience": "Converse com Gabriel para saber mais sobre este projeto."
  },
  {
    "id": "messenger",
    "title": "Messenger Freedom",
    "category": "management",
    "label": "APRESENTAÇÃO EM PREPARAÇÃO",
    "repo": "programasindustriais13/messengerFreedom",
    "description": "A apresentação visual deste projeto está em preparação. Fale com nossa equipe para conhecer os detalhes.",
    "tech": [],
    "pending": true,
    "icon": "code",
    "screens": [],
    "features": [],
    "benefit": "A galeria e as informações deste projeto serão disponibilizadas após a verificação de suas telas.",
    "audience": "Converse com Gabriel para saber mais sobre este projeto."
  },
  {
    "id": "sst",
    "title": "SST Freedom",
    "category": "management",
    "label": "APRESENTAÇÃO EM PREPARAÇÃO",
    "repo": "programasindustriais13/sst_freedom",
    "description": "A apresentação visual deste projeto está em preparação. Fale com nossa equipe para conhecer os detalhes.",
    "tech": [],
    "pending": true,
    "icon": "code",
    "screens": [],
    "features": [],
    "benefit": "A galeria e as informações deste projeto serão disponibilizadas após a verificação de suas telas.",
    "audience": "Converse com Gabriel para saber mais sobre este projeto."
  },
  {
    "id": "sinotipo",
    "title": "Sinóptico de vulcanização",
    "category": "industrial",
    "label": "APRESENTAÇÃO EM PREPARAÇÃO",
    "repo": "programasindustriais13/sinotipo_vulcanizacao",
    "description": "A apresentação visual deste projeto está em preparação. Fale com nossa equipe para conhecer os detalhes.",
    "tech": [],
    "pending": true,
    "icon": "code",
    "screens": [],
    "features": [],
    "benefit": "A galeria e as informações deste projeto serão disponibilizadas após a verificação de suas telas.",
    "audience": "Converse com Gabriel para saber mais sobre este projeto."
  }
];
