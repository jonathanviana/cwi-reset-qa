# Quality Assurance: plano de testes e gestão de bugs

## O que é "Quality Assurance"?

O conceito de Quality Assurance (QA), que pode ser traduzido como “Garantia de Qualidade”, faz referência a um profissional ou uma equipe cuja função é garantir a qualidade no desenvolvimento de um produto ou serviço. Sua atuação envolve a checagem do cumprimento de certos critérios e métodos ao longo dos processos operacionais.

O objetivo da sua implantação é identificar desvios que possam comprometer a qualidade final do serviço. Ao mesmo tempo, o QA tem a capacidade de levantar oportunidades, seja uma melhoria direta no serviço, seja um aperfeiçoamento dos processos.

Com isso, o Quality Assurance assume um importante papel de acompanhar e assegurar o cumprimento de etapas, assim como sua execução.

## Plano de teste:

Um plano de teste define a comunica a intenção do teste realizado.

### Quais as etapas de uma plano de teste?

1 - Introdução:

Descrevemos o propósito da aplicação.

2 - Arquitetura:

Descrevemos as técnologias utilizadas para o desenvolvimento da aplicação.

3 - Funcionalidades:

Descrevemos as funcionalidades da aplicação, além do comportamento esperado, as verificações necessárias e critérios de aceite.

4 - Estratégia:

Definimos o escopo de cada teste e sua abrangência, além da apresentação das ferramentas e descrição do ambiente criado para realização dos testes.

Exemplos de testes:

- Testes Unitários;
- Testes de Integração;
- Testes Automatizados;
- Testes Manuais;

Exemplos de ferramentas:

- POSTMAN;
- Jasmine;
- Selenium;

5 - Classificação de Bugs:

Descrevemos o nível de severidade dos Bugs identificados, classificando com I.D e Nível, além de sua descrição.

6 - Conclusão:

Descrevemos os resultados.

## Fluxo de teste:

Exemplo de um fluxo de teste envolvendo uma tela de login:

