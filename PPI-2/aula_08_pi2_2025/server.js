const express = require("express");
const app = express();
app.use(express.json());

// Banco de dados em memória
let produtos = [];
let nextId = 1;

// POST - criar produto
app.post("/produtos", (req, res) => {
  const { nome, preco } = req.body;

  const novoProduto = { id: nextId++, nome, preco };
  produtos.push(novoProduto);

  res.status(201).json(novoProduto);
});

// GET - listar todos
app.get("/produtos", (req, res) => {
  res.json(produtos);
});

// GET - buscar por id
app.get("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  res.json(produto);
});

// PUT - atualizar todos os dados
app.put("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  produto.nome = req.body.nome;
  produto.preco = req.body.preco;

  res.json(produto);
});

// PATCH - atualizar parcialmente
app.patch("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  if (req.body.nome !== undefined) produto.nome = req.body.nome;
  if (req.body.preco !== undefined) produto.preco = req.body.preco;

  res.json(produto);
});

// DELETE - excluir produto
app.delete("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = produtos.findIndex(p => p.id === id);

  if (indice === -1) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  produtos.splice(indice, 1);

  res.status(204).send();
});

// Servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
