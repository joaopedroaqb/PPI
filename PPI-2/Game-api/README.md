# 🎮 API de Games

API REST para gerenciar uma coleção de games, desenvolvida em Node.js com Express e MongoDB Atlas.

## 🚀 Tecnologias

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- cors
- morgan (logs)
- nodemon (dev)

## 📁 Estrutura de Pastas

- `src/server.js` – ponto de entrada, configuração da porta e conexão com o banco.
- `src/app.js` – inicialização do Express, middlewares globais e rotas.
- `src/config/database.js` – conexão com MongoDB Atlas via Mongoose.
- `src/models/gameModel.js` – schema da coleção `games`.
- `src/controllers/gameController.js` – lógica de negócio do CRUD.
- `src/routes/gameRoutes.js` – definição das rotas da API.
- `src/middlewares/errorHandler.js` – middleware de erro centralizado.
- `src/middlewares/requestLogger.js` – middleware para log de requisições.
- `src/middlewares/notFoundHandler.js` – tratamento de rotas inexistentes (404).

## 🧪 Funcionalidades (CRUD)

### Criar game

- **POST** `/api/games`
- Body (JSON):
```json
{
  "titulo": "The Witcher 3",
  "genero": "RPG",
  "plataforma": "PC",
  "lancamento": 2015
}
