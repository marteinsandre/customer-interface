# Interface do Cliente (Frontend)

Aplicação Angular 17 para gestão de clientes, integrando com a Customer API (C# .NET Core).

## Como executar o Frontend

1. Certifique-se de ter o Node.js e o Angular CLI instalados.
2. No terminal, navegue até a pasta do projeto:
   ```sh
   cd customer-interface
   npm install
   ng serve
   ```
3. Acesse `http://localhost:4200/` no navegador.

## Funcionalidades
- Cadastro de clientes
- Consulta/listagem de clientes
- Edição de dados
- Remoção de clientes

## Integração com o Backend
O backend está localizado em `../customer-api` e deve ser executado separadamente. Siga as instruções do README na pasta `customer-api` para rodar a API.

Por padrão, o frontend está preparado para integração via HTTP com endpoints RESTful:
- `GET /api/clientes`
- `GET /api/clientes/{id}`
- `POST /api/clientes`
- `PUT /api/clientes/{id}`
- `DELETE /api/clientes/{id}`

> **Observação:** Atualmente, os dados do frontend são mantidos em memória. Para integração real, adapte o serviço de clientes para consumir a API.

## Estrutura do Projeto
- `src/app/clientes/` — Módulo de clientes (componentes, serviços, modelos)
- `src/app/app.routes.ts` — Configuração de rotas
- `src/` — Demais arquivos do Angular

## Padrões e Boas Práticas
- Clean Architecture
- SOLID
- Clean Code
- Documentação e código em português

---
Desenvolvido seguindo padrões profissionais para fácil manutenção e extensão.
