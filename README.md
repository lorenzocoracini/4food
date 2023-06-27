# **4Food**

O 4Food é um website de um restaurante de sushi, desenvolvido em TypeScript com React, Next.js, Express e PostgreSQL. O projeto permite que os usuários façam login ou registro, escolham itens do cardápio, adicionem ao carrinho e finalizem a compra com a localização da entrega.

## **Estudantes**
Diogo Neves Soares (22100896)
Guilherme Cardoso de Oliveira (22100901) 
Lorenzo Coracini de Oliveira (20100858)
Pedro Henrique Nascimento Rocha (22100918)

## **Tecnologias Utilizadas**

- React
- TailwindCss
- Radix.js
- Next.js
- TypeScript
- Express
- PostgreSQL
- TypeORM
- Vercel
- Railway

## **Estrutura de Diretórios**

- **`backend/src`**: Contém os arquivos do servidor back-end.
    - **`controllers`**: Controladores do Express.
    - **`entities`**: Definições de entidades do banco de dados.
    - **`helpers`**: Funções auxiliares.
    - **`middlewares`**: Middlewares do Express.
    - **`migrations`**: Migrações do banco de dados.
    - **`repositories`**: Acesso ao banco de dados.
- **`frontend/public`**: Arquivos públicos do front-end.
- **`frontend/src`**: Código-fonte do front-end.
    - **`pages`**: Páginas do Next.js.
    - **`components`**: Componentes React reutilizáveis.

## **Principais Funcionalidades**

- Cadastro e login de usuários.
- Alteração de dados do usuário.
- Adição de itens ao carrinho.
- Finalização da compra com localização da entrega.
- Administração de cardápio (adição e remoção de itens).

## Páginas do Front

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d825b911-17ca-41a2-93ca-d3c1641b6b1b/Untitled.png)

- Cadastro: Tela em que o usuário insere seus dados para fazer o cadastro. Para realizar o cadastro, é feito uma requisição “POST” com o back-end.
- Login: Mesma funcionalidade da tela cadastro, mas utilizada para fazer login com contas já existentes no banco de dados.
- Finalizar Pedido: Página que o usuário pode todos os itens de seu carrinho e onde é inserido os dados do endereço de entrega e o método de pagamento. Fazemos uma requisição para o back-end de criação de pedido que, caso dê certo, o pedido é criado e o site é direcionado para a página de Pedido Confirmado.
- Pedido Confirmado: Página informativa, mostrando dados do pedido para o usuário, como tempo e endereço de entrega e método de pagamento.
- Cardápio: Tela em que é mostrada os produtos oferecidos pelo restaurante. Fazemos uma requisição para o back-end para obter os produtos que estão no banco de dados e os exibimos na tela. Além disso, é nessa página que o usuário adiciona os itens no carrinho.
- Page e Home: Duas páginas informativas que apenas apresentam o restaurante para o usuário. Também possuem botões que redirecionam o usuário para o menu.
- Perfil: Tela de alteração dos dados do usuário. Assim que o usuário entra na página, ele se depara com seus dados em campos de input. Ele pode alterar os dados e salver as mudanças.
- Layout: Feature do Next.js que permite adicionar um layout padrão à todas as páginas, adicionamos o header.

## Contextos usados no Front

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2f65dd2d-3394-4fc9-8109-ab10575124c6/Untitled.png)

Utilizamos dois contextos na nossa aplicação: O cart e o Auth

- CartContext: Usado para guardar os itens adicionados por um usuário no seu respectivo carrinho.
- AuthContext: Usado para gerenciar o sistema de autenticação do usuário (cadastro e login).

## **Rotas da API**

### **1. Criação de usuário**

- Método: POST
- Rota: **`/user`**
- Controlador: **`UserController`**
- Método do controlador: **`create`**
- Descrição: Cria um novo usuário.

### **2. Login de usuário**

- Método: POST
- Rota: **`/login`**
- Controlador: **`LoginController`**
- Método do controlador: **`login`**
- Descrição: Realiza o login de um usuário.

### **3. Perfil de usuário**

- Método: GET
- Rota: **`/profile`**
- Controlador: **`LoginController`**
- Método do controlador: **`getProfile`**
- Descrição: Retorna o perfil do usuário autenticado.

### **4. Atualização de usuário**

- Método: PUT
- Rota: **`/user/:user_id`**
- Controlador: **`UserController`**
- Método do controlador: **`update`**
- Descrição: Atualiza os dados de um usuário específico.

### 5**. Criação de produto**

- Método: POST
- Rota: **`/product`**
- Controlador: **`ProdutoController`**
- Método do controlador: **`create`**
- Descrição: Cria um novo produto.

### 6. Obter Produtos

- Método: GET
- Rota: **`/products`**
- Controlador: **`ProdutoController`**
- Método do controlador: **`getAll`**
- Descrição: Retorna os produtos existentes no Banco.

### 7. **Criação de combo**

- Método: POST
- Rota: **`/combo`**
- Controlador: **`ComboController`**
- Método do controlador: **`create`**
- Descrição: Cria um novo combo.

### 8. **Adicionar produto a um combo**

- Método: POST
- Rota: **`/combo/:combo_id/add_product/:product_id`**
- Controlador: **`ComboController`**
- Método do controlador: **`addProduct`**
- Descrição: Adiciona um produto específico a um combo específico.

### 9**. Remover produto de um combo**

- Método: POST
- Rota: **`/combo/:combo_id/remove_product/:product_id`**
- Controlador: **`ComboController`**
- Método do controlador: **`removeProduct`**
- Descrição: Remove um produto específico de um combo específico.

### 10**. Criação de pedido**

- Método: POST
- Rota: **`/pedido/:client_id`**
- Controlador: **`PedidoController`**
- Método do controlador: **`create`**
- Descrição: Cria um novo pedido para um cliente específico.

## **Middlewares**

### **Middleware de autenticação**

- Nome: **`authMiddleware`**
- Arquivo: **`authMiddleware.js`**
- Descrição: Middleware responsável por verificar se um usuário está autenticado antes de permitir o acesso às rotas protegidas. Este middleware é aplicado a todas as rotas definidas após a sua chamada na definição de rotas.

## Repositório

Para o repositório do código, desenvolvemos o projeto no link:

- https://github.com/lorenzocoracini/4food

Porém para realizar o deploy do site, decidimos dividir os repositórios em dois, um para o front-end e outro para o back-end, segue os links:

- https://github.com/devpedrorocha/front-end-4food (Front-end)
- https://github.com/lorenzocoracini/back4food (Back-end)
