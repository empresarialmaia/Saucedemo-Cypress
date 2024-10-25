# Projeto de Testes Automatizados com Cypress

## Descrição
Este repositório contém a automação de testes end-to-end utilizando Cypress para o projeto [Saucedemo](https://www.saucedemo.com/). O objetivo é validar o funcionamento correto de funcionalidades críticas da aplicação.

## Requisitos
Certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js (versão 20.10.0 ou superior):** Download Node.js https://nodejs.org/pt
- **Cypress:** O Cypress será instalado via npm, mas você pode verificar a documentação oficial para outros métodos de instalação.
- **Git** (para controle de versão): Download Git https://git-scm.com/

## Instalação
Para configurar o ambiente de testes, siga os passos abaixo:

**1.** Clone o repositório:

**git clone https://github.com/usuario/projeto-cypress.git**

**2.** Navegue até o diretório do projeto:

      cd projeto-cypress

**3.** Instale as dependências:

      npm install

## Executando os Testes
Existem duas maneiras de rodar os testes:

**1. Executando com a interface gráfica**

Para abrir a interface gráfica do Cypress e visualizar os testes:

      npx cypress open

**2. Executando no modo headless**

Para rodar os testes no modo headless (sem abrir o navegador):

      npx cypress run

