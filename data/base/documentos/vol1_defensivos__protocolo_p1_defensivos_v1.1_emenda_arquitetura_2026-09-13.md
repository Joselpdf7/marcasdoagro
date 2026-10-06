---
titulo: "Emenda v1.1 ao protocolo P1: arquitetura de quatro pilares"
origem: "protocolo/PROTOCOLO_P1_DEFENSIVOS_v1.1_EMENDA_ARQUITETURA_2026-09-13.md"
data: "2026-09-13"
versao: "v1.1"
sha256_original: "2b1c0cfb8c4b463b08b63e4f502ec06eaa86cc3c6bddd63b79774460e12b4d08"
tipo: "protocolo"
---
# Emenda v1.1 ao Protocolo P1: arquitetura de quatro pilares

Data: 13/09/2026, 16h30. Motivo: decisão da coordenação do estudo de seguir a arquitetura de quatro pilares, sem pilar de canal. Estado no momento da emenda: nenhum cálculo novo executado sob o protocolo v1; a recodificação das fontes de IA estava em andamento e seus resultados não haviam sido vistos. Tudo o mais do v1 permanece.

## Substitui a seção 5 (pilares) e a seção 11 (camada editorial)

Uma só arquitetura para painel técnico e leitura editorial: **Proeminência, Valorização, Fidelidade e Advocacia**. Pesos iguais entre os pilares pontuados (base), com todas as sensibilidades da seção 6 do v1. Nome público único por pilar; siglas e nomes de etapa só no anexo.

### Proeminência (ser encontrado e lembrado).

| Submétrica | Definição | Fonte |
|---|---|---|
| P1 Busca pela marca | Cesta simétrica de marca, volume mensal | base de dados de busca BR |
| P2 Autoridade e referência | pontuação de autoridade e domínios de referência, flag de escopo | base de dados de busca (referências) |
| P3 Escala orgânica | Palavras-chave orgânicas no escopo agro (uma métrica) | base de dados de busca |
| P4 Presença em busca de categoria | Presenças no top 10 na cesta de 96 consultas | base de dados de busca (resultados orgânicos) |
| P5 Audiência oficial | Seguidores por rede confirmada, normalizados por rede | coleta automatizada de perfil |
| P6 Imprensa earned | Matérias editoriais na cesta de veículos, 12 meses, após QA | SERP e crawl |
| P7 Lembrança em IA | Parcela de células pergunta por superfície com menção e com primeira menção | coleta automatizada de IA |

### Valorização (despertar interesse e entregar valor).

| Submétrica | Definição | Fonte |
|---|---|---|
| V1 Busca marca com categoria e produto | Cesta marca mais categoria e nomes comerciais validados | base de dados de busca BR |
| V2 Cobertura de perguntas do produtor | Parcela das perguntas congeladas com a marca no top 10 | base de dados de busca e SERP |
| V3 Consumo de vídeo | Mediana de visualizações por vídeo, YouTube e TikTok, 12 meses | coleta automatizada |
| V4 Conteúdo útil | Páginas de produto com bula e culturas, conteúdo de manejo, vídeos instrucionais, com regra por site | Crawls e YouTube |
| V5 Autoatendimento e jornada | Checklist auditado do site: onde comprar, contato direto, portal ou app, área logada, busca interna, navegação por cultura e praga | Auditoria manual |
| V6 Desempenho e acessibilidade | Core Web Vitals de campo por origem; laboratório em três páginas comparáveis; acessibilidade e boas práticas | dados de campo de experiência de página e auditoria de desempenho de página |
| V7 Citação em IA | Parcela de respostas com ao menos uma fonte própria agro de pertinência direta, após codificação e adjudicação | coleta automatizada de IA |

### Fidelidade (relação que continua).

| Submétrica | Definição |
|---|---|
| F1 Cadência | Semanas ativas e peças por semana, por rede |
| F2 Interação por peça | Mediana de curtidas mais comentários por peça |
| F3 Taxa de engajamento | Mediana de interações dividida por seguidores da rede |
| F4 Comentários por peça | Mediana de comentários por peça |
| F5 Resposta da marca | Parcela de comentários respondidos e mediana de tempo até a resposta, em amostra estratificada |

Recompra, retenção, NPS, LTV, tráfego recorrente, duração no site, rejeição e páginas por visita: inviáveis no recorte público, declarados sem proxy.

### Advocacia (quem fala pela marca).

