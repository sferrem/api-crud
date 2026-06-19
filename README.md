# API de Vendas (CRUD)
API REST em JavaScript para gerenciar vendas com os atributos:
- month: Number
- value: Number

Tecnologias: Node.js, Express, Mongoose, dotenv

## Funcionalidades
- Criar venda
- Listar todas as vendas
- Atualizar venda por ID
- Remover venda por ID

## Endpoints
- GET /api/sales — listar todas as vendas  
- POST /api/sales — criar venda (body JSON: { "month": 1, "value": 100.5 })  
- PUT /api/sales/:id — atualizar venda (body JSON com campos a atualizar)  
- DELETE /api/sales/:id — remover venda

Todos os endpoints esperam/retornam JSON.

## Instalação (local)
1. Clonar repositório:
```bash
git clone <repo-url>
cd <repo-folder>
```
2. Instalar dependências:
```bash
npm install
```
3. Criar arquivo .env na raiz com a URL do MongoDB:
```
MONGODB_URI=mongodb+srv://usuario:senha@cluster0.mongodb.net/nomeDoBanco?retryWrites=true&w=majority
PORT=3000
```
- MONGODB_URI: string de conexão MongoDB (obrigatória)
- PORT: porta opcional (padrão 3000 se não definida)

## Testes rápidos (curl)
- Criar:
```bash
curl -X POST http://localhost:3000/api/sales \
  -H "Content-Type: application/json" \
  -d '{"month":3,"value":250.75}'
```
- Listar:
```bash
curl http://localhost:3000/api/sales
```
