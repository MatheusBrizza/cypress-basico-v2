# Testes automatizados com Cypress - Básico

## Pré-requisitos

Antes de começar, garanta que os seguintes sistemas estejam instalados em seu computador.

git (estou usando a versão 2.34.1 enquanto escrevo esta aula)
Node.js (estou usando a versão v16.13.2 enquanto escrevo esta aula)
npm (estou usando a versão 8.3.2 enquanto escrevo esta aula)
Google Chrome (estou usando a versão 98.0.4758.80 (Official Build) (x86_64) enquanto escrevo esta aula)
Visual Studio Code (estou usando a versão 1.64.0 enquanto escrevo esta aula) ou alguma outra IDE de sua preferência
Obs.: Recomendo utilizar as mesmas versões, ou versões mais recentes dos sistemas listados acima.

Obs. 2: Ao instalar o Node.js o npm é instalado junto. 🎉

Obs. 3: Para verificar as versões do git, Node.js e npm instaladas em seu computador, execute o comando git --version && node --version && npm --version no seu terminal de linha de comando.

## Fork e clone o projeto 🐑
Abra o navegador
Acesse a URL https://github.com/wlsf82/cypress-basico-v2
Faça um fork do projeto
👨‍🏫 É de extrema importância que você trabalhe no seu fork, para que ao final do curso, possa rodar os testes em um pipeline de integração contínua.

No seu fork do projeto, clique no botão Code, escolha uma opção de clone (HTTPS ou SSH) e copie o link de clone do projeto
👨‍🏫 Eu dou preferência ao clone via SSH, pois considero mais prático.

Para detalhes sobre como criar e configurar uma chave SSH no GitHub, leia a documentação oficial.

Em seu terminal de linha de comando (em uma pasta onde você armazene seus projetos de software), execute o comando git clone [cole-o-link-copiado-aqui].
👨‍🏫 Para garantir que está clonando o seu fork, verifique a existência do seu usuário no GitHub na URL de clone do projeto. Algo como o seguinte git@github.com:[seu-usuário-aqui]/cypress-basico-v2.git

Após o clone do projeto, acesse o diretório recém clonado (ex.: cd cypress-basico-v2/).
Obs.: Dentro do diretório cypress-basico-v2/, você terá os sub-diretórios .git/ (diretório oculto), lessons/ e src/, e os arquivos .gitignore (arquivo oculto), LICENSE, package.json e README.md.

Dentro do diretório src/, você terá os arquivos index.html, privacy.html, script.js e style.css, os quais são o código-fonte da aplicação em teste.

## Instalação e inicialização do Cypress 🌲
Na raiz do projeto, execute o comando npm install cypress@9.5.1 --save-dev (ou npm i cypress@9.5.1 -D para a versão curta)
Logo após, execute o comando npx cypress open para abrir o Cypress pela primeira vez
Por fim, com o Test Runner aberto, delete os exemplos criados automaticamente, crie um arquivo chamado CAC-TAT.spec.js e feche o Test Runner.
Obs. 2: Quando inicializado pela primeira vez, o Cypress automaticamente cria o arquivo cypress.json e o diretório cypress/, com os sub-diretórios fixtures/, integration/, plugins/ e support/, com seus respetivos arquivos (com exceção dos exemplos, que acabamos de deletar).

## Configurações extra
Atualize o arquivo cypress.json conforme abaixo.
{
  "pluginsFile": false,
  "viewportHeight": 880,
  "viewportWidth": 1280
}
👨‍🏫 Com isso, estamos "dizendo ao Cypress" que:

Não vamos usar o arquivo de plugins (o qual é criado automaticamente e não precisaremos durante o curso)
Iremos sobrescrever a altura e largura do viewport padrão do Cypress
Delete o diretório cypress/plugins/, visto que este não será necessário durante o curso.

Pronto!

