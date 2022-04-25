# _POSTS-API_

> Uma API que realiza o gerenciamento de postagens.

### _Notas_

- Essa API pode ser executada também com um banco de dados local no Docker acessando as rotas com path iniciado em "/api/", caso tenha o docker-compose instalado basta rodar:
  
   ```
   $ docker-compose up -d
   ```

Observações:
1. A string de conexão padrão já está no .env, basta seguir as instruções e testar a aplicação a vontade.

2. Caso não queira subir o banco de dados ou não consiga, a aplicação irá funcionar normalmente nas rotas que utilizam o salvamento em memória. são as rotas "/dev/any".

3. Irei deixar o .env configurado para facilitar o manuseio da aplicação.

### _Instruções_

- Instalando as dependências:
```
$ yarn
ou
$ npm install

```
- Iniciando o server:
```
$ yarn start
ou
$ npm run start
```
*Server rodando no endereço localhost:3333, para acessar o swagger basta buscar pelo recurso "localhost:3333/api-docs"*

**Observações:**
  1. As rotas estão protegidas por uma autenticação JWT, logo para acessar os recursos da aplicação, você precisará se autenticar em  "/auth" passando o email(teste@email.com) e senha(teste1962) do usuário estático.
  2. Caso queira testar no insominia, deixei o arquivo das collections no projeto (nome do arquivo: Insomnia_2022-04-25).

### _Testes_


```
$ yarn test
ou
$ npm run test
```