Nesta fase, painel descritivo e sem nota: compartilhamentos (TikTok), menções e sentimento em conversa pública (fase final do programa, love brands), Reclame Aqui e Glassdoor como contexto de baixa pertinência para fabricante B2B. Avaliações de revenda não são transferidas ao fabricante. A nota pública, quando existir, virá da fase 6 com codebook, autoria e QA.

## Regras que decorrem da emenda

1. Score total só é publicado com os três pilares pontuados (Proeminência, Valorização, Fidelidade) cobertos conforme a seção 7 do v1; Advocacia aparece como painel até a fase 6 e o total é declarado "três de quatro pilares", nunca reescalado como se fosse completo.
2. Dentro de cada pilar, submétricas com peso igual; teste de redundância (correlação de postos acima de 0,8) antes do cálculo, com fusão registrada.
3. Sensibilidade adicional obrigatória: IA retirada de Proeminência e de Valorização, para mostrar quanto as superfícies de IA mudam o retrato.
4. A leitura editorial usa os mesmos quatro nomes. Um capítulo próprio "O que as IAs respondem sobre as marcas" é permitido na leitura, alimentado por P7 e V7, sem virar pilar.

## Complemento das 17h10: recorte por canal no material de imprensa

Decisão da coordenação do estudo: além dos quatro pilares, o whitepaper e o material de imprensa terminam com um capítulo "Leitura por canal", descritivo, sem score próprio, na ordem: respostas de IA (capítulo mais profundo, com menção, primeira menção, fonte própria citada, por superfície e por pergunta), busca, redes sociais por plataforma, site e experiência, imprensa. Cada recorte usa os mesmos dados dos pilares, com denominador, janela e cobertura visíveis, e não cria um ranking paralelo: quando um canal mostrar ordem diferente do índice, isso é dito como contraprova, não escondido. A seção 12 do v1 passa a ter o item 7 "Leitura por canal" antes das limitações.

## Complemento das 17h50 (BRT): cesta v2 não substitui a v1

Decisão da coordenação do estudo: a cesta v1 de consultas de categoria (97, cruzando tipo de produto, cultura e alvo) permanece a única fonte da submétrica P4 (presença em busca de categoria) e de V2 (cobertura de perguntas). A cesta v2, zoom do produtor (tipo, cultura, alvo, sintoma; 124 consultas), é painel descritivo e capítulo próprio, publicada como sensibilidade ao lado da v1; nunca entra na nota nem substitui a v1 por causa do resultado. Quando v1 e v2 divergirem, as duas são mostradas com a explicação da diferença de construção: v1 mede a marca na jornada de escolha, v2 mede quem responde ao problema do produtor. Os resultados da v1 já observados (passe 1 de 13/09) ficam preservados em (registro interno do estudo) e o painel v2 fica em pasta separada.

## Complemento das 18h20 (BRT): cesta v2 retirada do estudo; cesta de produtos congelada sem bloqueio

Decisão da coordenação do estudo: a cesta v2 (zoom do produtor) é retirada do estudo. Não entra em painel, capítulo ou material de imprensa. Os brutos (registro interno do estudo, (registro interno do estudo)) e o processado ficam arquivados com esta marcação e a nota `ZOOM_PRODUTOR_CESTA_V2_v1.md` passa a `_NAO_UTILIZADO`. A cesta v1 (97 consultas) é a única medida de presença em busca de categoria.

Cesta de produtos (V1, Valorização): congelada como v1 com os 218 nomes que passaram na regra automática (registro interno do estudo, entra = sim). Os 47 nomes em dúvida ficam fora da medida principal e entram como sensibilidade (com e sem eles). A validação do time técnico deixa de ser bloqueio; se vier, gera a v1.1 com registro de mudança. Volume por nome: consulta exata do nome comercial; para nomes que são palavra comum, a consulta principal é "nome + bula" e a exata fica como sensibilidade.

## Complemento 5 (13/09/2026, noite): superfícies de IA que entram na nota

ChatGPT, Gemini e Copilot (coletados pela coleta automatizada) e Claude (API Anthropic, Claude com busca na web, sem prompt de sistema) são as superfícies que compõem P7 e V7, com peso igual. Perplexity foi coletada e codificada com o mesmo rigor, mas fica fora da nota por decisão da coordenação do estudo (uso marginal no Brasil); seus resultados ficam como sensibilidade. A retomada do Claude usa a variante de busca que devolve citações no texto, para que a medida de fonte própria seja comparável.
