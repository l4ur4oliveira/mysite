---
title: "Não fale a palavra com R: Liderando uma refatoração"
date: "2026-07-22"
imageUrl: "https://images.unsplash.com/photo-1586173806725-797f4d632f5d?w=1200"
imageAlt: "Imagem de um cubo mágico flutuando em um fundo escuro."
imageAuthor: "Aaron Boris (https://unsplash.com/@aaron_boris)"
---

Enquanto coordenadora de desenvolvimento de software, meu papel era guiar a equipe na tomada de decisões diárias e fazer a ponte entre suas habilidades e as necessidades da empresa. Mantínhamos um produto criado havia pouco mais de 3 anos que ainda carregava muito de um MVP por baixo dos panos, mesmo já tendo ganhado grande escala entre os clientes. O desafio e a oportunidade de refazer dois terços do produto vieram de um _backlog_ pouco convincente e de necessidades mais complexas dos clientes, que exigiam uma estrutura mais robusta e fácil de manter.

## Motivação e estratégia

Um time que faz a mesma coisa por muito tempo, utilizando as mesmas ferramentas e tecnologias, vai demonstrando certo cansaço. Os desafios ainda existem para quem está iniciando, mas sêniores e tech leads acabam soterrados em reuniões, code reviews e mais do mesmo, e a lista de débitos técnicos dificilmente será prioridade em termos de negócio. Além disso, o momento interno não era dos melhores e a palavra "refatoração" gerava grande estresse pelo histórico de atrasos e mudanças de rumo de épocas passadas.

A estratégia foi dar um tom mais vendável, por assim dizer, à iniciativa para que o produto tivesse uma vida longa e pudesse estar pronto para novas funcionalidades. Chamamos de "produto 2.0", pois passaria por uma "atualização de tecnologia" importante (não usávamos a palavra refatoração, de verdade!). Não só modernizaríamos a interface do produto, mas também aproximaríamos sua tecnologia dos demais produtos da empresa, permitindo que fosse mais acessível a outras equipes de desenvolvimento e, eventualmente, facilitando trocas de desenvolvedores entre produtos.

O time inicial era formado por seis desenvolvedores e, para manter as partes interessadas sob controle, faríamos uma subdivisão do time para continuar mantendo a versão atual enquanto iniciávamos a nova, nos primeiros 6 meses. Dessa forma, ainda conseguiríamos fazer as últimas _features_ importantes do _backlog_ e manter a entrega de valor proposta. 

## Estimativas

Por si só, a palavra **"prazo"** carrega uma carga de incertezas, principalmente em projetos grandes, em que é difícil trabalhar de forma incremental. Tínhamos um novo produto em construção e podíamos dividi-lo em fases, mas havia barreiras consideráveis de infraestrutura que não nos permitiam fazer entregas e publicações periódicas. 

Nesse momento, o cone da incerteza fez muito sentido para mim, na prática. A pergunta **"Quanto tempo isso vai levar?"** não precisava ser feita para sabermos que precisávamos de um horizonte para concluir o que queríamos fazer. E mesmo assim, sabíamos que esse horizonte não seria cumprido porque, afinal, era apenas uma estimativa de um plano que considerava o caminho feliz no cenário que se apresentava no momento.

<img src="https://metodoagil.com/wp-content/uploads/2017/05/planning_poker_cone_da_incerteza.jpg" alt="Gráfico com o cone da incerteza" />

Na ausência de um gerente de projetos na _squad_, o trabalho foi feito por mim e pelo tech lead, que se dividiria entre o desenvolvimento das duas versões. Organizamos as fases de execução, atribuímos os desenvolvedores conforme a senioridade e a expectativa de aprendizado, consideramos o tempo de testes da equipe de QA e criamos uma linha do tempo que apontava para um esforço de 9 meses.

No fim, levamos 18.

## Comunicação transparente

Antes de tirar conclusões sobre o projeto ter sido um fracasso, já que tínhamos dobrado o prazo estimado, preciso pontuar que tudo foi comunicado com o maior cuidado e atenção possíveis. As informações sobre o andamento do projeto eram mostradas periodicamente em reuniões corporativas e, quando possível, mostrávamos pequenos _spoilers_ do novo produto. Após os 6 meses mantendo a primeira versão, passamos a dedicar a equipe inteira à nova até sua conclusão, com algumas interrupções de suporte e pedidos urgentes que geravam algum retrabalho, mas que precisavam ser atendidos para manter a paz.

O _freezing_ da primeira versão do produto após os 6 meses propostos também nos trouxe mais consciência sobre a quantidade de trabalho que ainda tínhamos pela frente. Isso nos permitiu comunicar uma nova estimativa, muito mais próxima da realidade que foi entregue. Pudemos reorganizar o time, que, com o tempo, reduziu para quatro desenvolvedores, além de chegar a conclusão de que os testes não aconteceriam como planejado e não teríamos alguém de QA disponível para cada entrega realizada, nos obrigando a criar pacotes maiores e ter um processo final de testes mais extenso.

## Takeaways

Relembrando agora toda a jornada, percebo oportunidades de melhoria que poderiam ter sido aplicadas para ter uma estimativa mais próxima ou até mesmo reduzir o prazo final. Dedicamos pouco tempo para a análise inicial da nova biblioteca a ser utilizada e isso trouxe surpresas ao longo da implementação, fazendo com que o tech lead precisasse refazer do zero funcionalidades que a biblioteca antiga possuía, mas a nova não tinha.

Outros dois fatores importantes de impacto na estimativa foram os períodos de férias e a redução do time. Desconheço uma métrica (ou índice) que poderia ter antecipado essa informação, pois há diferenças entre a saída de um desenvolvedor júnior e um sênior, por exemplo. O maior gargalo do projeto certamente foi o tech lead, por conduzir ambas as versões e ser responsável pela arquitetura, pelas _features_ complexas e por liderar o restante da equipe.

Apesar das oportunidades de melhoria, tenho orgulho do trabalho que foi feito e do produto que foi entregue. Ele apresentou ótima estabilidade e não houve grandes ocorrências durante todo o processo de migração. O novo produto abriu espaço para uma nova infraestrutura mais escalável e segura. Ganhamos desempenho, ainda que pequeno, facilitamos a manutenção e a criação de novas funcionalidades e, claro, observamos o crescimento técnico de todo o time no processo. A longo prazo, o tempo extra demandado por uma refatoração mais cautelosa certamente será compensado com o ganho de velocidade das novas implementações.
