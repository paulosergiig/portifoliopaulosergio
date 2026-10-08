# Publicar o portfólio no Cloudflare Pages

Este guia publica o site a partir do repositório https://github.com/paulosergiig/portifoliopaulosergio. O portfólio é um site estático: HTML, CSS, JavaScript e imagens. Não precisa de servidor Python ou banco de dados. As galerias são apresentações dos sistemas, com dados fictícios.

## Passo a passo

1. Acesse https://dash.cloudflare.com/ e crie uma conta gratuita ou faça login. Não é necessário comprar um domínio para começar.
2. Abra **Workers & Pages** e clique em **Create application** (Criar aplicação).
3. Escolha **Pages** e depois **Connect to Git** (Conectar ao Git). Em algumas telas, a opção aparece como **Import an existing Git repository**. Confirme que está criando um projeto Pages.
4. Escolha **GitHub**. Entre na conta **paulosergiig** e autorize a integração do Cloudflare Pages. Você pode selecionar apenas o repositório **portifoliopaulosergio** em vez de todos os repositórios.
5. Selecione **portifoliopaulosergio** e clique em **Begin setup** (Iniciar configuração).
6. Preencha os campos conforme a tabela abaixo.
7. Clique em **Save and Deploy** (Salvar e publicar). Aguarde o status de sucesso da publicação.
8. Abra o endereço terminado em **.pages.dev** exibido pelo Cloudflare. Esse é o endereço para compartilhar com Gabriel e com os clientes. O nome do endereço depende do nome escolhido e da disponibilidade.
9. Confira a logo, as galerias dos projetos e os botões de WhatsApp no computador e no celular.

## Configuração exata deste projeto

| Campo | Valor |
| --- | --- |
| Project name / Nome do projeto | portifoliopaulosergio (ou outro nome disponível) |
| Production branch / Branch de produção | main |
| Framework preset / Framework | None / Nenhum |
| Build command / Comando de build | exit 0 |
| Build output directory / Pasta de saída | dist |
| Root directory / Pasta raiz | Deixe em branco, usando a raiz do repositório |
| Environment variables / Variáveis de ambiente | Nenhuma necessária |

O comando **exit 0** apenas conclui a etapa de build. Os arquivos do site já estão prontos em **dist/**, incluindo o **dist/index.html**. Não configure a pasta raiz como dist se já estiver usando dist como pasta de saída.

O arquivo **.openai/hosting.json** pertence à publicação anterior no Sites; ele não é necessário na configuração do Cloudflare Pages. O endereço .pages.dev será uma publicação independente da versão hospedada no Sites.

## Atualizações

Depois de conectar o GitHub, cada envio de alterações para a branch **main** dispara uma nova publicação no Cloudflare Pages. Edite o conteúdo em dist/, confira com **npm run check**, faça um commit e envie as alterações para o GitHub. O comando **npm start** abre uma prévia local em http://127.0.0.1:4173.

## Se houver algum problema

- **O repositório não aparece:** confira se está na conta paulosergiig e se a integração do Cloudflare Pages tem acesso a portifoliopaulosergio.
- **A página retorna 404:** confira se a pasta de saída é dist e se o arquivo dist/index.html está no GitHub.
- **O painel pede comandos de Worker ou Wrangler:** retorne à seleção do tipo de projeto e escolha Pages.
- **Uma alteração não aparece:** confira se a última publicação foi concluída e atualize a página com Ctrl+F5.

Documentação oficial consultada:

- Integração com GitHub: https://developers.cloudflare.com/pages/get-started/git-integration/
- Publicação de HTML estático: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
