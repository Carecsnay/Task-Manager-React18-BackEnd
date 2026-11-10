# Task Manager API (Backend)

API backend desenvolvida com **JSON Server**, estruturada de forma modular para execução local e com suporte a Serverless Functions na **Vercel**, utilizando um arquivo `.json` como banco de dados.

## 📁 Estrutura de Diretórios

```
TASK-MANAGER-REACT18-BACKEND/
├── api/
│   └── server.js         # Ponto de entrada do servidor Express/JSON Server
├── database/
│   └── db.json           # Banco de dados local (tabelas: tasks, quotes, etc.)
├── .env                  # Variáveis de ambiente locais
├── .gitignore
├── package-lock.json
├── package.json
├── readme.md             # Documentação do projeto
└── vercel.json           # Configurações de rotas e build para deploy na Vercel

```

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **JSON Server** (Simulação de API REST)
- **Dotenv** (Gerenciamento de variáveis de ambiente)
- **Vercel Serverless Functions** (Hospedagem e deploy)

## ⚙️ Pré-requisitos

Certifique-se de ter o **Node.js** (versão 16 ou superior) instalado em sua máquina.

## 📥 Instalação

1. Clone este repositório:

   ```
   git clone https://github.com/Carecsnay/Task-Manager-React18-BackEnd

   ```

2. Acesse a pasta do projeto:

   ```
   cd TASK-MANAGER-REACT18-BACKEND

   ```

3. Instale as dependências:

   ```
   npm install

   ```

## 🔐 Variáveis de Ambiente (`.env`)

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
PORT=8000

```

## 🏃‍♂️ Executando a API Localmente

Para iniciar o servidor localmente, execute o comando:

```
npm start

```

_(Ou `node api/server.js`, dependendo das configurações definidas no seu `package.json`)_

O servidor estará rodando em:
👉 **`http://localhost:8000`**

## 🌐 Endpoints e Reescrita de Rotas (`/api`)

O servidor utiliza um reescritor automático (`jsonServer.rewriter`) para padronizar as chamadas através do prefixo `/api`:

- **Tarefas:** `GET /api/tasks` | `POST /api/tasks` | `DELETE /api/tasks/:id`
- **Frases Motivacionais:** `GET /api/quotes`

## ☁️ Deploy na Vercel

O projeto está configurado via `vercel.json` para rodar como Serverless Function:

1. **`includeFiles`**: Inclui o arquivo `database/db.json` no pacote da função serverless em produção.
2. **`rewrites`**: Redireciona todas as requisições recebidas pela Vercel diretamente para `api/server.js`.
