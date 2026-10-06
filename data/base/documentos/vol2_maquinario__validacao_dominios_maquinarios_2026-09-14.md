---
titulo: "Validação de domínios das marcas de maquinário"
origem: "config/VALIDACAO_DOMINIOS_MAQUINARIOS_2026-09-14.md"
data: "2026-09-14"
versao: "v1"
sha256_original: "36fae0dfeebed0e74ec18cf86f08e30be3098db6f82679a82da2f2bf078b3688"
tipo: "protocolo"
---
# Validação de domínios das oito marcas de maquinário

Fase 0 do Estudo 2, 14/09/2026, tarde (BRT). Regra de método: consultar variações, subpasta e redirecionamento final antes de fixar o alvo (armadilha 4, domínio morto da UPL). Fontes: redirecionamentos por acesso direto com user agent de navegador (rotina reprodutível do estudo, bruto em (registro interno do estudo)); escopo orgânico pela base de dados de busca, base BR, relatórios por domínio e por subpasta (rotina reprodutível do estudo, manifesto com SHA-256 na mesma pasta); subdomínios pela base de dados de busca. Tráfego orgânico é estimativa da base de dados de busca, nunca tráfego real.

## 1. Redirecionamentos e variantes

| Marca | Variante testada | Resultado |
|---|---|---|
| John Deere | deere.com.br, johndeere.com.br | certificado TLS inválido no host sem www; com verificação desligada, ambos redirecionam para www.deere.com.br/pt/ (johndeere.com.br é encurtador da própria Deere, com parâmetro de campanha) |
| John Deere | deere.com/pt-br/ | 404 |
| John Deere | deere.com.br/pt/agricultura/ | 404; não existe subpasta agro única, as linhas agrícolas ficam em subpastas irmãs de construção e florestal |
| Case IH | caseih.com.br | HTTP 200 com redirecionamento por JavaScript e meta refresh para caseih.com/latam/pt-br/, que redireciona (2 saltos) para caseih.com/pt-br/brasil/ |
| Case IH | caseih.com/brasil | cai na página de seleção de país (caseih.com/splash) |
| New Holland | agriculture.newholland.com/lar/pt-br | redireciona (1 salto) para agriculture.newholland.com/pt-br/brasil |
| New Holland | newholland.com.br | só responde por http, com título "New Holland Brasil"; em https retorna 404 e o certificado não bate. É domínio próprio, separado do site global |
| Massey Ferguson | masseyferguson.com.br | redireciona (1 salto) para masseyferguson.com/pt_br.html |
| Valtra | valtra.com.br, valtra.com/br | domínio próprio responde; a subpasta global retorna 404 |
| Fendt | fendt.com.br | certificado inválido; com verificação desligada redireciona (3 saltos) para o seletor de país fendt.com/choose_country, não para fendt.com/br/ |
| Jacto | jacto.com.br | redireciona (1 salto) para jacto.com (raiz global, não para /brasil) |
| Stara | stara.com.br | redireciona (2 saltos) para www.stara.com.br |

## 2. Escopo orgânico dos alvos (base de dados de busca, base BR)

| Marca | Alvo | Tipo | Palavras-chave | Tráfego estimado/mês | Leitura |
|---|---|---:|---:|---:|---|
| John Deere | deere.com.br | domínio | 9.555 | 185.004 | maior escopo do painel; inclui construção e florestal |
| John Deere | campus.deere.com.br | subdomínio | 310 | 3.164 | plataforma de cursos, dentro do domínio |
| Case IH | caseih.com | domínio global | 2.258 | 25.538 | inclui outros países |
| Case IH | caseih.com/pt-br/brasil/ | subpasta | 1.525 | 24.558 | alvo Brasil: 96% do tráfego BR do domínio global |
| Case IH | caseih.com/latam/pt-br/ | subpasta | 1 | 18 | só redirecionamento |
| Case IH | caseih.com.br (raiz) | domínio | 1.885 | 9.552 | domínio próprio; blog.caseih.com.br responde por 109 palavras e 111 visitas, www por 65; o restante fica no host raiz de redirecionamento e será checado no crawl |
| New Holland | agriculture.newholland.com | subdomínio global | 2.968 | 23.977 | |
| New Holland | agriculture.newholland.com/pt-br/brasil/ | subpasta | 2.290 | 22.339 | alvo Brasil: 93% do tráfego BR do subdomínio |
| New Holland | newholland.com.br | domínio próprio | 588 | 23.828 | tráfego equivalente ao da subpasta global com um quinto das palavras: marca com dois alvos |
| Massey Ferguson | masseyferguson.com | domínio global | 1.680 | 17.792 | |
| Massey Ferguson | masseyferguson.com/pt_br/ | subpasta | 815 | 5.647 | alvo Brasil: só 32% do tráfego BR do domínio; o restante do tráfego BR cai em páginas globais (a conferir no Bloco A) |
| Valtra | valtra.com.br | domínio próprio | 1.497 | 19.828 | |
| Fendt | fendt.com | domínio global | 633 | 6.448 | |
| Fendt | fendt.com/br/ | subpasta | 357 | 6.112 | alvo Brasil: 95% do tráfego BR |
| Fendt | fendtsustentabilidade.com.br | microsite | 2 | 0 | sem visibilidade orgânica |
| Jacto | jacto.com | domínio global | 3.553 | 31.478 | |
| Jacto | jacto.com/brasil/ | subpasta | 2.819 | 21.021 | alvo Brasil: 67% do tráfego BR |
| Jacto | blog.jacto.com.br | subdomínio próprio | 3.496 | 12.132 | blog com mais palavras-chave que o site; obrigatório no escopo |
| Stara | stara.com.br | domínio próprio | 2.224 | 17.768 | inclui subdomínios de concessionárias, a excluir no crawl; portaldooperador tem 43 palavras |

