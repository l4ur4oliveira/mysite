---
title: "Além do layout: Conhecendo autenticação de e-mails"
date: 2026-11-09
imageUrl: https://images.unsplash.com/photo-1595087012935-124877078142?w=1200
imageAlt: Caixas de correio lado a lado em um gramado
imageAuthor: Por Paula Hayes (https://unsplash.com/@phayes007)
---

Por mais de cinco anos, trabalhei criando HTMLs para e-mail marketing de grandes empresas do país que chegavam a dezenas de milhões de inboxes. Nesse período, aprendi sobre boas práticas de desenvolvimento desse artefato tão específico, além da importância de boas bases de dados e boas segmentações. Ouvi termos como reputação de IP, warm-up e ramp-up, mas confesso que sem me aprofundar muito nos mecanismos por trás de cada um deles. Recentemente tive contato novamente com esse tópico, especificamente com como ocorre a autenticação dos e-mails. Ao configurar SPF, DKIM e DMARC além do copia e cola, descobri um pouco mais sobre a importância dos domínios de envio e de como eles ajudam a estabelecer confiança na comunicação por e-mail.

De maneira simplificada, mensagens de e-mail trafegam por servidores na rede via protocolo SMTP. Os servidores *Outbound* abrem essa conexão com os servidores *Inbound* para fazer o envio dessas mensagens. Nos primórdios desse serviço, tudo funcionava na base da confiança e não havia nenhum tipo de autenticação ou validação do remetente do e-mail. O `Mail From`, parâmetro de cabeçalho do "envelope" da conexão, podia ser diferente do `From`, parâmetro do cabeçalho da mensagem. Ou ainda, era possível que qualquer um definisse de forma arbitrária seus parâmetros de remetente, se passando por domínios diferentes do seu.

## SPF
***Sender Policy Framework***

Dado este cenário, o SPF foi criado com a responsabilidade de validar o cabeçalho do "envelope", através do domínio de `Mail From`, e o IP de origem do transporte SMTP. Com isso, tornou-se possível listar os IPs pertencentes a um domínio usando a infraestrutura do *DNS*, onde apenas o administrador do domínio poderia ser capaz de definir esse parâmetro em uma entrada do tipo `TXT`. Ao receber o e-mail, o servidor *Inbound* agora era capaz de cruzar a informação do IP de origem (trafegado via TCP/IP) com os IPs definidos nessa entrada `TXT` do domínio indicado no `Mail From`. Diálogo hipotético entre servidores:

> "Se você (inbound) receber um e-mail dizendo que veio de *@meudominio.com*, só aceite como *legítimo* se ele foi enviado por esses *IPs* que estou listando pra você, pois eles são *meus IPs*. Se o IP não for encontrado nessa lista, foi outra pessoa tentando enviar um e-mail de *outro servidor tentando se passar por mim*."

Sintaxe de definição do SPF:

```shell
# TXT v=spf1 qualificadores:mecanismos

TXT v=spf1 ip4:191.253.10.2

# ou

TXT v=spf1 include:meudominiodeemail.com

# com mecanismo de fallback 'all'
# qualif. default '+': sempre sucesso para todos os IPs
# qualif. '-': hard fail
# qualif. '~': soft fail

TXT v=spf1 include:meudominiodeemail.com ~all
```

## DKIM
***DomainKeys Identified Mail***

O uso do SPF sozinho não foi suficiente para evitar que mensagens fossem adulteradas de outra forma por pessoas mal intencionadas. Como a comunicação entre servidores possui diversos saltos em sua trajetória, era possível comprometer um servidor intermediário e alterar o conteúdo da mensagem inserindo links maliciosos, sem comprometer a validação de IPs que eram determinados no servidor de origem. O DKIM foi criado para ser responsável por validar essas alterações no conteúdo da mensagem através de assinatura criptográfica, permitindo que o servidor *Inbound* pudesse validar que a mensagem estava íntegra desde sua origem.

O método funciona através da geração de hashes criadas a partir do conteúdo do e-mail. Não só isso, o processo também se utiliza de um par de chaves pública e privada para garantir a conformidade da mensagem. O servidor *Outbound* é responsável por assinar a mensagem com a chave privada, enquanto o servidor *Inbound* utiliza a chave pública para validar a conformidade dessa assinatura. Essa chave pública, assim como o SPF, é definida em uma entrada `TXT` no domínio para que essa consulta externa seja viável. Em situações de interceptação maliciosa de mensagem, alterar o conteúdo do e-mail implica na necessidade de gerar uma nova hash e fazer uma nova assinatura, a qual acabará por não corresponder à chave pública na validação final.

A assinatura do DKIM fica em um cabeçalho chamado `DKIM-Signature` com a seguinte estrutura:

```shell
From: Apple <pwd@apple.com>
Subject: Redefine password
DKIM-Signature:
	# domain, especifica o domínio que está assinando
	# selector, especifica o seletor pois pode haver mais de um
	# headers, especifica quais cabeçalhos farão parte da assinatura
	# bodyHash, especifica o hash do e-mail
	# assinatura criptográfica do DKIM com a chave privada
	d=apple.com s=publickey1 h=from:subject:to:date bh=92eb5ffee6de b=AAxB12tvMM4
```

Sintaxe de definição da chave pública do DKIM:

```shell
# 'p' especifica a chave pública

TXT "v=DKIM1; p=MIADKL23jknaujdbuAKdqj123mlo123o..."
```

A consulta do servidor *Inbound* segue o padrão:

```shell
# selector._domainkey.domain TXT
# 'selector' e 'domain' de DKIM-Signature

publickey1._domainkey.apple.com TXT "v=DKIM1; p=MIADKL23jknaujdbuAKdqj123mlo123o..."
```

## DMARC
***Domain-based Message Authentication, Reporting and Conformance***

Uma nova validação se fez necessária, uma vez que as duas anteriores não validam o `From` da mensagem. Na prática, um indivíduo mal intencionado poderia controlar um servidor próprio, fazendo com que SPF e DKIM fossem atendidos, mas manipular o cabeçalho `From` da mensagem informando outro endereço de domínio e nome de remetente, tentando se passar por outra pessoa. Sendo essa uma informação visível ao usuário final, ainda seria possível induzir usuários desatentos a clicar e abrir links maliciosos. O DMARC faz as validações de conformidade do cabeçalho `From` da mensagem tanto com o `Mail From` do "envelope" quanto com o domínio `d (domain)` presente na assinatura DKIM. Para que a regra passe, é necessário que pelo menos uma das condições seja atendida:

 > O teste do SPF passou e o domínio SPF está alinhado com o `From`, ou
 > O teste do DKIM passou e o domínio em `d` está alinhado com o `From`

Sintaxe de definição do DMARC:

```shell
# 'p' especifica a política de filtro das mensagens no servidor Inbound
#  ↳ reject || quarantine || none
# 'pct' especifica a porcentagem de e-mails falhos que serão impactados por 'p'
# 'rua' (Reporting URI for Aggregate reports) especifica o endereço para onde serão enviados os relatórios do DMARC
# 'aspf' (Alignment SPF) especifica o critério de alinhamento com o domínio SPF
#  ↳ r (relaxed) || s (strict)

_dmarc.dominio.com TXT "v=DMARC1; p=reject; pct=100; rua=mailto:something@dmarc.postmarkapp.com; aspf=r;"
```

### RFCs

- [821 - SMTP](https://www.rfc-editor.org/info/rfc821/)
- [822 - Messages Format](https://www.rfc-editor.org/info/rfc822/)
- [7208 - SPF](https://www.rfc-editor.org/info/rfc7208/)
- [6376 - DKIM](https://www.rfc-editor.org/info/rfc6376)
- [7489 - DMARC](https://www.rfc-editor.org/info/rfc7489)
