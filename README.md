# DevGames 🎮

Este é o **DevGames**, um aplicativo para listar e explorar jogos, criado como parte de um desafio técnico. O app permite buscar jogos por nome, explorar categorias, visualizar detalhes, e gerenciar uma lista de favoritos. Tudo isso com uma interface moderna e funcional!

![DevGames](https://raw.githubusercontent.com/ianabreu/devgames/refs/heads/main/assets/images/bg.jpg)

## 🚀 Funcionalidades

### Home

- **Listagem de jogos:** Mostra todos os jogos com base na API fornecida.
- **Categorias:** Lista todas as categorias, permitindo clicar para acessar os jogos da categoria selecionada.
- **Busca:** Campo para buscar jogos pelo nome.

### Detalhes do jogo

- Exibe informações como:
  - Nome
  - Data de lançamento
  - Avaliação
  - Plataformas disponíveis
  - Gêneros
  - Descrição
- **Modal:** Botão para visualizar toda a descrição do jogo em um modal.
- **Acesso ao site:** Botão que direciona ao site oficial do jogo.

### Busca

- Mostra resultados da pesquisa pelo termo inserido.
- Permite navegar até a página de um gênero específico ao clicar em uma categoria.

### Favoritos

- Lista de jogos favoritos:
  - Adicionar e remover jogos.
  - Armazenamento local com **Async Storage**.

## 🛠 Tecnologias Utilizadas

- **Frameworks:** [React Native](https://reactnative.dev/) com [Expo](https://expo.dev/).
- **Linguagem:** TypeScript.
- **Estilização:** Stylesheet padrão.

## 🔗 API

A API utilizada é da [RAWG.io](https://rawg.io/apidocs).

## 🎨 Design

O layout foi desenvolvido com base no design fornecido no Figma.

## 📂 Estrutura do Projeto

- **Home:** Página inicial com listagem de jogos e categorias.
- **Detalhes:** Página de detalhes de um jogo específico.
- **Favoritos:** Lista local de jogos favoritos com gerenciamento.
- **Busca:** Resultados dinâmicos baseados no termo inserido.

## 💻 Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/ianabreu/devgames.git
   ```
   Instale as dependências:
   ```bash
   npm install
   ```
   Inicie o projeto:
   ```bash
   expo start
   ```

## 🏅 Agradecimentos

Agradecimentos ao Sujeito Programador pelo desafio e suporte!
