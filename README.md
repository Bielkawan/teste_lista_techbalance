# Gerenciador de Tarefas - Teste Técnico TechBalance

Aplicação Full-Stack desenvolvida para o gerenciamento de tarefas simples (To-Do List), permitindo a criação, listagem, atualização de status e exclusão de registros com persistência em banco de dados.

## Tecnologias Utilizadas

### Backend
- Node.js e Express (API REST)
- SQLite3 (Banco de dados relacional)
- CORS (Integração entre domínios)

### Frontend
- HTML5 e CSS3 (Design responsivo)
- JavaScript Vanilla (Consumo de API e manipulação do DOM)

## Requisitos Implementados
- Persistência de dados em banco local (SQLite).
- Validação de campos obrigatórios no frontend e backend.
- Funcionalidades completas de CRUD.
- Interface adaptável para dispositivos móveis (Mobile-First).

## Como Executar o Projeto

### 1. Preparação do Ambiente
Certifique-se de ter o Node.js instalado em sua máquina.

### 2. Execução do Servidor (Backend)
Navegue até a pasta do servidor e instale as dependências:
cd backend
npm install
node server.js
O servidor será iniciado na porta 3000.

### 3. Execução da Interface (Frontend)
Abra o arquivo `frontend/index.html` diretamente em seu navegador.

## Perguntas Técnicas

**1. Qual tecnologia você escolheu e por quê?**
Escolhi o **Node.js com Express** pela sua agilidade em construir APIs REST e o **SQLite** como banco de dados pela facilidade de portabilidade, permitindo que o avaliador execute o projeto localmente sem configurações complexas de infraestrutura. No frontend, utilizei **JavaScript Vanilla** para demonstrar domínio sobre a manipulação do DOM e o funcionamento nativo da linguagem.

**2. Qual parte do desafio foi mais difícil?**
A parte mais desafiadora foi garantir a integração fluida entre o frontend e o backend, lidando com o fluxo assíncrono das requisições (async/await) para garantir que a interface reflita o estado do banco de dados em tempo real sem a necessidade de recarregar a página.

**3. Se tivesse mais tempo, o que melhoraria no projeto?**
Eu implementaria um sistema de autenticação de usuários, filtros de busca por título ou status da tarefa, e adicionaria testes automatizados para garantir a estabilidade das rotas da API. Também utilizaria um framework como React ou Svelte para componentizar a interface.