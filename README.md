# DesafioInnovation

Este é um projeto para o Desafio Innovation.

## Configuração

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

1. Clone o repositório:

2. Acesse o diretório do projeto:

3. Instale as dependências:


npm install

5. Configuração do Banco de Dados:

Certifique-se de ter um banco de dados SQLite instalado.
Use o arquivo dbInnovation.db que está no projeto ou exclua que o programa cria um sozinho.

6. Executar o aplicativo:

npm start
ou
npx ts-node app.ts

O servidor será iniciado em http://localhost:3000.

7. Uso

Você pode usar ferramentas como o Insomnia ou Postman para testar as APIs.

8. Endpoints disponíveis:

GET /api/products: Obter todos os produtos.
POST /api/products: Criar um novo produto.
PUT /api/products/:id: Atualizar um produto existente.
DELETE /api/products/:id: Excluir um produto.
