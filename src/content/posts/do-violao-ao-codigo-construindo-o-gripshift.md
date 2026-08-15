---
title: "Do violão ao código: Construindo o GripShift"
date: "2026-08-14"
imageUrl: "../thumbs/do-violao-ao-codigo.avif"
imageAlt: "Notebook e celular exibindo a tela do app GripShift."
imageAuthor: ""
---

## Motivação

Faz quase um ano que, inconformada com seu destino meramente decorativo, resolvi tirar o violão canhoto do suporte e aprender a tocar por conta própria. A história desse violão é bem comum. Foi comprado com a intenção de ser aprendido em algum momento, mas acabou guardado para sempre na case, em um canto escuro do quarto. Felizmente, pôde ver novamente a luz do dia no ano passado, ao transformarmos um dos quartos em escritório e decidirmos colocá-lo na parede.

Tê-lo à vista me inspirou, e mesmo sendo destra, foi inevitável tentar tocá-lo e começar a entender como ele funcionava. Uma vez que eu não sabia absolutamente nada sobre violão, nem mesmo tocando da forma convencional, o desafio de desenvolver memória muscular seria praticamente o mesmo. Da necessidade de praticar o violão e da minha curiosidade, enquanto profissional de tecnologia, de entender melhor como Spec-Driven Development se aplica no desenvolvimento web, nasceu o [GripShift](https://gripshift-app.vercel.app/).

## O Problema

Conforme eu buscava por conteúdos e cursos de violão no YouTube, menos direcionamento eu tinha. Até encontrar o canal [JustinGuitar](https://www.youtube.com/@JustinGuitar) e seu curso para iniciantes. Nele, o método de prática principal é simples: se habituar aos acordes, à posição dos dedos e à tocabilidade das cordas. Dessa forma, a partir de dois acordes, praticar trocas constantes durante um minuto, buscando cada vez mais acurácia e velocidade, com uma meta de, no mínimo, 30 trocas nesse período.

Confesso que não tive muita paciência para seguir o curso à risca. Eu queria pular etapas, tocar minhas músicas preferidas, mas a falta de destreza ainda era um incômodo. Ao mesmo tempo, eu não tinha nenhum elemento surpresa ao praticar um minuto de troca de acordes. Eu escolhia dois de que tinha vontade e que soavam bem juntos, mas acabava presa a sequências de Lás e Rés, Sols e Mis. Então, durante um curso de desenvolvimento assistido por IA, a ideia de um app surgiu. A proposta básica consiste em randomizar dois acordes para que sejam praticados em sessões de um minuto. Sem cadastro, sem login, sem distrações. Simples assim.

## Do Conceito ao Produto

### Construindo o MVP

Com o problema estabelecido, meu primeiro passo foi criar a documentação necessária ao agente que desenvolveria o projeto. Em `AGENTS.md` foram especificadas as decisões macro do projeto e do comportamento esperado do agente, como o que fazer, como fazer, onde buscar informações e que regras e restrições seguir. A primeira versão do `SPEC.md` ficou responsável por descrever o objetivo do projeto, cada feature detalhada tecnicamente com seu comportamento esperado, as especificações de layout e UI e estabelecer os limites e itens fora do escopo.

Utilizei o [OpenCode](https://opencode.ai/) como agente de desenvolvimento, com o modelo DeepSeek V4 Flash e conexão MCP com [Context7](https://context7.com/). O resultado foi satisfatório, mas precisou de ajustes. Alguns deles feitos manualmente, outros através de interação com o agente, buscando, sempre que necessário, atualizar a SPEC para que refletisse da forma correta o recurso.

<iframe src="https://mermaid.live/embed?theme=dark&look=handDrawn&mode=dark&controls=0&grid=0#pako:eNpVj9FqhDAQRX8lzFML-gM-FFy1pVCkdEuhbXwYdDRBTWyibEH99yauLjRvc-fcw2SGUlcEEdSdvpQCzche3rjhirkXf9cY1RgOpBjnKn7K8vczI3Z-zZKCheEDO-2El2zIcxhbK-1IlR8TFxeH7bQ1kr1hCU0pPPSBnaxwlFrd0GRD0_mK_kxk_drDOV3Nj_J3PejU08sn2YXF_7NcLyy7O24UVLa-m2pFxT0E0BhZgVt1lgLoyfToZ5g5jIJ64hBxqNC0HAIOndbtlghUVWrwojisTjKg-tK6h2g0k9MYPTXiJp0G9zNKJTYGd2T9A9qKeGI" width="100%" height="350" style="border:0" loading="lazy" title="Mermaid diagram" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>

### Glow Up

O app era tão simples e com tão poucos elementos que me incomodava a ideia de publicá-lo dessa forma, sem uma introdução. Isso fez com que eu encarasse aquele projeto em que eu só estava testando ferramentas e metodologias como um produto de verdade. Ele merecia uma identidade e uma landing page minimamente decente onde eu pudesse compartilhar sua razão de existir e, quem sabe, mais praticantes pudessem encontrá-lo.

Não sou profissional de design, mas lembro de alguma coisa ou outra sobre criação de logotipos, além de ter certa confiança no meu senso estético. Por vezes gosto de me perder no Figma, criando qualquer coisa que seja. Aproveitei a identidade do meu perfil de estudos no Instagram ([@stringsinreverse](https://instagram.com/stringsinreverse)) como base para as cores, busquei referências de logos no Pinterest e no Dribbble e cheguei ao resultado final.

![Processo de criação do logotipo para o projeto GripShift](/thumbs/do-violao-ao-codigo-2.avif)

Em paralelo, utilizei a ótima capacidade de criação de páginas HTML do Google Gemini para criar a primeira referência da landing page, onde eu buscava alcançar uma boa arquitetura da informação mais do que uma página coerente com a identidade que tinha criado. Com isso, pude atualizar a documentação do projeto, mantendo uma `SPEC-app.md` para o app e criando uma nova `SPEC-root.md` para a landing page e repetindo o processo de desenvolvimento assistido por IA.

## Lições Aprendidas

Criar um projeto que resolve um problema próprio é, com certeza, muito motivador. Eu venho utilizando o app com menos frequência do que gostaria, mas ele atende às minhas necessidades sempre, seja via celular ou tablet (raramente utilizo pelo computador). Depois do meu site pessoal, ele foi o primeiro projeto real que coloquei no mundo em muito tempo.

Construir MVPs de ponta a ponta pode ser divertido, mas expô-los ao público é assustador. Até a publicação desse post, não recebi nenhum feedback. O dashboard da Vercel aponta para 10 visitantes desde que fiz [essa postagem](https://www.linkedin.com/feed/update/urn:li:activity:7488729495227531264/) no meu LinkedIn. Não planejei nenhuma estratégia de divulgação, mas é possível que eu exercite mais essa habilidade nas próximas semanas.

Além de praticar violão, pude praticar minha criatividade, minhas habilidades enquanto desenvolvedora de software e aprender conceitos novos sobre a aplicação da IA para documentar e desenvolver produtos. Usar Spec-Driven Development, mesmo que da forma mais simples possível, me mostrou na prática um pouco do que vem sendo a realidade na área. Como estive mais distante da parte técnica da minha profissão por algum tempo, é como um novo começo. Mas as preocupações de agora são muito mais maduras, voltadas mais à resolução de problemas e menos à cobrança pessoal por conhecimentos técnicos muito específicos.
