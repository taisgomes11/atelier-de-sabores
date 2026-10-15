 # Atelier de Sabores 🍽️

## Sobre o projeto

O **Atelier de Sabores** é um site institucional desenvolvido para uma empresa fictícia de gastronomia autoral, especializada em jantares privativos, eventos sofisticados e menus exclusivos.

O projeto foi criado como trabalho final do curso de Programador Front-End, com o objetivo de aplicar conhecimentos de HTML, CSS, JavaScript e React na construção de uma interface moderna, responsiva, intuitiva e interativa.

## Objetivo

Apresentar os serviços gastronômicos da empresa, divulgar um portfólio de pratos e permitir que visitantes preencham um formulário para solicitar orçamentos.

O desenvolvimento priorizou a organização dos componentes, a identidade visual, a experiência do usuário e a aplicação prática de funcionalidades interativas.

## Tecnologias utilizadas

- **HTML5 e JSX:** estruturação semântica dos elementos da interface.
- **CSS3:** estilização, identidade visual, organização do layout e responsividade.
- **JavaScript:** lógica das funcionalidades, manipulação de dados, eventos e filtros.
- **React:** construção da interface por componentes reutilizáveis.
- **Vite:** ferramenta de desenvolvimento e compilação do projeto.
- **Lucide React:** biblioteca de ícones utilizada na interface.
- **Git e GitHub:** ferramentas para versionamento e hospedagem do código, quando utilizadas.

## Funcionalidades desenvolvidas

### 1. Menu de navegação

Menu com links para as seções Início, Sobre, Serviços, Portfólio e Contato.

Inclui menu hambúrguer para dispositivos móveis, utilizando o hook `useState` para controlar sua abertura e seu fechamento.

### 2. Página inicial

Apresentação da identidade do Atelier de Sabores, com imagem de destaque, título, descrição e botão que direciona o visitante ao portfólio gastronômico.

### 3. Sobre a Chef

Seção institucional com apresentação da profissional, sua proposta gastronômica e seus diferenciais.

### 4. Serviços Gastronômicos

Apresentação dos principais serviços oferecidos pela empresa fictícia:

- Jantares Privativos
- Eventos Sofisticados
- Menus Exclusivos

Os serviços são exibidos por componentes reutilizáveis, com ícones e efeitos visuais.

### 5. Portfólio Gastronômico

Galeria de fotografias dos pratos, organizada em categorias.

O visitante pode selecionar uma categoria para visualizar os itens correspondentes. O filtro utiliza o método `filter()` do JavaScript, enquanto o método `map()` é utilizado para renderizar os cards.

### 6. Modal interativo

Ao selecionar a opção de visualizar um prato, o visitante pode abrir uma janela modal com imagem, nome, categoria e descrição.

A interface também possui controles de navegação para avançar ou retornar entre os pratos.

### 7. Formulário de contato

Formulário para simulação de solicitação de orçamento, contendo:

- Nome
- E-mail
- Mensagem

Os campos são controlados pelo React com `useState`.

A validação básica utiliza recursos do HTML5, como `required` e `type="email"`.

Após o envio válido, os campos são limpos e uma mensagem de confirmação aparece na interface.

**Observação:** o envio é demonstrativo. Não existe integração com servidor, banco de dados ou serviço de e-mail.

## Organização do código

O projeto utiliza uma arquitetura baseada em componentes React, separando as diferentes seções da interface.

Entre os componentes desenvolvidos estão:

- `Navbar.jsx` — menu de navegação.
- `Hero.jsx` — apresentação inicial.
- `Sobre.jsx` — apresentação da chef.
- `Especialidades.jsx` — serviços gastronômicos.
- `CardEspecialidade.jsx` — cards reutilizáveis de serviços.
- `Galeria.jsx` — portfólio e funcionalidades interativas.
- `CardPrato.jsx` — cards dos pratos.
- `Contato.jsx` — formulário de contato.
- `Footer.jsx` — rodapé.

O arquivo `App.jsx` organiza a composição da interface, enquanto `App.css` e os demais arquivos de estilo definem a aparência visual.

As imagens do projeto estão armazenadas na pasta `public/imagens`.

## Como executar o projeto localmente

### Pré-requisitos

Ter o Node.js e o npm instalados no computador.

### Passo 1 — Obter o projeto

Baixe e extraia o arquivo ZIP do projeto ou clone o repositório, caso esteja publicado no GitHub.

### Passo 2 — Abrir no VS Code

Abra a pasta principal do projeto no Visual Studio Code.

### Passo 3 — Instalar as dependências

No terminal, execute:

```bash
npm install
```

### Passo 4 — Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

No Windows PowerShell, caso exista bloqueio de execução de scripts, utilize:

```bash
npm.cmd run dev
```

### Passo 5 — Acessar o site

Abra no navegador o endereço local informado pelo Vite, geralmente:

`http://localhost:5173/`

## Testes e validações

Os testes previstos para a revisão final incluem:

- Navegação entre as seções.
- Funcionamento dos botões e links.
- Filtragem dos pratos por categoria.
- Abertura e fechamento do modal.
- Navegação pelas imagens.
- Validação dos campos do formulário.
- Exibição da confirmação após o envio.
- Visualização em diferentes tamanhos de tela.
- Verificação de imagens, textos e eventuais erros no console.

## Acessibilidade e usabilidade

O projeto utiliza rótulos associados aos campos do formulário, elementos HTML semânticos e recursos de navegação adequados à interface.

A revisão final deve verificar também os textos alternativos das imagens, a navegação por teclado, os contrastes e o comportamento em dispositivos móveis.

## Considerações finais

O desenvolvimento do Atelier de Sabores permitiu aplicar conceitos de programação Front-End em um projeto prático, integrando estrutura, estilização, lógica de programação e componentização.

O uso de React possibilitou organizar a interface em componentes reutilizáveis e desenvolver funcionalidades interativas, como filtros, modal, menu responsivo e formulário controlado.

O projeto demonstra a construção de uma aplicação web voltada à experiência do usuário, com identidade visual consistente e organização de código.

---

**Projeto acadêmico — Curso de Programador Front-End**

**Desenvolvido por:** Taís Gomes Souza