## 3. Escopo agro da John Deere (domínio misto)

Amostra das 3.000 páginas de maior tráfego orgânico de deere.com.br (base BR), agrupadas pela primeira subpasta depois de /pt/ (registro interno do estudo):

| Classe | Palavras-chave na amostra | Parcela do tráfego da amostra |
|---|---:|---:|
| Agro explícito (tratores, colheitadeiras, plantio, tratos culturais, precisão, implementos, forrageira) | 1.180 | 15,1% |
| Construção e florestal (retroescavadeira, pás-carregadeiras, escavadeiras, motoniveladoras, esteira, skidders, florestal, Gator) | 326 | 3,5% |
| Comum ou indefinido (home, peças e serviços, empresa, ferramentas digitais, contato, PDFs, cursos) | 1.494 | 59,5% |

A amostra cobre 78,2% do tráfego estimado do domínio. A parte inequivocamente de construção e florestal é pequena (3,5% do tráfego e 11% das palavras da amostra). Regra proposta para o protocolo: o alvo da John Deere é o domínio deere.com.br inteiro, com as subpastas de construção e florestal excluídas do crawl, da cesta de produtos e da auditoria de conteúdo; a escala orgânica (P3) é reportada com e sem essas subpastas, e a diferença entra como sensibilidade. Página comum (peças, empresa, contato) fica dentro, porque o produtor também a usa e porque as demais marcas têm o equivalente dentro do escopo.

## 4. Alvos fixados para o Bloco A

| Marca | Alvo principal (escopo orgânico) | Autoridade (domínio raiz) | Domínios próprios para fonte própria e crawl |
|---|---|---|---|
| John Deere | deere.com.br (regra de exclusão da seção 3) | deere.com.br | deere.com.br, johndeere.com.br, campus.deere.com.br, johndeerejournal.com.br |
| Case IH | caseih.com/pt-br/brasil/ | caseih.com (N/A na nota, domínio global) | caseih.com/pt-br/brasil, caseih.com.br, blog.caseih.com.br, fazendaconectada.caseih.com.br |
| New Holland | agriculture.newholland.com/pt-br/brasil/ mais newholland.com.br (somados, sem dupla contagem de palavra-chave) | newholland.com (N/A na nota) | agriculture.newholland.com/pt-br/brasil, newholland.com.br |
| Massey Ferguson | masseyferguson.com/pt_br/ | masseyferguson.com (N/A na nota) | masseyferguson.com/pt_br, masseyferguson.com.br |
| Valtra | valtra.com.br | valtra.com.br | valtra.com.br |
| Fendt | fendt.com/br/ | fendt.com (N/A na nota) | fendt.com/br, fendtsustentabilidade.com.br |
| Jacto | jacto.com/brasil/ mais blog.jacto.com.br (somados) | jacto.com (N/A na nota) | jacto.com/brasil, jacto.com.br, blog.jacto.com.br, conteudo.jacto.com |
| Stara | stara.com.br (excluídos subdomínios de concessionárias) | stara.com.br | stara.com.br, portaldooperador.stara.com.br |

pontuação de autoridade segue como diagnóstico fora da nota, como em defensivos, porque cinco das oito marcas vivem em subpasta de domínio global (armadilha 16, escopo não equivalente).

## 5. Pendências desta validação

- Massey Ferguson: entender por que a subpasta pt_br responde por só 32% do tráfego BR do domínio (páginas globais indexadas no Brasil ou subpasta em outro formato); resolver no Bloco A com lista orgânica por domínio antes de fechar P3.
- Case IH: atribuir o restante das palavras de caseih.com.br a um host (crawl).
- New Holland e Jacto: somar dois alvos sem dupla contagem exige a lista de palavras-chave de cada alvo, não os totais; o Bloco A já coleta as listas.
