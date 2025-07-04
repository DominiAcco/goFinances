#  goFinances— Controle de Gastos Pessoais

Este é um aplicativo mobile para controle financeiro pessoal, desenvolvido com **React Native**, **TypeScript** e **Styled Components**. O app permite **cadastrar, listar e visualizar graficamente** as transações financeiras, separando-as por entradas (receitas) e saídas (despesas).

## Funcionalidades

###  Cadastro de Transações
- Insira **título**, **valor**, **categoria**, **data** e defina se é uma **entrada** ou **saída**.
- Formulário validado com campos reutilizáveis.
- Armazenamento local ou por API (mockável).

###  Listagem de Transações
- Transações são exibidas em uma lista organizada por data.
- Mostra o tipo (entrada/saída) com ícones e cores diferenciadas.
- Valores formatados como moeda brasileira.

###  Tela de Resumo com Gráfico (VictoryPie)
- Gráfico de **pizza completo**, exibindo a **porcentagem de cada categoria**.
- Botões para alternar entre **Entradas** e **Saídas**.
- Navegação por **mês/ano** para visualizar dados passados.
- Lista abaixo do gráfico com valor total de cada categoria.

###  Filtros e Navegação
- Botões de **mês anterior/próximo** com bloqueio ao tentar avançar para o mês atual ou futuro.
- **Filtro por tipo** (entrada ou saída) na tela de resumo.



Para executar o projeto 
clone o repositorio
````bash
git clone https://github.com/DominiAcco/goFinances
git checkout form //branch onde esta o codigo final
npm i //para instalar as dependências

````
## Mudança  para conectar com a api 
Na pasta services no arquivo api.ts adicione o ip do seu computador 
|--sevices
    |-api.ts
const API_BASE_URL = "http://ip do seu computador :3000/api/v1";