![https://caelum-online-public.s3.amazonaws.com/1319-fundamentos-qa/1319-img0102.png](https://caelum-online-public.s3.amazonaws.com/1319-fundamentos-qa/1319-img0102.png)

### Caso de Teste:

É uma maneira de estruturar a abstração e documentar o teste desenvolvido. Abaixo exemplo de uma estrutura:

- Titulo;

Indica o titulo;

- Pré condições:

Indica o estado do sistema para realização do teste;

- Procedimento:

Indica os passos necessarios para chegar ao resultado esperado;

- Resultado esperado:

Indica o resultado esperado;

- Dados de entrada:

Indica os dados necessarios para executar uma ação do sistema, exemplo: usuario e senha de uma tela de login.

- Criterios especiais:

Se houver, indica criterios especiais, exemplo: um usuario expecifico.

- Ambiente:

Indica onde deve ser executado o caso de teste.

-Implementação:

Indica se o teste é automatizado ou manual.

- Iteração:

Número de iteração, exemplo: número de vez que o teste será ou foi realizado.

## BDD - Desenvolvimento Guiado por Comportamento (Behavor Driven Development):

BDD é um processo projetado para auxiliar a gestão e a entrega de projetos de desenvolvimento de software, melhorando a comunicação entre engenheiros e profissionais de negócios. Ao fazer isso, o BDD garante que todos os projetos de desenvolvimento permaneçam focados na entrega do que o negócio realmente precisa, atendendo a todas as exigências do usuário.

No BDD você passa por três fases para cada história que deseja implementar.

As três fases são:

## Descoberta:

Aqui é onde você explora uma história em uma conversa estruturada. Ela tem dois objetivos. Um é garantir que a história contribua para os resultados comerciais. Por exemplo, com o método dos Cinco Porquês. O outro objetivo é assegurar a compreensão compartilhada do que é necessário, delineando exemplos concretos de cenários específicos.

## Formulação:

É aqui que você reformula (formula) os exemplos em uma linguagem estruturada e os transforma em especificações executáveis.
Estes seguem o padrão dado-quando-então:

- Cenário (determinado) — o estado inicial, por exemplo, “o usuário está logado”;

- Evento (quando) — o que acontece, por exemplo “o usuário pressiona o botão de logout”;

- Resultado (então) — a resposta esperada, por exemplo, “a página de login é mostrada”;

## Automação:

Aqui é onde você transforma as especificações executáveis em testes de aceitação automatizados. Usando ferramentas como o Cucumber, é uma questão de conectar a ferramenta ao software.

- Software operacional: Os testes de aceitação guiam seu trabalho de implementação do software.

## Resumo até aqui:

- Testes funcionais, são os testes definidos de acordo com os requisitos funcionais do software;

- Podemos pensar nos nossos testes construindo fluxos de testes ou tabelas de decisão conforme as regras de negócio do nosso projeto;

- Conceitos de Cenários de testes definem “O que” deve ser testado, enquanto os Casos de Testes definem “Como”, ou seja, o passo a passo. O caso de teste é mais detalhado;
  Como escrever Casos de testes utilizando BDD, sigla para Behavior driven development (desenvolvimento guiado por comportamento ou desenvolvimento orientado a comportamento, numa tradução livre) com intuito de escrever testes guiados pelo comportamento do usuário e pelos negócios. Para tal, usamos a semântica Dado, Quando e Então;

- Um Plano de teste define e comunica a intenção e esforço do teste. Serve, por exemplo, para ganhar a aceitação e aprovação dos envolvidos, comunicar e justificar prazo de teste planejado.

## Técnicas para testes:

- Mind Map;
- Pareto;
- Cauda Longa;
- Testes Combinatoriais "Pairwise" (combinação por pares);

## Gráficos de pareto para testes:

O princípio de Pareto afirma que, para muitos eventos, aproximadamente 80% dos efeitos vêm de 20% das causas.

O consultor de negócios Joseph Moses Juran sugeriu o princípio e o nomeou em homenagem ao economista italiano Vilfredo Pareto, que notou a conexão 80/20 em sua passagem pela Universidade de Lausanne em 1892, como publicado em seu primeiro artigo "Cours d'économie politique". Essencialmente, Pareto mostrou que aproximadamente 80% da terra na Itália pertencia a 20% da população. Pareto desenvolveu o princípio ao observar que, em seu jardim, 20% das vagens continham 80% das ervilhas.

Abaixo alguns dados que podemos considerar para criar um parteto de testes, são eles:

1 - Reclamações por Módulos:

Podemos consultar as informações com a equipe de Suporte e Vendas;

2 - Módulos mais Usados:

Podemos consultar com o time de Marketing (métricas, uma boa ferramenta é o Google Analytics);

3 - Análise de Risco:

Onde podemos identificar o que tem mais chance de falhar e o que tem mais prejuizo se falhar;

4 - Falhas por Módulo:

Podemos consultar as informações com a equipe de Suporte e Operação;

5 - Defeitos por Módulos:

Onde podemos construir um método prório para resgatar a informação;

Abaixo um exemplo de gráfico de Pareto:

![https://i0.wp.com/gestaodesegurancaprivada.com.br/wp-content/uploads/grafico-paretos.jpg?resize=700%2C324](https://i0.wp.com/gestaodesegurancaprivada.com.br/wp-content/uploads/grafico-paretos.jpg?resize=700%2C324)

Além do grafico de pareto, tambem temos o "Long Tail", que trata-se de uma forma de visulizar os dados de menores volumes, abaixo imagem:

![https://images.squarespace-cdn.com/content/v1/59dbeeaff6576e8869f3fbbc/1546871596714-TYXSRK7ZGH8SP4PH8XJT/tail2.png?format=1000w](https://images.squarespace-cdn.com/content/v1/59dbeeaff6576e8869f3fbbc/1546871596714-TYXSRK7ZGH8SP4PH8XJT/tail2.png?format=1000w)

## Pairwise:

Site: pairwise.org

Ferramenta para exercicio: Pairwise Pict Online (https://pairwise.yuuniworks.com/)

Ferramenta popular: AllPairs (https://www.satisfice.com/resources)

Pairwise nada mais que um teste de combinações, importante reforçar que é uma técnica secundária, sendo o Pareto mais importante.

Exemplo de teste com Pair-Wise Pict Online:

```

#############################################################
#" Paste test factors here.
#" Check the documents for more details.
#" #"https://github.com/Microsoft/pict/blob/master/doc/pict.md
#############################################################
#"
#Type: Single, Span, Stripe, Mirror, RAID-5
#Size: 10, 100, 500, 1000, 5000, 10000, 40000
#Format method: Quick, Slow
#File system: FAT, FAT32, NTFS
#Compression: On, Off
#"
#if [Type] = "RAID-5" then [Compression] = "Off";
#if [Size] >= 500 then [Format method] = "Quick";

#Combinacoes para testar o quiosque do McDonalds

Produtos: casquinha, mccolosso, sundae, mcshake, mcflurry
Sabores: baunilha, chocolate, misto
Caldas: chocolate, morango, caramelo, nenhuma
Confeitos: m&ms, pacoca, ovomaltine, bis, nenhuma

```

## Conceito de Planejamento de Testes:

### Quadrante de Teste:

![https://miro.medium.com/max/1400/1*zcQMfBlE2iIHMS3nREHV3A.png](https://miro.medium.com/max/1400/1*zcQMfBlE2iIHMS3nREHV3A.png)

### Pirâmide de Teste:

![https://res.cloudinary.com/practicaldev/image/fetch/s--dcM0135C--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ealtg2m79jiaur0ryb3v.png](https://res.cloudinary.com/practicaldev/image/fetch/s--dcM0135C--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ealtg2m79jiaur0ryb3v.png)

# Exercício:

Cite 2 exemplo de técnicas de planejamento de testes:

- Pareto;
- Parwise;

Resposta CWI:

Dois exemplos são o uso de um Mapa Mental ou Princípio de Pareto.

## Artefatos para Modelagem de Testes:

- Caso de Testes;
- Mapa Mental;
- BDD;
- Comentários;
- Checklist;
- Tabela;
- Ficha de Teste Exploratório;
- Diagrama;

## Técnicas de Teste:

Toda técnica de teste responde duas perguntas, são elas:

- Quantos testes possui dentro do contexto proposto?
- Quais são estes testes?

Podemos separar as técnicas em três categorias, são elas:

### Baseadas em Comportamento:

- Caixa Preta;

### Baseadas em Estrutura:

- Caixa Branca (cobre 25% dos Bugs!);

### Baseadas na Experiência:

Aplicando testes de experiência junto com teste de caixa preta é possivel cobrir 75% dos Bugs!

Exemplos de teste baseados em experiências:

### Teste Exploratório;

### Suposição de Erros;

### Ataques:

- Segurança;
- Performance;

### Taxonômia:

- Cassificação de Defeitos;
- ISO25010 (Caracteristicas de Qualidade);
- Checklists;

# Exercício:

Cite 3 exemplos de artefatos/documentos possíveis para a modelagem de testes:

- Mind Map;
- Caso de Testes;
- BDD - Desenvolvimento Guiado por Comportamento (Behavor Driven Development);

Resposta CWI:

Alguns exemplos de artefatos possíveis de serem gerados são:

- User Story;
- Caso de teste;
- Mapa mental;
- Checklist;
- Comentários;
- Diagramas;
- Cenários de teste escritos em Gherkin (Sintaxe usada em uma técnica chamada BDD - Behavior Driven Development);

## Técnicas de Teste de Caixa-Preta:

### Análise de Valor Limite:

Utilizada para partições ordenadas, consistindo em dados numéricos ou sequenciais.

Os valores mínimo e máximo de uma partição são seus valores limites.

Abaixo um exemplo de Estudo de Caso (Cenário):

```
Como sacar beneficio do INSS?

Como dito a principio o pagamento do beneficio do INSS é feito a partir de uma conta de beneficio. A partir do recebimento do cartão magnético da Previdência Social e do cadastro da senha, é possível sacar o benefício do INSS de diferentes formas.

Uma delas, é o saque em agência do banco. Dessa forma, o segurado faz uso do seu cartão e pode pegar o dinheiro em qualquer agência de seu banco, não apenas no local indicado em sua carta de concessão. No caso da Caixa Econômica Federal, o limite de saque nas agências é igual ao valor total do benefício.

Outra opção, é sacar em um caixa eletrônico. Desse modo, basta usar o cartão magnético e idicar a senha cadastrada. No caso da Caixa, o limite de saque nos terminais de autoatendimento é de R$ 3.500,00.

Ademais, o saque em lotérica é mais uma possibilidade. Nessa situação, o aposentado ou pensionista deve apresentar o seu cartão magnético ao funcionário que está lhe atendendo.

```

Abaixo exemplo de Particionamento de Equivalência de acordo com o cenário acima:

#### Considere a modalidade "SAQUE INSS NA AGENCIA DO BANCO":

CENÁRIO 1 (partição 1): Saque com valor menor ou igual ao valor total do beneficio;

CENÁRIO 2 (partição 2): Saque com o valor maior que valor total do beneficio;

Podemos considerar que as partições acima são odernadas, com base no valor, neste caso o real. Levando isto em conta, segue exemplo abaixo:

CENÁRIO 1 (partição 1): Saque com valor MENOR que o valor total do beneficio (imediatamente abaixo);

CENÁRIO 2 (partição 2): Saque com valor IGUAL ao valor total do beneficio (igual);

CENÁRIO 3 (partição 3): Saque com valor MAIOR que o valor total do beneficio (imeditamente acima);

#### Considere a modalidade "SAQUE INSS NO CAIXA ELETRONICO":

CENÁRIO 1 (partição 1): Saque com valor menor ou igual a R$ 3.500,00;

CENÁRIO 2 (partição 2): Saque com o valor maior que R$ 3.500,00;

Podemos considerar que as partições acima são odernadas, com base no valor, neste caso o real. Levando isto em conta, segue exemplo abaixo:

CENÁRIO 1 (partição 1): Saque com valor IGUAL a R$ 3.490,00 (imediatamente abaixo);

CENÁRIO 2 (partição 2): Saque com valor IGUAL a R$ 3.500,00 (igual);

CENÁRIO 3 (partição 3): Saque com valor IGUAL a R$ 3.510,00 (imeditamente acima);

### Tabela de Decisão:

Auxilia no registro e combinação de regras complexas que um sistema deve implementar.

A Tabela é formada pois linhas, que possui as combinações entre as condições e as ações resultantes.

abaixo exemplo:

![../alura-logica-de-programacao-i/img/qa-tabela-de-decisao.jpg](../alura-logica-de-programacao-i/img/qa-tabela-de-decisao.jpg)

### Pairwise:

Como testar um software sem ter que utilizar 100% das possibilidades de variações existentes?

Técnica para determinar os casos de testes mais representativos ao sistema.

fontes:

- ISTQB - Certified Tester Syllabus - Foundation Level;
- TMap NEXT - For Result - Driven Testing;
- QArentena 12 - Técnicas de Caixa Preta (Youtube);

# Exercício:

Cite 2 técnicas de teste de caixa preta:

- Análise de valor limite;
- Tabela de decisão;

O que você entende por testes de caixa preta e testes de caixa branca?

- teste de caixa preta:

  São técnicas basedas em comportamento.

  Exemplos:

- teste de caixa branca: São técnicas baseadas em extruturas.

  Exemplos:

Respostas CWI:

Seguem algumas técnicas possívels de serem utilizadas:

- Partição de equivalência
- Valor limite
- Tabela de decisão
- Diagrama de estado

- Testes de Caixa preta são um tipo de teste baseado em comportamento da aplicação, enquanto Testes de Caixa branca são um tipo de teste baseado na estrutura da aplicação, onde temos acesso ao código, por exemplo.

## O que é uma API?

Interface de Programação de Aplicação, cuja sigla API provém do Inglês Application Programming Interface, é um conjunto de rotinas e padrões estabelecidos por um software para a utilização das suas funcionalidades por aplicativos que não pretendem envolver-se em detalhes da implementação do software, mas apenas usar seus serviços.

## O que significa REST e RESTful ?

Representational State Transfer (REST), em português Transferência Representacional de Estado, é um estilo de arquitetura de software que define um conjunto de restrições a serem usadas para a criação de web services (serviços Web). Os Web services que estão em conformidade com o estilo arquitetural REST, denominados Web services RESTful, fornecem interoperabilidade entre sistemas de computadores na Internet. Os Web services RESTful permitem que os sistemas solicitantes acessem e manipulem representações textuais de recursos da Web usando um conjunto uniforme e predefinido de operações sem estado. Outros tipos de Web services, como Web services SOAP, expõem seus próprios conjuntos de operações arbitrários.

# Exemplo de cenário passo a passo:

## Acessar o sistema com um usuário válido

Ação: Acessar a aplicação;

Resultado: Devo ser direcionado para a tela de login;

Ação: Preencher o campo de email com um email válido;

Resultado: Não deve ocorrer erro;

Ação: Clicar no botão que “Proxima”;

Resultado: Devo ser direcionado para a tela de senha;

Ação: Preencher o campo de senha com um valor válido;

Resultado: Não deve ocorrer erro;

Ação: Clicar no botão que “Proxima”;

Resultado: Devo ser direcionado para a aplicação;

## Exemplo de cenário utilizando Gherkin:

### Cenário: Acessar o sistema com um usuário válido

### Dado: que acessei a aplicação

### E: fui direcionado para o login

### Quando: preencho meus dados de acesso corretamente

### Então: sou redirecionado para a aplicação

